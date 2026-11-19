import { business, phoneHref } from '../content/business';
import { formatClock12 } from '../lib/hours';
import { CrestWordmark } from './art/crest';
import { HatchedHedgeBand } from './art/motifs';
import { SiteLink } from './site-link';

export function SiteFooter() {
  const weekday = business.phoneHours[0];
  const saturday = business.phoneHours[5];

  return (
    <div className="mt-16">
      <HatchedHedgeBand />
      <footer className="bg-crest-bg text-crest-ink">
        <div className="wrap py-12">
          <div className="grid gap-10 md:grid-cols-12">
            {/* Brand & licence */}
            <div className="md:col-span-5">
              <SiteLink href="/" className="inline-block no-underline hover:no-underline">
                <CrestWordmark inverted />
              </SiteLink>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-crest-muted">
                Family-run residential pest control {business.officeArea}. Serving {business.region}.
              </p>
              <p className="mt-3 font-mono text-xs text-crest-muted/90">
                {business.licence}
              </p>
            </div>

            {/* Contact & phone hours */}
            <div className="md:col-span-4">
              <h2 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-honey">
                Phones &amp; enquiries
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href={phoneHref(business.phone)} className="font-mono font-bold text-crest-ink hover:text-honey">
                    {business.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${business.email}`} className="wrap-anywhere text-crest-muted hover:text-crest-ink">
                    {business.email}
                  </a>
                </li>
                <li className="pt-1 font-mono text-xs text-crest-muted">
                  Mon–Fri {weekday.opens ? formatClock12(weekday.opens) : ''} – {weekday.closes ? formatClock12(weekday.closes) : ''}
                  {' · '}
                  Sat {saturday.opens ? formatClock12(saturday.opens) : ''} – {saturday.closes ? formatClock12(saturday.closes) : ''}
                  {' · '}Sun closed
                </li>
              </ul>
            </div>

            {/* Service area & routes */}
            <div className="md:col-span-3">
              <h2 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-honey">
                Field guide
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-crest-muted">
                <li>
                  <SiteLink href="/pests/" className="hover:text-crest-ink">Pests we treat</SiteLink>
                </li>
                <li>
                  <SiteLink href="/inspections/" className="hover:text-crest-ink">Inspections &amp; plans</SiteLink>
                </li>
                <li>
                  <SiteLink href="/safe-at-home/" className="hover:text-crest-ink">Safe at home</SiteLink>
                </li>
                <li>
                  <SiteLink href="/contact/" className="hover:text-crest-ink">Request a free inspection</SiteLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Service areas & perimeter stitch rule */}
          <div className="mt-10 border-t border-dashed border-crest-line pt-6">
            <p className="font-mono text-xs text-crest-muted">
              <span className="font-bold text-crest-ink">Service area: </span>
              {business.serviceAreas.join(' · ')}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-crest-muted">
              <p>{business.name} · No walk-in premises; home visits by arrangement.</p>
              <span title="Made with love by jamstacks.net">
                Built with{' '}
                <a className="underline hover:text-crest-ink" href="https://jamstacks.net">
                  jamstacks.net
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
