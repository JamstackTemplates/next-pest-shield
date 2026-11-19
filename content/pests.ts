import type { Room } from './rooms.ts';

export const PEST_GROUPS = [
  { id: 'crawling', label: 'Crawling' },
  { id: 'flying', label: 'Flying & stinging' },
  { id: 'biting', label: 'Biting' },
  { id: 'wood', label: 'Wood-destroying' },
  { id: 'rodents', label: 'Rodents' },
] as const;

export type PestGroup = typeof PEST_GROUPS[number]['id'];

const ALLOWED_GROUPS = new Set<string>(PEST_GROUPS.map(g => g.id));

/**
 * A pest treated by Greenshield.
 * Frequent owner edits: toggle `inSeason` for the "Active now" tag, or update `priceFrom`.
 */
export interface Pest {
  /** URL-safe, unique identifier; also used as the plate anchor (#ant) on /pests/. */
  id: string;
  /** Common name printed on the specimen plate. */
  name: string;
  /** Scientific name printed in italics on the specimen plate. */
  latin: string;
  /** Field-guide group used for filtering and section headings on /pests/. */
  group: PestGroup;
  /** Room IDs from content/rooms.ts where this pest is typically found. */
  rooms: readonly string[];
  /** Two or three short field signs a homeowner may spot. */
  signs: readonly string[];
  /** One sentence describing how Greenshield treats this pest. */
  treatment: string;
  /** Typical number of initial treatment visits. */
  visits: number;
  /** Optional follow-up note (for example quarterly bait monitoring). */
  visitsNote?: string;
  /** Hours before people and pets return to treated areas; 0 means no need to leave. */
  reEntryHours: number;
  /** Starting price in whole US dollars for a one-off treatment. */
  priceFrom: number;
  /** Shows the "Active now" honey tag on specimen plates when true. */
  inSeason: boolean;
  /** Controls which plates appear in the Home page's "Common visitors" case (3 to 6). */
  featured: boolean;
}

export const pests: readonly Pest[] = [
  {
    id: 'ant',
    name: 'Odorous house ant',
    latin: 'Tapinoma sessile',
    group: 'crawling',
    rooms: ['kitchen', 'bathroom', 'yard'],
    signs: ['Steady trails along counters and sinks', 'A rotten-coconut smell when crushed'],
    treatment: 'Gel baits placed in cracks the colony carries home, with no broadcast spraying indoors.',
    visits: 2,
    reEntryHours: 0,
    priceFrom: 149,
    inSeason: true,
    featured: true,
  },
  {
    id: 'carpenter-ant',
    name: 'Carpenter ant',
    latin: 'Camponotus pennsylvanicus',
    group: 'wood',
    rooms: ['attic', 'crawlspace', 'yard'],
    signs: ['Large black workers foraging at dusk', 'Fine sawdust piles near damp trim or rafters'],
    treatment: 'Targeted void dusting and exterior perimeter baiting to reach the parent nest.',
    visits: 2,
    reEntryHours: 2,
    priceFrom: 229,
    inSeason: true,
    featured: false,
  },
  {
    id: 'cockroach',
    name: 'German cockroach',
    latin: 'Blattella germanica',
    group: 'crawling',
    rooms: ['kitchen', 'bathroom'],
    signs: ['Small tan roaches scattering when lights switch on', 'Pepper-like specks in cabinet hinges'],
    treatment: 'Crack-and-crevice gel baits paired with an insect growth regulator behind appliances.',
    visits: 2,
    reEntryHours: 2,
    priceFrom: 189,
    inSeason: false,
    featured: true,
  },
  {
    id: 'termite',
    name: 'Eastern subterranean termite',
    latin: 'Reticulitermes flavipes',
    group: 'wood',
    rooms: ['crawlspace', 'garage'],
    signs: ['Pencil-wide mud tubes on foundation walls', 'Discarded translucent wings by windows in spring'],
    treatment: 'In-ground bait stations around the perimeter, checked and replenished each quarter.',
    visits: 1,
    visitsNote: 'plus quarterly monitoring',
    reEntryHours: 0,
    priceFrom: 695,
    inSeason: false,
    featured: true,
  },
  {
    id: 'mouse',
    name: 'House mouse',
    latin: 'Mus musculus',
    group: 'rodents',
    rooms: ['kitchen', 'attic', 'garage'],
    signs: ['Dark, pointed droppings along pantry edges', 'Chewed cardboard or scratching inside walls at night'],
    treatment: 'Tamper-resistant snap stations placed out of reach, paired with sealing entry gaps.',
    visits: 2,
    reEntryHours: 0,
    priceFrom: 249,
    inSeason: false,
    featured: true,
  },
  {
    id: 'roof-rat',
    name: 'Roof rat',
    latin: 'Rattus rattus',
    group: 'rodents',
    rooms: ['attic', 'yard'],
    signs: ['Scurrying above bedroom ceilings after sunset', 'Gnawed soffit screens or hollowed-out fruit outdoors'],
    treatment: 'Attic trapping and exterior exclusion at soffits, vents and overhanging branches.',
    visits: 3,
    reEntryHours: 0,
    priceFrom: 299,
    inSeason: false,
    featured: false,
  },
  {
    id: 'bed-bug',
    name: 'Bed bug',
    latin: 'Cimex lectularius',
    group: 'biting',
    rooms: ['bedroom'],
    signs: ['Rust-coloured spots along mattress seams', 'Flat, apple-seed-sized insects tucked into headboard joints'],
    treatment: 'Steaming and label-directed crack treatment of bed frames, baseboards and outlets.',
    visits: 2,
    reEntryHours: 4,
    priceFrom: 450,
    inSeason: false,
    featured: false,
  },
  {
    id: 'mosquito',
    name: 'Asian tiger mosquito',
    latin: 'Aedes albopictus',
    group: 'flying',
    rooms: ['yard'],
    signs: ['Black-and-white striped mosquitoes biting in daylight', 'Larvae in clogged gutters, saucers or shaded buckets'],
    treatment: 'Standing-water larvicide and misting of shady foliage where adult mosquitoes rest.',
    visits: 1,
    reEntryHours: 1,
    priceFrom: 89,
    inSeason: true,
    featured: true,
  },
  {
    id: 'tick',
    name: 'Lone star tick',
    latin: 'Amblyomma americanum',
    group: 'biting',
    rooms: ['yard'],
    signs: ['Ticks picked up along wooded edges or tall grass', 'Pale dot on the back of adult females'],
    treatment: 'Granular and band treatment along mulch borders, shaded beds and woodlines.',
    visits: 1,
    reEntryHours: 1,
    priceFrom: 99,
    inSeason: true,
    featured: false,
  },
  {
    id: 'yellowjacket',
    name: 'Eastern yellowjacket',
    latin: 'Vespula maculifrons',
    group: 'flying',
    rooms: ['yard', 'attic'],
    signs: ['Steady flight traffic into a lawn hole or soffit gap', 'Paper comb tucked behind eaves or wall voids'],
    treatment: 'Direct nest dusting at low-activity hours followed by removal of exposed paper combs.',
    visits: 1,
    reEntryHours: 1,
    priceFrom: 175,
    inSeason: true,
    featured: true,
  },
  {
    id: 'spider',
    name: 'Southern black widow',
    latin: 'Latrodectus mactans',
    group: 'crawling',
    rooms: ['garage', 'crawlspace'],
    signs: ['Tangled, irregular cobwebs low to the floor', 'Glossy black spider with a red underside hourglass'],
    treatment: 'Web removal, perimeter crack treatment and harborage reduction around storage and sills.',
    visits: 1,
    reEntryHours: 1,
    priceFrom: 139,
    inSeason: false,
    featured: false,
  },
  {
    id: 'silverfish',
    name: 'Silverfish',
    latin: 'Lepisma saccharinum',
    group: 'crawling',
    rooms: ['bathroom', 'attic'],
    signs: ['Teardrop-shaped silvery insects darting from damp baseboards', 'Notched edges on stored books or wallpaper'],
    treatment: 'Desiccant dust in wall voids and moisture advice for bathrooms and attic storage.',
    visits: 1,
    reEntryHours: 1,
    priceFrom: 129,
    inSeason: false,
    featured: false,
  },
] as const;

