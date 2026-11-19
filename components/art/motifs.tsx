/** Reusable engraved motifs, dividers, wax seal and 404 art. */

export function PerimeterStitch({ className = '' }: { className?: string }) {
  return (
    <div className={`wrap py-3 ${className}`} aria-hidden="true">
      <svg viewBox="0 0 960 22" fill="none" className="h-5 w-full">
        <line
          x1="0"
          y1="11"
          x2="960"
          y2="11"
          stroke="var(--accent-ink)"
          strokeOpacity="0.45"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        {[120, 360, 480, 600, 840].map(x => (
          <g key={x} transform={`translate(${x - 7}, 3)`}>
            <path
              d="M1 1h12v6.5c0 4.2-2.8 6.5-6 7.8-3.2-1.3-6-3.6-6-7.8V1z"
              fill="var(--bg)"
              stroke="var(--accent-ink)"
              strokeWidth="1.4"
            />
            <circle cx="7" cy="7.5" r="1.6" fill="var(--honey)" />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function HatchedHedgeBand({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        fill="none"
        className="block h-9 w-full sm:h-12"
      >
        <defs>
          <pattern id="hedge-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(28)">
            <line x1="0" y1="0" x2="0" y2="8" stroke="var(--crest-ink)" strokeOpacity="0.16" strokeWidth="1.2" />
          </pattern>
        </defs>
        <path
          d="M0 48V24c28-14 58-16 88-6 24-18 62-20 92-4 28-14 68-14 96 2 30-16 66-16 96-2 30-16 70-14 98 2 28-18 68-18 98-2 30-14 68-14 96 2 30-18 70-18 98-2 30-14 66-16 96 0 28-16 68-18 98-2 30-14 66-14 96 2 28-16 68-16 98-2 30-14 66-14 96 2 30-16 68-16 98-2 30-12 62-14 96 4v24H0z"
          fill="var(--crest-bg)"
        />
        <path
          d="M0 48V24c28-14 58-16 88-6 24-18 62-20 92-4 28-14 68-14 96 2 30-16 66-16 96-2 30-16 70-14 98 2 28-18 68-18 98-2 30-14 68-14 96 2 30-18 70-18 98-2 30-14 66-16 96 0 28-16 68-18 98-2 30-14 66-14 96 2 28-16 68-16 98-2 30-14 66-14 96 2 30-16 68-16 98-2 30-12 62-14 96 4v24H0z"
          fill="url(#hedge-hatch)"
        />
        <path
          d="M0 24c28-14 58-16 88-6 24-18 62-20 92-4 28-14 68-14 96 2 30-16 66-16 96-2 30-16 70-14 98 2 28-18 68-18 98-2 30-14 68-14 96 2 30-18 70-18 98-2 30-14 66-16 96 0 28-16 68-18 98-2 30-14 66-14 96 2 28-16 68-16 98-2 30-14 66-14 96 2 30-16 68-16 98-2 30-12 62-14 96 4"
          stroke="var(--accent-ink)"
          strokeOpacity="0.55"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

export function MagnifierPinMotif({ className = 'h-14 w-24' }: { className?: string }) {
  return (
    <svg viewBox="0 0 112 64" fill="none" aria-hidden="true" className={className}>
      {/* Specimen pin */}
      <line x1="22" y1="10" x2="22" y2="54" stroke="var(--sepia)" strokeWidth="1.5" />
      <circle cx="22" cy="10" r="4" fill="var(--honey)" stroke="var(--sepia)" strokeWidth="1.4" />
      <rect x="8" y="34" width="28" height="13" fill="var(--surface)" stroke="var(--sepia)" strokeWidth="1.2" />
      <line x1="13" y1="40.5" x2="31" y2="40.5" stroke="var(--sepia)" strokeWidth="1" strokeDasharray="3 2" />
      {/* Magnifier */}
      <circle cx="68" cy="27" r="18" fill="var(--sage)" fillOpacity="0.6" stroke="var(--sepia)" strokeWidth="1.6" />
      <circle cx="68" cy="27" r="14" stroke="var(--sepia)" strokeOpacity="0.45" strokeWidth="1" strokeDasharray="3 2" />
      <path d="M81 40l16 15" stroke="var(--sepia)" strokeWidth="4" strokeLinecap="round" />
      <path d="M81 40l16 15" stroke="var(--honey)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Tiny insect silhouette under lens */}
      <ellipse cx="68" cy="27" rx="3.2" ry="5" stroke="var(--sepia)" strokeWidth="1.3" />
      <path d="M65 25l-4-2M65 28l-4.5 1M65 30l-4 3M71 25l4-2M71 28l4.5 1M71 30l4 3" stroke="var(--sepia)" strokeWidth="1.1" />
    </svg>
  );
}

export function ClipboardMagnifierMotif({ className = 'h-14 w-24' }: { className?: string }) {
  return (
    <svg viewBox="0 0 112 64" fill="none" aria-hidden="true" className={className}>
      <rect x="14" y="10" width="42" height="48" rx="2" fill="var(--surface)" stroke="var(--sepia)" strokeWidth="1.5" />
      <path d="M26 10V6.5a2.5 2.5 0 0 1 2.5-2.5h13A2.5 2.5 0 0 1 44 6.5V10" fill="var(--honey)" stroke="var(--sepia)" strokeWidth="1.4" />
      <path d="M22 22h26M22 30h22M22 38h26M22 46h16" stroke="var(--sepia)" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="78" cy="28" r="15" fill="var(--sage)" fillOpacity="0.7" stroke="var(--accent-ink)" strokeWidth="1.6" />
      <path d="M72 28l4 4 8-8" stroke="var(--accent-ink)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M89 39l12 12" stroke="var(--sepia)" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

export function LeafShieldMotif({ className = 'h-14 w-24' }: { className?: string }) {
  return (
    <svg viewBox="0 0 112 64" fill="none" aria-hidden="true" className={className}>
      <path
        d="M36 8h36v20c0 13-8.5 20.5-18 25-9.5-4.5-18-12-18-25V8z"
        fill="var(--sage)"
        stroke="var(--accent-ink)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M40 12h28v16c0 10-6.5 16-14 19.6C46.5 44 40 38 40 28V12z"
        stroke="var(--accent-ink)"
        strokeOpacity="0.4"
        strokeDasharray="3 2"
      />
      <path d="M47 40c2-11 9-17 19-18-1.5 9.5-7 16.5-19 18z" fill="var(--honey)" fillOpacity="0.85" stroke="var(--sepia)" strokeWidth="1.3" />
      <path d="M47 40l13-13" stroke="var(--sepia)" strokeWidth="1.2" />
    </svg>
  );
}

export function KitchenVignette({ className = 'h-16 w-28' }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 72" fill="none" aria-hidden="true" className={className}>
      <rect x="4" y="6" width="120" height="60" fill="var(--sage)" fillOpacity="0.55" stroke="var(--sepia)" strokeWidth="1.5" />
      {/* Upper cabinets */}
      <rect x="12" y="12" width="38" height="16" fill="var(--surface)" stroke="var(--sepia)" strokeWidth="1.2" />
      <line x1="31" y1="12" x2="31" y2="28" stroke="var(--sepia)" strokeWidth="1.2" />
      {/* Window */}
      <rect x="58" y="12" width="28" height="20" fill="var(--bg)" stroke="var(--sepia)" strokeWidth="1.2" />
      <line x1="72" y1="12" x2="72" y2="32" stroke="var(--sepia)" strokeWidth="1" />
      <line x1="58" y1="22" x2="86" y2="22" stroke="var(--sepia)" strokeWidth="1" />
      {/* Fridge */}
      <rect x="94" y="14" width="22" height="52" fill="var(--surface)" stroke="var(--sepia)" strokeWidth="1.3" />
      <line x1="94" y1="34" x2="116" y2="34" stroke="var(--sepia)" strokeWidth="1.2" />
      <line x1="98" y1="22" x2="98" y2="29" stroke="var(--sepia)" strokeWidth="1.2" />
      <line x1="98" y1="40" x2="98" y2="50" stroke="var(--sepia)" strokeWidth="1.2" />
      {/* Counter and sink */}
      <rect x="12" y="40" width="76" height="26" fill="var(--surface)" stroke="var(--sepia)" strokeWidth="1.3" />
      <path d="M62 40v-5a3 3 0 0 1 6 0v2" stroke="var(--sepia)" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="40" y1="40" x2="40" y2="66" stroke="var(--sepia)" strokeWidth="1" />
      <line x1="64" y1="40" x2="64" y2="66" stroke="var(--sepia)" strokeWidth="1" />
      {/* Stitched perimeter highlight */}
      <rect x="8" y="10" width="112" height="52" stroke="var(--accent-ink)" strokeWidth="1.2" strokeDasharray="4 3" />
    </svg>
  );
}

export function WaxGuaranteeSeal({ className = 'h-32 w-32' }: { className?: string }) {
  return (
    <svg viewBox="0 0 144 156" fill="none" aria-hidden="true" className={className}>
      {/* Ribbon tails */}
      <path d="M46 106L34 150l18-10 12 12 8-42" fill="var(--accent)" stroke="var(--ink)" strokeOpacity="0.35" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M98 106l12 44-18-10-12 12-8-42" fill="var(--accent)" stroke="var(--ink)" strokeOpacity="0.35" strokeWidth="1.4" strokeLinejoin="round" />
      {/* Scalloped wax disc */}
      <path
        d="M72 10c6 0 9 5 15 6s11-2 16 2 6 9 11 13 11 4 13 10 0 11 2 17 7 9 6 15-6 9-7 15 2 11-2 16-9 6-13 11-4 11-10 13-11 0-17 2-9 7-14 7-9-5-15-6-11 2-16-2-6-9-11-13-11-4-13-10 0-11-2-17-7-9-6-15 6-9 7-15-2-11 2-16 9-6 13-11 4-11 10-13 11 0 17-2 9-7 14-7z"
        fill="var(--honey)"
        stroke="var(--sepia)"
        strokeWidth="1.6"
      />
      <circle cx="72" cy="70" r="44" fill="none" stroke="var(--honey-ink)" strokeOpacity="0.35" strokeWidth="1.4" strokeDasharray="3 2.5" />
      <circle cx="72" cy="70" r="36" fill="none" stroke="var(--honey-ink)" strokeOpacity="0.55" strokeWidth="1.2" />
      {/* Center crest */}
      <path
        d="M58 46h28v15c0 9.6-6.2 15.2-14 18.2-7.8-3-14-8.6-14-18.2V46z"
        fill="var(--accent)"
        stroke="var(--honey-ink)"
        strokeWidth="1.4"
      />
      <path d="M63 59l9-7.5 9 7.5" stroke="#fffcf4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M66.5 57.5v8.5h11v-8.5" stroke="#fffcf4" strokeWidth="1.4" />
      {/* Curved ribbon banner */}
      <path d="M18 92h108l-6 11 6 11H18l6-11-6-11z" fill="var(--surface)" stroke="var(--sepia)" strokeWidth="1.5" strokeLinejoin="round" />
      <text
        x="72"
        y="107"
        textAnchor="middle"
        fill="var(--ink)"
        fontFamily="var(--font-mono)"
        fontSize="10.5"
        fontWeight="700"
        letterSpacing="1.2"
      >
        COME BACK FREE
      </text>
    </svg>
  );
}

export function MouseHoleArt({ className = 'w-full max-w-md' }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 220" fill="none" role="img" aria-label="Engraving of a skirting-board mouse-hole with a stitched patch and a small mouse peeking out with a map" className={className}>
      <defs>
        <pattern id="skirting-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
          <line x1="0" y1="0" x2="0" y2="7" stroke="var(--sepia)" strokeOpacity="0.16" strokeWidth="1" />
        </pattern>
      </defs>
      {/* Wall & skirting board */}
      <rect x="8" y="16" width="344" height="170" fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5" />
      <rect x="8" y="114" width="344" height="72" fill="var(--band)" stroke="var(--sepia)" strokeWidth="1.5" />
      <line x1="8" y1="124" x2="352" y2="124" stroke="var(--sepia)" strokeOpacity="0.45" strokeWidth="1.2" />
      {/* Floor line */}
      <line x1="0" y1="186" x2="360" y2="186" stroke="var(--sepia)" strokeWidth="2" />
      <line x1="26" y1="196" x2="334" y2="196" stroke="var(--sepia)" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="8 6" />
      {/* Arched mouse-hole */}
      <path d="M132 186v-54a48 48 0 0 1 96 0v54H132z" fill="var(--crest-bg)" stroke="var(--sepia)" strokeWidth="2" />
      <path d="M138 186v-50a42 42 0 0 1 84 0v50" fill="url(#skirting-hatch)" />
      {/* Half-sewn dashed green patch */}
      <path
        d="M174 88h62v74h-62z"
        fill="var(--sage)"
        fillOpacity="0.92"
        stroke="var(--accent-ink)"
        strokeWidth="1.6"
        strokeDasharray="5 3"
        transform="rotate(7 205 125)"
      />
      {/* Tiny crest stamped on patch */}
      <path d="M204 106h16v9c0 5.5-3.6 8.8-8 10.6-4.4-1.8-8-5.1-8-10.6v-9z" fill="var(--accent)" stroke="var(--sepia)" strokeWidth="1.1" transform="rotate(7 205 125)" />
      {/* Tiny mouse peeking out holding a map */}
      <g transform="translate(138 134)">
        <ellipse cx="26" cy="36" rx="18" ry="14" fill="var(--surface)" stroke="var(--sepia)" strokeWidth="1.6" />
        <circle cx="15" cy="21" r="7" fill="var(--honey-soft)" stroke="var(--sepia)" strokeWidth="1.5" />
        <circle cx="31" cy="21" r="7" fill="var(--honey-soft)" stroke="var(--sepia)" strokeWidth="1.5" />
        <circle cx="19" cy="32" r="2" fill="var(--sepia)" />
        <circle cx="31" cy="32" r="2" fill="var(--sepia)" />
        <circle cx="25" cy="37" r="2.3" fill="var(--honey)" stroke="var(--sepia)" strokeWidth="1" />
        <path d="M12 36l-9-2M12 39l-9 2M38 36l9-2M38 39l9 2" stroke="var(--sepia)" strokeWidth="1.1" />
        {/* Folded map in paws */}
        <path d="M36 28l18-5 8 19-18 5-8-19z" fill="var(--bg)" stroke="var(--sepia)" strokeWidth="1.4" />
        <path d="M44 26l8 19" stroke="var(--sepia)" strokeOpacity="0.4" strokeWidth="1" />
        <path d="M41 34c4-2 8 3 13 0" stroke="var(--accent-ink)" strokeWidth="1.3" strokeDasharray="2 2" />
      </g>
    </svg>
  );
}

export function SealedMouseHole({ className = 'h-24 w-36' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 100" fill="none" aria-hidden="true" className={className}>
      <rect x="8" y="30" width="144" height="58" fill="var(--band)" stroke="var(--sepia)" strokeWidth="1.5" />
      <line x1="0" y1="88" x2="160" y2="88" stroke="var(--sepia)" strokeWidth="2" />
      <path d="M52 88V56a28 28 0 0 1 56 0v32" stroke="var(--sepia)" strokeOpacity="0.45" strokeWidth="1.4" strokeDasharray="3 3" />
      {/* Neatly sewn green crest patch sealing the gap */}
      <rect x="44" y="22" width="72" height="62" rx="3" fill="var(--sage)" stroke="var(--accent-ink)" strokeWidth="1.6" strokeDasharray="5 3" />
      <path d="M70 36h20v11c0 6.6-4.4 10.6-10 12.8-5.6-2.2-10-6.2-10-12.8V36z" fill="var(--accent)" stroke="var(--sepia)" strokeWidth="1.3" />
      <path d="M75.5 46l3.2 3.2 6-6.2" stroke="#fffcf4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Delicate engraved corner spiderweb with a tiny spider for section margin decoration. */
export function CornerSpiderweb({
  className = 'h-28 w-28',
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <g stroke="var(--sepia)" strokeOpacity="0.34" strokeWidth="1.1" strokeLinecap="round">
        <line x1="0" y1="0" x2="112" y2="0" />
        <line x1="0" y1="0" x2="104" y2="42" />
        <line x1="0" y1="0" x2="84" y2="82" />
        <line x1="0" y1="0" x2="46" y2="106" />
        <line x1="0" y1="0" x2="0" y2="114" />
        <path d="M0 32c11-2 21-8 29-16 6-6 10-11 12-16" />
        <path d="M0 64c20-4 37-14 50-28 10-10 17-21 21-36" />
        <path d="M0 94c29-6 53-20 71-40 13-15 22-32 26-54" />
      </g>
      {/* Tiny spider perched on the outer strand */}
      <g transform="translate(56 44) rotate(28)" stroke="var(--sepia)" strokeOpacity="0.62" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="0" cy="-4" r="2.4" fill="var(--sepia)" fillOpacity="0.55" />
        <circle cx="0" cy="2" r="4.2" fill="var(--sepia)" fillOpacity="0.55" />
        <path d="M-3 -4l-6-4M3 -4l6-4M-4 -1l-7 0M4 -1l7 0M-3 2l-6 4M3 2l6 4M-2 5l-5 6M2 5l5 6" />
      </g>
    </svg>
  );
}

/** Marching engraved ant trail stopping at a protective shield knot. */
export function AntTrailBanner({ className = '' }: { className?: string }) {
  return (
    <div className={`wrap overflow-hidden ${className}`} aria-hidden="true">
      <svg viewBox="0 0 960 36" fill="none" className="h-8 w-full">
        {/* Left dashed ant trail stopping at center shield */}
        <path
          d="M16 20c90-8 180 8 270 0s120-8 174 0"
          stroke="var(--sepia)"
          strokeOpacity="0.35"
          strokeWidth="1.2"
          strokeDasharray="4 5"
        />
        {/* 4 tiny engraved ants marching toward the shield */}
        {[82, 178, 286, 392].map((x, idx) => (
          <g key={x} transform={`translate(${x} ${idx % 2 === 0 ? 18 : 21})`}>
            <circle cx="10" cy="0" r="2.6" fill="var(--sepia)" fillOpacity="0.65" />
            <ellipse cx="3" cy="0" rx="3.2" ry="2.1" fill="var(--sepia)" fillOpacity="0.65" />
            <ellipse cx="-5" cy="0" rx="4.2" ry="3" fill="var(--sepia)" fillOpacity="0.65" />
            <path
              d="M12 -2l4-3M12 2l4 3M5 -2l1-5M1 -2l-1-5M5 2l1 5M1 2l-1 5M-2 -2l-3-5M-2 2l-3 5"
              stroke="var(--sepia)"
              strokeOpacity="0.65"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
          </g>
        ))}

        {/* Protective shield knot blocking the trail */}
        <g transform="translate(470, 7)">
          <path
            d="M1 1h18v9.5c0 6-4 9.5-9 11.4-5-1.9-9-5.4-9-11.4V1z"
            fill="var(--surface)"
            stroke="var(--accent-ink)"
            strokeWidth="1.6"
          />
          <path d="M6.5 11l2.5 2.5 5-5" stroke="var(--accent-ink)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Clean stitched perimeter on the protected right half */}
        <line
          x1="498"
          y1="19"
          x2="944"
          y2="19"
          stroke="var(--accent-ink)"
          strokeOpacity="0.45"
          strokeWidth="1.6"
          strokeDasharray="6 6"
        />
        <text
          x="720"
          y="13"
          textAnchor="middle"
          fill="var(--accent-ink)"
          fillOpacity="0.7"
          fontFamily="var(--font-mono)"
          fontSize="9"
          fontWeight="700"
          letterSpacing="1.6"
        >
          PROTECTED PERIMETER
        </text>
      </svg>
    </div>
  );
}

/** Compact engraved pest silhouette row for hero / section headers. */
export function PestSilhouetteStrip({ className = '' }: { className?: string }) {
  const items = [
    { label: 'Ants', path: 'M6 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M11 12a2.5 1.8 0 1 0 5 0 2.5 1.8 0 1 0-5 0M17 12a3.2 2.4 0 1 0 6.4 0 3.2 2.4 0 1 0-6.4 0M6 10L3 7M6 14l-3 3M13 10l-1-4M13 14l-1 4M15 10l1-4M15 14l1 4' },
    { label: 'Roaches', path: 'M9 8c-2-3-5-3-7-1M15 8c2-3 5-3 7-1M12 7a4 3 0 1 0 0 6 4 3 0 1 0 0-6M12 10a5 7 0 1 0 0 12 5 7 0 1 0 0-12M7 11l-4-2M17 11l4-2M7 15l-4 2M17 15l4 2' },
    { label: 'Termites', path: 'M12 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5M12 10a2.5 2 0 1 0 0 4 2.5 2 0 1 0 0-4M12 14a3.2 5.5 0 1 0 0 11 3.2 5.5 0 1 0 0-11M10 6L7 3M14 6l3-3M9 12l-4 1M15 12l4 1M9 16l-4 3M15 16l4 3' },
    { label: 'Rodents', path: 'M4 16c-2 0-3-2-2-4M12 15a6.5 4 0 1 0 0-8 6.5 4 0 1 0 0 8M16 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 1 0 0 5M18 13l4-1M18 14l4 1' },
    { label: 'Mosquitoes', path: 'M12 3v5M12 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M12 11v9M11 11L4 8M13 11l7-3M11 13l-6 5M13 13l6 5' },
  ];

  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 ${className}`}>
      {items.map(item => (
        <span
          key={item.label}
          className="inline-flex items-center gap-1.5 font-mono text-[0.72rem] uppercase tracking-wider text-sepia"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-accent-ink" aria-hidden="true">
            <path d={item.path} />
          </svg>
          <span>{item.label}</span>
        </span>
      ))}
    </div>
  );
}


/**
 * Header bottom edge: the hero's protective perimeter — a dashed boundary line
 * studded with small crest shields, hanging just below the header's green rule.
 */
export function HeaderPerimeter() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute inset-x-0 top-full block h-4 w-full"
    >
      <defs>
        <pattern id="header-perimeter" width="160" height="16" patternUnits="userSpaceOnUse">
          <line
            x1="0"
            y1="4"
            x2="160"
            y2="4"
            stroke="var(--accent-ink)"
            strokeOpacity="0.7"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />
          <path
            d="M73 1.5h14v5.6c0 3.7-2.9 5.8-7 7.2-4.1-1.4-7-3.5-7-7.2z"
            fill="var(--bg)"
            stroke="var(--accent-ink)"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
          <circle cx="80" cy="7" r="1.7" fill="var(--honey)" />
        </pattern>
      </defs>
      <rect width="100%" height="16" fill="url(#header-perimeter)" />
    </svg>
  );
}
