import type { Pest } from './pests.ts';

export type BillingPeriod = 'visit' | 'quarter' | 'year';

/** Protection plans displayed as tear-off service tickets on /inspections/. */
export interface Plan {
  /** URL-safe, unique identifier. */
  id: string;
  /** Plan title printed on the service ticket. */
  name: string;
  /** Starting price in whole USD, or null when priced per pest. */
  price: number | null;
  /** Billing period printed beside the price. */
  per: BillingPeriod;
  /** Number of scheduled visits per year. */
  visitsPerYear: number;
  /** Pest IDs from content/pests.ts covered by the plan, or 'all' for one-off treatments. */
  covers: readonly string[] | 'all';
  /** Short bullet points printed on the ticket body. */
  includes: readonly string[];
  /** At most one plan may be marked recommended ("Most chosen"). */
  recommended: boolean;
}

export const plans: readonly Plan[] = [
  {
    id: 'one-time',
    name: 'One-time treatment',
    price: null,
    per: 'visit',
    visitsPerYear: 1,
    covers: 'all',
    includes: [
      'Targeted treatment for a single pest problem',
      'Written findings from your inspection',
      '30-day re-treatment guarantee on the treated pest',
    ],
    recommended: false,
  },
  {
    id: 'haven-quarterly',
    name: 'Haven Quarterly',
    price: 129,
    per: 'quarter',
    visitsPerYear: 4,
    covers: ['ant', 'cockroach', 'spider', 'silverfish', 'mouse', 'carpenter-ant'],
    includes: [
      'Four seasonal exterior & crack-and-crevice visits a year',
      'Cobweb brushing on eaves, porch lights and windowsills',
      'Unlimited come-back-free visits between quarters',
    ],
    recommended: true,
  },
  {
    id: 'yard-season',
    name: 'Yard Season (Apr–Oct)',
    price: 69,
    per: 'visit',
    visitsPerYear: 7,
    covers: ['mosquito', 'tick', 'yellowjacket'],
    includes: [
      'Seven monthly visits from April through October',
      'Standing-water checks and shaded foliage misting',
      'Re-treatment between visits if biting picks back up',
    ],
    recommended: false,
  },
  {
    id: 'termite-bond',
    name: 'Termite Bond',
    price: 395,
    per: 'year',
    visitsPerYear: 4,
    covers: ['termite'],
    includes: [
      'In-ground perimeter bait stations monitored every quarter',
      'Annual crawlspace and foundation sill-plate inspection',
      'Re-treatment and repair coverage up to $100,000 (sample)',
    ],
    recommended: false,
  },
] as const;

const URL_SAFE_ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ALLOWED_PERIODS = new Set<BillingPeriod>(['visit', 'quarter', 'year']);

export function validatePlans(items: readonly Plan[], validPests: readonly Pest[]): void {
  const pestIds = new Set(validPests.map(p => p.id));
  const seen = new Set<string>();
  let recommendedCount = 0;

  for (const plan of items) {
    const label = plan.id || '(missing id)';
    if (!URL_SAFE_ID.test(plan.id)) {
      throw new Error(`plans[${label}]: id must be lowercase and URL-safe`);
    }
    if (seen.has(plan.id)) {
      throw new Error(`plans[${plan.id}]: duplicate plan id`);
    }
    seen.add(plan.id);

    if (!plan.name.trim()) throw new Error(`plans[${plan.id}]: name is required`);
    if (plan.price !== null && (!Number.isInteger(plan.price) || plan.price <= 0)) {
      throw new Error(`plans[${plan.id}]: price must be a positive integer in USD or null`);
    }
    if (!ALLOWED_PERIODS.has(plan.per)) {
      throw new Error(`plans[${plan.id}]: invalid billing period "${plan.per}"`);
    }
    if (!Number.isInteger(plan.visitsPerYear) || plan.visitsPerYear <= 0) {
      throw new Error(`plans[${plan.id}]: visitsPerYear must be a positive integer`);
    }
    if (plan.covers !== 'all') {
      if (!plan.covers.length) {
        throw new Error(`plans[${plan.id}]: covers must list at least one pest id or "all"`);
      }
      for (const pestId of plan.covers) {
        if (!pestIds.has(pestId)) {
          throw new Error(`plans[${plan.id}]: unknown covered pest "${pestId}"`);
        }
      }
    }
    if (!plan.includes.length || plan.includes.some(item => !item.trim())) {
      throw new Error(`plans[${plan.id}]: includes must contain non-empty items`);
    }
    if (plan.recommended) recommendedCount++;
  }

  if (recommendedCount > 1) {
    throw new Error(`plans: at most one plan may be recommended, found ${recommendedCount}`);
  }
}
