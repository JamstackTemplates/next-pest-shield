import type { Metadata } from 'next';
import { Icon } from '../../components/art/icons';
import { LeafShieldMotif, PerimeterStitch } from '../../components/art/motifs';
import { PestSpecimen } from '../../components/art/specimens';
import { PageHead } from '../../components/page-head';
import { PrintChecklistButton } from '../../components/print-checklist-button';
import { SiteLink } from '../../components/site-link';
import { formatReEntry, pests } from '../../content/pests';
import { absoluteUrl } from '../../lib/paths';

export const metadata: Metadata = {
  title: 'Safe at home',
  description:
    'How Greenshield chooses and places pest treatments around children and pets, a printable pre-visit checklist and exact re-entry times for every pest.',
  alternates: { canonical: absoluteUrl('/safe-at-home/') },
};

const PREP_ITEMS = [
  'Put away open food, pet bowls, water dishes and children’s floor toys in rooms being checked.',
  'Move items a foot or two away from baseboards in rooms where you have seen activity.',
  'Cover fish tanks and switch off aquarium air pumps if an interior liquid treatment is planned.',
  'Let us know if anyone in the home is pregnant, has asthma or has sensitivities so we adjust placement.',
  'Plan a short walk or porch break with pets if your treatment carries a 1- to 4-hour re-entry window.',
  'Leave any recent pest sightings or droppings undisturbed until your technician can inspect them.',
] as const;

