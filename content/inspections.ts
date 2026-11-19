/** Steps in a standard inspection visit, shared between Home and /inspections/. */
export interface InspectionStep {
  id: string;
  title: string;
  body: string;
  minutes: number;
}

export interface InspectionType {
  id: string;
  name: string;
  /** Whole USD; 0 for free home inspection. */
  price: number;
  turnaround: string;
  summary: string;
  details: readonly string[];
}

export const inspectionSteps: readonly InspectionStep[] = [
  {
    id: 'listen',
    title: 'Listen',
    minutes: 5,
    body: "You tell us what you've seen, where it showed up, and who lives in the home—children, pets and any sensitivities.",
  },
  {
    id: 'look',
    title: 'Look',
    minutes: 30,
    body: 'We check kitchens, baths, crawlspace, attic access and the foundation line to find entry points and moisture, not just symptoms.',
  },
  {
    id: 'explain',
    title: 'Explain',
    minutes: 10,
    body: 'We show you what we found in plain English, identify the pest, and walk through what actually needs treating.',
  },
  {
    id: 'plan',
    title: 'Plan',
    minutes: 5,
    body: 'You get a written starting quote, re-entry times for every product considered, and time to decide with zero pressure.',
  },
] as const;

export const inspectionTypes: readonly InspectionType[] = [
  {
    id: 'home-inspection',
    name: 'Free home inspection',
    price: 0,
    turnaround: 'About 45 minutes on site',
    summary:
      'For homeowners and renters seeing activity or wanting a preventative check before signing onto a plan.',
    details: [
      'Interior check of kitchens, baths, laundry and any room with sightings',
      'Foundation, sill-plate, eaves and yard-edge walk-around',
      'Written identification, starting quote and re-entry times',
    ],
  },
  {
    id: 'wdi-report',
    name: 'Termite / WDI report for home sales',
    price: 95,
    turnaround: 'Written report within two business days',
    summary:
      'A formal Wood-Destroying Insect Information Report (WDIR 100) for North Carolina real-estate closings and refinancing.',
    details: [
      'Accessible crawlspace, basement, attic and exterior wood inspection',
      'Notes on subterranean termites, carpenter ants, wood-boring beetles and moisture',
      'Signed North Carolina licence report delivered to you or your closing attorney',
    ],
  },
] as const;
