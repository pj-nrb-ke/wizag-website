/**
 * Tile content for the scrolling systems mesh.
 *
 * Two sets: the corporate one on the homepage hero (what WIZAG connects) and
 * a WizCRM one for that product's hero. Same component, same behaviour,
 * different vocabulary.
 *
 * `kind` drives the brightness ladder only — product brightest, then
 * benefit, then feature. It carries no colour: orange on the mesh means
 * exactly one thing, "this cell just fired".
 */
export type TileKind = 'product' | 'feature' | 'benefit';

export interface Tile {
  label: string;
  kind: TileKind;
}

const p = (label: string): Tile => ({ label, kind: 'product' });
const f = (label: string): Tile => ({ label, kind: 'feature' });
const b = (label: string): Tile => ({ label, kind: 'benefit' });

/* -------------------------------------------------------------------------
   HOMEPAGE — the business systems WIZAG connects.
   Authored in themed groups for readability; the component flattens and
   re-chunks them to whatever column count it is given.
   ------------------------------------------------------------------------- */
export const wizagMesh: Tile[] = [
  p('WizERP'), f('General Ledger'), b('Faster month-end close'), f('Accounts Payable'),
  f('Bank Reconciliation'), p('Sage 200 Evolution'), b('Audit-ready records'),
  f('Multi-currency'), f('Credit Control'), b('Fewer manual entries'), f('Cash Flow'),

  f('Inventory'), b('Real-time stock visibility'), p('WizPOS'), f('Stock Counts'),
  f('Reorder Levels'), b('Less stock written off'), f('Warehousing'), f('Dispatch'),
  p('RestPOS'), f('Multi-branch'), b('One stock position'),

  f('Procurement'), p('Sage Business Cloud'), f('Purchase Orders'), b('Lower operating cost'),
  f('Supplier Ledger'), f('Approvals'), b('Spend under control'), f('Goods Received'),
  p('AscendBooks'), f('Landed Cost'), b('Better supplier terms'),

  p('CloudHR'), f('Payroll'), f('Leave'), b('Payroll that reconciles'),
  f('Time & Attendance'), f('HR Records'), p('TeamKazi'), b('Targets people act on'),
  f('Statutory Returns'), f('Employee Self-Service'), b('Less admin per head'),

  f('eTIMS'), b('KRA compliance, handled'), f('VAT Returns'), f('Tax'),
  p('WizSales'), f('Sales Orders'), f('Quotations'), b('Reps close faster'),
  f('CRM'), f('Invoicing'), b('Invoices filed at source'),

  f('Dashboards'), b('Decisions on current numbers'), f('KPI Reporting'), f('Budgeting'),
  f('Forecasting'), b('Plans that hold up'), f('Manufacturing'), f('Bill of Materials'),
  f('Costing'), b('True cost per unit'), f('Consolidation'),
];

/* -------------------------------------------------------------------------
   WIZCRM — drawn from docs/BROCHURE-FEATURES.md.
   Labels are kept short: this runs in a narrow two-column panel, and
   anything longer than about 26 characters will ellipsize.
   ------------------------------------------------------------------------- */
export const wizcrmMesh: Tile[] = [
  p('AI Visit Capture'), b('20-second visit reports'), f('Speak, don’t type'),
  f('Offline-first sync'), b('Reports reps actually file'),

  p('Wanjiru'), b('No more status-chasing'), f('Daily task lists'),
  f('Reasoned "why" per task'), f('Quiet-rep nudges'), b('One daily owner brief'),

  p('Lead Generator'), f('Prospect scoring 0–85'), f('A/B/C tiering'),
  b('Explainable, no black box'), f('Website enrichment'), f('Decision-maker lookup'),
  p('Heat Map'), b('Live buying-intent radar'), f('Nine intent sources'),

  f('Email sequences'), f('Open & reply tracking'), b('Replies auto-import'),

  f('Kanban pipeline'), f('Duplicate detection'), f('Activity timeline'),
  f('Custom stages'), b('Never a duplicate contact'), f('Bulk reassignment'),
  f('Won/Lost reasons'),

  f('Business-card scan'), f('One-tap WhatsApp'), f('Geofenced check-in'),
  b('Real field accountability'), f('Document library'), f('Push reminders'),

  f('Opportunity cost centre'), f('Quotation · Proforma · LPO'),
  b('Instant LPO alerts'), f('Budget vs margin'), f('Commission engine'),
  b('Paid-in-proportion commission'), f('Liability by salesperson'),

  f('Conversion funnel'), f('Time-in-stage'), f('Rep leaderboard'),
  f('Weighted forecast'), b('Targets: ahead or behind'), f('Data hygiene report'),

  f('KDPA compliant'), b('Auditable AI actions'), f('Role-based access'),
  f('White-label branding'), b('Human-in-the-loop'),
];
