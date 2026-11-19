import { business } from '../content/business.ts';
import { absoluteUrl } from './paths.ts';

/** HomeAndConstructionBusiness JSON-LD derived from content/business.ts. */
export function businessStructuredData() {
  const url = absoluteUrl('/');
  const openingHoursSpecification = business.phoneHours
    .filter(entry => entry.opens && entry.closes)
    .map(entry => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: entry.day,
      opens: entry.opens,
      closes: entry.closes,
    }));

  const areaServed = [
    { '@type': 'City', name: 'Charlotte, NC' },
    { '@type': 'AdministrativeArea', name: 'Mecklenburg County, NC' },
    ...business.serviceAreas.map(area => ({
      '@type': 'Place',
      name: `${area}, NC`,
    })),
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: business.name,
    description: business.introduction,
    email: business.email,
    ...(business.phone ? { telephone: business.phone } : {}),
    ...(url ? { url } : {}),
    areaServed,
    openingHoursSpecification,
  };
}

/** Prevent content containing a closing script tag from escaping JSON-LD. */
export function jsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
