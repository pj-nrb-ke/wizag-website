/**
 * Sage Business Cloud Accounting — page content.
 *
 * Source: C:\Users\pj\Dropbox\SageAccounting_Brochure_v2.html
 *
 * ⚠⚠ THE SOURCE BROCHURE IS WRITTEN FOR SOUTH AFRICA. It refers to SARS six
 * times, to "South African regulatory requirements", to "Province" as an
 * analysis-code example, and to Domestic Reverse Charges on valuable metals
 * — a South African VAT construct. WIZAG sells in Kenya, where the authority
 * is the KRA and e-invoicing runs through eTIMS.
 *
 * Every SARS claim has therefore been REMOVED rather than find-and-replaced
 * with "KRA". Swapping the acronym would assert a Kenyan compliance position
 * that nobody has verified. What survives describes the software's
 * capability (VAT calculated per transaction, digital records, return
 * preparation) and says plainly that Kenyan statutory configuration is
 * settled during scoping.
 *
 * ⚠ BEFORE THIS PAGE GOES LIVE, confirm with Sage what the product's actual
 * eTIMS/KRA position is, and have `taxNote` below reviewed against it.
 *
 * ALSO DROPPED — unverified figures, per brief §8.12 ("do not invent
 * clients, statistics, testimonials, certifications, or partnerships"):
 *   "Trusted by 3 million+ businesses"   — Sage plc's claim, not ours to make
 *   "40+ years of innovation"            — Sage plc's, adds nothing here
 *   "100% SARS compliant"                — wrong country, absolute claim
 *   "3× faster payment collection"       — unsourced performance claim
 *   "Enterprise ERP Infrastructure Partner" — not a Sage partner tier we can
 *                                          evidence; see partnerNote
 *
 * Copy is rewritten rather than lifted. The brochure leans on exactly the
 * words the WIZAG brief bans — "transform", "seamless", "Smarter Accounting.
 * Infinite Possibilities." Feature facts are kept; the voice is ours.
 */
import type { IconName } from '../components/ui/Icon.astro';

export const sage = {
  name: 'Sage Business Cloud Accounting',
  shortName: 'Sage Business Cloud',
  hook: 'Books that are current, not reconstructed',
  positioning:
    'Cloud accounting for growing businesses — invoicing, bank reconciliation, inventory, VAT and reporting in one place, implemented and supported from Nairobi by WIZAG.',
  audience: 'For businesses that have outgrown spreadsheets but do not need a full ERP.',
};

/* The client confirmed authorised partner status on 2026-07-21. Wording is
   kept deliberately plain: no tier name is claimed, because none has been
   evidenced. Replace only against something official from Sage. */
export const partnerNote =
  'WIZAG is an authorised Sage business partner. We implement, migrate, integrate and support Sage Business Cloud Accounting for businesses across Kenya and East Africa.';

/* The honest statement of the compliance position. Says what is true of the
   software, and what WIZAG does about the rest. */
export const taxNote =
  'Your Kenyan statutory setup — KRA registration details, VAT treatment and your eTIMS position — is confirmed during scoping rather than assumed. We will tell you plainly what the product handles and what needs to sit alongside it.';

/* -------------------------------------------------------------------------
   THE TWELVE MODULES. Add-ons are marked, because a buyer discovering at
   quotation stage that four of these cost extra is a buyer who stops
   trusting the rest of the page.
   ------------------------------------------------------------------------- */
export const modules: {
  name: string;
  body: string;
  icon: IconName;
  addOn?: boolean;
}[] = [
  {
    name: 'Financial reporting',
    body: 'Profit and loss, balance sheet, cash flow forecast and aged debtors, from one dashboard.',
    icon: 'data-analytics',
  },
  {
    name: 'Invoicing',
    body: 'Create, send and track invoices, accept online payment and reconcile against the bank.',
    icon: 'document',
  },
  {
    name: 'Bank connect',
    body: 'Link the bank account so transactions match themselves against invoices.',
    icon: 'bank',
  },
  {
    name: 'Debtors manager',
    body: 'Automated follow-up on unpaid invoices, on a reminder schedule you set.',
    icon: 'flag',
    addOn: true,
  },
  {
    name: 'Inventory',
    body: 'Stock levels, re-order alerts, product categories and best-seller reporting.',
    icon: 'erp-systems',
  },
  {
    name: 'Multi-currency',
    body: 'Live exchange rates, automatic gain and loss tracking, foreign-currency bank accounts.',
    icon: 'globe',
  },
  {
    name: 'VAT and tax',
    body: 'VAT calculated on every transaction, with digital records and return preparation.',
    icon: 'balance',
  },
  {
    name: 'Budgeting',
    body: 'Annual budgets built from prior-year actuals, compared against what actually happened.',
    icon: 'process-excellence',
  },
  {
    name: 'Project tracking',
    body: 'Analysis codes that segment income and cost by division, site or engagement.',
    icon: 'schedule',
    addOn: true,
  },
  {
    name: 'Time tracking',
    body: 'Billable hours tied to projects, customers and invoices.',
    icon: 'timesheet',
    addOn: true,
  },
  {
    name: 'AutoEntry',
    body: 'Document capture that reads receipts and supplier invoices and posts them for approval.',
    icon: 'ai-automation',
    addOn: true,
  },
  {
    name: 'Mobile',
    body: 'Invoices, reports and the state of the business, from a phone.',
    icon: 'device',
  },
];

