/**
 * WizCRM page content — extracted from docs/BROCHURE-FEATURES.md.
 *
 * Wording follows the source closely; bullets are tightened for screen
 * reading (the brochure runs longer lines than a web column should). No
 * claim, figure or capability has been added that is not in the source.
 *
 * The source's own suggested flow is followed: hook → problem → the AI trio
 * → what's under the hood → trust → call to action.
 */
import type { IconName } from '../components/ui/Icon.astro';

export const wizcrm = {
  name: 'WizCRM',
  hook: 'The CRM that writes itself',
  positioning:
    'The AI-first CRM built for African field-sales teams — a CRM that writes itself, prospects for you, manages your reps, and tells you exactly what every deal is worth.',
  audience: 'Built for SME sales leaders and field teams across Kenya and East Africa.',
};

/* The problem, from the source's suggested brochure flow (§2). */
export const problems: { title: string; body: string; icon: IconName }[] = [
  {
    title: 'Reps skip the data entry',
    body: 'A five-minute form after every visit is a chore nobody does. So the pipeline shows yesterday, not today.',
    icon: 'process-excellence',
  },
  {
    title: 'Deals go quiet',
    body: 'Leads stall with nobody watching. By the time anyone notices, the customer has moved on.',
    icon: 'data-analytics',
  },
  {
    title: 'Managers chase status all day',
    body: 'Five people, five phone calls, every morning — before any actual selling happens.',
    icon: 'exec-technology',
  },
];

/* The three flagship AI capabilities — the ⭐ items in the source. */
export const aiTrio: {
  n: string;
  name: string;
  tagline: string;
  intro: string;
  points: string[];
  icon: IconName;
}[] = [
  {
    n: '01',
    name: 'AI Visit Capture',
    tagline: 'The CRM that writes itself',
    intro:
      'A rep finishes a customer visit, talks for 20–30 seconds, and the CRM does the paperwork.',
    points: [
      'Speak naturally about the visit — no forms, no typing',
      'AI drafts a full structured report: outcome, who was met, competitor mentioned, objection raised, next step and due date',
      'Every field is editable before saving — AI drafts, the rep decides',
      'Turns a five-minute chore reps skip into a twenty-second habit they actually do',
      'Works fully offline — syncs the moment a connection returns',
    ],
    icon: 'ai-automation',
  },
  {
    n: '02',
    name: 'Wanjiru, your virtual sales manager',
    tagline: 'The daily rhythm your team never has time for',
    intro:
      'An AI persona that runs the management routine your team currently does not have time for.',
    points: [
      'Reads the whole pipeline every morning — stale leads, overdue tasks, targets versus actuals',
      'Assigns each rep a short, reasoned task list with a one-line "why" for every item',
      'Nudges reps who have gone quiet during the day',
      'Sends the owner one daily brief instead of five people’s worth of status-chasing',
      'Escalates only what genuinely needs a human decision — never a disciplinary tool',
      'Starts in Draft mode, where you approve each morning plan, and graduates to Auto once a clean approval streak is on record',
    ],
    icon: 'exec-technology',
  },
  {
    n: '03',
    name: 'AI-assisted prospecting',
    tagline: 'Describe your ideal customer once',
    intro:
      'The engine then finds, scores and enriches matching companies for you — and tells you which are buying right now.',
    points: [
      'Discovers companies from Google Maps data, scoped to your target market',
      'Scores every prospect 0–85 on industry fit, web presence and reputation, sorted into A/B/C tiers — fully explainable, no black box',
      'Reads each survivor’s website for size, sector, and whether they already run competing software',
      'Finds the actual decision-makers — procurement, operations, finance, IT, MD or CEO',
      'Heat Map: a live radar of companies showing buying intent right now, scanned across nine sources including tenders, hiring signals and new registrations',
      'Email sequences with open, click and reply tracking — a reply imports the prospect straight into your pipeline',
    ],
    icon: 'data-analytics',
  },
];

/* Everything under the hood — sections 4 to 8 of the source. */
export const platform: { name: string; hook: string; points: string[]; icon: IconName }[] = [
  {
    name: 'Opportunity cost centre & commissions',
    hook: 'Every deal becomes a real, trackable cost centre — not just a pipeline card.',
    points: [
      'Documents, notes and tasks per opportunity, tagged as Quotation, Proforma, Invoice or LPO',
      'Live budget versus spend versus revenue versus margin, flagged automatically when a deal goes over',
      'Instant alert to managers the moment a customer LPO lands',
      'Commission calculated from real invoice totals — forecast at quote, confirmed at invoice',
      'Commission becomes collectible in proportion to what the customer has actually paid',
      'Org-wide commission liability by salesperson, plus a running pending figure on every rep’s dashboard',
    ],
    icon: 'erp-systems',
  },
  {
    name: 'Lead & pipeline management',
    hook: 'The solid CRM backbone underneath everything else.',
    points: [
      'Fully customisable stages, from New through to Won or Lost',
      'Duplicate detection on every new lead',
      'Drag-and-drop Kanban with rule-enforced stage transitions',
      'Full activity timeline per lead: calls, emails, meetings, notes, stage history',
      'Bulk import, reassignment and stage changes for managers',
      'Structured Won/Lost outcomes with deal value and loss-reason tracking',
    ],
    icon: 'process-excellence',
  },
  {
    name: 'Built for the field',
    hook: 'A native mobile app for reps on the road — not a shrunk-down website.',
    points: [
      'One-tap call, WhatsApp and directions straight from a lead',
      'Business-card scanning — photograph a card, AI fills in the lead',
      'GPS-verified, geofenced meeting check-in and check-out',
      'Document library reps can share over WhatsApp on the spot',
      'Offline-first: notes, tasks, reports and photos queue and sync automatically',
      'Local reminders and push notifications for tasks and follow-ups',
    ],
    icon: 'managed-services',
  },
  {
    name: 'Reports managers actually read',
    hook: 'Executive visibility without exporting a single spreadsheet.',
    points: [
      'Role-adaptive dashboard — open, won, stale, overdue, win rate — with drill-down',
      'Conversion funnel with time-in-stage analytics',
      'Rep performance leaderboard and live team workload',
      'Weighted pipeline forecast and monthly pacing: ahead, on track or behind',
      'Data hygiene report — missing contacts, stale leads, duplicates',
      'A one-paragraph AI-written morning brief for the owner',
    ],
    icon: 'data-analytics',
  },
];

/* Section 9 — the trust story. */
export const trust: string[] = [
  'Kenya Data Protection Act compliant at every step',
  'KDPA-classified contact data, with a configurable gate or block mode for personal identifiers',
  'Full data-subject deletion and suppression-list support',
  'Every AI action is logged and auditable — nothing the AI does is invisible',
  'Role-based access control, hardened login and encrypted sessions',
  'White-label branding: your logo and accent colour, applied live across the app',
];

/* The structured fields AI Visit Capture produces — drives the hero demo. */
export const captureFields: { label: string; value: string }[] = [
  { label: 'Outcome', value: 'Positive — proposal requested' },
  { label: 'Met', value: 'Grace Wanjiku, Procurement Lead' },
  { label: 'Competitor', value: 'Mentioned incumbent supplier' },
  { label: 'Objection', value: 'Lead time on bulk orders' },
  { label: 'Next step', value: 'Send proposal with revised lead times' },
  { label: 'Due', value: 'Thursday' },
];
