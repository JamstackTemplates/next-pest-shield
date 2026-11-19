import { CrestShield } from './art/crest';

/**
 * Postmark ring on desktop (neighbourhoods arranged around the crest shield);
 * clean readable list on small screens.
 */
export function ServiceAreaRing({ areas }: { areas: readonly string[] }) {
  const radius = 148;
  const cx = 190;
  const cy = 190;

  return (
    <div>
      {/* Desktop / tablet postmark ring */}
      <div className="relative mx-auto hidden h-[380px] w-[380px] items-center justify-center sm:flex">
        <svg viewBox="0 0 380 380" fill="none" aria-hidden="true" className="absolute inset-0 h-full w-full">
          <circle cx={cx} cy={cy} r="176" stroke="var(--line)" strokeWidth="1.2" strokeDasharray="4 4" />
          <circle cx={cx} cy={cy} r="118" stroke="var(--accent-ink)" strokeOpacity="0.4" strokeWidth="1.2" strokeDasharray="6 5" />
          <circle cx={cx} cy={cy} r="68" fill="var(--sage)" fillOpacity="0.45" stroke="var(--line)" strokeWidth="1" />
        </svg>

        {/* Center crest */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <CrestShield className="h-12 w-12" />
          <span className="mt-1.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-sepia">
            Charlotte, NC
          </span>
        </div>

        {/* Neighbourhood labels around the ring */}
        <ul aria-label="Neighbourhoods served" className="absolute inset-0 m-0 list-none p-0">
          {areas.map((area, i) => {
            const angle = (i / areas.length) * Math.PI * 2 - Math.PI / 2;
            const x = cx + Math.cos(angle) * radius;
            const y = cy + Math.sin(angle) * radius;
            return (
              <li
                key={area}
                style={{ left: `${x}px`, top: `${y}px` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-ui border border-line bg-surface px-2.5 py-0.5 font-mono text-xs font-bold text-ink shadow-xs"
              >
                {area}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile plain readable list */}
      <ul className="grid grid-cols-2 gap-2 font-mono text-xs sm:hidden">
        {areas.map(area => (
          <li
            key={area}
            className="rounded-ui border border-line bg-surface px-3 py-2 text-ink"
          >
            {area}
          </li>
        ))}
      </ul>
    </div>
  );
}
