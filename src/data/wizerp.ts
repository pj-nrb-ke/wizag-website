/**
 * WizERP — page content.
 *
 * Source: Dropbox/WIZAG/_SALES/_BROCHURES 2026/WizERP Brochure 2026.md
 * (client's OCR of the 17-page PDF of the same name).
 *
 * ── ONLY PAGES 1–5 ARE WIZERP ────────────────────────────────────────
 * That PDF is two decks bound together. Pages 1–5 are WizERP. Pages 6–17
 * are HRGenie — CloudHR, CloudWage and TimeTrax — a separate HR product
 * published by Skillmind Software Limited.
 *
 * Nothing from pages 6–17 appears here. TimeTrax in particular is on the
 * client's own exclusion list (2026-07-21: "TimeTrax, MobiSales, CrownEHR —
 * do not put them as they belong to another company").
 *
 * ⚠ The brochure's own contact block (p4) reads skillmindsoftware.com,
 * info@skillmindsoftware.com and +254 111 772 200 — not WIZAG's details.
 * None of that is carried over: this page routes to /contact like every
 * other. Flagged for the client, because whether WizERP is sold as WIZAG's
 * or Skillmind's is a positioning question, not a copy question.
 *
 * ── CLAIMS HANDLED CAREFULLY ─────────────────────────────────────────
 * The brochure says WizERP is an OPEN SOURCE ERP with "a strong community",
 * "continuous improvements" and "thousands of businesses worldwide". Those
 * describe the upstream project and its global community — NOT WIZAG's own
 * client base. So:
 *   · "Join thousands of businesses worldwide"  — DROPPED. On WIZAG's own
 *     site that reads as WIZAG's customer count, which nobody has evidenced.
 *   · "open source", "zero licence cost"        — KEPT, and led with. They
 *     are the sharpest commercial facts in the document and they are
 *     checkable.
 *
 * Figures in the dashboard are illustrative and converted from the
 * brochure's US dollars to shillings, because the buyer is Kenyan. The
 * panel is labelled so they cannot be read as a client's numbers.
 */
import type { IconName } from '../components/ui/Icon.astro';

export const wizerp = {
  name: 'WizERP',
  tagline: 'simplifying complexities…',
  hook: 'The whole business, on one system you actually own',
  positioning:
    'An open-source ERP covering finance, sales, purchasing, inventory, manufacturing and fixed assets — with no per-user licence fee, and the freedom to change it to fit how you work.',
  audience: 'For businesses that have outgrown disconnected systems and do not want to be locked into one.',
  /* The brochure's own closing line — and a good one. */
  promise: 'Simplify your business. Amplify your success.',
};

/* ---------------------------------------------------------------------
   THE THREE COMMERCIAL FACTS. These carry the 30-second read, so they sit
   immediately under the hero and get the largest type on the page.
   --------------------------------------------------------------------- */
export const headlineFacts: { value: string; label: string; body: string; icon: IconName }[] = [
  {
    value: 'Zero',
    label: 'licence cost',
    body: 'Open source. No per-user fee, no annual seat renewal, no penalty for adding the next twenty people.',
    icon: 'balance',
  },
  {
    value: '60+',
    label: 'standard reports',
    body: 'Across finance, sales, purchasing, inventory and manufacturing — exportable to PDF and Excel.',
    icon: 'data-analytics',
  },
  {
    value: '6',
    label: 'integrated modules',
    body: 'One ledger underneath all of them, so a sale, a stock movement and a posting are the same event.',
    icon: 'erp-systems',
  },
];

/* ---------------------------------------------------------------------
   THE SUITE — page 2 of the brochure, verbatim in substance.
   --------------------------------------------------------------------- */
