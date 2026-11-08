// Records every campaign story line as an audio file in voice/ (run on a Mac: node tools/voices.mjs).
// One premium macOS voice plays the whole cast; ffmpeg effects give each character its own sound.
// Files are named by a hash of speaker + line, the same hash the game uses (vhash in index.html), so editing
// a line just records a new file. Lines that already have a file are skipped; files no longer used are deleted.
import { readFileSync, existsSync, mkdirSync, readdirSync, unlinkSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "voice"), TMP = join(ROOT, "tools", ".tmp");
const VOICE = "com.apple.voice.premium.en-GB.Malcolm";   // "Jamie (Premium)"
mkdirSync(OUT, { recursive: true }); mkdirSync(TMP, { recursive: true });

const html = readFileSync(join(ROOT, "index.html"), "utf8");
const grab = (re, what) => { const m = html.match(re); if (!m) throw new Error("couldn't find " + what); return (0, eval)("(" + m[1] + ")"); };
const STORY = grab(/const STORY = (\{[\s\S]*?\n\});\nObject\.assign/, "STORY");
Object.assign(STORY.m, grab(/Object\.assign\(STORY\.m, (\{[\s\S]*?\n\})\);\nconst CH_WORDS/, "Part 2 mission lines"));
const CHAPTERS = grab(/const CHAPTERS = (\[[\s\S]*?\n\]);\n/, "CHAPTERS");
const HALF = grab(/const HALF_QUIP = (\{[\s\S]*?\});/, "HALF_QUIP"), DANGER = grab(/const DANGER_QUIP = (\{.*?\});/, "DANGER_QUIP");
export const vhash = s => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, "0"); };

// mission id -> boss index, so "boss" lines get that boss's voice
const bossOf = {};
// chapters 9–12 are the separate squat campaign: numbered 1–4 again, mission ids S1-1…
// chapters 16–19 are the sit-up campaign: 1–4 again, ids U1-1…
const chNum = ci => ci < 8 ? ci + 1 : ci < 16 ? ci - 7 : ci - 15,   // squat chapters 8–15 → 1–8
      missionId = (ci, mi) => `${ci < 8 ? "" : ci < 16 ? "S" : "U"}${chNum(ci)}-${mi + 1}`;
CHAPTERS.forEach((c, ci) => c.missions.forEach((m, mi) => { if (m.type === "boss") bossOf[missionId(ci, mi)] = m.boss; }));
const lines = new Map();
const add = (who, text) => lines.set(vhash(who + "|" + text), { who, text });
const addAll = (arr, id) => arr.forEach(([who, text]) => add(who === "boss" ? "boss" + bossOf[id] : who, text));
addAll(STORY.prologue); STORY.chapter.forEach(a => addAll(a)); addAll(STORY.epilogue);
addAll(STORY.prologue2); STORY.chapter2.forEach(a => addAll(a)); addAll(STORY.epilogue2);
addAll(STORY.prologue3); STORY.chapter3.forEach(a => addAll(a)); addAll(STORY.epilogue3);
addAll(STORY.prologue4); STORY.chapter4.forEach(a => addAll(a)); addAll(STORY.epilogue4);
addAll(STORY.prologue5); STORY.chapter5.forEach(a => addAll(a)); addAll(STORY.epilogue5);
Object.entries(STORY.m).forEach(([id, s]) => { addAll(s.pre || [], id); addAll(s.post || [], id); });
CHAPTERS.forEach((c, ci) => add("title", `Chapter ${chNum(ci)}. ${c.name}.`)); add("title", "The end."); add("title", "End of part one.");
["Part one. The Great Ember.", "Part two. The Hollow King.", "The squat campaign. The Sinking Lands.", "Squat campaign, part two. The Heavy Sky.", "The sit-up campaign. The Long Nap."].forEach(t => add("title", t));
[...Object.values(HALF), ...Object.values(DANGER)].forEach(t => add("pip", t));
// game announcer ("Set complete…", "Fight!", boss intros): the exact list comes from announcerLines() in index.html
{ const RANKS = grab(/const RANKS = (\[[\s\S]*?\n\]);/, "RANKS"), BOSSES = grab(/const BOSSES = (\[[\s\S]*?\n\]);/, "BOSSES"), SPECIALS = grab(/const SPECIALS = (\{[\s\S]*?\n\});/, "SPECIALS");
  const src = html.match(/function announcerLines\(\) \{[\s\S]*?\n\}/); if (!src) throw new Error("couldn't find announcerLines");
  new Function("RANKS", "BOSSES", "SPECIALS", src[0] + "; return announcerLines();")(RANKS, BOSSES, SPECIALS).forEach(t => add("ann", t)); }

