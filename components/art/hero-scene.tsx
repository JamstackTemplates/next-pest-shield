/**
 * Hero scene: "House under the crest".
 * A large translucent green shield arching over a two-storey Charlotte clapboard house with a porch,
 * parent and child on the steps, dog and cat in the yard, dashed perimeter line with bait stations,
 * and bold engraved household pests (ant trail, cockroach, spider on silk, mosquitoes, yellowjacket,
 * house mouse, termite) stopped and turning back outside the protective barrier.
 */
export function HeroScene({ className = 'w-full h-auto' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 700 470"
      fill="none"
      role="img"
      aria-label="Engraved illustration of a Charlotte home sheltered beneath Greenshield's green crest shield, with a family and pets inside the dashed perimeter line while ants, a cockroach, spider, mosquitoes, yellowjacket, mouse and termites are kept outside."
      className={className}
    >
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--sky-top)" />
          <stop offset="100%" stopColor="var(--sky-bottom)" />
        </linearGradient>
        <radialGradient id="porch-light-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--honey)" stopOpacity="0.95" />
          <stop offset="45%" stopColor="var(--honey)" stopOpacity="0.38" />
          <stop offset="100%" stopColor="var(--honey)" stopOpacity="0" />
        </radialGradient>
        <pattern id="roof-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
          <line x1="0" y1="0" x2="0" y2="8" stroke="var(--sepia)" strokeOpacity="0.24" strokeWidth="1.2" />
        </pattern>
        <pattern id="shield-hatch" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(-25)">
          <line x1="0" y1="0" x2="0" y2="12" stroke="var(--shield-stroke)" strokeOpacity="0.11" strokeWidth="1" />
        </pattern>
        <pattern id="hedge-shade" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(42)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="var(--accent-ink)" strokeOpacity="0.26" strokeWidth="1" />
        </pattern>
      </defs>

      {/* Soft sky wash & subtle field-guide border */}
      <rect x="8" y="10" width="684" height="448" rx="6" fill="url(#hero-sky)" />
      <rect x="14" y="16" width="672" height="436" rx="4" stroke="var(--line)" strokeOpacity="0.55" strokeWidth="1" />

      {/* Delicate spiderweb in top-left corner outside the shield */}
      <g stroke="var(--sepia)" strokeOpacity="0.38" strokeWidth="1">
        <line x1="14" y1="16" x2="112" y2="16" />
        <line x1="14" y1="16" x2="102" y2="56" />
        <line x1="14" y1="16" x2="78" y2="92" />
        <line x1="14" y1="16" x2="46" y2="114" />
        <line x1="14" y1="16" x2="14" y2="122" />
        <path d="M14 44c12-2 22-8 30-16 6-5 10-10 12-12" />
        <path d="M14 72c20-4 36-14 48-28 10-10 16-19 20-28" />
        <path d="M14 102c28-6 50-20 66-40 12-15 20-29 24-46" />
      </g>

      {/* Warm porch-light glow (subdued in daylight, rich at dusk/dark mode) */}
      <circle cx="350" cy="252" r="142" fill="url(#porch-light-glow)" className="porch-glow" />

      {/* Large translucent heraldic shield arching over the home */}
      <path
        d="M164 28h372v190c0 116-80 178-186 208-106-30-186-92-186-208V28z"
        fill="var(--shield-wash)"
        stroke="var(--shield-stroke)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M164 28h372v190c0 116-80 178-186 208-106-30-186-92-186-208V28z"
        fill="url(#shield-hatch)"
      />
      <path
        d="M178 42h344v174c0 104-72 160-172 188-100-28-172-84-172-188V42z"
        stroke="var(--shield-stroke)"
        strokeOpacity="0.45"
        strokeWidth="1.2"
        strokeDasharray="5 4"
      />

      {/* Ground / lawn wash inside the lot */}
      <ellipse cx="350" cy="348" rx="194" ry="44" fill="var(--sage)" fillOpacity="0.72" />

      {/* Two-storey Charlotte clapboard house */}
      <g>
        {/* Chimney */}
        <rect x="406" y="106" width="24" height="54" fill="var(--band)" stroke="var(--sepia)" strokeWidth="1.6" />
        <line x1="406" y1="115" x2="430" y2="115" stroke="var(--sepia)" strokeWidth="1.3" />

        {/* Main gable roof */}
        <path
          d="M214 184L350 92l136 92H214z"
          fill="var(--band)"
          stroke="var(--sepia)"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M214 184L350 92l136 92H214z" fill="url(#roof-hatch)" />
        {/* Attic louver */}
        <circle cx="350" cy="144" r="13" fill="var(--surface)" stroke="var(--sepia)" strokeWidth="1.5" />
        <line x1="340" y1="141" x2="360" y2="141" stroke="var(--sepia)" strokeWidth="1.1" />
        <line x1="339" y1="146" x2="361" y2="146" stroke="var(--sepia)" strokeWidth="1.1" />

        {/* House body with clapboard siding */}
        <rect x="234" y="184" width="232" height="142" fill="var(--surface)" stroke="var(--sepia)" strokeWidth="1.8" />
        {[199, 214, 229, 244, 259, 274, 289, 304].map(y => (
          <line key={y} x1="234" y1={y} x2="466" y2={y} stroke="var(--sepia)" strokeOpacity="0.18" strokeWidth="1" />
        ))}

        {/* Second-storey windows */}
        {[258, 333, 408].map(x => (
          <g key={x}>
            <rect x={x} y="198" width="34" height="42" fill="var(--honey-soft)" stroke="var(--sepia)" strokeWidth="1.5" />
            <line x1={x + 17} y1="198" x2={x + 17} y2="240" stroke="var(--sepia)" strokeWidth="1.2" />
            <line x1={x} y1="219" x2={x + 34} y2="219" stroke="var(--sepia)" strokeWidth="1.2" />
            <line x1={x - 3} y1="240" x2={x + 37} y2="240" stroke="var(--sepia)" strokeWidth="1.8" />
          </g>
        ))}

        {/* Front porch roof */}
        <path
          d="M218 258l20-14h224l20 14H218z"
          fill="var(--accent)"
          fillOpacity="0.22"
          stroke="var(--sepia)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />

        {/* Porch columns */}
        {[238, 306, 394, 462].map(x => (
          <rect key={x} x={x - 2.5} y="258" width="5" height="68" fill="var(--surface)" stroke="var(--sepia)" strokeWidth="1.3" />
        ))}

        {/* Porch railing */}
        <line x1="238" y1="300" x2="306" y2="300" stroke="var(--sepia)" strokeWidth="1.6" />
        <line x1="394" y1="300" x2="462" y2="300" stroke="var(--sepia)" strokeWidth="1.6" />
        {[252, 266, 280, 294, 408, 422, 436, 450].map(x => (
          <line key={x} x1={x} y1="300" x2={x} y2="326" stroke="var(--sepia)" strokeWidth="1.1" />
        ))}

        {/* Front door & glowing porch lantern */}
        <rect x="333" y="270" width="34" height="56" fill="var(--accent)" stroke="var(--sepia)" strokeWidth="1.5" />
        <rect x="339" y="276" width="22" height="20" fill="var(--honey-soft)" stroke="var(--sepia)" strokeWidth="1.1" />
        <circle cx="361" cy="302" r="2.2" fill="var(--honey)" />
        <rect x="372" y="278" width="8" height="12" rx="1.5" fill="var(--honey)" stroke="var(--sepia)" strokeWidth="1.2" />
        <circle cx="376" cy="284" r="15" fill="var(--honey)" fillOpacity="0.28" className="porch-glow" />

        {/* First-storey side windows */}
        {[256, 410].map(x => (
          <g key={x}>
            <rect x={x} y="270" width="34" height="34" fill="var(--honey-soft)" stroke="var(--sepia)" strokeWidth="1.4" />
            <line x1={x + 17} y1="270" x2={x + 17} y2="304" stroke="var(--sepia)" strokeWidth="1.1" />
            <line x1={x} y1="287" x2={x + 34} y2="287" stroke="var(--sepia)" strokeWidth="1.1" />
          </g>
        ))}

        {/* Porch steps */}
        <rect x="310" y="326" width="80" height="9" fill="var(--band)" stroke="var(--sepia)" strokeWidth="1.4" />
        <rect x="302" y="335" width="96" height="9" fill="var(--band)" stroke="var(--sepia)" strokeWidth="1.4" />

        {/* Hedges */}
        <path
          d="M204 336c0-16 12-26 26-22 8-10 26-10 34 2 10-5 22 4 24 20h-84z"
          fill="var(--sage)"
          stroke="var(--accent-ink)"
          strokeWidth="1.5"
        />
        <path d="M204 336c0-16 12-26 26-22 8-10 26-10 34 2 10-5 22 4 24 20h-84z" fill="url(#hedge-shade)" />
        <path
          d="M412 336c2-16 14-25 24-20 8-12 26-12 34-2 14-4 26 6 26 22h-84z"
          fill="var(--sage)"
          stroke="var(--accent-ink)"
          strokeWidth="1.5"
        />
        <path d="M412 336c2-16 14-25 24-20 8-12 26-12 34-2 14-4 26 6 26 22h-84z" fill="url(#hedge-shade)" />
      </g>

      {/* Parent and child on the porch steps */}
      <g stroke="var(--sepia)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="334" cy="308" r="7" fill="var(--surface)" />
        <path d="M325 332c0-10 4-16 9-16s9 6 9 16z" fill="var(--accent)" fillOpacity="0.88" />
        <path d="M328 332l-2 11M340 332l2 11" />
        <circle cx="358" cy="315" r="5" fill="var(--surface)" />
        <path d="M352 334c0-7 2.8-12 6-12s6 5 6 12z" fill="var(--honey)" />
        <path d="M354 334l-1 9M362 334l1 9" />
      </g>

      {/* Dog & cat safely inside the yard */}
      <g stroke="var(--sepia)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <g transform="translate(232 346)">
          <ellipse cx="16" cy="13" rx="12" ry="7.5" fill="var(--surface)" />
          <circle cx="29" cy="8" r="5.5" fill="var(--surface)" />
          <path d="M26 4c-2-3-5-2-4 2" />
          <path d="M4 11c-4-4-6-1-7 2" />
          <path d="M10 20v8M15 20v8M22 20v8M26 19v9" />
          <circle cx="31" cy="7" r="1" fill="var(--sepia)" stroke="none" />
        </g>
        <g transform="translate(426 352)">
          <ellipse cx="13" cy="12" rx="9.5" ry="6.5" fill="var(--surface)" />
          <circle cx="7" cy="6.5" r="4.5" fill="var(--surface)" />
          <path d="M3.5 3.5l1-3.5 2.5 2.5M8 2.5l3-2.5 1 3.5" />
          <path d="M22.5 13c5.5 0 7-4.5 3.5-7.5" />
        </g>
      </g>

      {/* Dashed green perimeter line circling the lot */}
      <ellipse
        cx="350"
        cy="346"
        rx="212"
        ry="56"
        stroke="var(--accent-ink)"
        strokeWidth="2.2"
        strokeDasharray="7 5"
      />
      {/* Shield knots / perimeter bait markers */}
      {[178, 350, 522].map(x => (
        <g key={x} transform={`translate(${x - 8}, ${x === 350 ? 394 : 374})`}>
          <path
            d="M1 1h14v7c0 4.6-3.2 7-7 8.4C4.2 15 1 12.6 1 8V1z"
            fill="var(--surface)"
            stroke="var(--accent-ink)"
            strokeWidth="1.5"
          />
          <circle cx="8" cy="8" r="2" fill="var(--honey)" />
        </g>
      ))}

      {/* ===================================================================== */}
      {/* BOLD ENGRAVED PESTS OUTSIDE THE SHIELD — UNMISTAKABLY PEST CONTROL    */}
      {/* ===================================================================== */}

      {/* 1. LEFT TOP: Spider descending on silk thread outside the shield */}
      <g stroke="var(--sepia)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="94" y1="48" x2="94" y2="112" strokeDasharray="3 3" strokeWidth="1.2" />
        <g transform="translate(94 128)">
          <circle cx="0" cy="-10" r="6" fill="var(--surface)" />
          <circle cx="0" cy="4" r="10.5" fill="var(--surface)" />
          <path d="M-3 0h6l-3 4.5L3 9h-6l3-4.5-3-4.5z" fill="var(--honey)" strokeWidth="1" />
          <path d="M-6 -12l-12-10-8 5M6 -12l12-10 8 5" />
          <path d="M-7 -8l-16-4-8 10M7 -8l16-4 8 10" />
          <path d="M-6 -4l-16 8-7 13M6 -4l16 8 7 13" />
          <path d="M-5 0l-12 18-3 12M5 0l12 18 3 12" />
        </g>
        <text x="28" y="176" fill="var(--sepia)" stroke="none" fontFamily="var(--font-mono)" fontSize="9.5" fontWeight="700" letterSpacing="1">
          SPIDERS
        </text>
      </g>

      {/* 2. LEFT MIDDLE: German cockroach turning away from the shield wall */}
      <g transform="translate(80 250) rotate(-32)" stroke="var(--sepia)" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-4 -18c-14-12-26-10-34 2M4 -18c14-12 26-10 34 2" strokeWidth="1.2" />
        <ellipse cx="0" cy="-8" rx="10" ry="8" fill="var(--surface)" />
        <path d="M-4 -14v12M4 -14v12" strokeWidth="2.1" />
        <ellipse cx="0" cy="14" rx="13" ry="21" fill="var(--band)" />
        <line x1="0" y1="-2" x2="0" y2="33" strokeOpacity="0.55" />
        <path d="M-9 -6l-13-5-6 6M9 -6l13-5 6 6" />
        <path d="M-12 6l-15 4-6 9M12 6l15 4 6 9" />
        <path d="M-10 20l-14 10-4 11M10 20l14 10 4 11" />
      </g>
      <path d="M148 256c-12 0-22-4-28-10" stroke="var(--sepia)" strokeOpacity="0.55" strokeWidth="1.2" strokeDasharray="3 3" />
      <text x="28" y="302" fill="var(--sepia)" fontFamily="var(--font-mono)" fontSize="9.5" fontWeight="700" letterSpacing="1">
        ROACHES
      </text>

      {/* 3. LEFT BOTTOM: Marching trail of 3 engraved ants turning back at perimeter */}
      <g stroke="var(--sepia)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M26 406c38-4 76-14 104-38-18 6-42 0-58-16" strokeDasharray="4 4" strokeOpacity="0.65" />
        {[
          { x: 112, y: 374, rot: -150, scale: 1 },
          { x: 74, y: 392, rot: -165, scale: 0.92 },
          { x: 40, y: 404, rot: -172, scale: 0.86 },
        ].map((a, idx) => (
          <g key={idx} transform={`translate(${a.x} ${a.y}) rotate(${a.rot}) scale(${a.scale})`}>
            <circle cx="-11" cy="0" r="3.4" fill="var(--sepia)" />
            <ellipse cx="-2" cy="0" rx="4.2" ry="2.8" fill="var(--sepia)" />
            <ellipse cx="9" cy="0" rx="5.5" ry="4" fill="var(--sepia)" />
            <path d="M-14 -2l-5-4M-14 2l-5 4M-4 -2l-3-6M0 -2l2-6M-4 2l-3 6M0 2l2 6M4 -3l3-6M4 3l3 6" />
          </g>
        ))}
        <text x="28" y="434" fill="var(--sepia)" stroke="none" fontFamily="var(--font-mono)" fontSize="9.5" fontWeight="700" letterSpacing="1">
          ANTS · TURNED BACK
        </text>
      </g>

      {/* 4. RIGHT TOP: Asian tiger mosquito & Eastern yellowjacket banking away from shield */}
      <g stroke="var(--sepia)" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
        {/* Mosquito */}
        <path d="M548 118c18-20 38-28 58-22" strokeDasharray="4 3" strokeOpacity="0.6" />
        <g transform="translate(612 96) rotate(22)">
          <line x1="0" y1="-26" x2="0" y2="-12" strokeWidth="1.5" />
          <circle cx="0" cy="-9" r="3.6" fill="var(--sepia)" />
          <ellipse cx="0" cy="2" rx="4.5" ry="7.5" fill="var(--band)" />
          <ellipse cx="0" cy="22" rx="3.8" ry="15" fill="var(--sepia)" />
          <line x1="-3.5" y1="14" x2="3.5" y2="14" stroke="var(--surface)" strokeWidth="1.5" />
          <line x1="-3.5" y1="20" x2="3.5" y2="20" stroke="var(--surface)" strokeWidth="1.5" />
          <line x1="-3.5" y1="26" x2="3.5" y2="26" stroke="var(--surface)" strokeWidth="1.5" />
          <ellipse cx="-18" cy="6" rx="18" ry="4.5" transform="rotate(-22 -18 6)" fill="var(--surface)" fillOpacity="0.82" />
          <ellipse cx="18" cy="6" rx="18" ry="4.5" transform="rotate(22 18 6)" fill="var(--surface)" fillOpacity="0.82" />
          <path d="M-4 -2l-16-10-10 6M4 -2l16-10 10 6M-4 4l-20 8-8 14M4 4l20 8 8 14M-3 10l-14 22-4 12M3 10l14 22 4 12" strokeWidth="1.3" />
        </g>
        <text x="588" y="152" fill="var(--sepia)" stroke="none" fontFamily="var(--font-mono)" fontSize="9.5" fontWeight="700" letterSpacing="1">
          MOSQUITOES
        </text>
      </g>

      {/* 5. RIGHT MIDDLE: Yellowjacket wasp */}
      <g stroke="var(--sepia)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M554 226c14-10 28-14 44-10" strokeDasharray="3 3" strokeOpacity="0.6" />
        <g transform="translate(616 226) rotate(36)">
          <ellipse cx="0" cy="-16" rx="6.5" ry="5" fill="var(--surface)" />
          <path d="M-4 -20l-5-7M4 -20l5-7" />
          <ellipse cx="0" cy="-4" rx="7" ry="8" fill="var(--band)" />
          <path d="M0 6c7.5 0 10 8 8.5 18-1.5 8-5.5 14-8.5 17-3-3-7-9-8.5-17C-10 14 -7.5 6 0 6z" fill="var(--honey-soft)" />
          <path d="M-7 13h14M-7.5 19h15M-6.5 25h13" strokeWidth="2.2" />
          <path d="M-7 -6c-10 10-12 24-6 34 5-8 8-18 6-34z" fill="var(--surface)" fillOpacity="0.8" />
          <path d="M7 -6c10 10 12 24 6 34-5-8-8-18-6-34z" fill="var(--surface)" fillOpacity="0.8" />
        </g>
        <text x="598" y="280" fill="var(--sepia)" stroke="none" fontFamily="var(--font-mono)" fontSize="9.5" fontWeight="700" letterSpacing="1">
          WASPS
        </text>
      </g>

      {/* 6. RIGHT BOTTOM: Larger engraved house mouse turning away from perimeter */}
      <g stroke="var(--sepia)" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
        <g transform="translate(572 356)">
          {/* Curled tail */}
          <path d="M16 28c-12 4-22 14-30 10" />
          {/* Body */}
          <ellipse cx="42" cy="24" rx="26" ry="15" fill="var(--surface)" />
          {/* Pointed snout */}
          <path d="M62 18c10 1 17 5 21 10-6 4-13 6-22 5" fill="var(--surface)" />
          {/* Ear */}
          <circle cx="56" cy="10" r="8.5" fill="var(--honey-soft)" />
          <circle cx="56" cy="10" r="4.5" strokeOpacity="0.45" />
          {/* Eye & nose */}
          <circle cx="71" cy="22" r="2" fill="var(--sepia)" stroke="none" />
          <circle cx="83" cy="28" r="2.2" fill="var(--honey)" />
          {/* Whiskers */}
          <path d="M82 29l11-3M82 31l12 1M81 33l10 4" strokeWidth="1.2" />
          {/* Feet */}
          <path d="M29 38l-4 7h9M54 38l-3 7h9" />
        </g>
        <text x="582" y="424" fill="var(--sepia)" stroke="none" fontFamily="var(--font-mono)" fontSize="9.5" fontWeight="700" letterSpacing="1">
          RODENTS
        </text>
      </g>

      {/* Plate caption tick in bottom-center/left */}
      <text
        x="266"
        y="444"
        fill="var(--sepia)"
        fontFamily="var(--font-mono)"
        fontSize="10"
        letterSpacing="1.4"
      >
        FIG. I — PROTECTIVE PERIMETER
      </text>
    </svg>
  );
}