export function formatReEntry(hours: number): string {
  if (hours === 0) return 'No need to leave';
  return hours === 1 ? '1 hour' : `${hours} hours`;
}

export function formatVisits(pest: Pick<Pest, 'visits' | 'visitsNote'>): string {
  const base = pest.visits === 1 ? '1 visit' : `${pest.visits} visits`;
  return pest.visitsNote ? `${base} ${pest.visitsNote}` : base;
}

export function groupLabel(group: PestGroup): string {
  return PEST_GROUPS.find(g => g.id === group)?.label ?? group;
}

const URL_SAFE_ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function validatePests(items: readonly Pest[], validRooms: readonly Room[]): void {
  const roomIds = new Set(validRooms.map(r => r.id));
  const seen = new Set<string>();
  let featuredCount = 0;

  for (const pest of items) {
    const label = pest.id || '(missing id)';
    if (!URL_SAFE_ID.test(pest.id)) {
      throw new Error(`pests[${label}]: id must be lowercase and URL-safe`);
    }
    if (seen.has(pest.id)) {
      throw new Error(`pests[${pest.id}]: duplicate pest id`);
    }
    seen.add(pest.id);

    if (!pest.name.trim()) throw new Error(`pests[${pest.id}]: name is required`);
    if (!pest.latin.trim()) throw new Error(`pests[${pest.id}]: latin name is required`);
    if (!ALLOWED_GROUPS.has(pest.group)) {
      throw new Error(`pests[${pest.id}]: group "${pest.group}" is not in the allowed set`);
    }
    if (!pest.rooms.length) {
      throw new Error(`pests[${pest.id}]: must list at least one room`);
    }
    for (const roomId of pest.rooms) {
      if (!roomIds.has(roomId)) {
        throw new Error(`pests[${pest.id}]: unknown room "${roomId}"`);
      }
    }
    if (pest.signs.length < 2 || pest.signs.length > 3 || pest.signs.some(s => !s.trim())) {
      throw new Error(`pests[${pest.id}]: must have 2 to 3 non-empty signs`);
    }
    if (!pest.treatment.trim()) {
      throw new Error(`pests[${pest.id}]: treatment is required`);
    }
    if (!Number.isInteger(pest.visits) || pest.visits <= 0) {
      throw new Error(`pests[${pest.id}]: visits must be a positive integer`);
    }
    if (!Number.isInteger(pest.reEntryHours) || pest.reEntryHours < 0 || pest.reEntryHours > 24) {
      throw new Error(`pests[${pest.id}]: reEntryHours must be an integer from 0 to 24`);
    }
    if (!Number.isInteger(pest.priceFrom) || pest.priceFrom <= 0) {
      throw new Error(`pests[${pest.id}]: priceFrom must be a positive integer in USD`);
    }
    if (pest.featured) featuredCount++;
  }

  if (featuredCount < 3 || featuredCount > 6) {
    throw new Error(`pests: expected between 3 and 6 featured pests, found ${featuredCount}`);
  }
}
