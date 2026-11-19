import { MouseHoleArt } from '../components/art/motifs';
import { SiteLink } from '../components/site-link';

export default function NotFound() {
  return (
    <section className="wrap py-14 sm:py-20">
      <div className="plate-frame mx-auto max-w-3xl bg-band/55 px-6 py-10 text-center sm:px-12 sm:py-14">
        <div className="mx-auto flex justify-center">
          <MouseHoleArt className="w-full max-w-sm" />
        </div>
        <p className="eyebrow mt-6">404 · Page not found</p>
        <h1 className="mt-2 font-serif text-[clamp(2rem,5vw,3.1rem)] leading-tight text-ink">
          This page slipped through a gap.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted">
          The address you followed is not in our field guide. Try heading back home, browsing the
          pests we treat or sending us a note.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <SiteLink href="/" className="button">
            Back to Home
          </SiteLink>
          <SiteLink href="/pests/" className="button button-quiet">
            Open the field guide
          </SiteLink>
          <SiteLink href="/contact/" className="button button-quiet">
            Contact us
          </SiteLink>
        </div>
      </div>
    </section>
  );
}