/* The reports, which is what finance actually buys. */
export const reports: { name: string; body: string }[] = [
  {
    name: 'Profit and loss',
    body: 'Current period against the prior one, with the cost patterns visible rather than inferred.',
  },
  {
    name: 'Balance sheet',
    body: 'Assets, liabilities and equity at any date, in a form a lender or auditor will accept.',
  },
  {
    name: 'Cash flow forecast',
    body: 'Money in and out on a forward timeline, so a shortfall shows up weeks before it bites.',
  },
  {
    name: 'Aged debtors and creditors',
    body: 'Who owes you and who you owe, broken down by how long it has been outstanding.',
  },
  {
    name: 'Sales day book and audit trail',
    body: 'A complete transaction record, which is what makes a reconciliation quick instead of forensic.',
  },
  {
    name: 'Advisor access',
    body: 'Invite your accountant to the live books. They run their own reports and export to Excel, CSV or PDF.',
  },
];

/* Debtors Manager — drives the animated workflow. */
export const debtorsSteps: { n: string; title: string; body: string }[] = [
  {
    n: '01',
    title: 'Invoice issued',
    body: 'It joins the outstanding payments timeline the moment it is sent, not at month-end.',
  },
  {
    n: '02',
    title: 'Reminders go out',
    body: 'On a schedule you set, escalating after the due date — without anyone having to remember.',
  },
  {
    n: '03',
    title: 'Accounts managed in one place',
    body: 'Account status, drafted responses and each customer’s payment history in a single panel.',
  },
  {
    n: '04',
    title: 'Payment matched',
    body: 'It arrives, matches against the invoice and drops off the outstanding list on its own.',
  },
];

/* AutoEntry — drives the capture animation. */
export const autoEntrySteps: { n: string; title: string; body: string }[] = [
  { n: '01', title: 'Capture', body: 'Photograph or upload a receipt, supplier invoice or bank statement.' },
  { n: '02', title: 'Read', body: 'The document is analysed and its fields extracted automatically.' },
  { n: '03', title: 'Approve', body: 'You categorise and confirm. The transaction posts to the books.' },
];

export const inventoryPoints: string[] = [
  'Minimum re-order levels, with an automatic warning before you run out',
  'Reports on best-selling products and the margin each one carries',
  'Bulk-load an existing catalogue from a CSV file',
  'Customer-specific pricing: sales, trade or wholesale',
  'Stock, non-stock and service items handled side by side',
  'Products grouped into categories, so invoicing is quicker',
];

export const currencyPoints: string[] = [
  'Foreign currency switched on without a configuration project',
  'One view of every bank account across the currencies you trade in',
  'Exchange gains and losses recorded automatically as they arise',
  'Specific rates applied to historic transactions where needed',
  'Foreign-currency bank accounts reconciled like any other',
  'Invoices raised and payments recorded in any currency',
];

/* What WIZAG adds. Drawn from the brochure's "Why WizAg?" panel, minus the
   unevidenced partner-tier title. */
export const wizagRole: { title: string; body: string; icon: IconName }[] = [
  {
    title: 'A dedicated ERP team',
    body: 'Implementation, data migration, integration and ongoing support from people who do this full time — not a reseller passing you to a support queue.',
    icon: 'exec-technology',
  },
  {
    title: 'No infrastructure to run',
    body: 'It is cloud software. There is no server to buy, patch or back up, and no one on your team becomes its accidental administrator.',
    icon: 'managed-services',
  },
  {
    title: 'Deployed under your own brand',
    body: 'For accounting practices: run Sage Business Cloud for your clients as part of your own advisory service, with WIZAG behind you.',
    icon: 'team',
  },
];

/* -------------------------------------------------------------------------
   Drives the hero dashboard. Illustrative figures — the panel is labelled
   "Demonstration" so it cannot be read as a client's numbers.
   ------------------------------------------------------------------------- */
export const dashboardDemo = {
  tabs: ['Sales', 'Purchases', 'Cash flow'],
  metrics: [
    { label: 'Outstanding', value: '24 invoices', sub: 'KSh 3.42M', tone: 'plain' as const },
    { label: 'Overdue', value: '3 invoices', sub: 'Needs attention', tone: 'alert' as const },
  ],
  /** Monthly bars, as a percentage of the chart height. */
  bars: [42, 58, 71, 49, 66, 88, 62, 44],
  /** The two months the chart highlights. */
  accentBars: [2, 5],
  ageing: [
    { label: 'Current', pct: 62 },
    { label: '30 days', pct: 24 },
    { label: '60 days', pct: 9 },
    { label: '90+', pct: 5 },
  ],
};
