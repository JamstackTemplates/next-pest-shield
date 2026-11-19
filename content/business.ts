import type { OpeningHours } from '../lib/hours.ts';

export interface Business {
  /** Public display name; also update site.config.json's name when renaming. */
  name: string;
  /** Short wordmark name displayed beside the crest shield. */
  shortName: string;
  /** Short headline for the home page. */
  tagline: string;
  /** Plain-text introduction used by the page and fallback metadata. */
  introduction: string;
  /** Public contact address, never a private notification destination. */
  email: string;
  /** Public phone number; formatted for display. */
  phone: string;
  /** Informal local office area; no walk-in street address is published. */
  officeArea: string;
  /** Region covered by the service-area business. */
  region: string;
  /** State structural pest control licence notice. */
  licence: string;
  /** Neighbourhoods and towns served; reused in UI and schema.org areaServed. */
  serviceAreas: readonly string[];
  /** Weekly phone hours (same-day intervals only). Time zone lives in site.config.json. */
  phoneHours: readonly OpeningHours[];
  /** Re-treatment guarantee terms shared across Home, Pests and Inspections. */
  guarantee: {
    statement: string;
    oneTime: string;
    termiteBond: string;
  };
  /** Contact copy; the hosted form supports name, email and message only. */
  enquiries: {
    /** Contact page heading. */
    title: string;
    /** No booking, payment or delivery promises. */
    introduction: string;
    /** Suggestions for the message, not additional form inputs. */
    usefulToInclude: readonly string[];
  };
}

export const business: Business = {
  name: 'Greenshield Pest Control',
  shortName: 'Greenshield',
  tagline: 'Pests out. Family in.',
  introduction:
    "Licensed, local and careful about what goes where. We find the cause, treat only what's needed and come back free if they do.",
  email: 'hello@next-pest-shield.jamstacks.net',
  phone: '(704) 555-0182',
  officeArea: 'near Freedom Park, Charlotte',
  region: 'Charlotte and Mecklenburg County, NC',
  licence: 'Licensed structural pest control operator, NC licence #3127-P (sample)',
  serviceAreas: [
    'Dilworth',
    'Myers Park',
    'Plaza Midwood',
    'NoDa',
    'South End',
    'Ballantyne',
    'Matthews',
    'Mint Hill',
    'Huntersville',
    'Cornelius',
  ],
  phoneHours: [
    { day: 'Monday', opens: '07:30', closes: '18:00' },
    { day: 'Tuesday', opens: '07:30', closes: '18:00' },
    { day: 'Wednesday', opens: '07:30', closes: '18:00' },
    { day: 'Thursday', opens: '07:30', closes: '18:00' },
    { day: 'Friday', opens: '07:30', closes: '18:00' },
    { day: 'Saturday', opens: '08:00', closes: '13:00' },
    { day: 'Sunday' },
  ],
  guarantee: {
    statement:
      'If covered pests come back between scheduled visits, so do we, at no charge, as many times as it takes.',
    oneTime: 'One-time treatments carry a 30-day re-treatment guarantee.',
    termiteBond: 'The Termite Bond covers re-treatment and repair up to $100,000 (sample).',
  },
  enquiries: {
    title: "Tell us what you're seeing",
    introduction:
      "Send a note and we'll reply within one business day to arrange a time. Sending this form requests an inspection; it doesn't book one. Your visit is confirmed when we reply.",
    usefulToInclude: [
      "what you're seeing and where in the home",
      "how long it's been going on",
      'children, pets or anyone sensitive in the household',
      'your neighbourhood or ZIP code, and good days or times',
      "a phone number if you'd like a call back",
    ],
  },
};

export function phoneHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}