export default function SafeAtHomePage() {
  return (
    <>
      <PageHead
        eyebrow="Family & pet care"
        title="Careful by design"
        motif={<LeafShieldMotif className="h-16 w-28" />}
      >
        <p>
          How we choose products, where we place them and when children, dogs and cats can return
          to treated areas. Every re-entry time below comes straight from our treatment schedule.
        </p>
      </PageHead>

      {/* 1. Three commitments as a horizontal triptych of framed plates */}
      <section className="wrap py-8 sm:py-12" aria-labelledby="commitments-heading">
        <div className="max-w-2xl">
          <p className="eyebrow">Three working rules</p>
          <h2 id="commitments-heading" className="mt-2 font-serif text-[clamp(1.85rem,3.6vw,2.6rem)] text-ink">
            How we keep treatments measured
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="plate-frame flex flex-col p-6">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-sepia">Rule 01</span>
              <span className="rounded-ui bg-sage p-2.5 text-accent-ink">
                <Icon name="leaf" className="h-7 w-7" />
              </span>
            </div>
            <h3 className="mt-5 font-serif text-2xl text-ink">Least-product-first</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">
              We fix entry gaps, standing water and harbourage first. When treatment is needed, we
              start with targeted baits and mechanical stations before considering liquid sprays.
            </p>
          </article>

          <article className="plate-frame flex flex-col p-6">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-sepia">Rule 02</span>
              <span className="rounded-ui bg-sage p-2.5 text-accent-ink">
                <Icon name="shield-check" className="h-7 w-7" />
              </span>
            </div>
            <h3 className="mt-5 font-serif text-2xl text-ink">Label-directed by licensed technicians</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">
              Every product is EPA-registered and applied strictly by its label directions by a
              North Carolina licensed technician. We leave a written product sheet after every visit.
            </p>
          </article>

          <article className="plate-frame flex flex-col p-6">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-sepia">Rule 03</span>
              <span className="inline-flex items-center gap-1.5 rounded-ui bg-sage p-2.5 text-accent-ink">
                <Icon name="child" className="h-6 w-6" />
                <Icon name="paw" className="h-6 w-6" />
              </span>
            </div>
            <h3 className="mt-5 font-serif text-2xl text-ink">Placed out of reach</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">
              Gel baits are tucked into cracks, hinges and wall voids. Rodent stations lock shut
              and anchor down. Exterior bands dry before children or pets step onto treated beds.
            </p>
          </article>
        </div>
      </section>

      {/* 2. Before-the-visit checklist (printable clipboard sheet) */}
      <section
        className="prep-checklist-print wrap py-8 sm:py-12"
        aria-labelledby="checklist-heading"
      >
        <div className="clipboard-sheet mx-auto max-w-3xl p-6 sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-dashed border-line pb-5">
            <div>
              <p className="eyebrow">Printable household sheet</p>
              <h2 id="checklist-heading" className="mt-1.5 font-serif text-2xl sm:text-3xl text-ink">
                Before-the-visit checklist
              </h2>
              <p className="mt-1 text-sm text-muted">
                Five minutes of prep helps your technician inspect thoroughly and treat only where needed.
              </p>
            </div>
            <PrintChecklistButton />
          </div>

          <ul className="mt-6 space-y-3.5">
            {PREP_ITEMS.map(item => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink sm:text-base">
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block h-4 w-4 shrink-0 rounded-[2px] border-[1.5px] border-sepia bg-bg"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 border-t border-line pt-4 font-mono text-xs text-sepia">
            Greenshield Pest Control · Charlotte, NC · Questions before your visit? Call (704) 555-0182.
          </p>
        </div>
      </section>

      <PerimeterStitch className="my-4" />

      {/* 3. Re-entry table derived directly from content/pests.ts */}
      <section className="wrap py-8 sm:py-12" aria-labelledby="reentry-heading">
        <div className="max-w-2xl">
          <p className="eyebrow">Field-guide index · Derived from treatments</p>
          <h2 id="reentry-heading" className="mt-2 font-serif text-[clamp(1.85rem,3.6vw,2.6rem)] text-ink">
            Re-entry times for people and pets
          </h2>
          <p className="mt-2 text-muted">
            When a treatment uses enclosed baits or locked stations, there is no need to leave the
            room. Liquid or dust applications need time to dry or settle first.
          </p>
        </div>

        <div className="plate-frame mt-8 overflow-x-auto p-0">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="sr-only">
              Re-entry times for people and pets by pest treatment
            </caption>
            <thead>
              <tr className="border-b border-line bg-band/70 font-mono text-xs uppercase tracking-wider text-sepia">
                <th scope="col" className="py-3.5 pl-5 pr-3">Specimen</th>
                <th scope="col" className="px-3 py-3.5">Pest</th>
                <th scope="col" className="px-3 py-3.5">People &amp; pets re-entry</th>
                <th scope="col" className="py-3.5 pl-3 pr-5">Typical method</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/70">
              {pests.map(pest => (
                <tr key={pest.id} className="hover:bg-bg/60">
                  <td className="py-2.5 pl-5 pr-3">
                    <PestSpecimen id={pest.id} className="h-11 w-11" />
                  </td>
                  <th scope="row" className="px-3 py-2.5 font-normal">
                    <SiteLink href={`/pests/#${pest.id}`} className="font-serif text-base text-ink hover:text-accent-ink">
                      {pest.name}
                    </SiteLink>
                    <span className="block font-mono text-xs italic text-sepia">{pest.latin}</span>
                  </th>
                  <td className="px-3 py-2.5 font-mono text-xs font-bold text-ink">
                    <span
                      className={`inline-block rounded-ui px-2.5 py-1 ${
                        pest.reEntryHours === 0
                          ? 'bg-sage text-accent-ink'
                          : 'bg-honey-soft text-ink'
                      }`}
                    >
                      {formatReEntry(pest.reEntryHours)}
                    </span>
                  </td>
                  <td className="py-2.5 pl-3 pr-5 text-xs text-muted">{pest.treatment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Honest-wording footnote */}
        <p className="mt-6 max-w-3xl border-l-2 border-sepia pl-4 font-mono text-xs leading-relaxed text-sepia">
          Note on wording: We avoid broad safety slogans because every registered pest control
          product has a federal label and specific handling rules. We prefer to give you exact
          product names, placement details and dry-time windows so you can decide comfortably for
          your household.
        </p>
      </section>

      {/* 4. CTA */}
      <section className="wrap py-8" aria-labelledby="safe-cta-heading">
        <div className="plate-frame flex flex-col items-start justify-between gap-6 bg-sage/65 p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="max-w-xl">
            <h2 id="safe-cta-heading" className="font-serif text-2xl text-ink">
              Have a baby, curious dog or sensitive household member?
            </h2>
            <p className="mt-1.5 text-muted">
              Mention it in your inspection request. We will talk through exact product choices and
              re-entry times before anything is applied.
            </p>
          </div>
          <SiteLink href="/contact/" className="button shrink-0">
            Book a free inspection
          </SiteLink>
        </div>
      </section>
    </>
  );
}
