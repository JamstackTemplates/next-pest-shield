import { formatClock12, type OpeningHours } from '../lib/hours';

export function PhoneHoursTable({ hours }: { hours: readonly OpeningHours[] }) {
  return (
    <table className="w-full border-collapse font-mono text-sm">
      <caption className="sr-only">Weekly phone hours</caption>
      <tbody>
        {hours.map(entry => (
          <tr key={entry.day} className="border-b border-line/70 last:border-b-0">
            <th scope="row" className="py-2 pr-4 text-left font-normal text-ink">
              {entry.day}
            </th>
            <td className="py-2 text-right text-sepia">
              {entry.opens && entry.closes
                ? `${formatClock12(entry.opens)} – ${formatClock12(entry.closes)}`
                : 'Closed'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
