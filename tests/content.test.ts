import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { test } from 'node:test';
import { business } from '../content/business.ts';
import { inspectionSteps, inspectionTypes } from '../content/inspections.ts';
import { pests, validatePests } from '../content/pests.ts';
import { plans, validatePlans } from '../content/plans.ts';
import { rooms, validateRooms } from '../content/rooms.ts';
import { businessStructuredData, jsonLd } from '../lib/structured-data.ts';

const FORBIDDEN_SAFETY_PHRASES = [
  /non-toxic/i,
  /100%\s*safe/i,
  /chemical-free/i,
  /guaranteed\s+safe/i,
];

function collectHtmlFiles(dir: string): string[] {
  if (!existsSync(dir)) return [];
  const results: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) results.push(...collectHtmlFiles(full));
    else if (entry.endsWith('.html')) results.push(full);
  }
  return results;
}

test('business content has actionable required fields and enquiry wording', () => {
  for (const key of ['name', 'tagline', 'introduction', 'email', 'phone', 'licence'] as const) {
    assert.ok(business[key].trim(), `business.${key}: required`);
  }
  assert.match(business.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'business.email: valid public email required');
  assert.ok(business.serviceAreas.length >= 5, 'business.serviceAreas: expected Charlotte neighbourhoods');
  assert.ok(business.enquiries.title.trim(), 'business.enquiries.title: required');
  assert.ok(business.enquiries.introduction.trim(), 'business.enquiries.introduction: required');
  assert.match(
    business.enquiries.introduction,
    /confirmed when we reply/i,
    'Contact copy must state that the visit is confirmed only when the business replies',
  );
  assert.ok(business.enquiries.usefulToInclude.length >= 3, 'business.enquiries.usefulToInclude: include message guidance');
  for (const tip of business.enquiries.usefulToInclude) {
    assert.ok(tip.trim(), 'business.enquiries.usefulToInclude: empty tip');
  }
});

test('rooms, pests, plans and inspections validate cleanly', () => {
  assert.doesNotThrow(() => validateRooms(rooms));
  assert.doesNotThrow(() => validatePests(pests, rooms));
  assert.doesNotThrow(() => validatePlans(plans, pests));
  assert.equal(pests.length, 12);
  assert.equal(rooms.length, 7);
  assert.equal(plans.length, 4);
  assert.equal(inspectionSteps.length, 4);
  assert.equal(inspectionTypes.length, 2);
});

test('content validators reject bad ids, prices, re-entry hours, groups, references and featured counts with item IDs', () => {
  assert.throws(
    () => validateRooms([...rooms, { id: 'Bad Room', name: 'Bad', hint: 'x' }]),
    /Bad Room/,
  );
  assert.throws(
    () => validatePests(pests.map(p => (p.id === 'ant' ? { ...p, rooms: ['sunroom'] } : p)), rooms),
    /pests\[ant\].*sunroom/,
  );
  assert.throws(
    () => validatePests(pests.map(p => (p.id === 'ant' ? { ...p, priceFrom: 0 } : p)), rooms),
    /pests\[ant\].*priceFrom/,
  );
  assert.throws(
    () => validatePests(pests.map(p => (p.id === 'bed-bug' ? { ...p, reEntryHours: 25 } : p)), rooms),
    /pests\[bed-bug\].*reEntryHours/,
  );
  assert.throws(
    () => validatePests(pests.map(p => (p.id === 'tick' ? { ...p, group: 'aliens' as never } : p)), rooms),
    /pests\[tick\].*group/,
  );
  assert.throws(
    () => validatePests(pests.map(p => ({ ...p, featured: false })), rooms),
    /featured/,
  );
  assert.throws(
    () => validatePlans(plans.map(p => (p.id === 'yard-season' ? { ...p, covers: ['dragon'] } : p)), pests),
    /plans\[yard-season\].*dragon/,
  );
  assert.throws(
    () => validatePlans(plans.map(p => ({ ...p, recommended: true })), pests),
    /at most one plan/,
  );
});

test('structured data uses HomeAndConstructionBusiness derived from business content', () => {
  const data = businessStructuredData();
  assert.equal(data['@type'], 'HomeAndConstructionBusiness');
  assert.equal(data.name, business.name);
  assert.equal(data.email, business.email);
  assert.equal(data.telephone, business.phone);
  assert.ok(Array.isArray(data.areaServed) && data.areaServed.length >= business.serviceAreas.length);
  assert.ok(Array.isArray(data.openingHoursSpecification) && data.openingHoursSpecification.length === 6);
});

test('inline JSON-LD escapes closing script content without changing values', () => {
  const value = { name: '</script><script>alert(1)</script>', text: '< & >' };
  const encoded = jsonLd(value);
  assert.ok(!encoded.includes('<'), 'JSON-LD must escape <');
  assert.deepEqual(JSON.parse(encoded), value);
});

test('safety wording rule: no forbidden safety claims in content or built HTML', () => {
  const contentSources = [
    JSON.stringify(business),
    JSON.stringify(pests),
    JSON.stringify(plans),
    JSON.stringify(inspectionSteps),
    JSON.stringify(inspectionTypes),
  ];
  for (const text of contentSources) {
    for (const pattern of FORBIDDEN_SAFETY_PHRASES) {
      assert.doesNotMatch(text, pattern, `Forbidden safety phrase matched in content: ${pattern}`);
    }
  }

  for (const file of collectHtmlFiles(join(process.cwd(), 'out'))) {
    const html = readFileSync(file, 'utf8');
    for (const pattern of FORBIDDEN_SAFETY_PHRASES) {
      assert.doesNotMatch(html, pattern, `Forbidden safety phrase matched in ${file}: ${pattern}`);
    }
    assert.doesNotMatch(html, /book now,\s*confirmed/i, `Forbidden booking claim in ${file}`);
  }
});
