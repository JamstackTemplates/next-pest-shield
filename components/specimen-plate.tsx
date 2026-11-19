import type { CSSProperties } from 'react';
import { formatReEntry, formatVisits, type Pest } from '../content/pests';
import type { Room } from '../content/rooms';
import { PestSpecimen } from './art/specimens';
import { SiteLink } from './site-link';

const TILTS = ['-0.9deg', '0.7deg', '-0.5deg', '0.85deg', '-0.7deg', '0.6deg'];

export function SpecimenPlate({
  pest,
  index = 0,
  expandable = false,
  rooms = [],
}: {
  pest: Pest;
  index?: number;
  expandable?: boolean;
  rooms?: readonly Room[];
}) {
  const tilt = TILTS[index % TILTS.length];
  const plateNumber = String(index + 1).padStart(2, '0');
  const roomNames = pest.rooms.map(id => rooms.find(r => r.id === id)?.name ?? id);

  return (
    <article
      id={expandable ? pest.id : undefined}
      style={{ '--plate-tilt': tilt } as CSSProperties}
      className="specimen-plate flex flex-col p-5"
    >
      {/* Top plate number & Active now honey tag */}
      <div className="flex items-center justify-between gap-2 font-mono text-[0.72rem] tracking-widest uppercase text-sepia">
        <span>Plate {plateNumber}</span>
        {pest.inSeason ? <span className="honey-tag">Active now</span> : <span>Year-round</span>}
      </div>

      {/* Engraved specimen drawing */}
      <div className="my-3 flex items-center justify-center border-y border-line/60 bg-bg/55 py-2.5">
        <PestSpecimen id={pest.id} className="h-36 w-36" />
      </div>

      {/* Name & italic Latin */}
      <h3 className="font-serif text-xl leading-snug text-ink">
        {expandable ? (
          pest.name
        ) : (
          <SiteLink href={`/pests/#${pest.id}`} className="no-underline hover:text-accent-ink hover:underline">
            {pest.name}
          </SiteLink>
        )}
      </h3>
      <p className="font-mono text-xs italic text-sepia">{pest.latin}</p>

      {/* Typewritten label strip */}
      <dl className="mt-4 grid grid-cols-2 gap-2 border-t border-dashed border-line pt-3 font-mono text-xs">
        <div>
          <dt className="text-[0.68rem] uppercase tracking-wider text-muted">Treatment</dt>
          <dd className="mt-0.5 font-bold text-ink">from ${pest.priceFrom}</dd>
        </div>
        <div>
          <dt className="text-[0.68rem] uppercase tracking-wider text-muted">Re-entry</dt>
          <dd className="mt-0.5 font-bold text-ink">{formatReEntry(pest.reEntryHours)}</dd>
        </div>
      </dl>

      {expandable ? (
        <details className="mt-4 border-t border-line pt-3 text-sm">
          <summary className="cursor-pointer font-mono text-xs font-bold uppercase tracking-wider text-accent-ink hover:underline">
            Field notes &amp; treatment
          </summary>
          <div className="mt-3 space-y-3 text-muted">
            <div>
              <p className="font-mono text-[0.7rem] font-bold uppercase tracking-wider text-sepia">
                What to look for
              </p>
              <ul className="mt-1 list-disc space-y-1 pl-4">
                {pest.signs.map(sign => (
                  <li key={sign}>{sign}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[0.7rem] font-bold uppercase tracking-wider text-sepia">
                How we treat it
              </p>
              <p className="mt-1 text-ink">{pest.treatment}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 border-t border-dashed border-line pt-2 font-mono text-xs">
              <div>
                <span className="block text-[0.68rem] uppercase text-muted">Typical visits</span>
                <span className="text-ink">{formatVisits(pest)}</span>
              </div>
              <div>
                <span className="block text-[0.68rem] uppercase text-muted">Often found in</span>
                <span className="text-ink">{roomNames.join(', ')}</span>
              </div>
            </div>

            <div className="pt-1">
              <SiteLink href="/contact/" className="text-link font-mono text-xs uppercase tracking-wider">
                Request inspection for {pest.name.toLowerCase()} →
              </SiteLink>
            </div>
          </div>
        </details>
      ) : null}
    </article>
  );
}