export const modules: { name: string; icon: IconName; items: string[] }[] = [
  {
    name: 'Financial management',
    icon: 'balance',
    items: [
      'General ledger',
      'Accounts receivable',
      'Accounts payable',
      'Banking and reconciliation',
      'Multi-currency',
      'Budgets and financial reports',
    ],
  },
  {
    name: 'Sales and CRM',
    icon: 'growth',
    items: [
      'Quotations and sales orders',
      'Deliveries and invoicing',
      'Customer management',
      'Pricing and discounts',
      'Sales analysis',
      'Customer statements',
    ],
  },
  {
    name: 'Purchase and supply chain',
    icon: 'migrate',
    items: [
      'Supplier management',
      'Purchase orders',
      'Goods received notes',
      'Supplier invoices',
      'Returns and credit notes',
      'Purchase analysis',
    ],
  },
  {
    name: 'Inventory management',
    icon: 'erp-systems',
    items: [
      'Item and warehouse management',
      'Stock tracking',
      'Multi-location inventory',
      'Barcode support',
      'Reorder levels and alerts',
      'Inventory valuation',
    ],
  },
  {
    name: 'Manufacturing',
    icon: 'process-excellence',
    items: [
      'Bills of materials',
      'Work orders',
      'Production management',
      'Material issue and usage',
      'Finished goods',
      'Manufacturing reports',
    ],
  },
  {
    name: 'Fixed assets',
    icon: 'document',
    items: [
      'Asset registration',
      'Depreciation calculation',
      'Asset transfers',
      'Asset disposal',
      'Depreciation posting',
      'Asset reports',
    ],
  },
];

/* Page 3 — the capabilities that matter to a finance director specifically. */
export const capabilities: { name: string; body: string; icon: IconName }[] = [
  {
    name: 'Reporting and analytics',
    body: '60+ standard reports across every module, exportable to PDF, Excel or print. The month-end pack stops being a manual assembly job.',
    icon: 'data-analytics',
  },
  {
    name: 'Dimensions and cost centres',
    body: 'Track departments, cost centres, projects and profit centres. You can finally answer which part of the business is actually making money.',
    icon: 'schedule',
  },
  {
    name: 'Workflow and automation',
    body: 'End to end from quotation to payment, with the accounting postings raised automatically rather than keyed in afterwards.',
    icon: 'ai-automation',
  },
  {
    name: 'Users and security',
    body: 'Role-based access, granular permissions, session control and complete audit trails.',
    icon: 'managed-services',
  },
  {
    name: 'System administration',
    body: 'Companies, fiscal years, taxes, currencies, users and backups — all configurable without a developer.',
    icon: 'exec-technology',
  },
  {
    name: 'Multi-company and multi-currency',
    body: 'Separate books and settings per company, and transactions in any currency with real-time rate management.',
    icon: 'globe',
  },
];

/* Quote-to-cash — drives the workflow diagram. Built from the brochure's
   "end-to-end workflow from quotation to payment with automatic accounting
   postings", expanded into the steps that workflow actually contains. */
export const quoteToCash: { n: string; title: string; body: string }[] = [
  {
    n: '01',
    title: 'Quotation',
    body: 'Raised against a customer and a price list, with discounts applied by rule rather than by memory.',
  },
  {
    n: '02',
    title: 'Sales order',
    body: 'Confirmed, and stock is committed against it so nobody sells the same item twice.',
  },
  {
    n: '03',
    title: 'Delivery',
    body: 'Goods issued from the right warehouse. Inventory and cost of sales move on the same action.',
  },
  {
    n: '04',
    title: 'Invoice',
    body: 'Generated from the delivery, so what was shipped and what was billed cannot drift apart.',
  },
  {
    n: '05',
    title: 'Receipt',
    body: 'Payment allocated against the invoice, the customer statement clears, and the ledger is already posted.',
  },
];

/* Page 5 — what has been built around the core ERP. */
export const ecosystem: { name: string; body: string; icon: IconName }[] = [
  {
    name: 'CRM',
    body: 'Leads, follow-ups and customer interactions, connected to the same customer record the ledger uses.',
    icon: 'team',
  },
  {
    name: 'E-commerce',
    body: 'An online storefront selling from the same catalogue and the same stock position.',
    icon: 'globe',
  },
  {
    name: 'Point of sale',
    body: 'Retail billing, inventory control and reporting, posting straight through to accounts.',
    icon: 'device',
  },
  {
    name: 'WhatsApp commerce',
    body: 'Catalogue sharing, customer engagement and order capture on the channel customers already use.',
    icon: 'mail',
  },
  {
    name: 'Field service',
    body: 'Inquiry handling, quotations, job scheduling and service tracking for teams working on site.',
    icon: 'schedule',
  },
  {
    name: 'Loyalty',
    body: 'A mobile programme for earning and redeeming rewards, tied to the customer record.',
    icon: 'growth',
  },
];

