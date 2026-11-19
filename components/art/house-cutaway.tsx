'use client';

import { useState, type KeyboardEvent } from 'react';
import type { Pest } from '../../content/pests';
import type { Room } from '../../content/rooms';
import { documentHref } from '../../lib/paths';
import { SiteLink } from '../site-link';

interface HouseCutawayProps {
  rooms: readonly Room[];
  pests: readonly Pest[];
}

export function HouseCutaway({ rooms, pests }: HouseCutawayProps) {
  const [selectedId, setSelectedId] = useState<string>('kitchen');

  const selectedRoom = rooms.find(r => r.id === selectedId) ?? rooms[0];
  const roomPests = pests.filter(p => p.rooms.includes(selectedRoom.id));

  function handleKeyDown(e: KeyboardEvent, currentIndex: number) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedId(rooms[(currentIndex + 1) % rooms.length].id);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedId(rooms[(currentIndex - 1 + rooms.length) % rooms.length].id);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSelectedId(rooms[0].id);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSelectedId(rooms[rooms.length - 1].id);
    }
  }

  function roomGroupProps(id: string) {
    const index = rooms.findIndex(r => r.id === id);
    const room = rooms[index];
    const active = selectedId === id;
    return {
      role: 'button' as const,
      tabIndex: 0,
      'aria-pressed': active,
      'aria-label': `Inspect ${room?.name ?? id}`,
      'data-active': active ? 'true' : 'false',
      className: 'cutaway-room outline-none',
      onClick: () => setSelectedId(id),
      onKeyDown: (e: KeyboardEvent<SVGGElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setSelectedId(id);
          return;
        }
        handleKeyDown(e, index);
      },
    };
  }

  return (
    <div>
      {/* Room chips for quick touch and keyboard selection */}
      <div
        role="group"
        aria-label="Choose a room or area"
        className="mb-6 flex flex-wrap justify-center gap-2"
      >
        {rooms.map((room, index) => {
          const active = room.id === selectedRoom.id;
          return (
            <button
              key={room.id}
              type="button"
              aria-pressed={active}
              onClick={() => setSelectedId(room.id)}
              onKeyDown={e => handleKeyDown(e, index)}
              className={`rounded-ui border px-3.5 py-1.5 font-mono text-xs tracking-wide transition ${
                active
                  ? 'border-accent bg-accent text-on-accent font-bold'
                  : 'border-line bg-surface text-ink hover:border-accent-ink hover:bg-bg'
              }`}
            >
              {room.name}
            </button>
          );
        })}
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-12">
        {/* Interactive cross-section house inside the crest shield */}
        <div className="lg:col-span-7">
          <svg
            viewBox="0 0 600 470"
            fill="none"
            className="mx-auto w-full max-w-[38rem]"
            aria-label="Interactive cross-section of a two-storey house inside the Greenshield crest shield. Select any room to see common pests found there."
          >
            <defs>
              <pattern id="wall-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(40)">
                <line x1="0" y1="0" x2="0" y2="7" stroke="var(--sepia)" strokeOpacity="0.22" strokeWidth="1.1" />
              </pattern>
            </defs>

            {/* Outer heraldic crest shield framing the cutaway */}
            <path
              d="M46 22h508v218c0 120-108 182-254 214C154 422 46 360 46 240V22z"
              fill="var(--surface)"
              stroke="var(--shield-stroke)"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            <path
              d="M58 34h484v204c0 110-100 168-242 198C158 406 58 348 58 238V34z"
              stroke="var(--shield-stroke)"
              strokeOpacity="0.35"
              strokeWidth="1.2"
              strokeDasharray="5 4"
            />

            {/* Yard & porch (clickable outer ground & porch right) */}
            <g {...roomGroupProps('yard')}>
              <path
                d="M74 334h452v36c0 24-38 46-102 62H176c-64-16-102-38-102-62v-36z"
                className="room-wash"
                stroke="var(--sepia)"
                strokeOpacity="0.4"
                strokeWidth="1.2"
              />
              {/* Porch steps & garden shrub */}
              <path d="M90 334c2-16 14-24 26-20 8-10 22-10 28 2 10-4 20 4 22 18H90z" fill="var(--sage)" stroke="var(--accent-ink)" strokeWidth="1.3" />
              <path d="M442 334c2-14 14-22 24-18 8-10 22-8 26 2 10-2 18 4 20 16h-70z" fill="var(--sage)" stroke="var(--accent-ink)" strokeWidth="1.3" />
              <circle cx="486" cy="356" r="10" fill="var(--bg)" stroke="var(--sepia)" strokeWidth="1.2" />
              <path d="M482 356h8M486 352v8" stroke="var(--sepia)" strokeWidth="1" />
              {/* Tiny mosquito hovering over yard */}
              <g transform="translate(462 320)" stroke="var(--accent-ink)" strokeWidth="1.2">
                <ellipse cx="0" cy="0" rx="5" ry="1.8" />
                <path d="M-2 -2l-4-5M2 -2l4-5M-4 2l-3 5M4 2l3 5" />
              </g>
              <text x="108" y="360" fill="var(--sepia)" fontFamily="var(--font-mono)" fontSize="10" fontWeight="700">
                YARD &amp; PORCH
              </text>
            </g>

            {/* Attic & eaves (gable triangle) */}
            <g {...roomGroupProps('attic')}>
              <path
                d="M126 154L276 58l150 96H126z"
                className="room-wash"
                stroke="var(--sepia)"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              {/* Hatched rafters */}
              <path d="M144 154l132-84 132 84" stroke="var(--sepia)" strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="4 3" />
              <line x1="276" y1="70" x2="276" y2="154" stroke="var(--sepia)" strokeOpacity="0.35" strokeWidth="1.2" />
              {/* Stored boxes & attic vent */}
              <rect x="208" y="130" width="26" height="24" fill="var(--band)" stroke="var(--sepia)" strokeWidth="1.2" />
              <rect x="238" y="136" width="20" height="18" fill="var(--band)" stroke="var(--sepia)" strokeWidth="1.2" />
              <circle cx="326" cy="126" r="11" fill="var(--bg)" stroke="var(--sepia)" strokeWidth="1.2" />
              {/* Small attic mouse silhouette */}
              <g transform="translate(284 146)" stroke="var(--accent-ink)" strokeWidth="1.2">
                <ellipse cx="6" cy="0" rx="7" ry="4" fill="var(--surface)" />
                <circle cx="11" cy="-3.5" r="2.5" fill="var(--honey-soft)" />
                <path d="M-1 1c-5 1-8 4-11 2" />
              </g>
              <text x="276" y="102" textAnchor="middle" fill="var(--sepia)" fontFamily="var(--font-mono)" fontSize="10" fontWeight="700">
                ATTIC &amp; EAVES
              </text>
            </g>

            {/* Bedrooms (2nd floor left) */}
            <g {...roomGroupProps('bedroom')}>
              <rect x="140" y="154" width="166" height="88" className="room-wash" stroke="var(--sepia)" strokeWidth="1.8" />
              {/* Bed & headboard */}
              <rect x="156" y="204" width="76" height="28" fill="var(--bg)" stroke="var(--sepia)" strokeWidth="1.3" />
              <rect x="156" y="192" width="10" height="40" fill="var(--band)" stroke="var(--sepia)" strokeWidth="1.3" />
              <rect x="168" y="198" width="22" height="10" rx="3" fill="var(--surface)" stroke="var(--sepia)" strokeWidth="1.1" />
              {/* Window */}
              <rect x="252" y="172" width="34" height="36" fill="var(--honey-soft)" stroke="var(--sepia)" strokeWidth="1.2" />
              <line x1="269" y1="172" x2="269" y2="208" stroke="var(--sepia)" strokeWidth="1" />
              <line x1="252" y1="190" x2="286" y2="190" stroke="var(--sepia)" strokeWidth="1" />
              {/* Bed-bug inspection marker by mattress seam */}
              <circle cx="204" cy="212" r="5" fill="var(--honey)" fillOpacity="0.35" stroke="var(--accent-ink)" strokeWidth="1.2" />
              <circle cx="204" cy="212" r="1.8" fill="var(--accent-ink)" />
              <text x="152" y="172" fill="var(--sepia)" fontFamily="var(--font-mono)" fontSize="10" fontWeight="700">
                BEDROOMS
              </text>
            </g>

            {/* Bathroom (2nd floor right) */}
            <g {...roomGroupProps('bathroom')}>
              <rect x="306" y="154" width="106" height="88" className="room-wash" stroke="var(--sepia)" strokeWidth="1.8" />
              {/* Clawfoot tub */}
              <path d="M322 214h56v12a10 10 0 0 1-10 10h-36a10 10 0 0 1-10-10v-12z" fill="var(--bg)" stroke="var(--sepia)" strokeWidth="1.3" />
              <path d="M326 214v-10a4 4 0 0 1 8 0" stroke="var(--sepia)" strokeWidth="1.2" />
              {/* Mirror & basin */}
              <rect x="386" y="180" width="16" height="22" rx="8" fill="var(--bg)" stroke="var(--sepia)" strokeWidth="1.1" />
              <path d="M384 212h20v8h-20z" fill="var(--bg)" stroke="var(--sepia)" strokeWidth="1.2" />
              {/* Silverfish darting near baseboard */}
              <path d="M342 192c4 0 8 1.5 11 3-3 1.5-7 3-11 3l-5-3 5-3z" fill="var(--accent-ink)" fillOpacity="0.6" />
              <text x="316" y="172" fill="var(--sepia)" fontFamily="var(--font-mono)" fontSize="10" fontWeight="700">
                BATHROOM
              </text>
            </g>

            {/* Kitchen (1st floor left — default selected) */}
            <g {...roomGroupProps('kitchen')}>
              <rect x="140" y="242" width="176" height="92" className="room-wash" stroke="var(--sepia)" strokeWidth="1.8" />
              {/* Upper cabinets */}
              <rect x="152" y="258" width="54" height="20" fill="var(--band)" stroke="var(--sepia)" strokeWidth="1.2" />
              <line x1="179" y1="258" x2="179" y2="278" stroke="var(--sepia)" strokeWidth="1" />
              {/* Counter, stove & sink */}
              <rect x="152" y="298" width="104" height="34" fill="var(--bg)" stroke="var(--sepia)" strokeWidth="1.3" />
              <path d="M214 298v-7a4 4 0 0 1 8 0v3" stroke="var(--sepia)" strokeWidth="1.2" />
              <line x1="188" y1="298" x2="188" y2="332" stroke="var(--sepia)" strokeWidth="1" />
              <line x1="224" y1="298" x2="224" y2="332" stroke="var(--sepia)" strokeWidth="1" />
              {/* Refrigerator */}
              <rect x="266" y="262" width="36" height="70" fill="var(--surface)" stroke="var(--sepia)" strokeWidth="1.3" />
              <line x1="266" y1="286" x2="302" y2="286" stroke="var(--sepia)" strokeWidth="1.2" />
              <line x1="272" y1="270" x2="272" y2="280" stroke="var(--sepia)" strokeWidth="1.2" />
              <line x1="272" y1="294" x2="272" y2="310" stroke="var(--sepia)" strokeWidth="1.2" />
              {/* Ant trail along kitchen counter */}
              <path d="M158 294h44" stroke="var(--accent-ink)" strokeWidth="1.1" strokeDasharray="2 3" />
              <circle cx="168" cy="294" r="1.8" fill="var(--accent-ink)" />
              <circle cx="182" cy="294" r="1.8" fill="var(--accent-ink)" />
              <circle cx="196" cy="294" r="1.8" fill="var(--accent-ink)" />
              <text x="152" y="255" fill="var(--sepia)" fontFamily="var(--font-mono)" fontSize="10" fontWeight="700">
                KITCHEN
              </text>
            </g>

            {/* Garage (1st floor right, attached wing) */}
            <g {...roomGroupProps('garage')}>
              <rect x="316" y="242" width="128" height="92" className="room-wash" stroke="var(--sepia)" strokeWidth="1.8" />
              {/* Garage roof slope */}
              <path d="M412 222l38 20h-38v-20z" fill="url(#wall-hatch)" stroke="var(--sepia)" strokeWidth="1.4" />
              {/* Corner spiderweb in garage */}
              <path d="M444 242l-24 14M444 242l-16 24M426 242c0 8 6 16 18 18" stroke="var(--accent-ink)" strokeOpacity="0.6" strokeWidth="1" />
              {/* Storage shelves & boxes */}
              <rect x="326" y="264" width="32" height="68" fill="var(--band)" stroke="var(--sepia)" strokeWidth="1.2" />
              <line x1="326" y1="286" x2="358" y2="286" stroke="var(--sepia)" strokeWidth="1.1" />
              <line x1="326" y1="308" x2="358" y2="308" stroke="var(--sepia)" strokeWidth="1.1" />
              {/* Parked car silhouette */}
              <path d="M368 320h66v-12l-10-14h-36l-10 14h-10v12z" fill="var(--bg)" stroke="var(--sepia)" strokeWidth="1.3" />
              <circle cx="384" cy="322" r="7" fill="var(--surface)" stroke="var(--sepia)" strokeWidth="1.3" />
              <circle cx="420" cy="322" r="7" fill="var(--surface)" stroke="var(--sepia)" strokeWidth="1.3" />
              <text x="328" y="257" fill="var(--sepia)" fontFamily="var(--font-mono)" fontSize="10" fontWeight="700">
                GARAGE
              </text>
            </g>

            {/* Crawlspace & foundation (underneath 1st floor) */}
            <g {...roomGroupProps('crawlspace')}>
              <rect x="140" y="334" width="304" height="52" className="room-wash" stroke="var(--sepia)" strokeWidth="1.8" />
              <rect x="140" y="334" width="304" height="52" fill="url(#wall-hatch)" fillOpacity="0.6" pointerEvents="none" />
              {/* Masonry piers + termite mud-tube sketch */}
              {[196, 286, 376].map(x => (
                <rect key={x} x={x} y="340" width="18" height="46" fill="var(--band)" stroke="var(--sepia)" strokeWidth="1.2" />
              ))}
              <path d="M214 386c2-12-3-22 2-36M218 386c1-10-2-20 1-32" stroke="var(--accent-ink)" strokeWidth="1.6" strokeLinecap="round" />
              <text x="292" y="366" textAnchor="middle" fill="var(--sepia)" fontFamily="var(--font-mono)" fontSize="10" fontWeight="700">
                CRAWLSPACE &amp; FOUNDATION
              </text>
            </g>
          </svg>
        </div>

        {/* Typewritten field-note card pinned beside the cutaway */}
        <div
          className="plate-frame lg:col-span-5"
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="eyebrow">Field note · Room check</p>
          <h3 className="mt-2 font-serif text-2xl text-ink">{selectedRoom.name}</h3>
          <p className="mt-1.5 font-mono text-sm text-sepia">
            Check: {selectedRoom.hint}
          </p>

          <div className="mt-5 border-t border-line pt-4">
            <p className="font-mono text-xs font-bold tracking-wider uppercase text-muted">
              Commonly found here ({roomPests.length})
            </p>
            <ul className="mt-3 space-y-3">
              {roomPests.map(pest => (
                <li
                  key={pest.id}
                  className="flex items-start justify-between gap-3 border-b border-line/60 pb-3 last:border-b-0 last:pb-0"
                >
                  <div>
                    <SiteLink
                      href={`/pests/#${pest.id}`}
                      className="font-serif text-lg text-ink hover:text-accent-ink"
                    >
                      {pest.name}
                    </SiteLink>
                    <p className="font-mono text-xs italic text-sepia">{pest.latin}</p>
                  </div>
                  <div className="shrink-0 text-right font-mono text-xs">
                    <span className="block font-bold text-ink">from ${pest.priceFrom}</span>
                    {pest.inSeason ? (
                      <span className="honey-tag mt-1">Active now</span>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 border-t border-line pt-4 flex flex-wrap items-center justify-between gap-3">
            <SiteLink href="/pests/" className="text-link font-mono text-xs uppercase tracking-wider">
              Open full field guide →
            </SiteLink>
            <SiteLink href="/contact/" className="button text-sm">
              Ask about this room
            </SiteLink>
          </div>
        </div>
      </div>

      {/* No-JS fallback: complete room-by-room reference list so nothing is hidden */}
      <noscript>
        <div className="plate-frame mt-8">
          <h3 className="font-serif text-xl text-ink">Room by room</h3>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            {rooms.map(room => {
              const matching = pests.filter(p => p.rooms.includes(room.id));
              return (
                <div key={room.id} className="border-t border-line pt-3">
                  <dt className="font-serif text-lg text-ink">{room.name}</dt>
                  <dd className="mt-1 text-sm text-muted">
                    <p className="font-mono text-xs text-sepia">{room.hint}</p>
                    <p className="mt-1">
                      {matching.map((pest, i) => (
                        <span key={pest.id}>
                          {i > 0 ? ', ' : ''}
                          <a href={documentHref(`/pests/#${pest.id}`)} className="text-link">
                            {pest.name}
                          </a>
                        </span>
                      ))}
                    </p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </noscript>
    </div>
  );
}
