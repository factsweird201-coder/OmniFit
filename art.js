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

  // ---------- Part 2 bosses ----------
  barnacle: u => `
    <defs>
      <radialGradient id="${u}s" cx="45%" cy="35%" r="70%"><stop offset="0" stop-color="#ffb08a"/><stop offset=".5" stop-color="#e2502e"/><stop offset="1" stop-color="#7a1a10"/></radialGradient>
      <linearGradient id="${u}c" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff9a6a"/><stop offset="1" stop-color="#9a2614"/></linearGradient>
    </defs>
    <g stroke="#7a1a10" stroke-width="7" stroke-linecap="round" fill="none"><path d="M58 150 L34 176"/><path d="M68 160 L52 188"/><path d="M142 150 L166 176"/><path d="M132 160 L148 188"/></g>
    <path d="M44 128 C22 124 14 100 22 84" stroke="#9a2614" stroke-width="12" fill="none" stroke-linecap="round"/>
    <path d="M8 70 C4 48 22 34 40 44 L30 64 L46 74 C38 92 14 92 8 70Z" fill="url(#${u}c)" stroke="#5a1208" stroke-width="3" stroke-linejoin="round"/>
    <path d="M156 116 C178 100 182 74 170 56" stroke="#9a2614" stroke-width="12" fill="none" stroke-linecap="round"/>
    <g class="sway"><path d="M150 40 C150 14 178 6 192 24 L172 34 L188 50 C176 66 152 62 150 40Z" fill="url(#${u}c)" stroke="#5a1208" stroke-width="3" stroke-linejoin="round"/></g>
    <g class="squish"><ellipse cx="100" cy="130" rx="64" ry="44" fill="url(#${u}s)" stroke="#5a1208" stroke-width="3"/>
    <g fill="#d8d2c4" stroke="#7a7466" stroke-width="1.5"><circle cx="64" cy="116" r="7"/><circle cx="74" cy="104" r="4.5"/><circle cx="142" cy="140" r="6"/><circle cx="130" cy="152" r="4"/></g>
    <g fill="#5a4a3a"><circle cx="64" cy="116" r="2.5"/><circle cx="142" cy="140" r="2"/></g>
    <ellipse cx="80" cy="108" rx="18" ry="8" fill="#fff" opacity=".3" transform="rotate(-20 80 108)"/>
    <path d="M78 148 q22 -12 44 0" stroke="#3a0a04" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M106 143 l4 9 l4 -8Z" fill="#fff"/></g>
    <path d="M84 100 L76 66 M116 100 L124 66" stroke="#9a2614" stroke-width="7" stroke-linecap="round"/>
    <g class="blink"><circle cx="76" cy="62" r="13" fill="#fff" stroke="#5a1208" stroke-width="2.5"/><circle class="look" cx="78" cy="64" r="6.5" fill="#1a0804"/></g>
    <circle cx="124" cy="62" r="13" fill="#1a1a1a" stroke="#5a1208" stroke-width="2.5"/><path d="M110 50 L138 76 M100 58 L150 46" stroke="#1a1a1a" stroke-width="3"/>
    <path d="M58 46 Q100 16 142 46 Q128 34 100 36 Q72 34 58 46Z" fill="#1e1a24" stroke="#000" stroke-width="2"/>
    <path d="M70 40 Q100 4 130 40 Q100 30 70 40Z" fill="#2a2532"/><path d="M62 45 Q100 22 138 45" stroke="#ffc21a" stroke-width="3" fill="none"/>
    <g transform="translate(100 28)" fill="#f2efe6"><circle r="6"/><path d="M-9 8 L9 -2 M-9 -2 L9 8" stroke="#f2efe6" stroke-width="2.5"/><circle cx="-2" cy="-1" r="1.5" fill="#000"/><circle cx="2.5" cy="-1" r="1.5" fill="#000"/></g>`,

  eel: u => `
    <defs>
      <linearGradient id="${u}b" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#0a3a5a"/><stop offset=".55" stop-color="#1aa8d8"/><stop offset="1" stop-color="#7ff6ff"/></linearGradient>
      <radialGradient id="${u}h" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#b8fbff"/><stop offset=".5" stop-color="#22b8e0"/><stop offset="1" stop-color="#0a4a6e"/></radialGradient>
    </defs>
    <path d="M30 196 C10 150 70 150 64 118 C58 86 20 92 34 60 C46 34 90 40 110 62" stroke="#062a40" stroke-width="40" fill="none" stroke-linecap="round"/>
    <path d="M30 196 C10 150 70 150 64 118 C58 86 20 92 34 60 C46 34 90 40 110 62" stroke="url(#${u}b)" stroke-width="32" fill="none" stroke-linecap="round"/>
    <path d="M30 196 C10 150 70 150 64 118 C58 86 20 92 34 60" stroke="#c8fbff" stroke-opacity=".35" stroke-width="7" fill="none" stroke-linecap="round" transform="translate(6 -4)"/>
    <g filter="url(#glowF)" class="pulse"><path d="M26 178 l10 -10 -4 -2 10 -12 M52 132 l-10 -8 4 -2 -10 -12 M34 82 l10 -6 -3 -3 12 -8" stroke="#ffe23a" stroke-width="4" fill="none" stroke-linejoin="round"/></g>
    <path d="M120 40 L132 10 L140 36 L156 14 L158 42 L178 28 L170 54Z" fill="#0e6a94" stroke="#062a40" stroke-width="2.5" stroke-linejoin="round"/>
    <g class="squish"><path d="M96 72 C96 40 136 28 168 44 C192 56 194 84 176 96 L140 110 C116 112 96 98 96 72Z" fill="url(#${u}h)" stroke="#062a40" stroke-width="3"/>
    <path d="M118 104 L176 96 C184 112 170 128 146 128 C128 128 116 118 118 104Z" fill="#073048" stroke="#062a40" stroke-width="3"/>
    <path d="M126 104 l4 10 4 -9 M142 102 l4 11 4 -11 M158 100 l4 10 4 -10" fill="#fff"/><path d="M132 126 l3 -8 3 7 M152 126 l3 -9 3 8" fill="#fff"/>
    <g filter="url(#glowF)"><ellipse cx="128" cy="66" rx="12" ry="9" fill="#ffe23a"/><ellipse cx="164" cy="62" rx="10" ry="8" fill="#ffe23a"/></g>
    <g class="blink"><ellipse cx="129" cy="66" rx="3" ry="7.5" fill="#1a1000"/><ellipse cx="164" cy="62" rx="2.6" ry="6.5" fill="#1a1000"/></g>
    <path d="M112 52 L140 58 M178 50 L156 56" stroke="#062a40" stroke-width="4.5" stroke-linecap="round"/></g>
    <g class="blinkfast" stroke="#fff6a8" stroke-width="3" fill="none"><path d="M186 120 l8 6 -6 2 8 8"/><path d="M84 30 l-6 -8 6 0 -6 -10"/></g>`,

  gearjaw: u => {
    const gear = (cx, cy, r) => { let d = ""; for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2, b = a + 0.32; d += `${i ? "L" : "M"}${(cx + Math.cos(a) * r).toFixed(1)} ${(cy + Math.sin(a) * r).toFixed(1)} L${(cx + Math.cos(a) * (r + 9)).toFixed(1)} ${(cy + Math.sin(a) * (r + 9)).toFixed(1)} L${(cx + Math.cos(b) * (r + 9)).toFixed(1)} ${(cy + Math.sin(b) * (r + 9)).toFixed(1)} L${(cx + Math.cos(b) * r).toFixed(1)} ${(cy + Math.sin(b) * r).toFixed(1)} `; } return d + "Z"; };
    return `
    <defs>
      <linearGradient id="${u}m" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd890"/><stop offset=".5" stop-color="#c8862e"/><stop offset="1" stop-color="#6a4010"/></linearGradient>
      <linearGradient id="${u}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c8ced6"/><stop offset="1" stop-color="#4a525c"/></linearGradient>
    </defs>
    <g class="gearspin" style="transform-origin:34px 64px"><path d="${gear(34, 64, 24)}" fill="#8a5a1e" stroke="#3a2408" stroke-width="2.5"/><circle cx="34" cy="64" r="9" fill="#3a2408"/></g>
    <g class="gearspin rev" style="transform-origin:166px 64px"><path d="${gear(166, 64, 24)}" fill="#8a5a1e" stroke="#3a2408" stroke-width="2.5"/><circle cx="166" cy="64" r="9" fill="#3a2408"/></g>
    <path d="M92 26 V8 M80 8 h24 v-6 h-24Z" stroke="#c8ced6" stroke-width="6" fill="#c8ced6" stroke-linejoin="round"/><path d="M70 2 q-14 6 0 12 M130 2 q14 6 0 12" stroke="#c8ced6" stroke-width="5" fill="none"/>
    <path d="M40 60 Q40 24 100 24 Q160 24 160 60 L164 110 Q100 124 36 110Z" fill="url(#${u}m)" stroke="#3a2408" stroke-width="4" stroke-linejoin="round"/>
    <g fill="#3a2408"><circle cx="52" cy="44" r="3.5"/><circle cx="148" cy="44" r="3.5"/><circle cx="48" cy="96" r="3.5"/><circle cx="152" cy="96" r="3.5"/><circle cx="100" cy="34" r="3.5"/></g>
    <path d="M54 66 L88 76 M146 66 L112 76" stroke="#3a2408" stroke-width="6" stroke-linecap="round"/>
    <g filter="url(#glowF)" class="blinkfast"><circle cx="74" cy="84" r="11" fill="#ff3b2e"/><circle cx="126" cy="84" r="11" fill="#ff3b2e"/></g>
    <circle cx="74" cy="84" r="11" fill="none" stroke="#3a2408" stroke-width="4"/><circle cx="126" cy="84" r="11" fill="none" stroke="#3a2408" stroke-width="4"/>
    <ellipse cx="100" cy="102" rx="16" ry="10" fill="#1a1006"/>
    <g class="squish"><path d="M26 118 Q100 104 174 118 L168 168 Q100 196 32 168Z" fill="url(#${u}s)" stroke="#262c34" stroke-width="4" stroke-linejoin="round"/>
    <path d="M40 122 l8 18 8 -18 M64 118 l8 20 8 -20 M120 118 l8 20 8 -20 M144 122 l8 18 8 -18" fill="#fff" stroke="#9aa2ac" stroke-width="1.5"/>
    <path d="M36 164 l8 -16 8 16 M148 164 l8 -16 8 16" fill="#fff" stroke="#9aa2ac" stroke-width="1.5"/>
    <path d="M56 158 H144" stroke="#262c34" stroke-width="3"/><g fill="#262c34"><circle cx="60" cy="176" r="3"/><circle cx="140" cy="176" r="3"/></g></g>
    <path d="M60 34 Q80 28 96 30" stroke="#fff" stroke-width="5" opacity=".4" fill="none" stroke-linecap="round"/>`;
  },

  vex: u => vexArt(u, false),
  vex2: u => vexArt(u, true),
  vexgood: u => vexArt(u, "good"),

  roc: u => `
    <defs>
      <linearGradient id="${u}f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a4a8a"/><stop offset="1" stop-color="#121a3a"/></linearGradient>
      <linearGradient id="${u}k" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe9a0"/><stop offset="1" stop-color="#d89a1a"/></linearGradient>
    </defs>
    <g class="sway"><path d="M86 96 C60 70 26 62 2 70 L22 84 L4 96 L28 104 L10 118 L40 120 L30 134 C60 132 80 120 92 110Z" fill="url(#${u}f)" stroke="#0a1028" stroke-width="3" stroke-linejoin="round"/>
    <path d="M114 96 C140 70 174 62 198 70 L178 84 L196 96 L172 104 L190 118 L160 120 L170 134 C140 132 120 120 108 110Z" fill="url(#${u}f)" stroke="#0a1028" stroke-width="3" stroke-linejoin="round"/></g>
    <g fill="#ffe23a" opacity=".9"><path d="M4 70 L22 84 L14 74Z"/><path d="M4 96 L28 104 L16 96Z"/><path d="M196 70 L178 84 L186 74Z"/><path d="M196 96 L172 104 L184 96Z"/></g>
    <path d="M68 196 C60 150 70 110 100 106 C130 110 140 150 132 196Z" fill="url(#${u}f)" stroke="#0a1028" stroke-width="3"/>
    <path d="M84 196 C82 160 90 132 100 128 C110 132 118 160 116 196Z" fill="#5a6ab0" opacity=".7"/>
    <g filter="url(#glowF)" class="pulse"><path d="M96 20 L84 44 L96 42 L88 62 L112 34 L100 36 L108 20Z" fill="#ffe23a"/></g>
    <g class="squish"><path d="M62 86 C62 54 80 40 100 40 C120 40 138 54 138 86 C138 110 120 120 100 120 C80 120 62 110 62 86Z" fill="url(#${u}f)" stroke="#0a1028" stroke-width="3"/>
    <path d="M70 64 L94 76 M130 64 L106 76" stroke="#0a1028" stroke-width="5" stroke-linecap="round"/>
    <g filter="url(#glowF)"><circle cx="84" cy="82" r="8" fill="#9ff6ff"/><circle cx="116" cy="82" r="8" fill="#9ff6ff"/></g>
    <g class="blink"><circle cx="84" cy="82" r="3.5" fill="#05101e"/><circle cx="116" cy="82" r="3.5" fill="#05101e"/></g>
    <path d="M88 94 L100 132 L112 94 Q100 88 88 94Z" fill="url(#${u}k)" stroke="#7a5208" stroke-width="2.5" stroke-linejoin="round"/><path d="M92 100 L108 100" stroke="#7a5208" stroke-width="2"/></g>
    <g class="blinkfast" stroke="#fff6a8" stroke-width="3" fill="none"><path d="M40 30 l8 8 -6 2 8 10"/><path d="M160 26 l-8 8 6 2 -8 10"/></g>`,

  hydra: u => {
    const head = (x, y, s, cap, yawn) => `<g transform="translate(${x} ${y}) scale(${s})">
      <path d="M-30 4 C-30 -24 -12 -36 6 -34 C30 -32 40 -12 36 8 C32 26 12 32 -6 30 C-22 28 -30 18 -30 4Z" fill="url(#${u}h)" stroke="#3a0a3a" stroke-width="3"/>
      ${yawn ? `<ellipse cx="14" cy="16" rx="12" ry="10" fill="#2a0420"/><path d="M6 8 l3 6 3 -5 M18 8 l3 6 3 -6" fill="#fff"/>` : `<path d="M2 18 q12 6 24 -2" stroke="#3a0a3a" stroke-width="3.5" fill="none" stroke-linecap="round"/>`}
      <path d="M-14 -6 q8 6 16 0 M12 -8 q8 6 16 0" stroke="#3a0a3a" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <path d="M-14 -6 q8 -5 16 0Z M12 -8 q8 -5 16 0Z" fill="#ffe9ff"/>
      ${cap ? `<path d="M-22 -26 C-14 -60 30 -66 40 -40 L48 -6 L34 -30 C20 -40 0 -38 -22 -26Z" fill="#6a3ad8" stroke="#2a0a6a" stroke-width="2.5"/><circle cx="48" cy="-4" r="7" fill="#fff"/><path d="M-24 -24 Q8 -40 38 -34" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>` : ""}
    </g>`;
    return `
    <defs>
      <radialGradient id="${u}h" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#ffd0f4"/><stop offset=".5" stop-color="#d45ab8"/><stop offset="1" stop-color="#5a1658"/></radialGradient>
      <linearGradient id="${u}n" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c04aa8"/><stop offset="1" stop-color="#4a1048"/></linearGradient>
    </defs>
    <g stroke="#3a0a3a" stroke-width="3" fill="url(#${u}n)">
      <path d="M70 196 C60 150 30 130 34 92 L58 96 C58 126 86 146 92 196Z"/><path d="M130 196 C140 150 170 130 166 92 L142 96 C142 126 114 146 108 196Z"/>
      <path d="M86 196 C84 140 88 100 92 70 L112 70 C114 100 118 140 116 196Z"/></g>
    <g class="sway">${head(44, 82, 0.85, false, true)}${head(158, 82, 0.85, false, false)}</g>
    <g class="squish">${head(102, 58, 1.05, true, false)}</g>
    <g class="twinkle" fill="#fff" font-family="sans-serif" font-weight="700"><path d="M150 22 h12 l-12 12 h12" stroke="#ffe9ff" stroke-width="3" fill="none"/><path d="M170 8 h8 l-8 8 h8" stroke="#ffe9ff" stroke-width="2.5" fill="none"/><path d="M14 40 h10 l-10 10 h10" stroke="#ffe9ff" stroke-width="2.5" fill="none"/></g>`;
  },

  king: u => `
    <defs>
      <linearGradient id="${u}r" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7a2a6a"/><stop offset="1" stop-color="#22081e"/></linearGradient>
      <linearGradient id="${u}c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff0b0"/><stop offset=".5" stop-color="#c8a03a"/><stop offset="1" stop-color="#6a4a10"/></linearGradient>
      <radialGradient id="${u}v" cx="50%" cy="45%" r="60%"><stop offset="0" stop-color="#2a0a2a"/><stop offset="1" stop-color="#000"/></radialGradient>
    </defs>
    <path d="M10 200 C14 150 40 128 70 122 L130 122 C160 128 186 150 190 200Z" fill="url(#${u}r)" stroke="#120410" stroke-width="3"/>
    <g fill="#ffd6f2" opacity=".7" class="twinkle"><path d="M40 168 l3 -8 3 8 -8 -3 8 0Z"/><path d="M150 176 l3 -8 3 8 -8 -3 8 0Z"/><path d="M110 188 l2 -6 2 6 -6 -2 6 0Z"/></g>
    <path d="M44 132 L66 112 L100 128 L134 112 L156 132 L140 150 L100 140 L60 150Z" fill="#e8d0ff" stroke="#5a3a7a" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M52 120 C40 80 52 40 100 36 C148 40 160 80 148 120 C130 136 70 136 52 120Z" fill="url(#${u}r)" stroke="#120410" stroke-width="3"/>
    <path d="M66 112 C58 82 70 58 100 56 C130 58 142 82 134 112 C120 124 80 124 66 112Z" fill="url(#${u}v)"/>
    <g filter="url(#glowF)" class="blink"><ellipse cx="84" cy="88" rx="8" ry="5" fill="#fff"/><ellipse cx="116" cy="88" rx="8" ry="5" fill="#fff"/></g>
    <path d="M80 104 Q100 98 120 104" stroke="#ff4fa3" stroke-width="2" fill="none" opacity=".6"/>
    <g class="squish"><path d="M58 40 L52 6 L74 24 L86 0 L100 20 L114 0 L126 24 L148 6 L142 40Z" fill="url(#${u}c)" stroke="#4a3008" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M58 40 H142" stroke="#4a3008" stroke-width="5"/><path d="M96 22 L104 30 L98 38" stroke="#2a1a04" stroke-width="2" fill="none"/>
    <g filter="url(#glowF)"><circle cx="100" cy="30" r="5" fill="#ff4fa3"/><circle cx="74" cy="32" r="3.5" fill="#7af0ff"/><circle cx="126" cy="32" r="3.5" fill="#7af0ff"/></g></g>`,

};


