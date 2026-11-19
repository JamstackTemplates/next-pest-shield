import type { Metadata } from 'next';
import { MagnifierPinMotif, WaxGuaranteeSeal } from '../../components/art/motifs';
import { PageHead } from '../../components/page-head';
import { PestFieldGuide } from '../../components/pest-field-guide';
import { SiteLink } from '../../components/site-link';
import { business } from '../../content/business';
import { pests } from '../../content/pests';
import { rooms } from '../../content/rooms';
import { absoluteUrl } from '../../lib/paths';

export const metadata: Metadata = {
  title: 'Pests we treat — The field guide',
  description:
    'Identify common Charlotte household pests, how Greenshield treats each one, starting prices and re-entry times for people and pets.',
  alternates: { canonical: absoluteUrl('/pests/') },
};

export default function PestsPage() {
  return (
    <>
      <PageHead
        eyebrow="Field guide · 12 specimens"
        title="The field guide"
        motif={<MagnifierPinMotif className="h-16 w-28" />}
      >
        <p>
          Every common Carolina household pest we treat, with starting one-off prices,
          re-entry times and what to look for. Open any plate for signs and treatment details, or{' '}
          <SiteLink href="/#house-cutaway" className="text-link">
            browse by room in the house cutaway
          </SiteLink>
          .
        </p>
      </PageHead>

      <section className="wrap pb-12" aria-label="Specimen case">
        <PestFieldGuide pests={pests} rooms={rooms} />
      </section>

      {/* Torn notebook-page aside: Not sure what it is? */}
      <section className="wrap pb-12" aria-labelledby="not-sure-heading">
        <aside className="notebook-aside p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="eyebrow">Field note</p>
              <h2 id="not-sure-heading" className="mt-1.5 font-serif text-2xl text-ink">
                Not sure what it is?
              </h2>
              <p className="mt-2 text-muted">
                Describe its colour, size, where you found it and what time of day it appeared—or
                email a photo description to{' '}
                <a href={`mailto:${business.email}`} className="text-link font-mono text-sm">
                  {business.email}
                </a>
                . We identify pests free of charge as part of your inspection enquiry.
              </p>
            </div>
            <SiteLink href="/contact/" className="button shrink-0">
              Ask us to identify it
            </SiteLink>
          </div>
        </aside>
      </section>

      {/* Thin guarantee strip */}
      <section className="wrap pb-6" aria-label="Guarantee summary">
        <div className="plate-frame flex flex-col items-start gap-5 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <WaxGuaranteeSeal className="h-16 w-16 shrink-0" />
            <div>
              <p className="font-serif text-lg text-ink">Backed by the Greenshield guarantee</p>
              <p className="mt-0.5 text-sm text-muted">{business.guarantee.statement}</p>
            </div>
          </div>
          <SiteLink href="/inspections/" className="text-link shrink-0 font-mono text-xs uppercase tracking-wider">
            See plans &amp; terms →
          </SiteLink>
        </div>
      </section>
    </>
  );
}
