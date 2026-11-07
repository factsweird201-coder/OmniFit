(() => {
// Original vector art for bosses and rank badges. Each call gets unique gradient ids.
let uidN = 0;
const uid = () => "a" + (++uidN);

// --------------------------- BOSSES ---------------------------
const BOSS_ART = {
  slime: u => `
    <defs>
      <radialGradient id="${u}g" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#c9ffb0"/><stop offset=".45" stop-color="#46db5f"/><stop offset="1" stop-color="#0f6b28"/></radialGradient>
      <linearGradient id="${u}c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff2a8"/><stop offset="1" stop-color="#e0a100"/></linearGradient>
    </defs>
    <g class="squish">
      <path d="M28 162 C14 112 46 50 100 48 C154 50 186 112 172 162 C160 178 40 178 28 162Z" fill="url(#${u}g)" stroke="#0b4f1e" stroke-width="3"/>
      <path d="M50 166 q6 22 13 0Z M118 170 q5 16 10 0Z M146 164 q4 12 8 0Z" fill="#2fb84a"/>
      <circle cx="130" cy="140" r="6" fill="#fff" opacity=".25"/><circle cx="60" cy="130" r="4" fill="#fff" opacity=".25"/><circle cx="145" cy="105" r="3" fill="#fff" opacity=".3"/>
      <ellipse cx="70" cy="80" rx="20" ry="10" fill="#fff" opacity=".5" transform="rotate(-28 70 80)"/>
      <g class="blink">
        <ellipse cx="78" cy="110" rx="14" ry="18" fill="#fff"/><ellipse cx="122" cy="110" rx="14" ry="18" fill="#fff"/>
        <circle class="look" cx="81" cy="114" r="8" fill="#0d1a10"/><circle class="look" cx="125" cy="114" r="8" fill="#0d1a10"/>
        <circle cx="84" cy="110" r="2.5" fill="#fff"/><circle cx="128" cy="110" r="2.5" fill="#fff"/>
      </g>
      <path d="M62 92 L92 100 M138 92 L108 100" stroke="#0b4f1e" stroke-width="5" stroke-linecap="round"/>
      <path d="M84 142 q16 12 32 0" stroke="#0b4f1e" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M78 54 l6-22 9 14 7-20 7 20 9-14 6 22z" fill="url(#${u}c)" stroke="#9a6b00" stroke-width="2" stroke-linejoin="round"/>
      <circle cx="100" cy="44" r="3" fill="#ff4d6d"/>
    </g>`,

  golem: u => `
    <defs>
      <linearGradient id="${u}r" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a7adb5"/><stop offset="1" stop-color="#454a52"/></linearGradient>
      <linearGradient id="${u}r2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8a9099"/><stop offset="1" stop-color="#3a3e45"/></linearGradient>
    </defs>
    <path d="M14 128 L42 84 L82 96 L72 156 L26 166Z" fill="url(#${u}r2)" stroke="#24272c" stroke-width="3" stroke-linejoin="round"/>
    <path d="M186 128 L158 84 L118 96 L128 156 L174 166Z" fill="url(#${u}r2)" stroke="#24272c" stroke-width="3" stroke-linejoin="round"/>
    <path d="M58 36 L142 34 L158 88 L142 144 L58 146 L42 88Z" fill="url(#${u}r)" stroke="#24272c" stroke-width="4" stroke-linejoin="round"/>
    <path d="M58 38 q22 -10 42 0 q22 -10 42 -4 l-3 10 q-38 -8 -78 2Z" fill="#5f9a3c"/>
    <path d="M62 74 L96 86 L104 86 L138 74 L134 66 L66 66Z" fill="#2f3339"/>
    <g filter="url(#glowF)" class="pulse">
      <polygon points="70,86 95,93 73,101" fill="#ffb02e"/><polygon points="130,86 105,93 127,101" fill="#ffb02e"/>
      <path d="M100 36 L94 58 L104 70 L98 80" stroke="#ff8a1e" stroke-width="2.5" fill="none"/>
      <path d="M64 118 L80 124 L76 138" stroke="#ff8a1e" stroke-width="2.5" fill="none"/>
      <path d="M150 104 L140 114 L146 124" stroke="#ff8a1e" stroke-width="2" fill="none"/>
      <path d="M38 118 L52 126" stroke="#ff8a1e" stroke-width="2" fill="none"/>
    </g>
    <path d="M78 116 L122 116 L118 128 L82 128Z" fill="#24272c"/>
    <path d="M86 116 v6 M96 116 v8 M106 116 v8 M114 116 v6" stroke="#6b7078" stroke-width="3"/>
    <circle cx="60" cy="56" r="3" fill="#6b7078"/><circle cx="140" cy="120" r="4" fill="#6b7078"/>`,

  wolf: u => `
    <defs>
      <linearGradient id="${u}w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#454a78"/><stop offset="1" stop-color="#14162a"/></linearGradient>
    </defs>
    <path d="M42 24 L84 76 L48 98Z" fill="url(#${u}w)" stroke="#0b0c18" stroke-width="3" stroke-linejoin="round"/>
    <path d="M158 24 L116 76 L152 98Z" fill="url(#${u}w)" stroke="#0b0c18" stroke-width="3" stroke-linejoin="round"/>
    <path d="M52 44 L74 74 L54 86Z M148 44 L126 74 L146 86Z" fill="#6b4a8a"/>
    <path d="M100 54 C142 54 168 86 162 116 L132 150 L116 176 L100 182 L84 176 L68 150 L38 116 C32 86 58 54 100 54Z" fill="url(#${u}w)" stroke="#0b0c18" stroke-width="3" stroke-linejoin="round"/>
    <path d="M40 116 L18 126 L44 130 L30 144 L64 140Z M160 116 L182 126 L156 130 L170 144 L136 140Z" fill="#23264a" stroke="#0b0c18" stroke-width="2" stroke-linejoin="round"/>
    <path d="M100 58 L90 96 L100 108 L110 96Z" fill="#5b609a"/>
    <path d="M78 118 L122 118 L114 164 L100 172 L86 164Z" fill="#9aa0c8"/>
    <ellipse cx="100" cy="158" rx="11" ry="7" fill="#07080f"/>
    <path d="M89 170 l4 15 5 -13Z M111 170 l-4 15 -5 -13Z" fill="#fff"/>
    <g filter="url(#glowF)" class="pulse">
      <path d="M58 98 L90 108 L64 116Z" fill="#5ff1ff"/><path d="M142 98 L110 108 L136 116Z" fill="#5ff1ff"/>
    </g>
    <circle cx="74" cy="108" r="2.5" fill="#001a20"/><circle cx="126" cy="108" r="2.5" fill="#001a20"/>`,

  troll: u => `
    <defs>
      <radialGradient id="${u}t" cx="50%" cy="40%" r="65%"><stop offset="0" stop-color="#c8ecff"/><stop offset="1" stop-color="#3577b0"/></radialGradient>
    </defs>
    <path d="M44 96 L12 78 L40 126Z M156 96 L188 78 L160 126Z" fill="#6aaee0" stroke="#1d4a73" stroke-width="3" stroke-linejoin="round"/>
    <path d="M56 60 C56 32 144 32 144 60 L160 110 C160 152 134 178 100 178 C66 178 40 152 40 110Z" fill="url(#${u}t)" stroke="#1d4a73" stroke-width="3"/>
    <g filter="url(#glowF)"><path d="M58 52 L64 14 L78 44 L88 2 L100 40 L112 2 L122 44 L136 14 L142 52Z" fill="#effaff" stroke="#8fd3ff" stroke-width="2" stroke-linejoin="round"/></g>
    <path d="M58 92 Q80 76 98 96 M102 96 Q120 76 142 92" stroke="#1d4a73" stroke-width="8" fill="none" stroke-linecap="round"/>
    <g class="blink"><circle cx="80" cy="104" r="8" fill="#fff"/><circle cx="120" cy="104" r="8" fill="#fff"/>
      <circle class="look" cx="81" cy="105" r="3.5" fill="#0a2a4a"/><circle class="look" cx="121" cy="105" r="3.5" fill="#0a2a4a"/></g>
    <path d="M100 100 C88 126 86 132 100 136 C114 132 112 126 100 100Z" fill="#5a9ad0" stroke="#1d4a73" stroke-width="2"/>
    <path d="M68 146 Q100 162 132 146 L130 154 Q100 172 70 154Z" fill="#14324f"/>
    <path d="M74 150 L68 122 L86 149Z M126 150 L132 122 L114 149Z" fill="#fffbe8" stroke="#c9c0a0" stroke-width="1.5" stroke-linejoin="round"/>
    <g class="twinkle" fill="#fff"><path d="M30 50 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3Z"/><path d="M170 150 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2Z"/><path d="M168 40 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2Z"/></g>`,

  drake: u => `
    <defs>
      <linearGradient id="${u}d" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff7a45"/><stop offset="1" stop-color="#7a0c0c"/></linearGradient>
      <linearGradient id="${u}f" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#fff3a0"/><stop offset=".5" stop-color="#ff9a1f"/><stop offset="1" stop-color="#ff3d00" stop-opacity="0"/></linearGradient>
    </defs>
    <path d="M62 62 C40 32 30 20 16 8 C46 18 66 34 80 56Z M138 62 C160 32 170 20 184 8 C154 18 134 34 120 56Z" fill="#f2e2c4" stroke="#8b7a5a" stroke-width="2" stroke-linejoin="round"/>
    <path d="M42 106 L14 98 L44 122 L18 132 L54 138Z M158 106 L186 98 L156 122 L182 132 L146 138Z" fill="#b8231a" stroke="#4a0808" stroke-width="2" stroke-linejoin="round"/>
    <path d="M100 44 C142 44 162 76 160 106 L142 152 C132 172 116 184 100 184 C84 184 68 172 58 152 L40 106 C38 76 58 44 100 44Z" fill="url(#${u}d)" stroke="#3f0606" stroke-width="3"/>
    <path d="M100 46 L92 68 L100 78 L108 68Z M100 82 L94 96 L100 104 L106 96Z" fill="#ffb347"/>
    <path d="M70 128 Q100 122 130 128 M74 140 Q100 134 126 140" stroke="#5a0a0a" stroke-width="2" fill="none" opacity=".6"/>
    <g filter="url(#glowF)" class="pulse"><path d="M58 100 Q75 86 94 104 Q75 112 58 100Z" fill="#ffe14d"/><path d="M142 100 Q125 86 106 104 Q125 112 142 100Z" fill="#ffe14d"/></g>
    <ellipse cx="78" cy="101" rx="2.2" ry="7" fill="#200"/><ellipse cx="122" cy="101" rx="2.2" ry="7" fill="#200"/>
    <ellipse cx="88" cy="162" rx="4.5" ry="3" fill="#2a0000"/><ellipse cx="112" cy="162" rx="4.5" ry="3" fill="#2a0000"/>
    <path d="M68 152 L74 166 L80 154 L86 170 L92 157 L100 172 L108 157 L114 170 L120 154 L126 166 L132 152" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/>
    <g class="flame"><path d="M86 160 q-14 16 -4 34 q4 -12 10 -8 q2 -14 -6 -26Z" fill="url(#${u}f)"/><path d="M114 160 q14 16 4 34 q-4 -12 -10 -8 q-2 -14 6 -26Z" fill="url(#${u}f)"/></g>`,

  kraken: u => `
    <defs>
      <radialGradient id="${u}k" cx="45%" cy="35%" r="70%"><stop offset="0" stop-color="#ec9cff"/><stop offset=".6" stop-color="#8a2fb5"/><stop offset="1" stop-color="#36094f"/></radialGradient>
    </defs>
    <g class="sway" fill="none" stroke="#7a24a3" stroke-width="15" stroke-linecap="round">
      <path d="M50 116 C14 110 4 142 16 162"/><path d="M150 116 C186 110 196 142 184 162"/>
      <path d="M60 132 C30 142 20 172 40 188"/><path d="M140 132 C170 142 180 172 160 188"/>
      <path d="M82 140 C72 170 52 180 62 196"/><path d="M118 140 C128 170 148 180 138 196"/>
    </g>
    <g fill="#e9a8ff" opacity=".7"><circle cx="22" cy="140" r="3"/><circle cx="178" cy="140" r="3"/><circle cx="34" cy="166" r="3"/><circle cx="166" cy="166" r="3"/><circle cx="66" cy="172" r="3"/><circle cx="134" cy="172" r="3"/></g>
    <path d="M100 18 C152 18 166 70 158 100 C152 130 130 146 100 146 C70 146 48 130 42 100 C34 70 48 18 100 18Z" fill="url(#${u}k)" stroke="#2a0640" stroke-width="3"/>
    <g fill="#c35ee8" opacity=".55"><circle cx="70" cy="50" r="7"/><circle cx="128" cy="44" r="5"/><circle cx="140" cy="70" r="8"/><circle cx="60" cy="74" r="4"/></g>
    <ellipse cx="78" cy="46" rx="16" ry="8" fill="#fff" opacity=".35" transform="rotate(-25 78 46)"/>
    <g filter="url(#glowF)"><ellipse cx="76" cy="102" rx="15" ry="13" fill="#ffd84d"/><ellipse cx="124" cy="102" rx="15" ry="13" fill="#ffd84d"/></g>
    <g class="blink"><rect x="65" y="99" width="22" height="6" rx="3" fill="#1a0526"/><rect x="113" y="99" width="22" height="6" rx="3" fill="#1a0526"/></g>
    <path d="M60 86 L92 94 M140 86 L108 94" stroke="#2a0640" stroke-width="5" stroke-linecap="round"/>`,

  titan: u => `
    <defs>
      <linearGradient id="${u}m" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef3f8"/><stop offset=".5" stop-color="#8a96a6"/><stop offset="1" stop-color="#36404c"/></linearGradient>
      <linearGradient id="${u}v" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a0a10"/><stop offset="1" stop-color="#0a0204"/></linearGradient>
    </defs>
    <line x1="100" y1="28" x2="100" y2="8" stroke="#8a96a6" stroke-width="4"/>
    <circle cx="100" cy="8" r="5" fill="#ff3b3b" filter="url(#glowF)" class="blinkfast"/>
    <rect x="18" y="74" width="26" height="58" rx="6" fill="#59636f" stroke="#262c34" stroke-width="3"/>
    <rect x="156" y="74" width="26" height="58" rx="6" fill="#59636f" stroke="#262c34" stroke-width="3"/>
    <path d="M24 88 h14 M24 98 h14 M24 108 h14 M162 88 h14 M162 98 h14 M162 108 h14" stroke="#262c34" stroke-width="3"/>
    <path d="M50 28 L150 28 L166 60 L160 150 L130 176 L70 176 L40 150 L34 60Z" fill="url(#${u}m)" stroke="#262c34" stroke-width="4" stroke-linejoin="round"/>
    <path d="M100 28 L100 66" stroke="#262c34" stroke-width="3"/>
    <path d="M48 74 L152 74 L146 112 L54 112Z" fill="url(#${u}v)" stroke="#262c34" stroke-width="3" stroke-linejoin="round"/>
    <g filter="url(#glowF)"><rect class="scan" x="56" y="86" width="28" height="13" rx="6" fill="#ff3b3b"/></g>
    <path d="M60 132 L140 132 M74 146 L126 146 M84 160 L116 160" stroke="#262c34" stroke-width="4" stroke-linecap="round"/>
    <g fill="#262c34"><circle cx="50" cy="44" r="3"/><circle cx="150" cy="44" r="3"/><circle cx="52" cy="140" r="3"/><circle cx="148" cy="140" r="3"/></g>
    <path d="M58 34 L80 34 L72 50 L52 50Z" fill="#fff" opacity=".35"/>`,

  void: u => {
    const rays = Array.from({ length: 14 }, (_, i) => {
      const a = i / 14 * Math.PI * 2, a1 = a - 0.09, a2 = a + 0.09;
      const p = (r, t) => `${(100 + Math.cos(t) * r).toFixed(1)},${(100 + Math.sin(t) * r).toFixed(1)}`;
      return `<polygon points="${p(72, a1)} ${p(98, a)} ${p(72, a2)}"/>`;
    }).join("");
    return `
    <defs>
      <radialGradient id="${u}s" cx="50%" cy="50%" r="55%"><stop offset="0" stop-color="#fff"/><stop offset=".7" stop-color="#f3c6ff"/><stop offset="1" stop-color="#9b3fd0"/></radialGradient>
      <radialGradient id="${u}i" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ff7af5"/><stop offset=".55" stop-color="#7a1aff"/><stop offset="1" stop-color="#12002a"/></radialGradient>
    </defs>
    <g class="spin" fill="#4a1070" stroke="#b04dff" stroke-width="1.5">${rays}</g>
    <circle cx="100" cy="100" r="76" fill="#12001f" stroke="#b04dff" stroke-width="3" filter="url(#glowF)"/>
    <g class="blink">
      <path d="M32 100 Q100 40 168 100 Q100 160 32 100Z" fill="url(#${u}s)"/>
      <path d="M44 96 q16 -4 26 4 M156 104 q-16 6 -28 -2 M60 124 q12 -2 18 -10" stroke="#c2185b" stroke-width="1.8" fill="none" opacity=".6"/>
      <g class="look"><circle cx="100" cy="100" r="28" fill="url(#${u}i)"/><ellipse cx="100" cy="100" rx="7" ry="22" fill="#000"/><circle cx="110" cy="90" r="5" fill="#fff" opacity=".9"/></g>
    </g>
    <path d="M28 100 Q100 34 172 100 Q100 52 28 100Z" fill="#2a0a3a"/>
    <path d="M28 100 Q100 166 172 100 Q100 150 28 100Z" fill="#2a0a3a"/>`;
  },
};

function bossArt(id) {
  const u = uid();
  return `<svg viewBox="0 0 200 200" class="boss-svg boss-${id}" xmlns="http://www.w3.org/2000/svg">${BOSS_ART[id](u)}</svg>`;
}

const THEMES = {
  slime:  { aura: "#46db5f", fog: "rgba(30,120,50,.35)" },
  golem:  { aura: "#ff9a2e", fog: "rgba(110,80,40,.35)" },
  wolf:   { aura: "#5ff1ff", fog: "rgba(30,40,110,.45)" },
  troll:  { aura: "#8fd3ff", fog: "rgba(60,130,190,.35)" },
  drake:  { aura: "#ff6a2e", fog: "rgba(150,30,10,.42)" },
  kraken: { aura: "#d07bff", fog: "rgba(70,20,110,.45)" },
  titan:  { aura: "#ff3b3b", fog: "rgba(90,20,25,.4)" },
  void:   { aura: "#b04dff", fog: "rgba(50,0,80,.55)" },
};

// --------------------------- RANK BADGES ---------------------------
const TIERS = [
  { a: "#ffd2a8", b: "#b06a34", c: "#5a3214", sym: "#3a1e0a" },   // bronze 0-3
  { a: "#ffffff", b: "#a3afbd", c: "#4a5562", sym: "#1f2733" },   // silver 4-6
  { a: "#fff1a6", b: "#e8a800", c: "#7a5200", sym: "#3d2700" },   // gold 7-9
  { a: "#d8fbff", b: "#7b6cff", c: "#2a1a8a", sym: "#ffffff" },   // legend 10-11
];
const tierOf = i => i <= 3 ? 0 : i <= 6 ? 1 : i <= 9 ? 2 : 3;
const chev = y => `<path d="M58 ${y} L100 ${y + 20} L142 ${y} L142 ${y + 14} L100 ${y + 34} L58 ${y + 14}Z"/>`;
const bar = y => `<rect x="62" y="${y}" width="76" height="16" rx="3"/>`;
const star = (cx, cy, r) => {
  const pts = Array.from({ length: 10 }, (_, k) => {
    const a = -Math.PI / 2 + k * Math.PI / 5, rr = k % 2 ? r * 0.45 : r;
    return `${(cx + Math.cos(a) * rr).toFixed(1)},${(cy + Math.sin(a) * rr).toFixed(1)}`;
  }).join(" ");
  return `<polygon points="${pts}"/>`;
};
function symbols(i) {
  switch (i) {
    case 0: return `<circle cx="100" cy="98" r="14"/>`;
    case 1: return chev(80);
    case 2: return chev(64) + chev(98);
    case 3: return chev(52) + chev(82) + chev(112);
    case 4: return chev(44) + chev(72) + chev(100) + `<path d="M60 132 Q100 158 140 132 L140 144 Q100 170 60 144Z"/>`;
    case 5: return bar(90);
    case 6: return bar(74) + bar(104);
    case 7: return star(100, 100, 34);
    case 8: return star(74, 100, 24) + star(126, 100, 24);
    case 9: return star(100, 76, 22) + star(70, 118, 22) + star(130, 118, 22);
    case 10: return star(76, 78, 19) + star(124, 78, 19) + star(76, 122, 19) + star(124, 122, 19);
    default: return `<path d="M54 128 L60 70 L82 96 L100 60 L118 96 L140 70 L146 128Z"/><rect x="54" y="132" width="92" height="14" rx="3"/><circle cx="100" cy="56" r="7"/>`;
  }
}
function rankBadge(i) {
  const u = uid(), t = TIERS[tierOf(i)];
  return `<svg viewBox="0 0 200 200" class="rank-svg" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="${u}a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${t.a}"/><stop offset=".55" stop-color="${t.b}"/><stop offset="1" stop-color="${t.c}"/></linearGradient>
      <linearGradient id="${u}b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${t.b}"/><stop offset="1" stop-color="${t.a}"/></linearGradient>
    </defs>
    <path d="M100 8 L176 36 V100 C176 148 144 178 100 194 C56 178 24 148 24 100 V36Z" fill="url(#${u}a)" stroke="${t.c}" stroke-width="4"/>
    <path d="M100 24 L162 46 V100 C162 140 136 164 100 178 C64 164 38 140 38 100 V46Z" fill="url(#${u}b)" opacity=".55"/>
    <g fill="${t.sym}" opacity=".9">${symbols(i)}</g>
    <path d="M100 8 L176 36 V60 C130 40 70 40 24 60 V36Z" fill="#fff" opacity=".18"/>
  </svg>`;
}

// shared defs (glow filter) injected once into the page
const SHARED_DEFS = `<svg width="0" height="0" style="position:absolute"><defs>
  <filter id="glowF" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs></svg>`;

const HEART = (full) => `<svg viewBox="0 0 24 22" class="heart ${full ? "" : "empty"}"><path d="M12 21 C5 15 1 11.5 1 7 A5.5 5.5 0 0 1 12 4.2 A5.5 5.5 0 0 1 23 7 C23 11.5 19 15 12 21Z"/><path class="shine" d="M5 6.5 A3 3 0 0 1 8.5 4" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>`;

const SHIELD_BUBBLE = `<svg viewBox="0 0 200 200" class="bubble"><defs><radialGradient id="bubG" cx="50%" cy="50%" r="50%"><stop offset=".7" stop-color="#4aa8ff" stop-opacity="0"/><stop offset=".95" stop-color="#4aa8ff" stop-opacity=".55"/><stop offset="1" stop-color="#bfe3ff" stop-opacity=".9"/></radialGradient>
  <pattern id="hexP" width="20" height="17.32" patternUnits="userSpaceOnUse"><path d="M5 0 L15 0 L20 8.66 L15 17.32 L5 17.32 L0 8.66Z" fill="none" stroke="#9fd4ff" stroke-width="1" opacity=".35"/></pattern></defs>
  <circle cx="100" cy="100" r="96" fill="url(#hexP)"/><circle cx="100" cy="100" r="96" fill="url(#bubG)"/></svg>`;

window.ART = { bossArt, THEMES, rankBadge, SHARED_DEFS, HEART, SHIELD_BUBBLE };
})();
