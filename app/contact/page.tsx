import type { Metadata } from 'next';
import { Icon } from '../../components/art/icons';
import { KitchenVignette } from '../../components/art/motifs';
import { CopyEmail } from '../../components/copy-email';
import { JamstacksSupportForm } from '../../components/jamstacks-support-form';
import { OpenBadge } from '../../components/open-badge';
import { PageHead } from '../../components/page-head';
import { PhoneHoursTable } from '../../components/phone-hours-table';
import { SiteLink } from '../../components/site-link';
import { business, phoneHref } from '../../content/business';
import { absoluteUrl } from '../../lib/paths';
import { site } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: business.enquiries.introduction,
  alternates: { canonical: absoluteUrl('/contact/') },
};

export default function ContactPage() {
  const hosted = Boolean(site.jamstacksSite && site.jamstacksEmbedUrl);

  return (
    <>
      <PageHead
        eyebrow="Inspection & pest enquiries"
        title={business.enquiries.title}
        motif={
          <SiteLink
            href="/#house-cutaway"
            aria-label="Open the interactive house cutaway on Home"
            className="block no-underline"
          >
            <KitchenVignette className="h-16 w-28" />
            <span className="mt-1 block text-center font-mono text-[0.65rem] uppercase tracking-wider text-sepia">
              House cutaway ↗
            </span>
          </SiteLink>
        }
      >
        <p>{business.enquiries.introduction}</p>
      </PageHead>

      <div className="wrap grid gap-8 pb-12 md:grid-cols-12 md:items-start">
        {/* Email & phone card: above form on mobile, top of right column on desktop */}
        <div className="plate-frame p-6 md:col-span-5 md:col-start-8 md:row-start-1">
          <p className="eyebrow">Email directly</p>
          <p className="mt-2">
            <a
              className="text-link wrap-anywhere font-mono text-sm font-bold"
              href={`mailto:${business.email}`}
            >
              {business.email}
            </a>
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <CopyEmail email={business.email} />
          </div>

          <div className="mt-5 border-t border-dashed border-line pt-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <a
                href={phoneHref(business.phone)}
                className="inline-flex items-center gap-2 font-serif text-xl text-ink hover:text-accent-ink"
              >
                <Icon name="phone" className="h-4 w-4 text-accent-ink" />
                <span>{business.phone}</span>
              </a>
              <OpenBadge hours={business.phoneHours} />
            </div>
            <div className="mt-3">
              <PhoneHoursTable hours={business.phoneHours} />
            </div>
          </div>
        </div>

        {/* Hosted enquiry form on clipboard sheet: right below email on mobile, left column on desktop */}
        <section
          aria-label="Enquiry form"
          className="clipboard-sheet p-6 sm:p-8 md:col-span-7 md:col-start-1 md:row-span-2 md:row-start-1"
        >
          <div className="mb-5 border-b border-dashed border-line pb-4">
            <p className="eyebrow">Inspection enquiry</p>
            <h2 className="mt-1 font-serif text-2xl text-ink">Request a free home inspection</h2>
            <p className="mt-1 text-sm text-muted">
              Ask about a pest sighting, protection plan or WDI report. Your visit is confirmed
              only when we reply.
            </p>
          </div>

          {hosted ? (
            <JamstacksSupportForm
              siteId={site.jamstacksSite}
              embedUrl={site.jamstacksEmbedUrl}
              email={business.email}
            />
          ) : (
            <div className="rounded-ui border border-line bg-bg p-6">
              <h3 className="font-serif text-xl text-ink">Write to us directly</h3>
              <p className="mt-2.5 text-sm text-muted">
                The online enquiry form is not connected on this preview. Send your inspection
                request to{' '}
                <a className="text-link font-mono" href={`mailto:${business.email}`}>
                  {business.email}
                </a>{' '}
                or call{' '}
                <a className="text-link font-mono" href={phoneHref(business.phone)}>
                  {business.phone}
                </a>{' '}
                during phone hours.
              </p>
            </div>
          )}
        </section>

        {/* Checklist & service area: below form on mobile, lower right column on desktop */}
        <aside
          aria-label="Enquiry tips and service area"
          className="space-y-6 md:col-span-5 md:col-start-8 md:row-start-2"
        >
          <div className="notebook-aside p-6">
            <h2 className="font-serif text-xl text-ink">Useful to include</h2>
            <p className="mt-1 font-mono text-xs text-sepia">
              The form asks for your name, email and message. Adding a line on these helps us
              reply with the right inspection slot:
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink">
              {business.enquiries.usefulToInclude.map(tip => (
                <li key={tip} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-block h-3.5 w-3.5 shrink-0 rounded-[2px] border border-sepia bg-surface"
                  />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-ui border border-line bg-surface p-5">
            <p className="eyebrow">Service area</p>
            <p className="mt-1.5 text-sm text-muted">
              Based {business.officeArea}, serving {business.region}:
            </p>
            <p className="mt-2 font-mono text-xs leading-relaxed text-ink">
              {business.serviceAreas.join(' · ')}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
