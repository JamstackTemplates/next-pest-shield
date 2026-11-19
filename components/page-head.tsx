import type { ReactNode } from 'react';

/** Themed plate-border heading block for inner pages. */
export function PageHead({
  eyebrow,
  title,
  children,
  id,
  motif,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  id?: string;
  /** Optional engraved SVG motif rendered beside the title. */
  motif?: ReactNode;
}) {
  return (
    <header className="wrap pt-8 pb-8 sm:pt-12 sm:pb-10">
      <div className="plate-frame px-6 py-7 sm:px-10 sm:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">{eyebrow}</p>
            <h1
              id={id}
              className="mt-2.5 font-serif text-[clamp(2.25rem,5.4vw,3.75rem)] leading-[1.08] text-ink"
            >
              {title}
            </h1>
            {children ? (
              <div className="mt-4 max-w-(--measure) text-[1.06rem] text-muted">
                {children}
              </div>
            ) : null}
          </div>
          {motif ? <div className="shrink-0 self-start sm:self-center">{motif}</div> : null}
        </div>
      </div>
    </header>
  );
}
