import type { SVGProps } from 'react';

export function CrestShield({
  className = 'h-10 w-10',
  inverted = false,
  ...props
}: SVGProps<SVGSVGElement> & { inverted?: boolean }) {
  return (
    <svg
      viewBox="0 0 48 52"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* Heater shield body */}
      <path
        d="M6 5h36v19c0 12.2-8.2 19.6-18 23.5C14.2 43.6 6 36.2 6 24V5z"
        fill={inverted ? 'var(--crest-surface)' : 'var(--accent)'}
        stroke={inverted ? 'var(--crest-ink)' : 'var(--ink)'}
        strokeOpacity={inverted ? '0.65' : '0.35'}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Inner stitched perimeter */}
      <path
        d="M9.5 8.5h29V24c0 9.6-6.5 15.8-14.5 19.2C16 39.8 9.5 33.6 9.5 24V8.5z"
        stroke={inverted ? 'var(--crest-ink)' : '#fffcf4'}
        strokeOpacity="0.45"
        strokeWidth="1.1"
        strokeDasharray="2.5 2"
      />
      {/* Gable roof */}
      <path
        d="M14 23.5L24 14.5l10 9"
        stroke="#fffcf4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 21.5V31h13v-9.5"
        stroke="#fffcf4"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Single ivy leaf in honey */}
      <path
        d="M24 35.5c0-4.4 2.8-7.5 6.8-8.3-.9 4.2-3 6.8-6.8 8.3z"
        fill="var(--honey)"
      />
      <path
        d="M24 35.5c0-3.2-1.8-5.4-4.5-6.2.6 2.9 1.9 4.9 4.5 6.2z"
        fill="#fffcf4"
        fillOpacity="0.88"
      />
      <path
        d="M24 35.5V29.5"
        stroke="#fffcf4"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CrestWordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <CrestShield className="h-9 w-9 shrink-0" inverted={inverted} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-[1.25rem] tracking-tight ${
            inverted ? 'text-crest-ink' : 'text-ink'
          }`}
        >
          Greenshield
        </span>
        <span
          className={`mt-0.5 font-mono text-[0.62rem] font-bold tracking-[0.22em] uppercase ${
            inverted ? 'text-crest-muted' : 'text-sepia'
          }`}
        >
          Pest Control
        </span>
      </span>
    </span>
  );
}