// the rival: a hooded recruit with a stolen grey flame (unleashed = overflowing with the Hollow King's power)
function vexArt(u, unleashed) {
  const good = unleashed === "good"; if (good) unleashed = false;
  const glow = good ? "#ffc861" : unleashed ? "#d07bff" : "#9ff3ff", flame = good ? "none" : unleashed ? "#8a5ab0" : "#8a96a6";
  return `
    <defs>
      <linearGradient id="${u}h" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${unleashed ? "#5a4a6a" : "#4a5462"}"/><stop offset="1" stop-color="#14181f"/></linearGradient>
      <radialGradient id="${u}a" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="${glow}" stop-opacity=".55"/><stop offset="1" stop-color="${glow}" stop-opacity="0"/></radialGradient>
    </defs>
    <circle cx="100" cy="100" r="${unleashed ? 98 : 84}" fill="url(#${u}a)" class="pulse"/>
    <g class="flame" fill="${flame}" opacity=".85"><path d="M40 120 C30 90 46 70 50 50 C60 70 66 80 64 110Z"/><path d="M160 120 C170 90 154 70 150 50 C140 70 134 80 136 110Z"/>${unleashed ? `<path d="M70 40 C64 20 76 6 80 -6 C90 12 92 26 88 44Z"/><path d="M130 40 C136 20 124 6 120 -6 C110 12 108 26 112 44Z"/>` : ""}</g>
    <path d="M22 200 C26 158 52 136 100 134 C148 136 174 158 178 200Z" fill="url(#${u}h)" stroke="#0a0c10" stroke-width="3"/>
    <path d="M70 140 L100 170 L130 140" fill="none" stroke="${good ? "#ffb347" : unleashed ? "#c78bff" : "#7fd8d0"}" stroke-width="7" stroke-linejoin="round"/>
    <path d="M100 158 C92 168 92 182 100 188 C108 182 108 168 100 158Z M100 150 C104 160 112 162 110 172" fill="${glow}" filter="url(#glowF)" class="pulse"/>
    <path d="M44 120 C40 62 64 26 100 24 C136 26 160 62 156 120 C150 140 50 140 44 120Z" fill="url(#${u}h)" stroke="#0a0c10" stroke-width="3"/>
    <path d="M62 116 C58 76 74 52 100 50 C126 52 142 76 138 116 C128 128 72 128 62 116Z" fill="#0b0e14"/>
    <path d="M74 112 C76 128 124 128 126 112 C120 120 80 120 74 112Z" fill="#c9a07a"/>
    <path d="${good ? "M88 112 Q100 122 112 112" : "M90 116 Q104 122 114 112"}" stroke="#3a2010" stroke-width="3" fill="none" stroke-linecap="round"/>
    <g filter="url(#glowF)" class="blink">${good ? `<ellipse cx="84" cy="90" rx="7" ry="6" fill="${glow}"/><ellipse cx="116" cy="90" rx="7" ry="6" fill="${glow}"/>` : `<path d="M74 86 L94 90 L76 96Z" fill="${glow}"/><path d="M126 86 L106 90 L124 96Z" fill="${glow}"/>`}</g>
    <path d="M58 60 Q70 40 92 34" stroke="#fff" stroke-opacity=".18" stroke-width="5" fill="none" stroke-linecap="round"/>
    ${unleashed ? `<g class="blinkfast" stroke="#e8c8ff" stroke-width="3" fill="none"><path d="M26 70 l10 6 -6 4 10 8"/><path d="M174 70 l-10 6 6 4 -10 8"/></g>` : ""}`;
}

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
  barnacle: { aura: "#ff7a4a", fog: "rgba(120,40,20,.35)" },
  eel:      { aura: "#3ff0ff", fog: "rgba(10,60,90,.45)" },
  gearjaw:  { aura: "#ffb03a", fog: "rgba(90,60,20,.4)" },
  vex:      { aura: "#9fe8f0", fog: "rgba(40,50,60,.45)" },
  roc:      { aura: "#ffe23a", fog: "rgba(20,30,70,.45)" },
  vex2:     { aura: "#c78bff", fog: "rgba(50,30,70,.5)" },
  hydra:    { aura: "#ff7ad9", fog: "rgba(80,20,70,.45)" },
  king:     { aura: "#ff4fa3", fog: "rgba(60,10,50,.55)" },
  vexgood:  { aura: "#ffc861", fog: "rgba(70,50,20,.35)" },
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
