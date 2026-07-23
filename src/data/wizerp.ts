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
 * ── ⚠⚠ WIZERP IS NOT OPEN SOURCE ─────────────────────────────────────
 * The client confirmed 2026-07-23: WizERP is WIZAG's proprietary enterprise
 * product, sold to customers. NOTHING on this page may describe it as open
 * source, free, zero-licence, community-supported, or backed by a global
 * community.
 *
 * ⚠ THIS CONTRADICTS THE BROCHURE, which says on page 1 "a powerful, open
 * source Enterprise Resource Planning solution" and "Zero license cost", and
 * on page 4 "Reduce IT costs with an open source ERP" and "a strong community
 * and continuous improvements". That brochure is dated 2026 and may be in
 * circulation. Raised with the client — the document needs correcting, or
 * prospects will read one thing on the website and another in the PDF.
 *
 * Also dropped: "Join thousands of businesses worldwide" (p4). On WIZAG's
 * own site that reads as WIZAG's customer count, which nobody has evidenced.
 *
 * No pricing or licensing position is stated anywhere on this page. If a
 * commercial model is to be published it must come from the client, not be
 * inferred.
 *
 * What replaces the open-source argument is the stronger and truer one:
 * WIZAG wrote this software, so the team that implements it can change it.
 * No foreign vendor, no global roadmap to wait on.
 *
 * Figures in the dashboard are illustrative and converted from the
 * brochure's US dollars to shillings, because the buyer is Kenyan. The
 * panel is labelled so they cannot be read as a client's numbers.
 */
import type { IconName } from '../components/ui/Icon.astro';

export const wizerp = {
  name: 'WizERP',
  tagline: 'simplifying complexities…',
  hook: 'The whole business on one system, built by the people who run it with you',
  positioning:
    'WIZAG’s own enterprise ERP — finance, sales, purchasing, inventory, manufacturing and fixed assets on a single ledger. We wrote it, we implement it, and when it needs to fit your process we change it.',
  audience: 'For growing businesses that have outgrown disconnected systems and spreadsheets.',
  /* The brochure's own closing line — and a good one. */
  promise: 'Simplify your business. Amplify your success.',
};

/* ---------------------------------------------------------------------
   THE THREE COMMERCIAL FACTS. These carry the 30-second read, so they sit
   immediately under the hero and get the largest type on the page.
   --------------------------------------------------------------------- */
export const headlineFacts: { value: string; label: string; body: string; icon: IconName }[] = [
  {
    value: '6',
    label: 'integrated modules',
    body: 'One ledger underneath all of them, so a sale, a stock movement and a posting are the same event.',
    icon: 'erp-systems',
  },
  {
    value: '60+',
    label: 'standard reports',
    body: 'Across finance, sales, purchasing, inventory and manufacturing — exportable to PDF and Excel.',
    icon: 'data-analytics',
  },
  {
    /* The real differentiator against an international package: there is no
       vendor behind the vendor. Replaces the licence-cost claim. */
    value: '1',
    label: 'team, end to end',
    body: 'The people who built WizERP are the people who implement and support it. No foreign vendor queue, no waiting on someone else’s roadmap.',
    icon: 'team',
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
  { label: 'Security', value: 'Role-based, full audit trail' },
  { label: 'Structure', value: 'Multi-company, multi-currency' },
];

/* Why it wins — page 4, rebuilt around ownership of the product rather than
   the brochure's open-source framing (see the header note). */
export const whyWizerp: { title: string; body: string; icon: IconName }[] = [
  {
    title: 'It bends to your process',
    body: 'We hold the source. When the software does not match how you work, we change the software — your business does not have to change to suit a package.',
    icon: 'process-excellence',
  },
  {
    title: 'One accountable team',
    body: 'No vendor behind the vendor. The people who wrote it scope it, implement it and answer the phone afterwards.',
    icon: 'team',
  },
  {
    title: 'It scales with you',
    body: 'The same system suits a company of fifteen and a group of several hundred across multiple entities and currencies.',
    icon: 'growth',
  },
  {
    title: 'Built for how business works here',
    body: 'Designed and maintained in Nairobi, for Kenyan trading conditions, Kenyan compliance and Kenyan working practice.',
    icon: 'managed-services',
  },
];

/* WIZAG's role. This is the honest differentiator: the software is free,
   which makes the implementation the entire product. */
export const wizagRole: { title: string; body: string; icon: IconName }[] = [
  {
    title: 'Selection and scoping',
    body: 'We will tell you if WizERP is the wrong fit. The right system is the one that matches how your business actually runs — and occasionally that is not ours.',
    icon: 'exec-technology',
  },
  {
    title: 'Implementation and migration',
    body: 'Chart of accounts, master data and opening balances moved across and agreed to your existing numbers before anyone relies on them.',
    icon: 'migrate',
  },
  {
    title: 'Customisation',
    body: 'Reports, workflows and whole modules built to your process — not configured around it, and not quoted as a special project by a vendor three time zones away.',
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
  'Your Kenyan statutory setup — KRA registration, VAT treatment and your eTIMS position — is scoped and configured with you rather than assumed. And because we hold the source, what the system does not do today can be built rather than worked around.';

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
