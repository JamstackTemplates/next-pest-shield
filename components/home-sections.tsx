import type { ReactNode } from 'react';
import { business, phoneHref } from '../content/business';
import type { InspectionStep } from '../content/inspections';
import type { Pest } from '../content/pests';
import type { Room } from '../content/rooms';
import { HeroScene } from './art/hero-scene';
import { HouseCutaway } from './art/house-cutaway';
import { Icon, type IconName } from './art/icons';
import {
  AntTrailBanner,
  CornerSpiderweb,
  HatchedHedgeBand,
  PerimeterStitch,
  PestSilhouetteStrip,
  SealedMouseHole,
  WaxGuaranteeSeal,
} from './art/motifs';
import { PestSpecimen } from './art/specimens';
import { OpenBadge } from './open-badge';
import { PhoneHoursTable } from './phone-hours-table';
import { ServiceAreaRing } from './service-area-ring';
import { SiteLink } from './site-link';
import { SpecimenPlate } from './specimen-plate';

type Children = { children: ReactNode };

/* -------------------------------------------------------------------------- */
/* 1. Hero                                                                    */
/* -------------------------------------------------------------------------- */

function HeroRoot({
  headline,
  introduction,
  primaryAction,
  secondaryAction,
  trustMarks,
}: {
  headline: ReactNode;
  introduction: ReactNode;
  primaryAction: ReactNode;
  secondaryAction: ReactNode;
  trustMarks: readonly string[];
}) {
  return (
    <section className="overflow-x-clip pt-5 pb-10 sm:pt-8 lg:pt-6 lg:pb-14">
      <div className="wrap grid items-center gap-5 lg:grid-cols-12 lg:gap-8">
        {/* Mobile: Headline first, then art, then intro & CTA */}
        <div className="lg:col-span-5 lg:row-start-1">
          <div className="hidden lg:block mb-3">
            <OpenBadge hours={business.phoneHours} />
          </div>
          <h1 className="font-serif text-[clamp(2.35rem,6vw,4.1rem)] leading-[1.03] tracking-tight text-ink">
            {headline}
          </h1>
        </div>

        {/* Hero art: cropped cleanly at ~240px on mobile so headline + art + CTA fit first screen */}
        <div className="lg:col-span-7 lg:row-span-2 lg:-mr-10 xl:-mr-16">
          <div className="relative mx-auto overflow-hidden rounded-ui border border-line/70 bg-surface/40 lg:border-0 lg:bg-transparent">
            <div className="max-h-[240px] overflow-hidden sm:max-h-[340px] lg:max-h-none">
              <HeroScene className="w-full h-auto -mt-3 sm:mt-0" />
            </div>
          </div>
        </div>

        {/* Intro, actions, badge (mobile) and trust marks */}
        <div className="lg:col-span-5 lg:row-start-2 lg:-mt-4">
          <p className="max-w-xl text-[1.04rem] leading-relaxed text-muted sm:text-lg">
            {introduction}
          </p>

          <PestSilhouetteStrip className="mt-4" />

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <SiteLink href="/contact/" className="button w-full sm:w-auto">
              {primaryAction}
            </SiteLink>
            <a
              href={phoneHref(business.phone)}
              className="button button-quiet w-full sm:w-auto font-mono text-sm"
            >
              <Icon name="phone" className="h-4 w-4" />
              <span>{secondaryAction}</span>
            </a>
          </div>

          <div className="mt-4 lg:hidden">
            <OpenBadge hours={business.phoneHours} />
          </div>

          <ul
            aria-label="Key assurances"
            className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-dashed border-line pt-4 font-mono text-xs text-sepia"
          >
            {trustMarks.map(mark => (
              <li key={mark} className="inline-flex items-center gap-1.5">
                <Icon name="shield-check" className="h-3.5 w-3.5 text-accent-ink" />
                <span>{mark}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. Cutaway Band                                                            */
/* -------------------------------------------------------------------------- */

function CutawayBand({
  eyebrow,
  heading,
  intro,
  rooms,
  pests,
}: {
  eyebrow: ReactNode;
  heading: ReactNode;
  intro: ReactNode;
  rooms: readonly Room[];
  pests: readonly Pest[];
}) {
  return (
    <section
      id="house-cutaway"
      aria-labelledby="cutaway-heading"
      className="relative overflow-hidden border-y border-line bg-sage py-14 sm:py-20"
    >
      <CornerSpiderweb className="pointer-events-none absolute top-0 left-0 hidden h-28 w-28 lg:block" />
      <CornerSpiderweb flip className="pointer-events-none absolute top-0 right-0 hidden h-28 w-28 lg:block" />
      <div className="wrap relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id="cutaway-heading" className="mt-2 font-serif text-[clamp(1.9rem,4vw,2.85rem)] leading-tight text-ink">
            {heading}
          </h2>
          <p className="mt-3 text-muted">{intro}</p>
        </div>

        <div className="mt-8">
          <HouseCutaway rooms={rooms} pests={pests} />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. Common Visitors (Specimen Case)                                         */
/* -------------------------------------------------------------------------- */

function SpecimenCaseSection({
  eyebrow,
  heading,
  intro,
  linkLabel,
  pests,
}: {
  eyebrow: ReactNode;
  heading: ReactNode;
  intro: ReactNode;
  linkLabel: ReactNode;
  pests: readonly Pest[];
}) {
  return (
    <section aria-labelledby="visitors-heading" className="bg-bg py-16 sm:py-20">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">{eyebrow}</p>
            <h2 id="visitors-heading" className="mt-2 font-serif text-[clamp(1.9rem,4vw,2.85rem)] leading-tight text-ink">
              {heading}
            </h2>
            <p className="mt-2.5 text-muted">{intro}</p>
          </div>
          <SiteLink href="/pests/" className="button button-quiet shrink-0">
            {linkLabel}
          </SiteLink>
        </div>

        <div className="plate-frame specimen-grid mt-8 p-5 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pests.map((pest, index) => (
              <SpecimenPlate key={pest.id} pest={pest} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 4. Safe for the Whole Household (Dark Crest-Green Band)                    */
/* -------------------------------------------------------------------------- */

function SafetyBand({
  eyebrow,
  heading,
  intro,
  linkLabel,
  commitments,
}: {
  eyebrow: ReactNode;
  heading: ReactNode;
  intro: ReactNode;
  linkLabel: ReactNode;
  commitments: readonly { title: string; body: string }[];
}) {
  return (
    <section aria-labelledby="safety-heading">
      <HatchedHedgeBand />
      <div className="bg-crest-bg py-16 text-crest-ink sm:py-20">
        <div className="wrap grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 rounded-ui border border-crest-line bg-crest-surface px-4 py-3 text-honey">
              <Icon name="child" className="h-8 w-8" />
              <span className="h-6 w-px bg-crest-line" aria-hidden="true" />
              <Icon name="paw" className="h-8 w-8" />
              <span className="h-6 w-px bg-crest-line" aria-hidden="true" />
              <Icon name="bait-station" className="h-8 w-8" />
            </div>
            <p className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.16em] text-honey">
              {eyebrow}
            </p>
            <h2 id="safety-heading" className="mt-2 font-serif text-[clamp(1.9rem,4vw,2.85rem)] leading-tight text-crest-ink">
              {heading}
            </h2>
            <p className="mt-4 text-crest-muted">{intro}</p>
            <div className="mt-6">
              <SiteLink href="/safe-at-home/" className="button button-on-crest">
                {linkLabel}
              </SiteLink>
            </div>
          </div>

          <ol className="space-y-6 lg:col-span-7">
            {commitments.map((item, i) => (
              <li
                key={item.title}
                className="grid grid-cols-[auto_1fr] gap-5 border-t border-dashed border-crest-line pt-6 first:border-t-0 first:pt-0"
              >
                <span className="font-serif text-4xl leading-none text-honey sm:text-5xl">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-crest-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-crest-muted sm:text-base">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 5. How a Visit Works (Perimeter Stitch Steps)                              */
/* -------------------------------------------------------------------------- */

const STEP_ICONS: readonly IconName[] = ['clipboard', 'magnifier', 'bait-station', 'shield-check'];

function VisitStepsSection({
  eyebrow,
  heading,
  intro,
  linkLabel,
  steps,
}: {
  eyebrow: ReactNode;
  heading: ReactNode;
  intro: ReactNode;
  linkLabel: ReactNode;
  steps: readonly InspectionStep[];
}) {
  return (
    <section aria-labelledby="visit-heading" className="bg-bg py-16 sm:py-20">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">{eyebrow}</p>
            <h2 id="visit-heading" className="mt-2 font-serif text-[clamp(1.9rem,4vw,2.85rem)] leading-tight text-ink">
              {heading}
            </h2>
            <p className="mt-2.5 text-muted">{intro}</p>
          </div>
          <SiteLink href="/inspections/" className="text-link font-mono text-xs uppercase tracking-wider">
            {linkLabel}
          </SiteLink>
        </div>

        <AntTrailBanner className="mt-8" />

        <ol className="relative mt-8 grid gap-8 md:grid-cols-4 md:gap-6">
          {/* Horizontal dashed perimeter stitch behind knots on desktop */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-6 left-8 right-8 hidden border-t-2 border-dashed border-accent-ink/45 md:block"
          />
          {steps.map((step, i) => (
            <li key={step.id} className="relative pl-12 md:pl-0">
              {/* Vertical dashed line on mobile */}
              {i < steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-11 bottom-[-2rem] left-[1.15rem] border-l-2 border-dashed border-accent-ink/40 md:hidden"
                />
              ) : null}

              {/* Shield knot with pest-inspection icon */}
              <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-ui border border-accent-ink bg-surface text-accent-ink shadow-xs md:static md:mb-4 md:h-12 md:w-12">
                <Icon name={STEP_ICONS[i % STEP_ICONS.length]} className="h-5 w-5" />
              </div>

              <p className="font-mono text-xs uppercase tracking-wider text-sepia">
                Step 0{i + 1} · ~{step.minutes} min
              </p>
              <h3 className="mt-1 font-serif text-xl text-ink">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 6. Guarantee Band (Wax Seal + Certificate)                                 */
/* -------------------------------------------------------------------------- */

function GuaranteeBand({
  eyebrow,
  heading,
  statement,
  footnote,
  linkLabel,
}: {
  eyebrow: ReactNode;
  heading: ReactNode;
  statement: ReactNode;
  footnote: ReactNode;
  linkLabel: ReactNode;
}) {
  return (
    <section aria-labelledby="guarantee-heading" className="relative overflow-hidden border-y border-line bg-band py-16 sm:py-20">
      <div className="wrap relative">
        {/* Decorative pinned specimen plates flanking the certificate on wide screens */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-0 hidden -translate-y-1/2 -rotate-6 rounded-ui border border-line bg-surface/80 p-3 shadow-xs xl:block"
        >
          <PestSpecimen id="ant" className="h-28 w-28 opacity-85" />
          <p className="mt-1 text-center font-mono text-[0.65rem] uppercase tracking-widest text-sepia">
            Covered · Ants
          </p>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-0 hidden -translate-y-1/2 rotate-6 rounded-ui border border-line bg-surface/80 p-3 shadow-xs xl:block"
        >
          <PestSpecimen id="termite" className="h-28 w-28 opacity-85" />
          <p className="mt-1 text-center font-mono text-[0.65rem] uppercase tracking-widest text-sepia">
            Covered · Termites
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl pt-12">
          <div className="absolute top-0 left-1/2 z-10 -translate-x-1/2">
            <WaxGuaranteeSeal className="h-28 w-28 sm:h-32 sm:w-32" />
          </div>
          <div className="certificate-card px-6 pt-24 pb-10 text-center sm:px-12 sm:pt-28">
            <p className="eyebrow">{eyebrow}</p>
            <h2 id="guarantee-heading" className="sr-only">
              {heading}
            </h2>
            <p className="mt-3 font-serif text-[clamp(1.45rem,3vw,2.15rem)] leading-snug text-ink">
              “{statement}”
            </p>
            <p className="mx-auto mt-4 max-w-xl font-mono text-xs text-sepia">
              {footnote}
            </p>
            <div className="mt-6">
              <SiteLink href="/inspections/#guarantee" className="text-link font-mono text-xs uppercase tracking-wider">
                {linkLabel}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 7. Service Area & Phone Hours                                              */
/* -------------------------------------------------------------------------- */

function ServiceAreaBand({
  eyebrow,
  heading,
  intro,
  officeNote,
}: {
  eyebrow: ReactNode;
  heading: ReactNode;
  intro: ReactNode;
  officeNote: ReactNode;
}) {
  return (
    <section aria-labelledby="area-heading" className="bg-bg py-16 sm:py-20">
      <div className="wrap grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id="area-heading" className="mt-2 font-serif text-[clamp(1.85rem,3.6vw,2.6rem)] leading-tight text-ink">
            {heading}
          </h2>
          <p className="mt-3 text-muted">{intro}</p>
          <div className="mt-8">
            <ServiceAreaRing areas={business.serviceAreas} />
          </div>
        </div>

        <div className="plate-frame p-6 sm:p-8 lg:col-span-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
            <div>
              <p className="eyebrow">Phone hours</p>
              <a
                href={phoneHref(business.phone)}
                className="mt-1 inline-block font-serif text-2xl text-ink hover:text-accent-ink"
              >
                {business.phone}
              </a>
            </div>
            <OpenBadge hours={business.phoneHours} />
          </div>

          <div className="mt-4">
            <PhoneHoursTable hours={business.phoneHours} />
          </div>

          <p className="mt-5 border-t border-dashed border-line pt-4 font-mono text-xs text-sepia">
            {officeNote}
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 8. Closing CTA                                                             */
/* -------------------------------------------------------------------------- */

function ClosingCta({
  heading,
  body,
  action,
}: {
  heading: ReactNode;
  body: ReactNode;
  action: ReactNode;
}) {
  return (
    <section aria-labelledby="closing-cta-heading" className="border-t border-line bg-sage/75 py-14 sm:py-16">
      <PerimeterStitch className="mb-6" />
      <div className="wrap flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <SealedMouseHole className="h-20 w-32 shrink-0" />
          <div className="max-w-xl">
            <h2 id="closing-cta-heading" className="font-serif text-[clamp(1.7rem,3.2vw,2.35rem)] leading-tight text-ink">
              {heading}
            </h2>
            <p className="mt-2 text-muted">{body}</p>
          </div>
        </div>
        <SiteLink href="/contact/" className="button shrink-0">
          {action}
        </SiteLink>
      </div>
    </section>
  );
}

export const Home = {
  Hero: HeroRoot,
  CutawayBand,
  SpecimenCaseSection,
  SafetyBand,
  VisitStepsSection,
  GuaranteeBand,
  ServiceAreaBand,
  ClosingCta,
};

export type { Children };
