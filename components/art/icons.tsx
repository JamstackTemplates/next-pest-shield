import type { SVGProps } from 'react';

export type IconName =
  | 'magnifier'
  | 'clipboard'
  | 'bait-station'
  | 'spray-wand'
  | 'paw'
  | 'child'
  | 'leaf'
  | 'calendar'
  | 'phone'
  | 'shield-check'
  | 'clock'
  | 'mouse-hole';

export function Icon({
  name,
  className = 'h-5 w-5',
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {name === 'magnifier' && (
        <>
          <circle cx="10.5" cy="10.5" r="6.25" />
          <path d="M15.2 15.2L20.5 20.5" />
          <path d="M8.5 8.5a3 3 0 0 1 3-1" strokeOpacity="0.55" />
        </>
      )}
      {name === 'clipboard' && (
        <>
          <rect x="5" y="4.5" width="14" height="16.5" rx="1.5" />
          <path d="M9 4.5V3.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 3.5v1" />
          <path d="M8.5 10h7M8.5 13.5h7M8.5 17h4.5" />
        </>
      )}
      {name === 'bait-station' && (
        <>
          <path d="M4 17.5h16l-1.5-8.5a2 2 0 0 0-2-1.5h-9a2 2 0 0 0-2 1.5L4 17.5z" />
          <path d="M8.5 17.5v-3a1.5 1.5 0 0 1 3 0v3" />
          <circle cx="15.5" cy="12" r="1" fill="currentColor" stroke="none" />
          <path d="M3 19.5h18" strokeDasharray="2 2" />
        </>
      )}
      {name === 'spray-wand' && (
        <>
          <rect x="4" y="9" width="6.5" height="11" rx="1.5" />
          <path d="M7.25 9V6.5h3l7-3" />
          <path d="M17.25 3.5l2.25 1.5M18 6.5l2 1.2M17 9l1.5.9" strokeOpacity="0.7" />
        </>
      )}
      {name === 'paw' && (
        <>
          <ellipse cx="7" cy="9.5" rx="1.6" ry="2.2" />
          <ellipse cx="10.4" cy="6.8" rx="1.5" ry="2.1" />
          <ellipse cx="13.8" cy="6.8" rx="1.5" ry="2.1" />
          <ellipse cx="17" cy="9.5" rx="1.6" ry="2.2" />
          <path d="M12 12c-3 0-5 2.4-4.7 4.7.2 1.6 1.6 2.3 3.1 2 1.1-.2 2.1-.2 3.2 0 1.5.3 2.9-.4 3.1-2C17 14.4 15 12 12 12z" />
        </>
      )}
      {name === 'child' && (
        <>
          <circle cx="12" cy="6.5" r="2.75" />
          <path d="M7.5 13.5c1.2-1.4 2.7-2 4.5-2s3.3.6 4.5 2" />
          <path d="M9.5 12.2l-.7 5.3h6.4l-.7-5.3" />
          <path d="M10.2 17.5v3M13.8 17.5v3" />
        </>
      )}
      {name === 'leaf' && (
        <>
          <path d="M5 19c1-8.5 6.5-13.5 14-14-1 7.5-5.5 13-14 14z" />
          <path d="M5 19l9-9" />
          <path d="M10 14h3.5M12 12V8.5" strokeOpacity="0.65" />
        </>
      )}
      {name === 'calendar' && (
        <>
          <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" />
          <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
          <path d="M8 13.5h2M12 13.5h4M8 17h3" />
        </>
      )}
      {name === 'phone' && (
        <path d="M6.5 4h3l1.3 4-2 1.6a12 12 0 0 0 5.6 5.6l1.6-2 4 1.3v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4z" />
      )}
      {name === 'shield-check' && (
        <>
          <path d="M5.5 4.5h13v8c0 5-3.2 7.8-6.5 9-3.3-1.2-6.5-4-6.5-9v-8z" />
          <path d="M9 12l2.1 2.1L15.3 9.8" />
        </>
      )}
      {name === 'clock' && (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3.2 2" />
        </>
      )}
      {name === 'mouse-hole' && (
        <>
          <path d="M3 19.5h18" />
          <path d="M7.5 19.5v-6.5a4.5 4.5 0 0 1 9 0v6.5" />
          <path d="M9.5 19.5v-5a2.5 2.5 0 0 1 5 0v5" strokeDasharray="2 2" />
        </>
      )}
    </svg>
  );
}