/* Technology and deployment — page 3. Stated plainly because a technical
   evaluator will ask, and burying it wastes their time and ours. */
export const platform: { label: string; value: string }[] = [
  { label: 'Deployment', value: 'Cloud or on-premise' },
  { label: 'Hosting', value: 'Linux or Windows' },
  { label: 'Stack', value: 'PHP and MySQL' },
  { label: 'Access', value: 'Web based, any device' },
  { label: 'Licence', value: 'Open source' },
  { label: 'Structure', value: 'Multi-company, multi-currency' },
];

/* Why it wins — page 4, with the unevidenced customer-count claim removed. */
export const whyWizerp: { title: string; body: string; icon: IconName }[] = [
  {
    title: 'You own it, and you can change it',
    body: 'Open source means the code is yours to extend. When the software does not match your process, the process does not have to change.',
    icon: 'process-excellence',
  },
  {
    title: 'No licence fee competing with your budget',
    body: 'Money that would have gone to seat licences goes into implementation, training and the changes that actually fit your business.',
    icon: 'balance',
  },
  {
    title: 'It scales without a re-purchase',
    body: 'The same system suits a company of fifteen and a group of several hundred across multiple entities.',
    icon: 'growth',
  },
  {
    title: 'Backed locally, not just globally',
    body: 'A mature open-source platform with an international community, implemented and supported by a team in Nairobi.',
    icon: 'managed-services',
  },
];

/* WIZAG's role. This is the honest differentiator: the software is free,
   which makes the implementation the entire product. */
export const wizagRole: { title: string; body: string; icon: IconName }[] = [
  {
    title: 'Selection and scoping',
    body: 'We will tell you if WizERP is the wrong fit. A free licence is no bargain if the system cannot do what you need.',
    icon: 'exec-technology',
  },
  {
    title: 'Implementation and migration',
    body: 'Chart of accounts, master data and opening balances moved across and agreed to your existing numbers before anyone relies on them.',
    icon: 'migrate',
  },
  {
    title: 'Customisation',
    body: 'Reports, workflows and modules built to your process — the part open source makes possible and most vendors charge you to avoid.',
    icon: 'ai-automation',
  },
  {
    title: 'Support and improvement',
    body: 'Ongoing support from people who configured your system, plus the upgrades and enhancements that keep it current.',
    icon: 'managed-services',
  },
];

/* The Kenyan statutory position, consistent with the Sage pages. */
export const statutoryNote =
  'Your Kenyan statutory setup — KRA registration, VAT treatment and your eTIMS position — is scoped and configured with you rather than assumed. Because the platform is open source, what it does not do out of the box can generally be built rather than worked around.';

/* ---------------------------------------------------------------------
   Drives the hero dashboard. Proportions follow the brochure's own mockup;
   the currency is shillings because the buyer is Kenyan. Illustrative, and
   the panel says so.
   --------------------------------------------------------------------- */
export const dashboardDemo = {
  tiles: [
    { label: 'Total sales', value: 'KSh 28.8M', delta: '+12.5%', up: true },
    { label: 'Total purchases', value: 'KSh 18.7M', delta: '+6.2%', up: true },
    { label: 'Receivables', value: 'KSh 16.4M', delta: '32 days', up: false },
    { label: 'Payables', value: 'KSh 9.2M', delta: '18 open', up: false },
  ],
  cash: [
    { label: 'Cash in hand', value: 'KSh 4.3M' },
    { label: 'Bank balance', value: 'KSh 24.9M' },
  ],
  /** Monthly profit trend, as a percentage of chart height. */
  trend: [46, 58, 51, 70, 64, 88],
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  transactions: [
    { type: 'Receipt', ref: 'REC-00044', account: 'Nyeri Distributors', amount: 'KSh 1,050,000' },
    { type: 'Purchase', ref: 'PO-00055', account: 'Coast Supplies Ltd', amount: 'KSh 3,124,000' },
    { type: 'Payment', ref: 'PAY-00022', account: 'Rift Valley Traders', amount: 'KSh 365,000' },
  ],
  /** Pointer callouts on the panel — the "annotation" layer. */
  annotations: {
    tiles: 'Live, not month-end',
    trend: 'Six-month profit trend',
    txns: 'Every posting auto-raised',
  },
};
