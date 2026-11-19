import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import { Icon } from '../../components/art/icons';
import { ClipboardMagnifierMotif, PerimeterStitch, WaxGuaranteeSeal } from '../../components/art/motifs';
import { PageHead } from '../../components/page-head';
import { SiteLink } from '../../components/site-link';
import { business } from '../../content/business';
import { inspectionSteps, inspectionTypes } from '../../content/inspections';
import { pests } from '../../content/pests';
import { plans } from '../../content/plans';
import { absoluteUrl } from '../../lib/paths';

export const metadata: Metadata = {
  title: 'Inspections & plans',
  description:
    'What happens during a free Charlotte home pest inspection, WDI termite reports, seasonal protection plans and our come-back-free guarantee.',
  alternates: { canonical: absoluteUrl('/inspections/') },
};

const pestNameById = new Map(pests.map(p => [p.id, p.name]));

export default function InspectionsPage() {
  return (
    <>
      <PageHead
        eyebrow="Inspections & protection plans"
        title="Start with a look around"
        motif={<ClipboardMagnifierMotif className="h-16 w-28" />}
      >
        <p>
          Every treatment begins with an unhurried inspection so you know what is present, why it
          got in and what it will cost before we apply a drop of product.
        </p>
      </PageHead>

      {/* 1. Inspection walkthrough: alternating vertical timeline along perimeter stitch */}
      <section className="wrap py-8 sm:py-12" aria-labelledby="walkthrough-heading">
        <div className="max-w-2xl">
          <p className="eyebrow">Four steps · About 50 minutes total</p>
          <h2 id="walkthrough-heading" className="mt-2 font-serif text-[clamp(1.85rem,3.6vw,2.6rem)] text-ink">
            What happens during an inspection
          </h2>
        </div>

        <ol className="relative mt-10 space-y-8 md:space-y-10">
          {/* Center vertical perimeter stitch on desktop */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-4 bottom-4 left-5 border-l-2 border-dashed border-accent-ink/45 md:left-1/2 md:-translate-x-1/2"
          />
          {inspectionSteps.map((step, i) => {
            const leftSide = i % 2 === 0;
            return (
              <li
                key={step.id}
                className="relative grid items-center gap-4 pl-14 md:grid-cols-2 md:gap-12 md:pl-0"
              >
                {/* Knot marker */}
                <span
                  aria-hidden="true"
                  className="absolute top-3 left-0 flex h-10 w-10 items-center justify-center rounded-ui border border-accent-ink bg-surface font-mono text-xs font-bold text-accent-ink md:left-1/2 md:-translate-x-1/2"
                >
                  0{i + 1}
                </span>

                <div
                  className={`plate-frame p-5 sm:p-6 ${
                    leftSide ? 'md:col-start-1 md:text-right' : 'md:col-start-2'
                  }`}
                >
                  <p className="font-mono text-xs uppercase tracking-wider text-sepia">
                    Step 0{i + 1} · ~{step.minutes} minutes
                  </p>
                  <h3 className="mt-1 font-serif text-2xl text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <PerimeterStitch className="my-4" />

      {/* 2. Two inspection types as form-style "inspection slips" */}
      <section className="wrap py-8 sm:py-12" aria-labelledby="types-heading">
        <div className="max-w-2xl">
          <p className="eyebrow">Inspection slips</p>
          <h2 id="types-heading" className="mt-2 font-serif text-[clamp(1.85rem,3.6vw,2.6rem)] text-ink">
            Two kinds of inspection
          </h2>
          <p className="mt-2 text-muted">
            Homeowners and renters start free. Real-estate closings receive a signed North Carolina
            WDIR 100 report.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {inspectionTypes.map((item, idx) => (
            <article key={item.id} className="clipboard-sheet flex flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="flex items-start justify-between gap-4 border-b border-dashed border-line pb-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-sepia">
                      Form 0{idx + 1} · {item.turnaround}
                    </p>
                    <h3 className="mt-1 font-serif text-2xl text-ink">{item.name}</h3>
                  </div>
                  <span className="shrink-0 rounded-ui border border-line bg-bg px-3 py-1 font-mono text-lg font-bold text-ink">
                    {item.price === 0 ? '$0' : `$${item.price}`}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted">{item.summary}</p>

                <ul className="mt-5 space-y-2 border-t border-line/60 pt-4 font-mono text-xs text-ink">
                  {item.details.map(line => (
                    <li key={line} className="flex items-start gap-2">
                      <Icon name="shield-check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-2">
                <SiteLink href="/contact/" className="button w-full sm:w-auto">
                  {item.price === 0 ? 'Request a free inspection' : 'Enquire about a WDI report'}
                </SiteLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Protection plans as four tear-off service tickets */}
      <section
        className="border-y border-line bg-sage py-14 sm:py-20"
        style={{ '--ticket-cutout': 'var(--sage)' } as CSSProperties}
        aria-labelledby="plans-heading"
      >
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">Protection plans</p>
            <h2 id="plans-heading" className="mt-2 font-serif text-[clamp(1.85rem,3.6vw,2.6rem)] text-ink">
              Straightforward service tickets
            </h2>
            <p className="mt-2 text-muted">
              All plan prices are starting rates confirmed in writing after your inspection. Never
              locked into surprise add-ons.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {plans.map(plan => {
              const coveredNames =
                plan.covers === 'all'
                  ? 'Any pest in our field guide'
                  : plan.covers.map(id => pestNameById.get(id) ?? id).join(', ');

              return (
                <article
                  key={plan.id}
                  className={`service-ticket flex flex-col justify-between ${
                    plan.recommended ? 'service-ticket-recommended xl:-translate-y-2' : ''
                  }`}
                >
                  {/* Ticket main body */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[0.7rem] uppercase tracking-widest text-sepia">
                        {plan.visitsPerYear} {plan.visitsPerYear === 1 ? 'visit / yr' : 'visits / yr'}
                      </span>
                      {plan.recommended ? (
                        <span className="honey-tag">Most chosen</span>
                      ) : null}
                    </div>

                    <h3 className="mt-3 font-serif text-2xl text-ink">{plan.name}</h3>

                    <div className="mt-3 border-y border-line/70 py-3 font-mono">
                      {plan.price === null ? (
                        <p className="text-xs leading-snug text-sepia">
                          Priced per pest —{' '}
                          <SiteLink href="/pests/" className="text-link font-bold">
                            see the field guide
                          </SiteLink>
                        </p>
                      ) : (
                        <p className="text-ink">
                          <span className="text-xs uppercase text-muted">from </span>
                          <span className="text-2xl font-bold">${plan.price}</span>
                          <span className="text-xs text-sepia"> / {plan.per}</span>
                        </p>
                      )}
                    </div>

                    <ul className="mt-4 space-y-2 text-sm text-muted">
                      {plan.includes.map(item => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-ink" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Perforated stub */}
                  <div className="ticket-perforation bg-bg/60 p-5">
                    <p className="font-mono text-[0.68rem] font-bold uppercase tracking-wider text-sepia">
                      Covers
                    </p>
                    <p className="mt-1 font-mono text-xs leading-relaxed text-ink">
                      {coveredNames}
                    </p>
                    <div className="mt-4">
                      <SiteLink
                        href="/contact/"
                        className={`w-full justify-center text-sm ${
                          plan.recommended ? 'button' : 'button button-quiet'
                        }`}
                      >
                        Ask about {plan.name}
                      </SiteLink>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Full guarantee terms beside large wax seal */}
      <section id="guarantee" className="wrap py-16 sm:py-20" aria-labelledby="full-guarantee-heading">
        <div className="certificate-card grid items-center gap-8 p-6 sm:p-10 md:grid-cols-12">
          <div className="flex justify-center md:col-span-4">
            <WaxGuaranteeSeal className="h-36 w-36 sm:h-40 sm:w-40" />
          </div>
          <div className="md:col-span-8">
            <p className="eyebrow">The Greenshield guarantee</p>
            <h2 id="full-guarantee-heading" className="mt-2 font-serif text-3xl text-ink">
              Come back free, in plain English
            </h2>
            <p className="mt-4 font-serif text-xl leading-snug text-ink">
              “{business.guarantee.statement}”
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>{business.guarantee.oneTime}</li>
              <li>{business.guarantee.termiteBond}</li>
              <li>
                No fine-print trip fees: call or send a note if covered pests reappear and we
                arrange a follow-up visit at no additional charge.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. CTA band */}
      <section className="wrap pb-8" aria-labelledby="inspections-cta-heading">
        <div className="plate-frame flex flex-col items-start justify-between gap-6 bg-band/70 p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="max-w-xl">
            <h2 id="inspections-cta-heading" className="font-serif text-2xl text-ink">
              Not sure which plan fits your home?
            </h2>
            <p className="mt-1.5 text-muted">
              Start with a free home inspection. We inspect first and give you written options with
              no obligation.
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
