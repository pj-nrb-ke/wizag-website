/**
 * Sage 200 — page content.
 *
 * Source: C:\Users\pj\Downloads\Documents\Sage200-Product-brochure.pdf
 * (Sage 200 e-book, 12pp, © 2024 The Sage Group plc)
 *
 * ── WHICH PRODUCT THIS IS ─────────────────────────────────────────────
 * This is Sage 200 — the UK & Ireland product, sold in Standard and
 * Professional editions. It is NOT Sage 200 Evolution, which is Sage's
 * Africa & Middle East product with an entirely different module set
 * (Segmented GL, Branch Accounting, Municipal Billing, Sales Force
 * Automation, Voucher Manager…).
 *
 * The client confirmed 2026-07-22 that WIZAG's Kenya licensing falls under
 * Sage's UK & Ireland offices, so Sage 200 is the correct product. The nav
 * label and route were renamed from "Sage 200 Evolution" to match.
 *
 * ⚠ Do not merge Evolution material into this file. The client holds
 * Evolution partner training documents; those describe a different product.
 *
 * ── WHAT COULD NOT BE EXTRACTED ───────────────────────────────────────
 * The brochure's module matrix (pp5–6) marks which modules belong to
 * Standard and which to Professional with TICK GRAPHICS, not text. No PDF
 * renderer was available in this environment, so the per-edition split
 * could not be read. It has NOT been guessed: `modules` below lists every
 * module with its description, and the edition difference is described
 * qualitatively from p7, which is text. If a tick-by-tick table is wanted,
 * supply the splits or a text-selectable version.
 *
 * Likewise the brochure footnotes an "additional charge" against some
 * modules without the extraction preserving which. `chargeNote` says so
 * plainly rather than pretending otherwise.
 *
 * ── DELIBERATELY EXCLUDED (brief §8.12) ───────────────────────────────
 *   Both customer testimonials (Daniel Flatt, Distribution Supplies Ltd;
 *     Rose Franklin, Shropshire Petals) — Sage's UK customers, not WIZAG's.
 *     The brief forbids testimonials that are not ours, and borrowed ones
 *     are worse than none.
 *   "FTSE 100", "over 30 years", "13,000 employees", "23 countries",
 *     "millions of customers" — Sage plc corporate figures, not ours.
 *   The UK contact number (0191 479 5988).
 *   "Get tax and legal admin covered" — UK-compliance framing. Reworded,
 *     with the Kenyan position handled honestly in `statutoryNote`.
 */
import type { IconName } from '../components/ui/Icon.astro';

export const sage200 = {
  name: 'Sage 200',
  hook: 'One system for the whole business',
  positioning:
    'Finance, stock, sales and reporting in a single system — the power of the desktop with the reach of the cloud. Implemented, migrated and supported from Nairobi by WIZAG.',
  /* p4 gives the fit as "a turnover of £1 million to £30 million, or
     typically 5 to 200 employees".

     ⚠ THE TURNOVER BAND IS DELIBERATELY NOT PUBLISHED (client, 2026-07-23).
     A sterling figure on a Kenyan page invites a prospect to convert it,
     land below the line and disqualify themselves before speaking to anyone
     — and the real question is complexity, not size. Employee count stays
     because it is currency-free and starts low enough to include rather
     than exclude. Do not reinstate the amounts. */
  audience: 'Typically 5 to 200 employees, across any sector.',
  fitNote:
    'Built for companies that have outgrown entry-level accounting but are not ready to commit to a full-scale ERP programme — which is a question about how complex your operation is, not how large.',
};

/* The two editions, from p7 — text, so quoted closely. */
export const editions: { name: string; tag: string; body: string; icon: IconName }[] = [
  {
    name: 'Sage 200 Standard',
    tag: 'Out of the box',
    body: 'The essential financial and stock capabilities, giving you the insight and flexibility to grow. Quick to stand up, and configured rather than built.',
    icon: 'erp-systems',
  },
  {
    name: 'Sage 200 Professional',
    tag: 'Customisable',
    body: 'Everything in Standard, plus customisable features for businesses with more complex processes — manufacturing and service industries, or anyone needing to manage customers more closely.',
    icon: 'process-excellence',
  },
];

/* The capability hub, from the wheel on p7. Bill of materials sits with
   manufacturing there and is merged here so the diagram reads as eight
   capabilities around one system. */
export const capabilities: { label: string; icon: IconName }[] = [
  { label: 'Financials', icon: 'balance' },
  { label: 'Commercials', icon: 'erp-systems' },
  { label: 'Manufacturing', icon: 'process-excellence' },
  { label: 'Project accounting', icon: 'schedule' },
  { label: 'CRM', icon: 'team' },
  { label: 'Payments', icon: 'bank' },
  { label: 'Reporting & analysis', icon: 'data-analytics' },
  { label: 'Office automation', icon: 'ai-automation' },
];

/* Every module in the matrix (pp5–6), with the brochure's own description
   tightened for screen reading. Edition split deliberately omitted — see
   the header note. */
