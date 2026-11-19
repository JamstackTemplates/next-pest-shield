import assert from 'node:assert/strict';
import { test } from 'node:test';
import { business } from '../content/business.ts';
import { DAYS, openingLabel, phoneHoursStatus, validateHours, type OpeningHours } from '../lib/hours.ts';

const hours: OpeningHours[] = DAYS.map(day => (day === 'Monday' ? { day } : { day, opens: '09:00', closes: '17:00' }));
const at = (date: string, zone = 'America/New_York') => openingLabel(hours, zone, new Date(date));
const phonesAt = (date: string, zone = 'America/New_York') =>
  phoneHoursStatus(business.phoneHours, zone, new Date(date));

test('opening inclusive, closing exclusive; business zone wins over visitor zone', () => {
  assert.equal(at('2026-11-17T13:59:00Z'), 'Closed · opens today at 09:00');
  assert.equal(at('2026-11-17T14:00:00Z'), 'Open now · until 17:00');
  assert.equal(at('2026-11-17T22:00:00Z'), 'Closed · opens Wednesday at 09:00');
  assert.equal(at('2026-11-17T14:00:00Z', 'Asia/Tokyo'), 'Closed · opens Wednesday at 09:00');
});

test('closed weekdays and week wrap find the next service', () => {
  assert.equal(at('2026-11-16T18:00:00Z'), 'Closed · opens Tuesday at 09:00');
  assert.equal(at('2026-11-15T23:00:00Z'), 'Closed · opens Tuesday at 09:00');
  assert.equal(openingLabel(DAYS.map(day => ({ day })), 'UTC'), 'Closed · see opening hours');
});

test('missing/invalid zones stay neutral and DST changes preserve local service times', () => {
  assert.equal(at('2026-11-17T14:00:00Z', ''), 'See opening hours');
  assert.equal(at('2026-11-17T14:00:00Z', 'Mars/Base'), 'See opening hours');
  assert.equal(at('2026-03-08T12:59:00Z'), 'Closed · opens today at 09:00');
  assert.equal(at('2026-03-08T13:00:00Z'), 'Open now · until 17:00');
  assert.equal(at('2026-11-01T13:59:00Z'), 'Closed · opens today at 09:00');
  assert.equal(at('2026-11-01T14:00:00Z'), 'Open now · until 17:00');
});

test('invalid/incomplete/overnight intervals name the weekday to fix', () => {
  assert.doesNotThrow(() => validateHours(hours));
  for (const opens of ['24:00', '9:00', '18:00']) {
    assert.throws(() => validateHours(hours.map(x => (x.day === 'Tuesday' ? { ...x, opens } : x))), /Tuesday/);
  }
  assert.throws(() => validateHours(hours.slice(1)), /Monday/);
  assert.throws(() => validateHours(hours.map(x => (x.day === 'Tuesday' ? { ...x, closes: undefined } : x))), /Tuesday/);
});

test('Greenshield phone hours badge: weekday boundaries, Saturday afternoon, Sunday and 2026 DST', () => {
  // Tuesday 2026-11-17 in EST (UTC-5): 07:29 -> 12:29Z, 07:30 -> 12:30Z, 17:59 -> 22:59Z, 18:00 -> 23:00Z
  assert.deepEqual(phonesAt('2026-11-17T12:29:00Z'), { state: 'closed', label: 'Phones open at 7:30 am today' });
  assert.deepEqual(phonesAt('2026-11-17T12:30:00Z'), { state: 'open', label: 'Phones open until 6:00 pm' });
  assert.deepEqual(phonesAt('2026-11-17T22:59:00Z'), { state: 'open', label: 'Phones open until 6:00 pm' });
  assert.deepEqual(phonesAt('2026-11-17T23:00:00Z'), { state: 'closed', label: 'Phones open at 7:30 am Wednesday' });

  // Saturday 2026-11-21 in EST (UTC-5): open 08:00–13:00 (13:00Z–18:00Z)
  assert.deepEqual(phonesAt('2026-11-21T17:59:00Z'), { state: 'open', label: 'Phones open until 1:00 pm' });
  assert.deepEqual(phonesAt('2026-11-21T18:00:00Z'), { state: 'closed', label: 'Phones open at 7:30 am Monday' });

  // Sunday 2026-11-22: closed all day, opens Monday 7:30 am
  assert.deepEqual(phonesAt('2026-11-22T16:00:00Z'), { state: 'closed', label: 'Phones open at 7:30 am Monday' });

  // 2026 Spring Forward DST day (Sunday 2026-03-08, EDT UTC-4 begins at 02:00 local)
  assert.deepEqual(phonesAt('2026-03-08T15:00:00Z'), { state: 'closed', label: 'Phones open at 7:30 am Monday' });
  // Monday 2026-03-09 in EDT (UTC-4): 07:29 -> 11:29Z, 07:30 -> 11:30Z
  assert.deepEqual(phonesAt('2026-03-09T11:29:00Z'), { state: 'closed', label: 'Phones open at 7:30 am today' });
  assert.deepEqual(phonesAt('2026-03-09T11:30:00Z'), { state: 'open', label: 'Phones open until 6:00 pm' });

  // 2026 Fall Back DST day (Sunday 2026-11-01, EST UTC-5 resumes at 02:00 local)
  assert.deepEqual(phonesAt('2026-11-01T15:00:00Z'), { state: 'closed', label: 'Phones open at 7:30 am Monday' });
  // Monday 2026-11-02 in EST (UTC-5): 07:29 -> 12:29Z, 07:30 -> 12:30Z
  assert.deepEqual(phonesAt('2026-11-02T12:29:00Z'), { state: 'closed', label: 'Phones open at 7:30 am today' });
  assert.deepEqual(phonesAt('2026-11-02T12:30:00Z'), { state: 'open', label: 'Phones open until 6:00 pm' });

  // Missing zone stays neutral
  assert.deepEqual(phonesAt('2026-11-17T14:00:00Z', ''), { state: 'neutral', label: 'Phone hours' });
});