// personal trainers: each line in TRAINER_LINES, spoken by that trainer
{ const TL = grab(/const TRAINER_LINES = (\{[\s\S]*?\n\});/, "TRAINER_LINES");
  Object.entries(TL).forEach(([id, pools]) => Object.values(pools).flat().forEach(t => add("t" + id, t)));
  const ST = grab(/const STRETCHES = (\[[\s\S]*?\n\]);/, "STRETCHES");
  Object.keys(TL).forEach(id => ST.forEach(s => add("t" + id, s.say))); }

// pitch shift by factor k while keeping (or nudging) the speed
const P = (k, tempo = 1) => `asetrate=${Math.round(22050 * k)},aresample=44100,atempo=${(tempo / k).toFixed(4)}`;
const EYE = { rate: 0.44, af: `${P(0.7)},chorus=0.6:0.9:45|60:0.35|0.3:0.25|0.4:2|1.3,aecho=0.8:0.8:260|520:0.35|0.2` };
const CAST = {
  ann:   { rate: 0.54, af: "aresample=44100,highpass=f=60,acompressor=threshold=-20dB:ratio=3:attack=5:release=80,aecho=0.8:0.4:30:0.06" },   // game announcer: clear and punchy
  narr:  { rate: 0.47, af: "aresample=44100,aecho=0.8:0.6:55:0.12" },
  title: { rate: 0.42, af: `${P(0.92)},aecho=0.8:0.7:120|240:0.3|0.18` },
  steel: { rate: 0.53, af: `${P(0.85, 1.03)},highpass=f=70,acompressor=threshold=-18dB:ratio=3,aecho=0.8:0.5:35:0.08` },
  pip:   { rate: 0.55, af: `${P(1.5, 1.12)},highpass=f=150` },
  eye: EYE,
  boss0: { rate: 0.48, af: `${P(0.78)},vibrato=f=6:d=0.35,lowpass=f=3500` },                                   // Gloop: wobbly slime
  boss1: { rate: 0.40, af: `${P(0.62)},lowpass=f=2600,aecho=0.8:0.6:25|50:0.3|0.2` },                           // Rock Golem: slow, stony
  boss2: { rate: 0.50, af: `${P(0.72)},vibrato=f=28:d=0.12,aecho=0.8:0.5:40:0.15` },                            // Night Wolf: growly
  boss3: { rate: 0.46, af: `${P(0.70)},chorus=0.7:0.9:30|45:0.3|0.25:0.3|0.4:1.5|2,aecho=0.8:0.6:70:0.2` },     // Frost Troll: icy
  boss4: { rate: 0.47, af: `${P(0.68)},flanger=delay=2:depth=3,aecho=0.8:0.7:180:0.3` },                        // Inferno Drake: roaring cavern
  boss5: { rate: 0.44, af: `${P(0.66)},vibrato=f=3.5:d=0.25,flanger=delay=4:depth=4:speed=0.3,aecho=0.8:0.6:120:0.25` },  // Kraken: watery
  boss6: { rate: 0.50, af: `${P(0.86)},afftfilt=real='hypot(re\\,im)':imag='0':win_size=512:overlap=0.75,acrusher=bits=10:mode=log:aa=1,aecho=0.8:0.4:15:0.3` }, // Titan: robot
  boss7: EYE,
  // ----- Part 2 -----
  boss8:  { rate: 0.50, af: `${P(0.80)},vibrato=f=5:d=0.2,aecho=0.8:0.5:60:0.15` },                                      // Captain Barnacle: salty pirate
  boss9:  { rate: 0.47, af: `${P(0.88)},flanger=delay=1:depth=6:speed=4,acrusher=bits=12:mode=log:aa=1,aecho=0.8:0.5:30:0.2` }, // Tempest Eel: crackly, electric
  boss10: { rate: 0.46, af: `${P(0.72)},afftfilt=real='hypot(re\\,im)':imag='0':win_size=512:overlap=0.75,aecho=0.8:0.5:20|40:0.3|0.2` }, // Gearjaw: clanking machine
  boss11: null, boss13: null,   // Vex fights: filled in below
  boss12: { rate: 0.50, af: `${P(0.74)},vibrato=f=11:d=0.25,aecho=0.8:0.7:150:0.3` },                                    // Thunder Roc: screechy, echoing sky
  boss14: { rate: 0.44, af: `${P(0.70)},chorus=0.6:0.9:25|55|85:0.4|0.35|0.3:0.3|0.4|0.5:2|1.4|1.1,aecho=0.8:0.6:90:0.2` }, // Dream Hydra: three heads at once
  // ----- Squat campaign -----
  boss16: { rate: 0.50, af: `${P(0.84)},lowpass=f=3200,aecho=0.8:0.5:30:0.2` },                                          // Mole Rex: snuffly digger
  boss17: { rate: 0.44, af: `${P(0.64)},vibrato=f=18:d=0.15,aecho=0.8:0.5:40:0.15` },                                    // Bramble Bull: snorting
  boss18: { rate: 0.46, af: `${P(0.70)},vibrato=f=8:d=0.4,lowpass=f=3000` },                                              // Grumbletoad: croaky
  boss19: { rate: 0.50, af: `${P(1.08)},flanger=delay=2:depth=3:speed=0.4,aecho=0.8:0.6:90:0.25` },                     // The Moss Witch: eerie
  boss20: { rate: 0.44, af: `${P(0.66)},chorus=0.7:0.9:30|45:0.3|0.25:0.3|0.4:1.5|2,aecho=0.8:0.6:80:0.2` },            // Frostback Yeti: icy roar
  boss21: { rate: 0.38, af: `${P(0.60)},lowpass=f=2400,aecho=0.8:0.8:200|400:0.3|0.2` },                                // Glacier Giant: huge, slow
  boss22: { rate: 0.46, af: `${P(0.78)},vibrato=f=4:d=0.3,lowpass=f=2800,aecho=0.8:0.5:50:0.2` },                       // Sludge Knight: gurgling armour
  quag:   { rate: 0.44, af: `${P(1.15, 0.95)},chorus=0.5:0.9:40|60:0.3|0.25:0.2|0.3:2|1.5,aecho=0.8:0.8:180|360:0.3|0.18` }, // Queen Quagmire: sweet, syrupy, echoing
  // ----- Squat campaign part 2 -----
  boss24: { rate: 0.50, af: `${P(0.82)},vibrato=f=14:d=0.15,aecho=0.8:0.5:40:0.15` },                                    // Sandsting: hissing
  boss25: { rate: 0.46, af: `${P(0.74)},lowpass=f=3200,aecho=0.8:0.5:30:0.15` },                                         // Cactus Colossus: dry, gruff
  boss26: { rate: 0.52, af: `${P(0.90)},flanger=delay=1:depth=4:speed=6,aecho=0.8:0.5:30:0.15` },                       // Clatterclaw: clicky
  boss27: { rate: 0.42, af: `${P(0.72)},vibrato=f=3:d=0.3,aecho=0.8:0.8:180|360:0.3|0.2` },                              // Abyss Angler: deep, echoing
  boss28: { rate: 0.44, af: `${P(0.66)},acrusher=bits=12:mode=log:aa=1,aecho=0.8:0.5:40:0.2` },                          // Cinderhorn: crackling
  boss29: { rate: 0.42, af: `${P(0.62)},lowpass=f=2600,aecho=0.8:0.6:60:0.2` },                                         // Anvil Ogre: big and slow
  boss30: { rate: 0.48, af: `${P(1.12)},chorus=0.6:0.9:30|45:0.3|0.25:0.3|0.4:1.5|2,aecho=0.8:0.7:120:0.25` },           // Moonmoth: airy
  baron:  { rate: 0.46, af: `${P(0.80, 0.97)},aecho=0.8:0.7:90|180:0.3|0.15,acompressor=threshold=-18dB:ratio=3` },       // Baron Gravity: posh, heavy
  // ----- Sit-up campaign -----
  boss32: { rate: 0.50, af: `${P(0.92)},lowpass=f=3000,aecho=0.8:0.5:30:0.15` },                                          // Pillow Brute: muffled
  boss33: { rate: 0.40, af: `${P(0.68)},lowpass=f=2800,aecho=0.8:0.5:50:0.2` },                                           // Snoozebear: slow, sleepy
  boss34: { rate: 0.42, af: `${P(0.74)},vibrato=f=3:d=0.35,aecho=0.8:0.7:120:0.25` },                                     // Yawnfish: watery yawn
  boss35: { rate: 0.46, af: `${P(1.06)},chorus=0.6:0.9:30|45:0.3|0.25:0.3|0.4:1.5|2,aecho=0.8:0.7:140:0.25` },            // Fog Heron: airy whisper
  boss36: { rate: 0.50, af: `${P(0.78)},vibrato=f=16:d=0.2,aecho=0.8:0.5:40:0.15` },                                      // Thunder Ram: bleating
  boss37: { rate: 0.40, af: `${P(0.64)},aecho=0.8:0.8:200|400:0.3|0.2` },                                                 // Grumblecloud: rumbling
  boss38: { rate: 0.46, af: `${P(0.80)},flanger=delay=2:depth=3:speed=0.3,aecho=0.8:0.6:90:0.2` },                       // Sand Knight: hollow, sandy
  slumber: { rate: 0.40, af: `${P(0.86, 0.94)},chorus=0.5:0.9:40|60:0.3|0.25:0.2|0.3:2|1.5,aecho=0.8:0.8:180|360:0.3|0.18` }, // Count Slumber: slow, dreamy
  vex:   { rate: 0.54, af: `${P(1.10, 1.06)},highpass=f=120,aecho=0.8:0.4:28:0.12` },                                    // Vex: cocky rival, cold edge
  vexr:  { rate: 0.50, af: `${P(1.10, 1.03)},highpass=f=110` },                                                          // Vex, back on our side
  tmax:   { rate: 0.58, af: `${P(1.04, 1.04)},highpass=f=80,acompressor=threshold=-20dB:ratio=4:attack=5:release=60` },                      // Coach Max: hyped
  tsam:   { voice: "com.apple.voice.compact.en-US.Samantha", rate: 0.48, af: "aresample=44100,highpass=f=70,acompressor=threshold=-20dB:ratio=2" }, // Coach Sam: calm
  tsarge: { rate: 0.54, af: `${P(0.84, 1.02)},highpass=f=70,acompressor=threshold=-16dB:ratio=5:attack=3:release=50,aecho=0.8:0.3:20:0.08` }, // Sarge: gruff, barking
  king:  { rate: 0.40, af: `${P(0.82, 0.94)},chorus=0.5:0.9:50|70:0.3|0.25:0.2|0.3:2|1.5,aecho=0.8:0.8:200|400:0.3|0.18` }, // The Hollow King: slow, syrupy, huge hall
};
CAST.boss11 = CAST.vex; CAST.boss13 = { rate: 0.52, af: `${CAST.vex.af},flanger=delay=3:depth=4:speed=0.5,aecho=0.8:0.6:120:0.25` }; CAST.boss15 = CAST.king; CAST.boss23 = CAST.quag; CAST.boss31 = CAST.baron; CAST.boss39 = CAST.slumber;
// what the synthesizer reads (the file name still comes from the original text)
const speakable = t => t.replace(/Mk-II/g, "Mark Two").replace(/…/g, "...").replace(/!!+/g, "!")
  .replace(/\b[A-Z]{2,}\b/g, w => w[0] + w.slice(1).toLowerCase());

const keep = new Set([...lines.keys()].map(h => h + ".m4a"));
let made = 0;
for (const [h, { who, text }] of lines) {
  const out = join(OUT, h + ".m4a");
  if (existsSync(out)) continue;
  const c = CAST[who] || CAST.narr, raw = join(TMP, h + ".caf");
  execFileSync(join(TMP, "tts"), [c.voice || VOICE, String(c.rate), "1.0", raw, speakable(text)], { stdio: "pipe" });
  execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-i", raw, "-af", `${c.af},loudnorm=I=-16:TP=-1.5:LRA=11`, "-ar", "44100", "-ac", "1", "-c:a", "aac", "-b:a", "40k", "-movflags", "+faststart", out]);
  unlinkSync(raw); made++;
  process.stdout.write(`${who.padEnd(6)} ${text.slice(0, 60)}\n`);
}
let removed = 0;
for (const f of readdirSync(OUT)) if (f.endsWith(".m4a") && !keep.has(f)) { unlinkSync(join(OUT, f)); removed++; }
console.log(`${lines.size} lines · ${made} recorded · ${removed} removed`);
