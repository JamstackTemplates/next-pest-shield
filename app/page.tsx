import type { Metadata } from 'next';
import { Home } from '../components/home-sections';
import { business } from '../content/business';
import { inspectionSteps } from '../content/inspections';
import { pests } from '../content/pests';
import { rooms } from '../content/rooms';
import { absoluteUrl } from '../lib/paths';
import { businessStructuredData, jsonLd } from '../lib/structured-data';

export const metadata: Metadata = {
  alternates: { canonical: absoluteUrl('/') },
};

const featuredPests = pests.filter(p => p.featured);

export default function HomePage() {
  return (
    <>
      <Home.Hero
        headline={
          <>
            Pests out.
            <br />
            Family in.
          </>
        }
        introduction={business.introduction}
        primaryAction="Book a free inspection"
        secondaryAction={`Call ${business.phone}`}
        trustMarks={[
          'Licensed & insured',
          'Free home inspection',
          'Come-back-free guarantee',
        ]}
      />

      <Home.CutawayBand
        eyebrow="House check"
        heading="Where are you seeing them?"
        intro="Pick a room in the house cutaway to see the pests most likely to show up there, what signs to check for and where each treatment starts."
        rooms={rooms}
        pests={pests}
      />

      <Home.SpecimenCaseSection
        eyebrow="Charlotte field guide"
        heading="Common visitors"
        intro="Six household pests we see most often across Mecklenburg County, with starting prices and clear re-entry times."
        linkLabel="See all 12 in the field guide"
        pests={featuredPests}
      />

      <Home.SafetyBand
        eyebrow="Family & pet care"
        heading="Safe for the whole household"
        intro="Most of our neighbours call because they have small children, dogs or cats at home and want pests handled without guesswork. Every visit follows three plain rules."
        linkLabel="Read Safe at home & re-entry times"
        commitments={[
          {
            title: 'Least-product-first',
            body: 'We start with inspection, sealing gaps, moisture fixes and targeted baits before reaching for any liquid treatment.',
          },
          {
            title: 'Label-directed application by licensed technicians',
            body: 'Every treatment is measured and applied strictly by the label by North Carolina licensed technicians—never blanket-sprayed.',
          },
          {
            title: 'Placed out of reach of children and pets',
            body: 'Gel baits go inside wall voids and cracks, rodent stations lock shut, and we give you the exact re-entry time before we leave.',
          },
        ]}
      />

      <Home.VisitStepsSection
        eyebrow="Free home inspection"
        heading="How a visit works"
        intro="A free inspection takes about 45 minutes. You get plain answers and a written starting quote—never a sales script."
        linkLabel="Inspections & protection plans →"
        steps={inspectionSteps}
      />

      <Home.GuaranteeBand
        eyebrow="The Greenshield guarantee"
        heading="The Greenshield guarantee"
        statement={business.guarantee.statement}
        footnote={`${business.guarantee.oneTime} ${business.guarantee.termiteBond}`}
        linkLabel="Read full guarantee terms →"
      />

      <Home.ServiceAreaBand
        eyebrow="Local to Charlotte"
        heading="Serving Charlotte and Mecklenburg County"
        intro={`Our technicians work across Charlotte and nearby towns from our base ${business.officeArea}.`}
        officeNote={`Service-area business based ${business.officeArea}. No walk-in premises; all inspections are arranged at your home.`}
      />

      <Home.ClosingCta
        heading="Seeing something you'd rather not? Tell us what and where."
        body="Send a quick note to request a free home inspection. We reply within one business day to arrange a time that suits your household."
        action="Book a free inspection"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(businessStructuredData()) }}
      />
    </>
  );
}
