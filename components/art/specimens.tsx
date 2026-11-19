/**
 * Engraved specimen plates for all 12 pests treated by Greenshield.
 * Drawn in sepia line with engraving hatching and a specimen pin (or whisker-pinned outline for rodents).
 * Consistent 160x160 viewBox.
 */
export function PestSpecimen({
  id,
  className = 'h-32 w-32',
}: {
  id: string;
  className?: string;
}) {
  const isRodent = id === 'mouse' || id === 'roof-rat';

  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <pattern id={`hatch-${id}`} width="5.5" height="5.5" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
          <line x1="0" y1="0" x2="0" y2="5.5" stroke="var(--sepia)" strokeOpacity="0.36" strokeWidth="1.1" />
        </pattern>
      </defs>

      {/* Subtle plate registration crosshairs */}
      <g stroke="var(--line)" strokeWidth="1">
        <path d="M12 20v-8h8M148 20v-8h-8M12 140v8h8M148 140v8h-8" />
        <circle cx="80" cy="80" r="62" strokeDasharray="2 4" strokeOpacity="0.72" />
      </g>

      {/* Specimen artwork */}
      <g stroke="var(--sepia)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        {id === 'ant' && (
          <>
            {/* Odorous house ant (top-down, small compact gaster) */}
            <circle cx="80" cy="48" r="8.5" fill={`url(#hatch-${id})`} />
            <ellipse cx="80" cy="69" rx="6.5" ry="11" fill={`url(#hatch-${id})`} />
            <circle cx="80" cy="84" r="3" fill="var(--sepia)" />
            <ellipse cx="80" cy="105" rx="12.5" ry="16" fill={`url(#hatch-${id})`} />
            <path d="M74 42l-9-11-9-4M86 42l9-11 9-4" />
            <path d="M74 63l-19-10-12 5M86 63l19-10 12 5" />
            <path d="M73 70l-22 3-11 11M87 70l22 3 11 11" />
            <path d="M75 78l-18 18-7 20M85 78l18 18 7 20" />
          </>
        )}

        {id === 'carpenter-ant' && (
          <>
            {/* Carpenter ant (larger, pronounced mandibles, heavy thorax) */}
            <path d="M73 37l-4-9 6 4M87 37l4-9-6 4" fill="var(--sepia)" />
            <ellipse cx="80" cy="46" rx="11.5" ry="10.5" fill={`url(#hatch-${id})`} />
            <ellipse cx="80" cy="70" rx="9" ry="14" fill={`url(#hatch-${id})`} />
            <circle cx="80" cy="88" r="3.5" fill="var(--sepia)" />
            <ellipse cx="80" cy="112" rx="15" ry="19" fill={`url(#hatch-${id})`} />
            <path d="M70 106h20M68 114h24M71 122h18" strokeOpacity="0.45" strokeWidth="1.1" />
            <path d="M73 39l-10-14-12-2M87 39l10-14 12-2" />
            <path d="M71 62l-22-12-13 6M89 62l22-12 13 6" />
            <path d="M71 71l-26 3-13 14M89 71l26 3 13 14" />
            <path d="M73 80l-22 22-8 24M87 80l22 22 8 24" />
          </>
        )}

        {id === 'cockroach' && (
          <>
            {/* German cockroach (oval pronotum with two dark longitudinal stripes, long antennae) */}
            <path d="M75 38C56 20 38 22 24 38M85 38c19-18 37-16 51 0" strokeWidth="1.3" />
            <ellipse cx="80" cy="54" rx="15" ry="12" fill="var(--surface)" />
            <path d="M74 44v20M86 44v20" strokeWidth="2.4" />
            <ellipse cx="80" cy="94" rx="19" ry="33" fill={`url(#hatch-${id})`} />
            <line x1="80" y1="66" x2="80" y2="125" strokeOpacity="0.55" />
            <path d="M74 126l-5 11M86 126l5 11" />
            <path d="M66 54l-20-8-10 8M94 54l20-8 10 8" />
            <path d="M62 76l-24 6-10 14M98 76l24 6 10 14" />
            <path d="M64 100l-22 16-6 18M96 100l22 16 6 18" />
          </>
        )}

        {id === 'termite' && (
          <>
            {/* Eastern subterranean termite (beaded straight antennae, broad waist, translucent wing) */}
            <rect x="71" y="34" width="18" height="17" rx="6" fill="var(--surface)" />
            <path d="M75 34l-3-7M85 34l3-7" />
            <path d="M73 36l-10-12M87 36l10-12" strokeDasharray="2 2.5" />
            <ellipse cx="80" cy="61" rx="9" ry="10" fill="var(--surface)" />
            <ellipse cx="80" cy="96" rx="12" ry="26" fill={`url(#hatch-${id})`} />
            {/* Translucent alate wings folded subtly to one side */}
            <ellipse cx="94" cy="94" rx="11" ry="36" transform="rotate(-12 94 94)" fill="var(--surface)" fillOpacity="0.65" strokeDasharray="3 2" />
            <path d="M70 84h20M69 94h22M69 104h22M71 113h18" strokeOpacity="0.4" strokeWidth="1.1" />
            <path d="M71 57l-17-6-8 8M89 57l17-6 8 8" />
            <path d="M71 66l-20 4-9 12M89 66l20 4 9 12" />
            <path d="M72 78l-18 16-6 16M88 78l18 16 6 16" />
          </>
        )}

        {id === 'mouse' && (
          <>
            {/* House mouse (profile, rounded large ears, slender tail) */}
            <path d="M44 96c-14 0-22-9-18-20 4-10 16-6 16-6" />
            <ellipse cx="78" cy="90" rx="32" ry="19" fill={`url(#hatch-${id})`} />
            <path d="M104 82c12 1 20 7 24 12-6 5-14 7-26 6" fill="var(--surface)" />
            <circle cx="96" cy="70" r="11" fill="var(--honey-soft)" />
            <circle cx="96" cy="70" r="6" strokeOpacity="0.45" />
            <circle cx="114" cy="87" r="2.2" fill="var(--sepia)" stroke="none" />
            <circle cx="128" cy="94" r="2.2" fill="var(--honey)" />
            <path d="M126 96l12-4M126 98l13 1M125 100l11 5" strokeWidth="1.1" />
            <path d="M62 108l-5 8h10M92 108l-4 8h10" />
          </>
        )}

        {id === 'roof-rat' && (
          <>
            {/* Roof rat (sleeker profile, pointed snout, long scaled tail) */}
            <path d="M48 92c-16 4-28-4-28-18 0-12 12-18 24-12" />
            <path d="M48 92c12-18 38-24 62-14 10 4 18 10 22 15-8 6-22 10-44 10-16 0-30-3-40-11z" fill={`url(#hatch-${id})`} />
            <ellipse cx="96" cy="68" rx="9" ry="11" transform="rotate(-14 96 68)" fill="var(--honey-soft)" />
            <circle cx="116" cy="84" r="2.2" fill="var(--sepia)" stroke="none" />
            <path d="M129 94l13-5M129 96l14 0M128 98l12 5" strokeWidth="1.1" />
            <path d="M64 101l-6 11h11M96 102l-4 10h11" />
          </>
        )}

        {id === 'bed-bug' && (
          <>
            {/* Bed bug (broad flat ridged oval abdomen, short head) */}
            <ellipse cx="80" cy="44" rx="9" ry="7" fill="var(--surface)" />
            <path d="M74 39l-8-10M86 39l8-10" />
            <path d="M65 54c4-6 26-6 30 0l2 9H63l2-9z" fill="var(--surface)" />
            <ellipse cx="80" cy="90" rx="28" ry="27" fill={`url(#hatch-${id})`} />
            {[74, 82, 90, 98, 106].map(y => (
              <path key={y} d={`M55 ${y}c12 4 38 4 50 0`} strokeOpacity="0.45" strokeWidth="1.1" />
            ))}
            <path d="M64 56l-18-8-8 6M96 56l18-8 8 6" />
            <path d="M54 76l-18 2-8 10M106 76l18 2 8 10" />
            <path d="M56 102l-16 14-6 12M104 102l16 14 6 12" />
          </>
        )}

        {id === 'mosquito' && (
          <>
            {/* Asian tiger mosquito (long proboscis, delicate veined wings, long striped legs) */}
            <line x1="80" y1="22" x2="80" y2="44" strokeWidth="1.4" />
            <circle cx="80" cy="48" r="5" fill="var(--sepia)" />
            <path d="M77 44l-8-12M83 44l8-12" strokeWidth="1.1" />
            <ellipse cx="80" cy="64" rx="7" ry="11" fill={`url(#hatch-${id})`} />
            <ellipse cx="80" cy="99" rx="5.5" ry="24" fill={`url(#hatch-${id})`} />
            {[84, 92, 100, 108].map(y => (
              <line key={y} x1="75" y1={y} x2="85" y2={y} stroke="var(--surface)" strokeWidth="1.6" />
            ))}
            {/* Swept wings */}
            <ellipse cx="52" cy="74" rx="26" ry="7" transform="rotate(-24 52 74)" fill="var(--surface)" fillOpacity="0.72" />
            <ellipse cx="108" cy="74" rx="26" ry="7" transform="rotate(24 108 74)" fill="var(--surface)" fillOpacity="0.72" />
            {/* Long spindly legs */}
            <path d="M74 58l-24-18-16 8M86 58l24-18 16 8" />
            <path d="M74 68l-32 10-12 22M86 68l32 10 12 22" />
            <path d="M76 76l-24 36-8 22M84 76l24 36 8 22" />
          </>
        )}

        {id === 'tick' && (
          <>
            {/* Lone star tick (teardrop body with pale dorsal star spot, 8 legs) */}
            <path d="M76 42l4-10 4 10" />
            <path d="M80 44c22 2 30 22 30 42 0 22-13 36-30 36s-30-14-30-36c0-20 8-40 30-42z" fill={`url(#hatch-${id})`} />
            {/* Lone star dorsal spot */}
            <circle cx="80" cy="82" r="6" fill="var(--honey-soft)" stroke="var(--sepia)" strokeWidth="1.2" />
            <path d="M56 58l-18-12-8 4M104 58l18-12 8 4" />
            <path d="M51 72l-22-4-10 8M109 72l22-4 10 8" />
            <path d="M51 88l-22 8-8 12M109 88l22 8 8 12" />
            <path d="M56 104l-18 16-4 14M104 104l18 16 4 14" />
          </>
        )}

        {id === 'yellowjacket' && (
          <>
            {/* Eastern yellowjacket (pinched waist, banded abdomen, folded wings) */}
            <ellipse cx="80" cy="43" rx="10" ry="7.5" fill="var(--surface)" />
            <path d="M74 37l-8-10-6 2M86 37l8-10 6 2" />
            <ellipse cx="80" cy="63" rx="11" ry="12" fill={`url(#hatch-${id})`} />
            <path d="M80 78c11 0 15 12 13 28-2 12-8 22-13 26-5-4-11-14-13-26-2-16 2-28 13-28z" fill="var(--honey-soft)" />
            {[88, 97, 106, 115].map(y => (
              <path key={y} d={`M69 ${y}h22`} strokeWidth="2.4" />
            ))}
            {/* Folded wings */}
            <path d="M70 58c-14 14-18 36-10 52 8-12 12-28 10-52z" fill="var(--surface)" fillOpacity="0.72" />
            <path d="M90 58c14 14 18 36 10 52-8-12-12-28-10-52z" fill="var(--surface)" fillOpacity="0.72" />
            <path d="M70 58l-18-8M90 58l18-8M69 68l-20 8M91 68l20 8M71 78l-18 22M89 78l18 22" />
          </>
        )}

        {id === 'spider' && (
          <>
            {/* Southern black widow (bulbous abdomen with hourglass motif, 8 slender legs) */}
            <circle cx="80" cy="56" r="9" fill={`url(#hatch-${id})`} />
            <circle cx="80" cy="92" r="22" fill={`url(#hatch-${id})`} />
            {/* Subtle hourglass engraving */}
            <path d="M75 84h10l-5 8 5 8H75l5-8-5-8z" fill="var(--honey)" stroke="var(--sepia)" strokeWidth="1.1" />
            <path d="M73 50l-20-20-16 8M87 50l20-20 16 8" />
            <path d="M71 56l-28-8-14 16M89 56l28-8 14 16" />
            <path d="M72 62l-28 14-10 22M88 62l28 14 10 22" />
            <path d="M74 68l-22 34-6 24M86 68l22 34 6 24" />
          </>
        )}

        {id === 'silverfish' && (
          <>
            {/* Silverfish (tapered carrot-shaped scaly body, 2 antennae, 3 long tail bristles) */}
            <path d="M75 38c-12-12-22-14-34-10M85 38c12-12 22-14 34-10" strokeWidth="1.2" />
            <path d="M80 34c11 0 15 12 13 30-2 20-7 38-13 54-6-16-11-34-13-54-2-18 2-30 13-30z" fill={`url(#hatch-${id})`} />
            {[48, 58, 68, 78, 88, 98].map(y => (
              <path key={y} d={`M${80 - (112 - y) * 0.18} ${y}h${(112 - y) * 0.36}`} strokeOpacity="0.45" strokeWidth="1.1" />
            ))}
            {/* Three tail bristles */}
            <path d="M80 118v26M77 116l-18 22M83 116l18 22" strokeWidth="1.2" />
            <path d="M68 50l-14-4-6 6M92 50l14-4 6 6" />
            <path d="M69 64l-16 4-6 10M91 64l16 4 6 10" />
            <path d="M71 78l-14 10-4 12M89 78l14 10 4 12" />
          </>
        )}
      </g>

      {/* Specimen pin through thorax (or corner whisker pin for rodents) */}
      {isRodent ? (
        <g>
          <line x1="126" y1="30" x2="108" y2="54" stroke="var(--sepia)" strokeWidth="1.3" />
          <circle cx="127" cy="29" r="4" fill="var(--honey)" stroke="var(--sepia)" strokeWidth="1.3" />
        </g>
      ) : (
        <g>
          <circle cx="80" cy="68" r="3.6" fill="var(--honey)" stroke="var(--sepia)" strokeWidth="1.3" />
          <circle cx="80" cy="68" r="1.2" fill="var(--surface)" />
        </g>
      )}
    </svg>
  );
}