export const modules: { name: string; body: string; icon: IconName; note?: string }[] = [
  {
    name: 'Financials',
    body: 'The four key ledgers and invoicing — the core of managing cash flow.',
    icon: 'balance',
  },
  {
    name: 'Commercials',
    body: 'Supply chain and price lists.',
    icon: 'erp-systems',
  },
  {
    name: 'Workspaces and connected user',
    body: 'Data mining and reporting in the office or on the road, with dashboard views specific to your role.',
    icon: 'data-analytics',
  },
  {
    name: 'Excel reporting',
    body: 'More detailed analysis, accessible online.',
    icon: 'document',
  },
  {
    name: 'Salary and supplier payments',
    body: 'Make supplier payments straight from the software.',
    icon: 'bank',
  },
  {
    name: 'Invoice payments',
    body: 'Integrated invoice payments, raised and settled inside the system.',
    icon: 'document',
  },
  {
    name: 'Project accounting',
    body: 'Project profitability and cost budgets visible at a glance.',
    icon: 'schedule',
  },
  {
    name: 'Web timesheets and expenses',
    body: 'Entered and authorised online.',
    icon: 'timesheet',
  },
  {
    name: 'Bill of materials',
    body: 'For simple manufacturing processes.',
    icon: 'process-excellence',
  },
  {
    name: 'Business intelligence',
    body: 'Trend analysis, with your own reports and dashboards.',
    icon: 'data-analytics',
  },
  {
    name: 'Integrated add-ons',
    body: 'A range of add-ons from Sage’s network of developers.',
    icon: 'ai-automation',
  },
  {
    name: 'Sage 200 Services',
    body: 'Guidance and advice, two connected users included, and the full range of Excel reports.',
    icon: 'managed-services',
  },
  {
    name: 'Customer relationship management',
    body: 'Connected CRM for better visibility across the customer record.',
    icon: 'team',
    note: 'Requires the Qnect 200 connector',
  },
  {
    name: 'Microsoft 365 Power Platform connectors',
    body: 'Workflows that automate tasks and processes across applications and services.',
    icon: 'globe',
  },
];

/* Said plainly, because the alternative is a surprise at quotation. */
export const chargeNote =
  'Some modules carry an additional charge, and the mix differs between Standard and Professional. We confirm exactly which against your edition before you sign anything — no module on this page is presented as included when it is not.';

/* The four benefits, p8. "Get tax and legal admin covered" was UK-compliance
   framing and has been reworded; the Kenyan position is handled separately
   and honestly below. */
export const benefits: { title: string; body: string; icon: IconName }[] = [
  {
    title: 'Reliable and trusted',
    body: 'A stable, well-supported platform from a vendor that is not going anywhere — which matters more for a system of record than for anything else you buy.',
    icon: 'managed-services',
  },
  {
    title: 'Scales as you grow',
    body: 'It is built to be levelled up rather than replaced, so growth means adding modules and users rather than starting a new selection process.',
    icon: 'data-analytics',
  },
  {
    title: 'Quick to stand up',
    body: 'Standard is configured rather than built. You are not funding an eighteen-month programme to get your ledgers working.',
    icon: 'process-excellence',
  },
  {
    title: 'One team, one set of numbers',
    body: 'Finance, sales and operations working from the same data, which removes most of the reconciliation arguments before they start.',
    icon: 'team',
  },
];

/* Access and services, p9. */
export const anywhere: string[] = [
  'Key information reachable over an internet connection, from a phone, tablet, laptop or desktop',
  'Microsoft 365 alongside it, working with Outlook and Excel as your team already does',
  'Reporting broken down by region, sales representative, industry, customer rating, account manager or partner',
];

export const services: string[] = [
  'The Report Design Service — up to three customised reports a year',
  'A library of how-to webinars covering the product, business advice and legislation',
  'A getting-started homepage with one-click access to the help centre and how-to videos',
  'Two connected users included, plus the full range of Excel reports',
];

/* WIZAG's honest statement on the Kenyan position. Deliberately claims no
   certification — the brochure's compliance language is written for the UK.
   Consistent with the note on the Sage Business Cloud page. */
export const statutoryNote =
  'Kenya licensing for Sage 200 sits under Sage UK & Ireland, so the product’s compliance features are built to UK requirements. Your Kenyan statutory setup — KRA registration, VAT treatment, eTIMS and payroll — is scoped and confirmed with you rather than assumed. We will tell you plainly what the product covers and what has to sit alongside it.';

/* What WIZAG adds. */
export const wizagRole: { title: string; body: string; icon: IconName }[] = [
  {
    title: 'Selection before implementation',
    body: 'Standard or Professional is a real decision with a real cost attached. We work out which one fits before anyone raises a quotation, and we will say so if neither does.',
    icon: 'exec-technology',
  },
  {
    title: 'Migration that reconciles',
    body: 'Opening balances, master data and history moved across and agreed to your existing numbers — the part of an ERP project that actually decides whether people trust the new system.',
    icon: 'erp-systems',
  },
  {
    title: 'Support that knows your build',
    body: 'A dedicated ERP team in Nairobi who configured your system and remember why. Not a ticket queue meeting your business for the first time.',
    icon: 'managed-services',
  },
];
