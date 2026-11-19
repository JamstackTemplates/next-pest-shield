# Greenshield Pest Control (`next-pest-shield`)

A self-contained Next.js static website for **Greenshield Pest Control**, a sample residential pest
control company serving Charlotte and Mecklenburg County, North Carolina. Built on the Jamstacks
Next.js static-export architecture with a **"Field guide and family crest"** design system.

All business details, prices, licence numbers and service terms in this repository are fictitious
sample data for the Jamstacks gallery. Replace them with your own details before publishing.

Local development requires Node 24 or later and npm.

```sh
npm ci
npm run dev
```

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home page: hero scene, interactive house cutaway, featured specimen plates, family & pet safety rules, inspection steps, wax-sealed guarantee, Charlotte service-area ring & phone hours, `HomeAndConstructionBusiness` JSON-LD |
| `/pests/` | Complete 12-pest engraved field guide with group filter chips (`?group=`), native `<details>` field notes, starting prices and re-entry times |
| `/inspections/` | 4-step inspection walkthrough, free home inspection & WDI report slips, 4 perforated protection-plan tickets and full guarantee terms |
| `/safe-at-home/` | Family- and pet-care commitments, printable before-the-visit clipboard checklist and re-entry times table derived from `content/pests.ts` |
| `/contact/` | Hosted Jamstacks support form (when configured) or email fallback, always-visible email with copy button, phone hours badge and "Useful to include" checklist |
| `/404.html` | Static not-found page with skirting-board mouse-hole illustration |

## Make it yours (file ownership)

| File | Owns |
| --- | --- |
| `content/business.ts` | Business name, tagline, introduction, public email, phone, licence line, Charlotte neighbourhoods, weekly phone hours, guarantee copy and Contact enquiry tips |
| `content/pests.ts` | All 12 pests: common/Latin names, group, rooms, signs, treatment sentence, visits, `reEntryHours`, `priceFrom`, `inSeason` ("Active now" tag) and `featured` (Home selection) |
| `content/rooms.ts` | The 7 rooms shown in the interactive house cutaway and referenced by `content/pests.ts` |
| `content/plans.ts` | Protection plan tickets: prices, billing period, visits per year, covered pest IDs and `recommended` flag |
| `content/inspections.ts` | Inspection walkthrough steps and inspection types (Free home inspection, WDI report) |
| `app/page.tsx`, `app/<route>/page.tsx` | Page-specific headings, prose, labels and calls to action in page order |
| `site.config.json` | Public site name, meta description, hostname, IANA `timeZone` (`America/New_York`) and Jamstacks `siteId`/`cdnUrl` |
| `app/tailwind.input.css` | Light ("Linen and ivy") and dark ("Porch light at dusk") palette tokens, textures, print rules and Jamstacks form variables |
| `components/art/` | Bespoke inline SVG crest, hero scene, interactive house cutaway, 12 specimen engravings, motifs and icons |
| `lib/structured-data.ts` | `HomeAndConstructionBusiness` JSON-LD derived from `content/business.ts` |
| `app/sitemap.ts` | Public routes included in `sitemap.xml` |

### Common owner edits

1. **Toggle seasonal pests or update starting prices** in `content/pests.ts`:
   - Set `inSeason: false` on `mosquito` to remove the `"Active now"` honey tag from its specimen plate on Home and `/pests/`.
   - Change `priceFrom: 159` on `ant` to update `"from $159"` everywhere the ant plate appears.
   - Change `reEntryHours` on any pest to update both its specimen plate and the `/safe-at-home/` re-entry table in one place.
2. **Update protection plan prices** in `content/plans.ts`.
3. **Edit phone hours** in `content/business.ts` (`phoneHours`, seven same-day `OpeningHours` records). The live `OpenBadge` uses `timeZone` from `site.config.json` (`America/New_York`) and refreshes every minute in the browser.
4. **Rename the business** in `content/business.ts` and `site.config.json` (`name`). Do not store business content in `site.config.json`; the Jamstacks provisioner replaces that file wholesale.

## Typography and licences

All fonts are self-hosted via npm (SIL Open Font License 1.1):

- **Young Serif** (`@fontsource/young-serif`) — display headings and wordmark
- **Instrument Sans** (`@fontsource-variable/instrument-sans`) — body copy and navigation
- **Courier Prime** (`@fontsource/courier-prime`) — specimen labels, Latin names, prices and re-entry times

## Public configuration and Contact contract

The real `<jamstacks-support-form>` host and `{cdn}/sites/{siteId}/embed.js` bootstrap render only
on `/contact/` when `JAMSTACKS_SITE` or `site.config.json` provides a site ID. Without a site ID,
the site renders the visible email fallback with no embed request. Navigation to and from `/contact/`
uses full-document loads via `SiteLink`.

| Environment variable | Public build-time meaning |
| --- | --- |
| `JAMSTACKS_SITE` | Website ID; blank retains file default, absent ID gives email fallback |
| `NEXT_PUBLIC_JAMSTACKS_CDN_URL` | CDN asset base; default `https://cdn.jamstacks.net` |
| `NEXT_PUBLIC_SITE_DOMAIN` | Hostname overriding config domain |
| `SITE_TIME_ZONE` | IANA zone overriding config `timeZone` |
| `PAGES_BASE_PATH` | Project path such as `/preview`; blank for custom domain/root |
| `PAGES_BASE_URL` | Actual Pages origin and path; takes precedence for canonical URLs |
| `JAMSTACKS_ALLOW_LOCAL_CDN` | Explicit localhost-only testing opt-in; disallowed in Actions |

## Checks and preview

```sh
npm run check
PAGES_BASE_PATH=/preview PAGES_BASE_URL=https://owner.github.io/preview npm run build
npm start -- --base /preview --port 3000
```

## Gallery publishing assets

`jamstacks/` contains gallery-only metadata and captures. Customer websites can delete `jamstacks/`,
`plan/` and `.claude/skills/` without affecting builds, tests or GitHub Pages deployment.

```sh
node /home/mythz/src/mythz/jamstacks.net/tools/template-screenshots/capture.mjs \
  --template /path/to/next-pest-shield --modes light,dark --executable /usr/bin/chromium
node --test jamstacks/config.test.mjs
```
