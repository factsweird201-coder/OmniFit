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

  // ----- Squat campaign: The Sinking Lands -----
  mole: u => `
    <defs>
      <radialGradient id="${u}b" cx="45%" cy="35%" r="70%"><stop offset="0" stop-color="#8a7a90"/><stop offset=".55" stop-color="#4a3e52"/><stop offset="1" stop-color="#221a2a"/></radialGradient>
      <radialGradient id="${u}d" cx="50%" cy="30%" r="70%"><stop offset="0" stop-color="#a07a4a"/><stop offset="1" stop-color="#4a3018"/></radialGradient>
    </defs>
    <ellipse cx="100" cy="182" rx="92" ry="20" fill="url(#${u}d)"/><g fill="#6a4a28"><circle cx="30" cy="172" r="9"/><circle cx="168" cy="176" r="11"/><circle cx="150" cy="168" r="6"/></g>
    <g class="squish"><path d="M30 180 C24 110 56 52 100 50 C144 52 176 110 170 180Z" fill="url(#${u}b)" stroke="#16101c" stroke-width="3"/>
    <path d="M56 120 Q60 96 78 86 M144 120 Q140 96 122 86" stroke="#6a5a72" stroke-width="3" fill="none" opacity=".6"/>
    <path d="M70 150 Q100 166 130 150 Q120 176 100 176 Q80 176 70 150Z" fill="#c8a8c8" opacity=".35"/>
    <ellipse cx="100" cy="104" rx="24" ry="17" fill="#ff8aa8" stroke="#a83a5a" stroke-width="3"/><ellipse cx="92" cy="102" rx="4" ry="5" fill="#a83a5a"/><ellipse cx="108" cy="102" rx="4" ry="5" fill="#a83a5a"/>
    <ellipse cx="94" cy="96" rx="7" ry="4" fill="#fff" opacity=".5"/>
    <path d="M86 122 Q100 132 114 122" stroke="#16101c" stroke-width="3.5" fill="none" stroke-linecap="round"/><rect x="94" y="122" width="5" height="8" fill="#fff"/><rect x="101" y="122" width="5" height="8" fill="#fff"/>
    <g class="blink"><circle cx="78" cy="80" r="4" fill="#0a0610"/><circle cx="122" cy="80" r="4" fill="#0a0610"/></g>
    <path d="M66 70 L88 76 M134 70 L112 76" stroke="#16101c" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M76 56 L82 40 L92 52 L100 34 L108 52 L118 40 L124 56Z" fill="#ffc21a" stroke="#8a5a08" stroke-width="2.5" stroke-linejoin="round"/></g>
    <g class="sway"><path d="M24 146 C6 140 4 118 18 112 C26 120 34 126 40 136Z" fill="#ff9ab4" stroke="#a83a5a" stroke-width="2.5"/>
    <path d="M10 118 l-8 -10 M16 114 l-4 -13 M24 114 l2 -13" stroke="#f2f0e8" stroke-width="5" stroke-linecap="round"/></g>
    <path d="M176 146 C194 140 196 118 182 112 C174 120 166 126 160 136Z" fill="#ff9ab4" stroke="#a83a5a" stroke-width="2.5"/>
    <path d="M190 118 l8 -10 M184 114 l4 -13 M176 114 l-2 -13" stroke="#f2f0e8" stroke-width="5" stroke-linecap="round"/>`,

  bull: u => `
    <defs>
      <radialGradient id="${u}b" cx="45%" cy="35%" r="70%"><stop offset="0" stop-color="#c8743a"/><stop offset=".55" stop-color="#7a3a16"/><stop offset="1" stop-color="#3a1806"/></radialGradient>
      <linearGradient id="${u}h" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff6dc"/><stop offset="1" stop-color="#b8a070"/></linearGradient>
    </defs>
    <g stroke="#2e5a1a" stroke-width="5" fill="none" stroke-linecap="round"><path d="M20 190 C40 160 30 130 54 110"/><path d="M180 190 C160 160 172 128 146 110"/><path d="M60 196 C70 170 66 150 80 136"/></g>
    <g fill="#5aa832">${[[36, 150], [48, 124], [166, 148], [152, 124], [70, 166]].map(([x, y]) => `<path d="M${x} ${y} l-7 -4 7 -3 -2 -7 6 5 4 -6 1 8 7 1 -6 5Z"/>`).join("")}</g>
    <g class="squish"><path d="M44 120 C40 70 70 44 100 44 C130 44 160 70 156 120 C152 160 128 178 100 178 C72 178 48 160 44 120Z" fill="url(#${u}b)" stroke="#2a1004" stroke-width="3"/>
    <path d="M44 74 C20 70 8 50 14 30 C26 44 38 50 56 54Z" fill="url(#${u}h)" stroke="#6a5030" stroke-width="2.5"/>
    <path d="M156 74 C180 70 192 50 186 30 C174 44 162 50 144 54Z" fill="url(#${u}h)" stroke="#6a5030" stroke-width="2.5"/>
    <path d="M60 60 Q100 40 140 60 Q132 50 100 48 Q68 50 60 60Z" fill="#2e5a1a"/>${[66, 84, 100, 116, 134].map(x => `<path d="M${x} 56 l4 -12 4 12" fill="#5aa832" stroke="#2e5a1a" stroke-width="1.5"/>`).join("")}
    <ellipse cx="100" cy="138" rx="36" ry="26" fill="#e8a888" stroke="#7a3a16" stroke-width="3"/><ellipse cx="86" cy="138" rx="6" ry="8" fill="#3a1806"/><ellipse cx="114" cy="138" rx="6" ry="8" fill="#3a1806"/>
    <circle cx="100" cy="160" r="9" fill="none" stroke="#e8c050" stroke-width="4"/>
    <g class="blink"><ellipse cx="74" cy="96" rx="10" ry="8" fill="#ff3a1a"/><ellipse cx="126" cy="96" rx="10" ry="8" fill="#ff3a1a"/><circle cx="76" cy="97" r="3.5" fill="#1a0400"/><circle cx="124" cy="97" r="3.5" fill="#1a0400"/></g>
    <path d="M60 82 L88 92 M140 82 L112 92" stroke="#1a0800" stroke-width="5" stroke-linecap="round"/></g>
    <g class="blinkfast" fill="#fff" opacity=".7"><circle cx="70" cy="150" r="5"/><circle cx="62" cy="142" r="3.5"/><circle cx="130" cy="150" r="5"/><circle cx="138" cy="142" r="3.5"/></g>`,

  toad: u => `
    <defs>
      <radialGradient id="${u}b" cx="45%" cy="30%" r="75%"><stop offset="0" stop-color="#b8d86a"/><stop offset=".5" stop-color="#5a8a2a"/><stop offset="1" stop-color="#22400e"/></radialGradient>
      <radialGradient id="${u}e" cx="40%" cy="35%" r="60%"><stop offset="0" stop-color="#fff2a0"/><stop offset="1" stop-color="#d8a020"/></radialGradient>
    </defs>
    <ellipse cx="100" cy="186" rx="90" ry="12" fill="#1a3a2a" opacity=".6"/>
    <g fill="#3a6a1a" stroke="#16300a" stroke-width="2.5"><path d="M24 186 C10 170 26 150 44 160 L58 186Z"/><path d="M176 186 C190 170 174 150 156 160 L142 186Z"/></g>
    <g class="squish"><path d="M26 150 C18 100 50 62 100 62 C150 62 182 100 174 150 C168 182 132 190 100 190 C68 190 32 182 26 150Z" fill="url(#${u}b)" stroke="#16300a" stroke-width="3"/>
    <path d="M52 150 C60 176 140 176 148 150 C140 186 60 186 52 150Z" fill="#e8e0a0" opacity=".55"/>
    ${[[56, 100, 6], [70, 84, 4], [140, 96, 7], [126, 80, 4], [44, 128, 5], [158, 126, 5], [100, 74, 4]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#3a6a1a" opacity=".7"/>`).join("")}
    <path d="M40 124 Q100 150 160 124 Q150 144 100 146 Q50 144 40 124Z" fill="#16300a"/><path d="M58 134 Q100 150 142 134" stroke="#e86a7a" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="66" cy="64" r="22" fill="url(#${u}b)" stroke="#16300a" stroke-width="3"/><circle cx="134" cy="64" r="22" fill="url(#${u}b)" stroke="#16300a" stroke-width="3"/>
    <g class="blink"><circle cx="66" cy="62" r="14" fill="url(#${u}e)"/><circle cx="134" cy="62" r="14" fill="url(#${u}e)"/><rect x="58" y="59" width="16" height="6" rx="3" fill="#1a1000"/><rect x="126" y="59" width="16" height="6" rx="3" fill="#1a1000"/></g>
    <path d="M48 50 Q66 40 82 50 M118 50 Q134 40 152 50" stroke="#16300a" stroke-width="4" fill="none" stroke-linecap="round"/></g>
    <g class="pulse"><ellipse cx="100" cy="164" rx="26" ry="14" fill="#e8e0a0" opacity=".35"/></g>
    <g fill="#9ad8ff" opacity=".7" class="blinkfast"><circle cx="30" cy="96" r="4"/><circle cx="22" cy="80" r="2.5"/><circle cx="172" cy="90" r="3.5"/></g>`,

  witch: u => `
    <defs>
      <radialGradient id="${u}f" cx="45%" cy="35%" r="70%"><stop offset="0" stop-color="#b8e08a"/><stop offset=".6" stop-color="#5a9a4a"/><stop offset="1" stop-color="#2a4a22"/></radialGradient>
      <linearGradient id="${u}c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a5a2a"/><stop offset="1" stop-color="#16280e"/></linearGradient>
      <radialGradient id="${u}p" cx="50%" cy="40%" r="60%"><stop offset="0" stop-color="#d8ff8a"/><stop offset="1" stop-color="#4a8a1a"/></radialGradient>
    </defs>
    <path d="M40 196 C46 140 64 110 100 106 C136 110 154 140 160 196Z" fill="url(#${u}c)" stroke="#0a1406" stroke-width="3"/>
    <g fill="#6a9a3a" opacity=".8">${[[56, 170], [76, 150], [136, 160], [120, 184], [96, 176]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="10" ry="6"/>`).join("")}</g>
    <g class="squish"><path d="M64 96 C60 60 78 44 100 44 C122 44 140 60 136 96 C134 118 118 128 100 128 C82 128 66 118 64 96Z" fill="url(#${u}f)" stroke="#16280e" stroke-width="3"/>
    <path d="M94 88 C88 104 96 112 108 106" stroke="#2a4a22" stroke-width="3" fill="#7aba5a"/><circle cx="108" cy="108" r="3" fill="#2a4a22"/>
    <path d="M82 114 Q100 106 118 114" stroke="#16280e" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M90 113 l3 6 3 -5 M104 112 l3 6 3 -6" fill="#f2f0d8"/>
    <g class="blink" filter="url(#glowF)"><ellipse cx="84" cy="80" rx="7" ry="5" fill="#ffe23a"/><ellipse cx="116" cy="80" rx="7" ry="5" fill="#ffe23a"/></g>
    <g class="blink"><circle cx="84" cy="80" r="2.4" fill="#2a1a00"/><circle cx="116" cy="80" r="2.4" fill="#2a1a00"/></g></g>
    <path d="M40 58 C60 50 80 46 100 46 C120 46 140 50 160 58 C140 62 60 62 40 58Z" fill="#2a3a1a" stroke="#0a1406" stroke-width="2.5"/>
    <path d="M70 52 C74 24 92 6 128 2 C112 14 112 30 120 52Z" fill="#2a3a1a" stroke="#0a1406" stroke-width="2.5"/><path d="M72 50 Q100 44 120 50" stroke="#a8d84a" stroke-width="4" fill="none"/>
    <g class="sway"><path d="M150 196 L172 70" stroke="#5a3a1a" stroke-width="6" stroke-linecap="round"/><circle cx="172" cy="64" r="11" fill="url(#${u}p)" filter="url(#glowF)"/></g>
    <g class="pulse"><ellipse cx="54" cy="176" rx="30" ry="10" fill="#2a2a2a"/><path d="M24 176 Q54 206 84 176Z" fill="#1a1a1a"/><ellipse cx="54" cy="176" rx="26" ry="7" fill="url(#${u}p)"/>
    <circle cx="46" cy="164" r="4" fill="#b8ff6a"/><circle cx="60" cy="156" r="3" fill="#b8ff6a"/><circle cx="52" cy="146" r="2" fill="#b8ff6a"/></g>`,

  yeti: u => `
    <defs>
      <radialGradient id="${u}b" cx="45%" cy="30%" r="75%"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#d4e6f4"/><stop offset="1" stop-color="#8aa8c4"/></radialGradient>
      <radialGradient id="${u}f" cx="50%" cy="40%" r="60%"><stop offset="0" stop-color="#9ac8e8"/><stop offset="1" stop-color="#4a7aa8"/></radialGradient>
    </defs>
    <g class="sway"><path d="M30 120 C10 130 6 160 20 182 C30 170 40 160 46 140Z" fill="url(#${u}b)" stroke="#5a7a9a" stroke-width="3"/><path d="M14 180 l-4 10 M22 184 l0 10 M30 180 l4 9" stroke="#4a6a8a" stroke-width="4" stroke-linecap="round"/></g>
    <path d="M170 120 C190 130 194 160 180 182 C170 170 160 160 154 140Z" fill="url(#${u}b)" stroke="#5a7a9a" stroke-width="3"/><path d="M186 180 l4 10 M178 184 l0 10 M170 180 l-4 9" stroke="#4a6a8a" stroke-width="4" stroke-linecap="round"/>
    <g class="squish"><path d="M36 110 C30 60 62 26 100 26 C138 26 170 60 164 110 C162 160 134 190 100 190 C66 190 38 160 36 110Z" fill="url(#${u}b)" stroke="#5a7a9a" stroke-width="3"/>
    ${Array.from({ length: 14 }, (_, i) => { const a = i / 14 * Math.PI * 2, x = 100 + Math.cos(a) * 66, y = 108 + Math.sin(a) * 78; return `<path d="M${x.toFixed(0)} ${y.toFixed(0)} l${(Math.cos(a) * 9).toFixed(0)} ${(Math.sin(a) * 9 + 3).toFixed(0)}" stroke="#a8c4dc" stroke-width="4" stroke-linecap="round"/>`; }).join("")}
    <path d="M58 80 C58 52 142 52 142 80 C142 120 126 136 100 136 C74 136 58 120 58 80Z" fill="url(#${u}f)" stroke="#2a4a6a" stroke-width="3"/>
    <path d="M70 112 Q100 140 130 112 Q126 128 100 130 Q74 128 70 112Z" fill="#1a2a3a"/><path d="M76 114 l5 10 5 -9 M114 114 l5 9 5 -10" fill="#fff"/>
    <g class="blink"><ellipse cx="82" cy="86" rx="9" ry="8" fill="#fff"/><ellipse cx="118" cy="86" rx="9" ry="8" fill="#fff"/><circle class="look" cx="84" cy="88" r="4" fill="#0a1420"/><circle class="look" cx="116" cy="88" r="4" fill="#0a1420"/></g>
    <path d="M68 72 L92 80 M132 72 L108 80" stroke="#1a2a3a" stroke-width="5" stroke-linecap="round"/><ellipse cx="100" cy="100" rx="8" ry="5" fill="#2a4a6a"/>
    <path d="M60 54 C70 40 84 34 96 34 M140 54 C130 40 116 34 104 34" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8"/></g>
    <g fill="#fff" class="blinkfast" opacity=".8"><circle cx="24" cy="60" r="3"/><circle cx="178" cy="44" r="2.5"/><circle cx="168" cy="80" r="2"/><circle cx="34" cy="34" r="2"/></g>`,

  giant: u => `
    <defs>
      <linearGradient id="${u}b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e8f6ff"/><stop offset=".5" stop-color="#8fc8f0"/><stop offset="1" stop-color="#3a6a9a"/></linearGradient>
      <linearGradient id="${u}r" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7a8896"/><stop offset="1" stop-color="#3a444e"/></linearGradient>
    </defs>
    <path d="M30 196 L46 130 L20 112 L40 84 L72 96Z" fill="url(#${u}r)" stroke="#1a222a" stroke-width="3" stroke-linejoin="round"/>
    <path d="M170 196 L154 130 L180 112 L160 84 L128 96Z" fill="url(#${u}r)" stroke="#1a222a" stroke-width="3" stroke-linejoin="round"/>
    <g class="squish"><path d="M52 196 L44 120 L62 70 L100 52 L138 70 L156 120 L148 196Z" fill="url(#${u}r)" stroke="#1a222a" stroke-width="3" stroke-linejoin="round"/>
    <path d="M62 70 L100 52 L138 70 L120 64 L100 70 L80 64Z" fill="#fff"/><path d="M44 120 L62 70 L58 110Z M156 120 L138 70 L142 110Z" fill="#fff" opacity=".8"/>
    <path d="M66 52 L76 16 L90 40 L100 4 L110 40 L124 16 L134 52 L100 62Z" fill="url(#${u}b)" stroke="#2a5a8a" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M76 16 L84 46 M100 4 L100 50 M124 16 L116 46" stroke="#fff" stroke-width="2" opacity=".7"/>
    <g filter="url(#glowF)" class="blink"><path d="M70 98 L94 102 L72 110Z" fill="#7ff0ff"/><path d="M130 98 L106 102 L128 110Z" fill="#7ff0ff"/></g>
    <path d="M74 140 L88 132 L100 142 L112 132 L126 140 L114 152 L86 152Z" fill="#1a222a"/><path d="M88 140 l4 8 4 -8 M104 140 l4 8 4 -8" fill="#cfefff"/>
    <path d="M60 170 L80 160 L96 176 M140 170 L118 162 L106 178" stroke="#1a222a" stroke-width="2.5" fill="none" opacity=".6"/>
    <path d="M100 52 L96 86 L104 100" stroke="#1a222a" stroke-width="2" fill="none" opacity=".5"/></g>
    <g fill="#fff" class="blinkfast" opacity=".85"><circle cx="18" cy="70" r="3"/><circle cx="184" cy="64" r="3"/><circle cx="12" cy="150" r="2"/><circle cx="190" cy="140" r="2.5"/></g>`,

  sludge: u => `
    <defs>
      <linearGradient id="${u}a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9a8a78"/><stop offset=".5" stop-color="#5a4a3a"/><stop offset="1" stop-color="#2a2018"/></linearGradient>
      <linearGradient id="${u}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8e0f0"/><stop offset="1" stop-color="#7a6a8a"/></linearGradient>
    </defs>
    <path d="M26 196 C30 186 46 186 50 196 C56 184 70 184 76 196 C84 186 96 186 104 196 C112 186 126 186 132 196 C140 184 156 184 162 196 C168 188 178 188 182 196Z" fill="#4a3a2a"/>
    <g class="sway"><path d="M164 150 L186 20" stroke="url(#${u}s)" stroke-width="10" stroke-linecap="round"/><path d="M152 150 H176" stroke="#c8a040" stroke-width="7" stroke-linecap="round"/>
    <path d="M182 50 q4 8 0 14 q-4 6 0 12" stroke="#5a4a3a" stroke-width="4" fill="none"/></g>
    <g class="squish"><path d="M46 196 C40 150 50 110 100 104 C150 110 160 150 154 196Z" fill="url(#${u}a)" stroke="#16100a" stroke-width="3"/>
    <path d="M70 120 Q100 112 130 120 L128 150 Q100 158 72 150Z" fill="#7a6a5a" stroke="#16100a" stroke-width="2.5"/><path d="M100 116 V156" stroke="#16100a" stroke-width="2.5"/>
    <path d="M62 100 C58 60 72 36 100 36 C128 36 142 60 138 100 Z" fill="url(#${u}a)" stroke="#16100a" stroke-width="3"/>
    <rect x="66" y="66" width="68" height="14" rx="4" fill="#0a0604"/>
    <g class="blink" filter="url(#glowF)"><rect x="74" y="70" width="18" height="6" rx="3" fill="#c87aff"/><rect x="108" y="70" width="18" height="6" rx="3" fill="#c87aff"/></g>
    <path d="M100 36 C96 20 104 10 112 4 C110 16 116 24 108 36" fill="#8a3aa8" stroke="#3a0a4a" stroke-width="2"/>
    ${[[70, 100, 22], [96, 104, 30], [126, 100, 18], [60, 160, 26], [140, 150, 34], [100, 170, 20]].map(([x, y, h]) => `<path d="M${x - 5} ${y} q5 ${h} 10 0" fill="#4a3a2a" stroke="#16100a" stroke-width="1.5"/>`).join("")}</g>
    <g class="blinkfast" fill="#4a3a2a"><circle cx="70" cy="132" r="4"/><circle cx="130" cy="178" r="4"/></g>`,

  quag: u => `
    <defs>
      <radialGradient id="${u}m" cx="45%" cy="30%" r="75%"><stop offset="0" stop-color="#b89ad0"/><stop offset=".5" stop-color="#6a4a8a"/><stop offset="1" stop-color="#2a1640"/></radialGradient>
      <linearGradient id="${u}c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff0a0"/><stop offset=".5" stop-color="#e0a020"/><stop offset="1" stop-color="#8a5a08"/></linearGradient>
      <radialGradient id="${u}g" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ff7ae0"/><stop offset="1" stop-color="#8a1a7a"/></radialGradient>
    </defs>
    <path d="M6 196 C20 150 40 130 50 100 C60 140 80 150 100 150 C120 150 140 140 150 100 C160 130 180 150 194 196Z" fill="#3a2650"/>
    <g fill="#5a3a7a">${[[20, 186, 9], [44, 176, 6], [160, 182, 8], [182, 170, 5], [100, 190, 10]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join("")}</g>
    <g class="squish"><path d="M40 196 C36 140 56 96 100 92 C144 96 164 140 160 196Z" fill="url(#${u}m)" stroke="#16081f" stroke-width="3"/>
    ${[[56, 140, 30], [80, 150, 40], [120, 150, 44], [146, 140, 32]].map(([x, y, h]) => `<path d="M${x - 6} ${y} q6 ${h} 12 0" fill="#4a2a6a" stroke="#16081f" stroke-width="1.5"/>`).join("")}
    <path d="M64 92 C60 56 78 36 100 36 C122 36 140 56 136 92 C134 116 118 126 100 126 C82 126 66 116 64 92Z" fill="url(#${u}m)" stroke="#16081f" stroke-width="3"/>
    <path d="M60 96 C40 110 30 70 52 60 C50 76 56 86 66 88Z M140 96 C160 110 170 70 148 60 C150 76 144 86 134 88Z" fill="#4a2a6a" stroke="#16081f" stroke-width="2"/>
    <g class="blink"><path d="M74 78 Q84 70 94 80 Q84 86 74 78Z" fill="#ffe0ff"/><path d="M126 78 Q116 70 106 80 Q116 86 126 78Z" fill="#ffe0ff"/>
    <circle cx="85" cy="78" r="3.4" fill="#4a0a4a"/><circle cx="115" cy="78" r="3.4" fill="#4a0a4a"/></g>
    <path d="M72 70 Q84 62 96 70 M128 70 Q116 62 104 70" stroke="#16081f" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M84 104 Q100 116 116 104" stroke="#16081f" stroke-width="3.5" fill="#8a1a5a" stroke-linecap="round"/>
    <circle cx="100" cy="140" r="10" fill="url(#${u}g)" filter="url(#glowF)" class="pulse"/></g>
    <path d="M68 44 L72 16 L84 32 L92 8 L100 28 L108 8 L116 32 L128 16 L132 44 Q100 36 68 44Z" fill="url(#${u}c)" stroke="#5a3a08" stroke-width="2.5" stroke-linejoin="round"/>
    <g fill="#ff7ae0"><circle cx="92" cy="12" r="3"/><circle cx="108" cy="12" r="3"/><circle cx="100" cy="34" r="4"/></g>
    <path d="M70 46 Q66 60 72 70 M130 46 Q134 60 128 70" stroke="#4a2a6a" stroke-width="5" fill="none" stroke-linecap="round"/>
    <g class="blinkfast" fill="#c8a8e8" opacity=".8"><circle cx="30" cy="120" r="4"/><circle cx="24" cy="104" r="2.5"/><circle cx="172" cy="116" r="3.5"/><circle cx="180" cy="100" r="2"/></g>`,

  // ----- Squat campaign part 2: The Heavy Sky -----
  scorp: u => `
    <defs>
      <radialGradient id="${u}b" cx="45%" cy="35%" r="70%"><stop offset="0" stop-color="#ffb860"/><stop offset=".55" stop-color="#c8641e"/><stop offset="1" stop-color="#5a2408"/></radialGradient>
      <linearGradient id="${u}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff0a0"/><stop offset="1" stop-color="#e88a1a"/></linearGradient>
    </defs>
    <ellipse cx="100" cy="186" rx="88" ry="12" fill="#5a3010" opacity=".45"/>
    <g stroke="#5a2408" stroke-width="5" stroke-linecap="round" fill="none"><path d="M64 160 L38 182 M70 166 L52 190 M136 160 L162 182 M130 166 L148 190 M60 150 L26 168 M140 150 L174 168"/></g>
    <g class="sway"><path d="M118 140 C150 136 170 108 164 76 C160 52 140 34 118 40" stroke="#5a2408" stroke-width="25" fill="none" stroke-linecap="round"/><path d="M118 140 C150 136 170 108 164 76 C160 52 140 34 118 40" stroke="#e08a3a" stroke-width="19" fill="none" stroke-linecap="round"/>
    <path d="M118 140 C150 136 170 108 164 76 C160 52 140 34 118 40" stroke="#5a2408" stroke-width="2.5" fill="none" stroke-dasharray="3 13" opacity=".8"/>
    <path d="M120 40 C108 34 98 40 96 50 C104 46 112 46 118 52Z" fill="url(#${u}s)" stroke="#6a3a08" stroke-width="2.5"/>
    <circle cx="98" cy="50" r="3" fill="#a8ff3a" class="blinkfast"/></g>
    <g class="squish"><ellipse cx="100" cy="142" rx="50" ry="34" fill="url(#${u}b)" stroke="#3a1404" stroke-width="3"/>
    <path d="M62 138 Q100 124 138 138 M66 152 Q100 140 134 152" stroke="#7a3410" stroke-width="3" fill="none" opacity=".7"/>
    <g class="blink"><circle cx="86" cy="124" r="6" fill="#1a0800"/><circle cx="114" cy="124" r="6" fill="#1a0800"/><circle cx="88" cy="122" r="2" fill="#ffd060"/><circle cx="116" cy="122" r="2" fill="#ffd060"/></g>
    <path d="M76 114 L94 120 M124 114 L106 120" stroke="#3a1404" stroke-width="4" stroke-linecap="round"/>
    <path d="M88 140 Q100 148 112 140" stroke="#3a1404" stroke-width="3" fill="none"/></g>
    <g fill="url(#${u}b)" stroke="#3a1404" stroke-width="3"><path d="M56 132 C34 128 22 110 24 92"/><path d="M144 132 C166 128 178 110 176 92"/>
    <path d="M30 96 C8 92 4 66 20 56 C30 64 40 66 46 60 C50 76 44 92 30 96Z"/><path d="M170 96 C192 92 196 66 180 56 C170 64 160 66 154 60 C150 76 156 92 170 96Z"/></g>
    <path d="M20 56 L30 72 M180 56 L170 72" stroke="#3a1404" stroke-width="3"/>`,

  cactus: u => `
    <defs>
      <linearGradient id="${u}b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2e6a2a"/><stop offset=".5" stop-color="#6ab84a"/><stop offset="1" stop-color="#2e6a2a"/></linearGradient>
    </defs>
    <ellipse cx="100" cy="190" rx="70" ry="9" fill="#8a5a2a" opacity=".5"/>
    <path d="M70 196 L74 170 H126 L130 196Z" fill="#c8643a" stroke="#6a2a10" stroke-width="3"/><rect x="66" y="164" width="68" height="10" rx="3" fill="#e07a4a" stroke="#6a2a10" stroke-width="3"/>
    <g class="sway"><path d="M70 120 H40 C30 120 28 112 28 104 V66 C28 56 44 56 44 66 V104 H70Z" fill="url(#${u}b)" stroke="#16380e" stroke-width="3"/></g>
    <path d="M130 100 H160 C170 100 172 92 172 84 V54 C172 44 156 44 156 54 V84 H130Z" fill="url(#${u}b)" stroke="#16380e" stroke-width="3"/>
    <g class="squish"><path d="M66 166 V60 C66 26 134 26 134 60 V166Z" fill="url(#${u}b)" stroke="#16380e" stroke-width="3"/>
    <path d="M84 50 V160 M100 40 V160 M116 50 V160" stroke="#1e4a16" stroke-width="2" opacity=".5"/>
    <g stroke="#fff6c8" stroke-width="2" stroke-linecap="round">${[[72, 70], [128, 76], [70, 110], [130, 120], [74, 146], [126, 150], [36, 80], [164, 66]].map(([x, y]) => `<path d="M${x} ${y} l-6 -3 M${x} ${y} l-6 3 M${x} ${y} l0 -7"/>`).join("")}</g>
    <g class="blink"><ellipse cx="86" cy="86" rx="8" ry="9" fill="#fff"/><ellipse cx="114" cy="86" rx="8" ry="9" fill="#fff"/><circle cx="88" cy="88" r="4" fill="#1a0a00"/><circle cx="112" cy="88" r="4" fill="#1a0a00"/></g>
    <path d="M74 72 L94 80 M126 72 L106 80" stroke="#0e2a08" stroke-width="5" stroke-linecap="round"/>
    <path d="M82 116 Q100 106 118 116 Q112 128 100 128 Q88 128 82 116Z" fill="#3a1408"/><path d="M88 116 l4 6 4 -6 4 6 4 -6 4 6" stroke="#fff" stroke-width="2.5" fill="none"/>
    <g transform="translate(100 34)">${[0, 72, 144, 216, 288].map(a => `<ellipse rx="7" ry="12" transform="rotate(${a}) translate(0 -9)" fill="#ff5fa8" stroke="#a82a6a" stroke-width="2"/>`).join("")}<circle r="6" fill="#ffd23a"/></g></g>`,

  crab: u => `
    <defs>
      <radialGradient id="${u}b" cx="45%" cy="30%" r="75%"><stop offset="0" stop-color="#ff8a6a"/><stop offset=".55" stop-color="#d8342a"/><stop offset="1" stop-color="#6a0e0a"/></radialGradient>
    </defs>
    <ellipse cx="100" cy="188" rx="86" ry="10" fill="#0a3a4a" opacity=".5"/>
    <g stroke="#6a0e0a" stroke-width="6" stroke-linecap="round" fill="none"><path d="M60 150 L30 176 L22 190 M66 160 L46 186 M140 150 L170 176 L178 190 M134 160 L154 186"/></g>
    <g class="squish"><path d="M30 130 C30 90 64 74 100 74 C136 74 170 90 170 130 C170 160 138 170 100 170 C62 170 30 160 30 130Z" fill="url(#${u}b)" stroke="#3a0604" stroke-width="3"/>
    <path d="M44 112 Q100 96 156 112" stroke="#ffb0a0" stroke-width="4" fill="none" opacity=".5"/>
    ${[56, 80, 120, 144].map((x, i) => `<circle cx="${x}" cy="${132 + (i % 2) * 8}" r="4" fill="#ffd0c0" opacity=".55"/>`).join("")}
    <path d="M78 76 V50 M122 76 V50" stroke="#6a0e0a" stroke-width="6" stroke-linecap="round"/>
    <g class="blink"><circle cx="78" cy="46" r="12" fill="#fff" stroke="#3a0604" stroke-width="3"/><circle cx="122" cy="46" r="12" fill="#fff" stroke="#3a0604" stroke-width="3"/><circle cx="80" cy="48" r="6" fill="#0a0a0a"/><circle cx="120" cy="48" r="6" fill="#0a0a0a"/></g>
    <path d="M64 30 L88 38 M136 30 L112 38" stroke="#3a0604" stroke-width="5" stroke-linecap="round"/>
    <path d="M82 140 Q100 128 118 140" stroke="#3a0604" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M86 140 l3 -6 3 6 M110 140 l3 -6 3 6" fill="#fff"/></g>
    <g class="sway"><path d="M36 120 C14 116 6 96 14 78" stroke="url(#${u}b)" stroke-width="14" fill="none" stroke-linecap="round"/>
    <path d="M14 82 C-2 70 0 40 20 30 C24 46 34 54 44 52 C40 36 46 24 56 22 C62 46 48 78 14 82Z" fill="url(#${u}b)" stroke="#3a0604" stroke-width="3"/></g>
    <path d="M164 120 C186 116 194 96 186 78" stroke="url(#${u}b)" stroke-width="14" fill="none" stroke-linecap="round"/>
    <path d="M186 82 C202 70 200 40 180 30 C176 46 166 54 156 52 C160 36 154 24 144 22 C138 46 152 78 186 82Z" fill="url(#${u}b)" stroke="#3a0604" stroke-width="3"/>
    <g fill="#bfefff" opacity=".7" class="pulse"><circle cx="150" cy="70" r="5"/><circle cx="160" cy="54" r="3.5"/><circle cx="46" cy="66" r="4"/></g>`,

  angler: u => `
    <defs>
      <radialGradient id="${u}b" cx="40%" cy="40%" r="70%"><stop offset="0" stop-color="#4a5a8a"/><stop offset=".6" stop-color="#1e2648"/><stop offset="1" stop-color="#080a1a"/></radialGradient>
      <radialGradient id="${u}l" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff"/><stop offset=".4" stop-color="#7affe0"/><stop offset="1" stop-color="#7affe0" stop-opacity="0"/></radialGradient>
    </defs>
    <path d="M150 40 C120 10 80 14 70 46" stroke="#2a3460" stroke-width="5" fill="none"/>
    <g class="pulse"><circle cx="152" cy="42" r="26" fill="url(#${u}l)"/><circle cx="152" cy="42" r="8" fill="#eafff8"/></g>
    <path d="M168 120 L196 92 L190 128 L198 160 L168 140Z" fill="#2a3460" stroke="#080a1a" stroke-width="3"/>
    <g class="squish"><path d="M20 110 C20 64 60 44 104 46 C148 48 172 80 172 116 C172 158 140 182 98 182 C56 182 20 156 20 110Z" fill="url(#${u}b)" stroke="#05060f" stroke-width="3"/>
    <path d="M24 120 C60 112 120 112 168 128 C150 170 120 178 96 178 C60 178 32 156 24 120Z" fill="#0a0a14"/>
    <path d="M30 122 L40 142 L50 120 L60 146 L72 118 L82 148 L94 117 L106 148 L118 119 L128 146 L140 122 L150 142 L160 126" fill="#f2f0e0" stroke="#8a8a7a" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M40 168 L48 152 L58 172 L70 156 L82 176 L94 158 L106 176 L118 156 L128 172 L138 154" fill="none" stroke="#f2f0e0" stroke-width="5" stroke-linejoin="round"/>
    <g class="blink"><circle cx="70" cy="86" r="14" fill="#eaffd0"/><circle cx="72" cy="88" r="7" fill="#05060f"/><circle cx="70" cy="84" r="2.5" fill="#fff"/></g>
    <path d="M52 66 L84 76" stroke="#05060f" stroke-width="5" stroke-linecap="round"/>
    <g fill="#7affe0" opacity=".6">${[[110, 76], [128, 90], [140, 70], [96, 66]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3"/>`).join("")}</g></g>
    <g class="pulse" fill="#bfefff" opacity=".5"><circle cx="18" cy="60" r="5"/><circle cx="30" cy="40" r="3.5"/><circle cx="10" cy="30" r="2.5"/></g>`,

  cinder: u => `
    <defs>
      <radialGradient id="${u}b" cx="45%" cy="35%" r="70%"><stop offset="0" stop-color="#5a4a48"/><stop offset=".6" stop-color="#2a1e1e"/><stop offset="1" stop-color="#100808"/></radialGradient>
      <linearGradient id="${u}l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff2a0"/><stop offset=".5" stop-color="#ff8a1a"/><stop offset="1" stop-color="#d82a0a"/></linearGradient>
    </defs>
    <ellipse cx="100" cy="186" rx="88" ry="12" fill="#ff5a1a" opacity=".35" class="pulse"/>
    <g fill="url(#${u}b)" stroke="#0a0404" stroke-width="3"><rect x="40" y="148" width="26" height="40" rx="8"/><rect x="134" y="148" width="26" height="40" rx="8"/></g>
    <g class="squish"><path d="M22 120 C20 78 58 56 104 56 C150 56 182 84 180 124 C178 160 146 172 104 172 C60 172 24 160 22 120Z" fill="url(#${u}b)" stroke="#0a0404" stroke-width="3"/>
    <g stroke="url(#${u}l)" stroke-width="4" fill="none" stroke-linecap="round" filter="url(#glowF)"><path d="M40 108 L58 120 L52 140 L70 150"/><path d="M150 80 L136 100 L150 116 L140 140"/><path d="M96 66 L104 86 L96 100"/></g>
    <path d="M38 96 C26 82 22 62 30 42 C40 58 50 70 62 76Z" fill="#c8b8a0" stroke="#3a2a1a" stroke-width="3"/>
    <path d="M30 42 C26 30 28 20 34 12 C38 24 42 32 44 40" fill="url(#${u}l)" class="flicker"/>
    <g class="blink"><ellipse cx="72" cy="100" rx="9" ry="6" fill="url(#${u}l)" filter="url(#glowF)"/><ellipse cx="124" cy="96" rx="9" ry="6" fill="url(#${u}l)" filter="url(#glowF)"/></g>
    <path d="M58 86 L84 96 M138 82 L112 92" stroke="#0a0404" stroke-width="5" stroke-linecap="round"/>
    <path d="M60 140 Q100 152 140 136" stroke="#0a0404" stroke-width="4" fill="none"/>
    <g fill="#ff8a1a" opacity=".85"><circle cx="76" cy="160" r="4"/><circle cx="128" cy="158" r="3"/></g></g>
    <g class="pulse" fill="#ffb03a">${[[160, 40], [176, 60], [150, 22], [20, 150]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3"/>`).join("")}</g>`,

  ogre: u => `
    <defs>
      <radialGradient id="${u}b" cx="45%" cy="35%" r="70%"><stop offset="0" stop-color="#9ab06a"/><stop offset=".55" stop-color="#5a7038"/><stop offset="1" stop-color="#26320e"/></radialGradient>
      <linearGradient id="${u}m" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c8ccd4"/><stop offset="1" stop-color="#4a4e58"/></linearGradient>
    </defs>
    <g class="sway"><rect x="150" y="30" width="12" height="130" rx="4" fill="#6a4a2a" stroke="#2a1808" stroke-width="3"/>
    <path d="M126 20 H186 V56 H126Z" fill="url(#${u}m)" stroke="#1a1c22" stroke-width="3"/><path d="M126 30 H186" stroke="#fff" stroke-width="2" opacity=".5"/></g>
    <g class="squish"><path d="M30 196 C26 140 52 112 100 112 C148 112 172 140 168 196Z" fill="url(#${u}b)" stroke="#16200a" stroke-width="3"/>
    <path d="M44 150 C60 140 80 150 100 146 C120 150 140 140 156 150 V196 H44Z" fill="#6a4a2a" opacity=".9"/><rect x="44" y="160" width="112" height="10" fill="#3a2810"/><rect x="92" y="156" width="16" height="18" rx="2" fill="#c8a040" stroke="#5a4010" stroke-width="2"/>
    <path d="M50 92 C44 50 70 28 100 28 C130 28 156 50 150 92 C146 124 124 134 100 134 C76 134 54 124 50 92Z" fill="url(#${u}b)" stroke="#16200a" stroke-width="3"/>
    <path d="M50 70 C36 66 30 54 34 44 C42 52 48 54 54 54Z M150 70 C164 66 170 54 166 44 C158 52 152 54 146 54Z" fill="url(#${u}b)" stroke="#16200a" stroke-width="2.5"/>
    <path d="M64 70 L92 78 M136 70 L108 78" stroke="#16200a" stroke-width="7" stroke-linecap="round"/>
    <g class="blink"><circle cx="80" cy="86" r="6" fill="#ffd23a"/><circle cx="120" cy="86" r="6" fill="#ffd23a"/><circle cx="80" cy="87" r="2.5" fill="#1a0a00"/><circle cx="120" cy="87" r="2.5" fill="#1a0a00"/></g>
    <ellipse cx="100" cy="100" rx="10" ry="7" fill="#4a5a28"/>
    <path d="M74 114 Q100 124 126 114" stroke="#16200a" stroke-width="4" fill="none"/><path d="M80 116 L84 104 L88 117 M112 117 L116 104 L120 116" fill="#f2f0d8" stroke="#8a8a6a" stroke-width="1.5"/></g>
    <g fill="#ffb03a" class="blinkfast"><circle cx="134" cy="66" r="3"/><circle cx="182" cy="70" r="2.5"/><circle cx="120" cy="40" r="2"/></g>`,

  moth: u => `
    <defs>
      <radialGradient id="${u}w" cx="50%" cy="50%" r="60%"><stop offset="0" stop-color="#f0f4ff"/><stop offset=".6" stop-color="#a8b4e0"/><stop offset="1" stop-color="#5a6498"/></radialGradient>
      <radialGradient id="${u}b" cx="45%" cy="35%" r="70%"><stop offset="0" stop-color="#e8e0d0"/><stop offset="1" stop-color="#8a8070"/></radialGradient>
    </defs>
    <g class="sway"><path d="M96 90 C60 30 10 30 8 70 C6 110 50 120 92 112Z" fill="url(#${u}w)" stroke="#3a4070" stroke-width="3"/>
    <path d="M92 120 C60 124 24 140 30 170 C38 196 76 180 96 134Z" fill="url(#${u}w)" stroke="#3a4070" stroke-width="3"/>
    <circle cx="44" cy="74" r="14" fill="#5a64a8" opacity=".7"/><circle cx="44" cy="74" r="7" fill="#ffe8a0"/><circle cx="54" cy="156" r="9" fill="#5a64a8" opacity=".6"/></g>
    <path d="M104 90 C140 30 190 30 192 70 C194 110 150 120 108 112Z" fill="url(#${u}w)" stroke="#3a4070" stroke-width="3"/>
    <path d="M108 120 C140 124 176 140 170 170 C162 196 124 180 104 134Z" fill="url(#${u}w)" stroke="#3a4070" stroke-width="3"/>
    <circle cx="156" cy="74" r="14" fill="#5a64a8" opacity=".7"/><circle cx="156" cy="74" r="7" fill="#ffe8a0"/><circle cx="146" cy="156" r="9" fill="#5a64a8" opacity=".6"/>
    <g class="squish"><ellipse cx="100" cy="128" rx="16" ry="42" fill="url(#${u}b)" stroke="#4a4030" stroke-width="3"/>
    <path d="M86 116 H114 M86 132 H114 M88 148 H112" stroke="#6a6050" stroke-width="2.5" opacity=".7"/>
    <circle cx="100" cy="80" r="20" fill="url(#${u}b)" stroke="#4a4030" stroke-width="3"/>
    <path d="M92 62 C80 40 64 34 54 38 M108 62 C120 40 136 34 146 38" stroke="#4a4030" stroke-width="3" fill="none"/>
    <g class="blink"><circle cx="91" cy="80" r="7" fill="#1a1a3a"/><circle cx="109" cy="80" r="7" fill="#1a1a3a"/><circle cx="89" cy="78" r="2.5" fill="#bfe0ff"/><circle cx="107" cy="78" r="2.5" fill="#bfe0ff"/></g>
    <path d="M94 92 Q100 96 106 92" stroke="#4a4030" stroke-width="2.5" fill="none"/></g>
    <g class="pulse" fill="#fff" opacity=".8">${[[20, 20], [180, 24], [100, 14], [190, 120], [10, 120]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.2"/>`).join("")}</g>`,

  baron: u => `
    <defs>
      <radialGradient id="${u}m" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#d8dce8"/><stop offset=".55" stop-color="#6a7088"/><stop offset="1" stop-color="#22263a"/></radialGradient>
      <linearGradient id="${u}c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a2a6a"/><stop offset="1" stop-color="#140a2a"/></linearGradient>
      <radialGradient id="${u}g" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#b8a8ff"/><stop offset="1" stop-color="#5a3aff" stop-opacity="0"/></radialGradient>
    </defs>
    <circle cx="100" cy="110" r="96" fill="url(#${u}g)" opacity=".35" class="pulse"/>
    <path d="M28 198 C34 140 60 116 100 116 C140 116 166 140 172 198Z" fill="url(#${u}c)" stroke="#0a0614" stroke-width="3"/>
    <path d="M72 120 L100 170 L128 120" fill="#22263a" stroke="#0a0614" stroke-width="3"/><path d="M90 128 L100 150 L110 128Z" fill="#d8dce8"/>
    <circle cx="100" cy="164" r="12" fill="url(#${u}m)" stroke="#0a0614" stroke-width="2.5"/><circle cx="100" cy="164" r="5" fill="#b8a8ff" class="pulse"/>
    <g class="squish"><path d="M62 96 C58 60 76 44 100 44 C124 44 142 60 138 96 C134 120 120 128 100 128 C80 128 66 120 62 96Z" fill="url(#${u}m)" stroke="#0a0614" stroke-width="3"/>
    <path d="M70 80 L94 86 M130 80 L106 86" stroke="#0a0614" stroke-width="4" stroke-linecap="round"/>
    <g class="blink"><circle cx="84" cy="94" r="5" fill="#b8a8ff"/><circle cx="116" cy="94" r="12" fill="none" stroke="#e8c050" stroke-width="3"/><circle cx="116" cy="94" r="5" fill="#b8a8ff"/></g>
    <path d="M128 100 C134 120 132 136 126 150" stroke="#e8c050" stroke-width="1.5" fill="none"/>
    <path d="M80 112 C88 108 96 112 100 110 C104 112 112 108 120 112 C116 120 108 118 100 116 C92 118 84 120 80 112Z" fill="#22263a"/>
    <path d="M84 120 Q100 126 116 120" stroke="#0a0614" stroke-width="3" fill="none"/>
    <path d="M64 50 H136 L130 4 H70Z" fill="#22263a" stroke="#0a0614" stroke-width="3"/><rect x="58" y="44" width="84" height="10" rx="3" fill="#1a1a2a" stroke="#0a0614" stroke-width="2.5"/><rect x="70" y="36" width="60" height="7" fill="#7a5aff"/></g>
    <g class="sway">${[[22, 70, 13], [178, 60, 10], [30, 150, 9], [172, 150, 12]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="url(#${u}m)" stroke="#0a0614" stroke-width="2.5"/><path d="M${x - r * .5} ${y - r * .2} l${r * .4} ${r * .3}" stroke="#22263a" stroke-width="2"/>`).join("")}</g>`,
  // ----- Sit-up campaign: The Long Nap -----
  pillow: u => `
    <defs><radialGradient id="${u}p" cx="40%" cy="35%" r="75%"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#e2dcff"/><stop offset="1" stop-color="#9a8ad8"/></radialGradient></defs>
    <g class="sway" fill="#fff" opacity=".85">${[[30, 40, 0], [170, 56, 30], [24, 150, -20], [178, 150, 50]].map(([x, y, r]) => `<path transform="translate(${x} ${y}) rotate(${r})" d="M0 -12 C8 -6 8 6 0 12 C-3 4 -3 -4 0 -12Z" stroke="#c8c0f0" stroke-width="1.5"/>`).join("")}</g>
    <path d="M40 132 C24 128 18 146 30 152 L44 146Z M160 132 C176 128 182 146 170 152 L156 146Z" fill="url(#${u}p)" stroke="#5a4a9a" stroke-width="3"/>
    <g class="squish"><path d="M38 56 Q100 40 162 56 Q176 110 162 164 Q100 180 38 164 Q24 110 38 56Z" fill="url(#${u}p)" stroke="#5a4a9a" stroke-width="3.5"/>
    <path d="M38 56 L52 70 M162 56 L148 70 M38 164 L52 150 M162 164 L148 150" stroke="#8a7ac8" stroke-width="3" stroke-dasharray="4 4"/>
    <path d="M66 92 L90 100 M134 92 L110 100" stroke="#2a1e5a" stroke-width="5" stroke-linecap="round"/>
    <g class="blink"><ellipse cx="80" cy="110" rx="8" ry="9" fill="#2a1e5a"/><ellipse cx="120" cy="110" rx="8" ry="9" fill="#2a1e5a"/><circle cx="78" cy="107" r="2.5" fill="#fff"/><circle cx="118" cy="107" r="2.5" fill="#fff"/></g>
    <path d="M84 140 Q100 130 116 140" stroke="#2a1e5a" stroke-width="4" fill="none" stroke-linecap="round"/>
    <ellipse cx="64" cy="128" rx="9" ry="5" fill="#ff9ad0" opacity=".5"/><ellipse cx="136" cy="128" rx="9" ry="5" fill="#ff9ad0" opacity=".5"/></g>`,

  snooze: u => `
    <defs><radialGradient id="${u}b" cx="40%" cy="35%" r="75%"><stop offset="0" stop-color="#d8a070"/><stop offset=".6" stop-color="#9a6234"/><stop offset="1" stop-color="#4a2a12"/></radialGradient></defs>
    <path d="M30 200 C34 140 60 118 100 118 C140 118 166 140 170 200Z" fill="url(#${u}b)" stroke="#2a1608" stroke-width="3"/>
    <ellipse cx="100" cy="168" rx="36" ry="30" fill="#e8c8a0" opacity=".8"/>
    <g class="squish"><circle cx="58" cy="62" r="18" fill="url(#${u}b)" stroke="#2a1608" stroke-width="3"/><circle cx="142" cy="62" r="18" fill="url(#${u}b)" stroke="#2a1608" stroke-width="3"/>
    <circle cx="58" cy="62" r="8" fill="#e8b890"/><circle cx="142" cy="62" r="8" fill="#e8b890"/>
    <ellipse cx="100" cy="94" rx="50" ry="44" fill="url(#${u}b)" stroke="#2a1608" stroke-width="3"/>
    <ellipse cx="100" cy="112" rx="22" ry="16" fill="#e8c8a0"/><ellipse cx="100" cy="104" rx="9" ry="6" fill="#2a1608"/>
    <path d="M70 90 Q80 96 90 90 M110 90 Q120 96 130 90" stroke="#2a1608" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M92 120 Q100 126 108 120" stroke="#2a1608" stroke-width="3" fill="none"/>
    <path d="M56 58 Q90 4 150 30 Q160 34 156 46 Q120 40 64 66Z" fill="#5a7ad8" stroke="#1a2a5a" stroke-width="3"/><path d="M60 62 Q100 44 152 46" stroke="#fff" stroke-width="6" fill="none"/>
    <circle cx="160" cy="30" r="10" fill="#fff" stroke="#1a2a5a" stroke-width="2.5"/></g>
    <g class="pulse" fill="#cfe0ff" font-family="sans-serif" font-weight="900"><text x="150" y="96" font-size="18">z</text><text x="164" y="80" font-size="24">Z</text><text x="178" y="58" font-size="30">Z</text></g>`,

  yawnfish: u => `
    <defs><radialGradient id="${u}f" cx="40%" cy="35%" r="75%"><stop offset="0" stop-color="#bfe8ff"/><stop offset=".55" stop-color="#4a9ad8"/><stop offset="1" stop-color="#14406a"/></radialGradient></defs>
    <g class="sway"><path d="M150 100 L196 64 L190 100 L196 136Z" fill="#3a7ab8" stroke="#0a2440" stroke-width="3"/></g>
    <g class="squish"><ellipse cx="96" cy="100" rx="70" ry="62" fill="url(#${u}f)" stroke="#0a2440" stroke-width="3.5"/>
    <path d="M90 40 Q110 10 130 44Z M90 160 Q110 190 128 156Z" fill="#3a7ab8" stroke="#0a2440" stroke-width="3"/>
    <path d="M118 80 Q130 100 118 120" stroke="#2a6aa8" stroke-width="3" fill="none"/>
    <ellipse cx="62" cy="112" rx="30" ry="36" fill="#3a0a2a" stroke="#0a2440" stroke-width="3"/><ellipse cx="62" cy="126" rx="16" ry="12" fill="#ff7a9a"/>
    <path d="M40 90 L46 100 L52 88 L58 100 L64 86 L70 100 L76 88 L82 100" stroke="#fff" stroke-width="3" fill="none"/>
    <path d="M76 62 Q86 68 96 62" stroke="#0a2440" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="86" cy="58" r="12" fill="none" stroke="#0a2440" stroke-width="2" opacity=".4"/></g>
    <g class="pulse" fill="none" stroke="#dff4ff" stroke-width="2.5">${[[24, 60, 7], [14, 36, 5], [30, 20, 9], [160, 30, 6]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join("")}</g>`,

  heron: u => `
    <defs><linearGradient id="${u}h" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f6fa"/><stop offset="1" stop-color="#8a96aa"/></linearGradient></defs>
    <ellipse cx="100" cy="186" rx="80" ry="12" fill="#cfd8e8" opacity=".35" class="pulse"/>
    <path d="M96 140 L92 190 M108 140 L120 168 L104 172" stroke="#e0a030" stroke-width="5" fill="none" stroke-linecap="round"/>
    <g class="sway"><path d="M50 120 C40 80 80 70 130 90 C160 100 170 130 150 146 C120 160 70 156 50 120Z" fill="url(#${u}h)" stroke="#3a4458" stroke-width="3"/>
    <path d="M70 110 C90 100 120 104 146 120" stroke="#9aa6ba" stroke-width="4" fill="none"/><path d="M60 128 L30 150 L56 140 L40 164 L72 140" fill="#5a6478" stroke="#3a4458" stroke-width="2.5"/></g>
    <g class="squish"><path d="M118 92 C116 60 104 50 100 30" stroke="#3a4458" stroke-width="18" fill="none" stroke-linecap="round"/><path d="M118 92 C116 60 104 50 100 30" stroke="url(#${u}h)" stroke-width="12" fill="none" stroke-linecap="round"/>
    <ellipse cx="100" cy="28" rx="16" ry="13" fill="url(#${u}h)" stroke="#3a4458" stroke-width="3"/>
    <path d="M88 26 L28 36 L88 34Z" fill="#e0a030" stroke="#7a4a10" stroke-width="2"/><path d="M104 18 C120 6 136 10 140 4" stroke="#3a4458" stroke-width="4" fill="none" stroke-linecap="round"/>
    <g class="blink"><circle cx="102" cy="25" r="4.5" fill="#ffd040"/><circle cx="102" cy="25" r="2" fill="#1a1a2a"/></g></g>
    <g class="sway" opacity=".55" fill="#e8eef8">${[[20, 90, 30], [176, 80, 26], [100, 176, 40]].map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * .35}"/>`).join("")}</g>`,

  ram: u => `
    <defs><radialGradient id="${u}r" cx="40%" cy="35%" r="75%"><stop offset="0" stop-color="#f0ecff"/><stop offset=".6" stop-color="#b8b0d8"/><stop offset="1" stop-color="#6a628a"/></radialGradient>
      <linearGradient id="${u}k" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d8b070"/><stop offset="1" stop-color="#6a4a1a"/></linearGradient></defs>
    <g class="blinkfast" stroke="#ffe23a" stroke-width="4" fill="none" stroke-linejoin="round"><path d="M18 30 L34 56 L22 60 L40 90"/><path d="M182 30 L166 56 L178 60 L160 90"/></g>
    <g class="squish">${[[60, 150, 22], [100, 160, 26], [140, 150, 22], [78, 128, 20], [122, 128, 20]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="url(#${u}r)" stroke="#3a3458" stroke-width="3"/>`).join("")}
    <path d="M70 70 C64 110 80 132 100 134 C120 132 136 110 130 70 C124 50 76 50 70 70Z" fill="#4a4060" stroke="#1a1428" stroke-width="3"/>
    <path d="M72 68 C40 40 14 70 30 96 C40 110 60 104 60 90 C60 80 50 78 46 86" stroke="#1a1428" stroke-width="18" fill="none" stroke-linecap="round"/><path d="M72 68 C40 40 14 70 30 96 C40 110 60 104 60 90 C60 80 50 78 46 86" stroke="url(#${u}k)" stroke-width="12" fill="none" stroke-linecap="round"/>
    <path d="M128 68 C160 40 186 70 170 96 C160 110 140 104 140 90 C140 80 150 78 154 86" stroke="#1a1428" stroke-width="18" fill="none" stroke-linecap="round"/><path d="M128 68 C160 40 186 70 170 96 C160 110 140 104 140 90 C140 80 150 78 154 86" stroke="url(#${u}k)" stroke-width="12" fill="none" stroke-linecap="round"/>
    ${[[84, 54, 12], [100, 48, 13], [116, 54, 12]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="url(#${u}r)" stroke="#3a3458" stroke-width="2.5"/>`).join("")}
    <path d="M78 84 L94 90 M122 84 L106 90" stroke="#ffe23a" stroke-width="4" stroke-linecap="round"/>
    <g class="blink"><ellipse cx="86" cy="96" rx="5" ry="6" fill="#ffe23a"/><ellipse cx="114" cy="96" rx="5" ry="6" fill="#ffe23a"/></g>
    <ellipse cx="100" cy="120" rx="14" ry="9" fill="#6a5a80"/><circle cx="94" cy="120" r="2.5" fill="#1a1428"/><circle cx="106" cy="120" r="2.5" fill="#1a1428"/></g>`,

  cloud: u => `
    <defs><radialGradient id="${u}c" cx="40%" cy="30%" r="80%"><stop offset="0" stop-color="#8a8ab0"/><stop offset=".6" stop-color="#46486a"/><stop offset="1" stop-color="#1e2038"/></radialGradient></defs>
    <g class="pulse" stroke="#8ac8ff" stroke-width="3" stroke-linecap="round">${[50, 74, 126, 150].map((x, i) => `<path d="M${x} ${150 + (i % 2) * 8} l-6 16"/><path d="M${x + 10} ${172 + (i % 2) * 6} l-5 14"/>`).join("")}</g>
    <path class="blinkfast" d="M100 130 L86 164 L100 162 L90 196 L120 152 L104 154 L114 130Z" fill="#ffe23a" stroke="#a88a00" stroke-width="2"/>
    <g class="squish">${[[50, 110, 34], [84, 80, 40], [124, 76, 42], [156, 108, 32], [100, 116, 40], [64, 124, 26], [140, 126, 26]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="url(#${u}c)" stroke="#0e1024" stroke-width="3"/>`).join("")}
    ${[[50, 110, 31], [84, 80, 37], [124, 76, 39], [156, 108, 29], [100, 116, 37]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="url(#${u}c)"/>`).join("")}
    <path d="M70 90 L92 100 M130 90 L108 100" stroke="#0e1024" stroke-width="5" stroke-linecap="round"/>
    <g class="blink"><ellipse cx="84" cy="106" rx="7" ry="8" fill="#e8f0ff"/><ellipse cx="116" cy="106" rx="7" ry="8" fill="#e8f0ff"/><circle cx="85" cy="108" r="3.5" fill="#0e1024"/><circle cx="115" cy="108" r="3.5" fill="#0e1024"/></g>
    <path d="M82 132 Q100 120 118 132" stroke="#0e1024" stroke-width="4.5" fill="none" stroke-linecap="round"/></g>`,

  sandman: u => `
    <defs><linearGradient id="${u}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4dca0"/><stop offset=".6" stop-color="#c89a50"/><stop offset="1" stop-color="#7a5420"/></linearGradient></defs>
    <g class="pulse" fill="#f4dca0" opacity=".8">${Array.from({ length: 14 }, (_, i) => `<circle cx="${30 + (i * 37) % 140}" cy="${150 + (i * 23) % 46}" r="${1.5 + (i % 3)}"/>`).join("")}</g>
    <path d="M40 200 C44 150 64 128 100 126 C136 128 156 150 160 200Z" fill="url(#${u}s)" stroke="#4a3010" stroke-width="3"/>
    <path d="M60 150 H140 M54 172 H146" stroke="#8a6428" stroke-width="3"/>
    <g class="sway"><path d="M150 120 L186 120 L178 140 L186 160 L150 160 L158 140Z" fill="#6a4a8a" stroke="#2a1440" stroke-width="3"/><path d="M160 126 H176 L168 140 L176 154 H160 L168 140Z" fill="#f4dca0"/></g>
    <g class="squish"><path d="M58 110 C54 60 74 32 100 30 C126 32 146 60 142 110 C140 126 60 126 58 110Z" fill="url(#${u}s)" stroke="#4a3010" stroke-width="3.5"/>
    <path d="M100 30 C96 12 108 0 122 2 C112 10 112 20 116 30" fill="#8a5ab8" stroke="#2a1440" stroke-width="2.5"/>
    <rect x="66" y="74" width="68" height="20" rx="6" fill="#2a1a08"/><path d="M100 60 V118" stroke="#8a6428" stroke-width="4"/>
    <g class="blink"><ellipse cx="82" cy="84" rx="9" ry="4" fill="#b8a0ff" filter="url(#glowF)"/><ellipse cx="118" cy="84" rx="9" ry="4" fill="#b8a0ff" filter="url(#glowF)"/></g>
    ${[70, 84, 116, 130].map(x => `<circle cx="${x}" cy="104" r="2.5" fill="#4a3010"/>`).join("")}</g>`,

  slumber: u => `
    <defs><linearGradient id="${u}c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a2a7a"/><stop offset="1" stop-color="#140828"/></linearGradient>
      <radialGradient id="${u}g" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#d0a8ff"/><stop offset="1" stop-color="#7a3aff" stop-opacity="0"/></radialGradient></defs>
    <circle cx="100" cy="100" r="96" fill="url(#${u}g)" opacity=".35" class="pulse"/>
    <path d="M24 200 C28 146 56 120 100 120 C144 120 172 146 176 200Z" fill="url(#${u}c)" stroke="#08040f" stroke-width="3"/>
    <path d="M44 150 L58 96 L100 128 L142 96 L156 150 L100 136Z" fill="#2a1450" stroke="#08040f" stroke-width="3"/>
    <g class="sway"><rect x="146" y="140" width="12" height="30" rx="3" fill="#f4ecd0" stroke="#5a4a30" stroke-width="2"/><path d="M152 140 C146 130 150 120 152 114 C156 122 160 130 152 140Z" fill="#ffc040" class="flame"/></g>
    <g class="squish"><path d="M66 100 C62 66 78 50 100 50 C122 50 138 66 134 100 C130 122 118 130 100 130 C82 130 70 122 66 100Z" fill="#d8d0e8" stroke="#08040f" stroke-width="3"/>
    <path d="M74 92 Q84 98 94 92 M106 92 Q116 98 126 92" stroke="#08040f" stroke-width="4" fill="none" stroke-linecap="round"/>
    <g class="blink"><path d="M76 94 Q84 100 92 94Z M108 94 Q116 100 124 94Z" fill="#b88aff"/></g>
    <ellipse cx="78" cy="108" rx="7" ry="4" fill="#a88ac8" opacity=".5"/><ellipse cx="122" cy="108" rx="7" ry="4" fill="#a88ac8" opacity=".5"/>
    <path d="M86 116 Q100 124 114 116" stroke="#08040f" stroke-width="3" fill="none"/><path d="M92 118 l3 6 l3 -5 M104 118 l3 5 l3 -6" stroke="#fff" stroke-width="2" fill="none"/>
    <path d="M62 66 Q100 34 140 62 Q150 30 176 22 Q170 40 162 48 Q140 78 62 66Z" fill="#3a1a6a" stroke="#08040f" stroke-width="3"/><path d="M62 66 Q100 54 140 62" stroke="#f4ecd0" stroke-width="6" fill="none"/>
    <path d="M180 14 A12 12 0 1 0 186 32 A9 9 0 1 1 180 14Z" fill="#ffe08a" stroke="#8a6a10" stroke-width="2"/></g>
    <g class="pulse" fill="#e0d0ff" font-family="sans-serif" font-weight="900"><text x="20" y="70" font-size="18">z</text><text x="30" y="50" font-size="24">Z</text></g>`,

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
  mole:     { aura: "#ff8aa8", fog: "rgba(70,45,25,.4)" },
  bull:     { aura: "#ff5a2a", fog: "rgba(90,40,10,.38)" },
  toad:     { aura: "#b8e04a", fog: "rgba(30,70,20,.42)" },
  witch:    { aura: "#a8ff5a", fog: "rgba(20,60,20,.5)" },
  yeti:     { aura: "#bfe6ff", fog: "rgba(80,120,170,.4)" },
  giant:    { aura: "#7ff0ff", fog: "rgba(40,90,140,.45)" },
  sludge:   { aura: "#c87aff", fog: "rgba(50,35,25,.5)" },
  quag:     { aura: "#ff7ae0", fog: "rgba(50,20,70,.55)" },
  scorp:    { aura: "#ffb03a", fog: "rgba(120,60,10,.38)" },
  cactus:   { aura: "#7ae04a", fog: "rgba(90,60,20,.36)" },
  crab:     { aura: "#ff6a4a", fog: "rgba(10,60,90,.45)" },
  angler:   { aura: "#7affe0", fog: "rgba(5,15,50,.6)" },
  cinder:   { aura: "#ff7a1a", fog: "rgba(110,25,5,.45)" },
  ogre:     { aura: "#c8e05a", fog: "rgba(90,40,10,.42)" },
  moth:     { aura: "#cfd8ff", fog: "rgba(30,35,80,.5)" },
  baron:    { aura: "#a88aff", fog: "rgba(25,15,60,.6)" },
  pillow:   { aura: "#e2dcff", fog: "rgba(90,80,60,.35)" },
  snooze:   { aura: "#ffb86b", fog: "rgba(80,50,30,.38)" },
  yawnfish: { aura: "#7ac8ff", fog: "rgba(20,60,100,.42)" },
  heron:    { aura: "#e8eef8", fog: "rgba(120,130,150,.45)" },
  ram:      { aura: "#ffe23a", fog: "rgba(40,30,70,.45)" },
  cloud:    { aura: "#8ac8ff", fog: "rgba(20,22,45,.55)" },
  sandman:  { aura: "#f4dca0", fog: "rgba(90,60,20,.42)" },
  slumber:  { aura: "#c08aff", fog: "rgba(30,10,60,.6)" },
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
