/** Rooms shown in the house cutaway on Home and referenced by content/pests.ts. */
export interface Room {
  /** URL-safe, unique identifier referenced by pest.rooms. */
  id: string;
  /** Display name shown on cutaway buttons and field notes. */
  name: string;
  /** One-line hint of where pests are commonly spotted in this room. */
  hint: string;
}

export const rooms: readonly Room[] = [
  {
    id: 'kitchen',
    name: 'Kitchen',
    hint: 'Under the sink, behind appliances, pantry shelves',
  },
  {
    id: 'bathroom',
    name: 'Bathroom',
    hint: 'Damp corners, drains and baseboards',
  },
  {
    id: 'bedroom',
    name: 'Bedrooms',
    hint: 'Mattress seams, headboards and closets',
  },
  {
    id: 'attic',
    name: 'Attic & eaves',
    hint: 'Insulation, rafters and soffit vents',
  },
  {
    id: 'crawlspace',
    name: 'Crawlspace & foundation',
    hint: 'Sill plates, piers and damp soil',
  },
  {
    id: 'garage',
    name: 'Garage',
    hint: 'Stored boxes, door seals and corners',
  },
  {
    id: 'yard',
    name: 'Yard & porch',
    hint: 'Shady beds, leaf litter, standing water and eaves',
  },
] as const;

const URL_SAFE_ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function validateRooms(items: readonly Room[]): void {
  const seen = new Set<string>();
  for (const room of items) {
    const label = room.id || '(missing id)';
    if (!URL_SAFE_ID.test(room.id)) {
      throw new Error(`rooms[${label}]: id must be lowercase and URL-safe`);
    }
    if (seen.has(room.id)) {
      throw new Error(`rooms[${room.id}]: duplicate room id`);
    }
    seen.add(room.id);
    if (!room.name.trim()) {
      throw new Error(`rooms[${room.id}]: name is required`);
    }
    if (!room.hint.trim()) {
      throw new Error(`rooms[${room.id}]: hint is required`);
    }
  }
}
