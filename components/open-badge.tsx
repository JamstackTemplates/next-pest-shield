'use client';

import { useEffect, useState } from 'react';
import { phoneHoursStatus, type OpeningHours, type PhoneHoursStatus } from '../lib/hours';
import { site } from '../lib/site';

/** Neutral static output ("Phone hours"); browser refreshes in the business zone every minute. */
export function OpenBadge({
  hours,
  variant = 'surface',
}: {
  hours: readonly OpeningHours[];
  variant?: 'surface' | 'crest';
}) {
  const [status, setStatus] = useState<PhoneHoursStatus>({ state: 'neutral', label: 'Phone hours' });

  useEffect(() => {
    const update = () => setStatus(phoneHoursStatus(hours, site.timeZone));
    update();
    const timer = setInterval(update, 60_000);
    return () => clearInterval(timer);
  }, [hours]);

  const dotClass =
    status.state === 'open'
      ? 'bg-accent'
      : status.state === 'closed'
        ? 'bg-honey'
        : 'bg-muted';

  const shellClass =
    variant === 'crest'
      ? 'border-crest-ink/25 bg-crest-bg/60 text-crest-ink'
      : 'border-line bg-surface text-ink';

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-ui border px-3 py-1 font-mono text-xs tracking-wide ${shellClass}`}
      data-phone-state={status.state}
    >
      <span
        className={`h-2 w-2 shrink-0 rounded-full ${dotClass}`}
        aria-hidden="true"
      />
      <span>{status.label}</span>
    </span>
  );
}
