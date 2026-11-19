'use client';

import { useEffect, useState, type MouseEvent } from 'react';
import { PEST_GROUPS, type Pest, type PestGroup } from '../content/pests';
import type { Room } from '../content/rooms';
import { SpecimenPlate } from './specimen-plate';

type FilterValue = 'all' | PestGroup;
const VALID_GROUPS = new Set<string>(PEST_GROUPS.map(g => g.id));

export function PestFieldGuide({
  pests,
  rooms,
}: {
  pests: readonly Pest[];
  rooms: readonly Room[];
}) {
  const [selected, setSelected] = useState<FilterValue>('all');

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get('group');
    if (param && VALID_GROUPS.has(param)) {
      setSelected(param as PestGroup);
    }
  }, []);

  function choose(next: FilterValue, e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setSelected(next);
    const url = new URL(window.location.href);
    if (next === 'all') {
      url.searchParams.delete('group');
    } else {
      url.searchParams.set('group', next);
    }
    url.hash = '';
    window.history.replaceState(null, '', url.toString());
  }

  const visibleGroups =
    selected === 'all'
      ? PEST_GROUPS
      : PEST_GROUPS.filter(g => g.id === selected);

  // Preserve consistent plate numbers across filtering
  const indexById = new Map(pests.map((p, i) => [p.id, i]));

  return (
    <div>
      {/* Index tabs: anchor links for no-JS, client filter with ?group= when JS runs */}
      <nav aria-label="Filter pests by group" className="mb-8 flex flex-wrap gap-2">
        <a
          href="#specimen-case"
          aria-current={selected === 'all' ? 'true' : undefined}
          onClick={e => choose('all', e)}
          className={`rounded-ui border px-3.5 py-2 font-mono text-xs uppercase tracking-wider no-underline transition ${
            selected === 'all'
              ? 'border-accent bg-accent font-bold text-on-accent'
              : 'border-line bg-surface text-ink hover:border-accent-ink hover:bg-sage'
          }`}
        >
          All ({pests.length})
        </a>
        {PEST_GROUPS.map(group => {
          const count = pests.filter(p => p.group === group.id).length;
          const active = selected === group.id;
          return (
            <a
              key={group.id}
              href={`#group-${group.id}`}
              aria-current={active ? 'true' : undefined}
              onClick={e => choose(group.id, e)}
              className={`rounded-ui border px-3.5 py-2 font-mono text-xs uppercase tracking-wider no-underline transition ${
                active
                  ? 'border-accent bg-accent font-bold text-on-accent'
                  : 'border-line bg-surface text-ink hover:border-accent-ink hover:bg-sage'
              }`}
            >
              {group.label} ({count})
            </a>
          );
        })}
      </nav>

      {/* Specimen case grouped under engraved group headings */}
      <div id="specimen-case" className="plate-frame specimen-grid space-y-12 p-5 sm:p-8">
        {visibleGroups.map(group => {
          const items = pests.filter(p => p.group === group.id);
          if (!items.length) return null;
          return (
            <section key={group.id} id={`group-${group.id}`} aria-labelledby={`heading-${group.id}`}>
              <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-line pb-2.5">
                <h2 id={`heading-${group.id}`} className="font-serif text-2xl text-ink">
                  {group.label}
                </h2>
                <span className="font-mono text-xs uppercase tracking-widest text-sepia">
                  {items.length} {items.length === 1 ? 'specimen' : 'specimens'}
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map(pest => (
                  <SpecimenPlate
                    key={pest.id}
                    pest={pest}
                    index={indexById.get(pest.id) ?? 0}
                    expandable
                    rooms={rooms}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
