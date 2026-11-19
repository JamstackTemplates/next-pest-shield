/** Optional weekly opening-hours model. Time zone stays in site.config.json. */
export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;
export type Day = typeof DAYS[number];
export interface OpeningHours {
  /** Every weekday occurs exactly once. */
  day: Day;
  /** Inclusive local HH:MM; omit both times for a closed day. */
  opens?: string;
  /** Exclusive local HH:MM; overnight intervals are deliberately unsupported. */
  closes?: string;
}
const clock = /^([01]\d|2[0-3]):[0-5]\d$/;
const minutes = (value: string) => Number(value.slice(0, 2)) * 60 + Number(value.slice(3));

export function formatClock12(hhmm: string): string {
  const hour24 = Number(hhmm.slice(0, 2));
  const min = hhmm.slice(3);
  const period = hour24 >= 12 ? 'pm' : 'am';
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return `${hour12}:${min} ${period}`;
}

export function validateHours(hours: readonly OpeningHours[]): void {
  for (const day of DAYS) {
    const matches = hours.filter(entry => entry.day === day);
    if (matches.length !== 1) throw new Error(`hours: ${day} must occur exactly once`);
    const { opens, closes } = matches[0];
    if (opens === undefined && closes === undefined) continue;
    if (!opens || !closes || !clock.test(opens) || !clock.test(closes) || minutes(opens) >= minutes(closes)) {
      throw new Error(`hours: ${day} needs HH:MM opening before closing; overnight service is unsupported`);
    }
  }
  if (hours.length !== 7) throw new Error('hours: expected seven weekdays');
}

function resolveSchedule(hours: readonly OpeningHours[], timeZone: string, now = new Date()):
  | { state: 'unknown' }
  | { state: 'open'; closes: string }
  | { state: 'closed'; nextDay: Day; nextOpens: string; today: boolean }
  | { state: 'closed-all' } {
  if (!timeZone) return { state: 'unknown' };
  validateHours(hours);
  let parts: Intl.DateTimeFormatPart[];
  try {
    parts = new Intl.DateTimeFormat('en-US', {
      timeZone,
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hourCycle: 'h23',
    }).formatToParts(now);
  } catch {
    return { state: 'unknown' };
  }
  const part = (type: string) => parts.find(entry => entry.type === type)?.value ?? '';
  const index = DAYS.indexOf(part('weekday') as Day);
  if (index < 0) return { state: 'unknown' };
  const current = Number(part('hour')) * 60 + Number(part('minute'));
  const today = hours.find(entry => entry.day === DAYS[index])!;
  if (today.opens && today.closes && current >= minutes(today.opens) && current < minutes(today.closes)) {
    return { state: 'open', closes: today.closes };
  }
  for (let offset = 0; offset <= 7; offset++) {
    const day = DAYS[(index + offset) % 7];
    const entry = hours.find(value => value.day === day)!;
    if (entry.opens && (offset > 0 || current < minutes(entry.opens))) {
      return { state: 'closed', nextDay: day, nextOpens: entry.opens, today: offset === 0 };
    }
  }
  return { state: 'closed-all' };
}

/** Browser callers supply the clock; build/static views never compute current availability. */
export function openingLabel(hours: readonly OpeningHours[], timeZone: string, now = new Date()): string {
  const status = resolveSchedule(hours, timeZone, now);
  if (status.state === 'unknown') return 'See opening hours';
  if (status.state === 'open') return `Open now · until ${status.closes}`;
  if (status.state === 'closed') {
    return `Closed · opens ${status.today ? 'today' : status.nextDay} at ${status.nextOpens}`;
  }
  return 'Closed · see opening hours';
}

export interface PhoneHoursStatus {
  state: 'neutral' | 'open' | 'closed';
  label: string;
}

/** Browser-only status for Greenshield phone hours (e.g. "Phones open until 6:00 pm"). */
export function phoneHoursStatus(
  hours: readonly OpeningHours[],
  timeZone: string,
  now = new Date(),
): PhoneHoursStatus {
  const status = resolveSchedule(hours, timeZone, now);
  if (status.state === 'unknown') return { state: 'neutral', label: 'Phone hours' };
  if (status.state === 'open') {
    return { state: 'open', label: `Phones open until ${formatClock12(status.closes)}` };
  }
  if (status.state === 'closed') {
    const when = status.today ? 'today' : status.nextDay;
    return { state: 'closed', label: `Phones open at ${formatClock12(status.nextOpens)} ${when}` };
  }
  return { state: 'closed', label: 'Phone hours' };
}
