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

   ⚠ WizPOS, RestPOS and CloudHR were removed on 2026-07-23 (client
   instruction) and must not be re-added — CloudHR belongs to Skillmind
   Software Limited, not WIZAG. The generic capability tiles that replaced
   them ('Point of Sale', 'Payroll') describe what WIZAG's systems do without
   naming a product that is not ours to market.
   ------------------------------------------------------------------------- */
export const wizagMesh: Tile[] = [
  p('WizERP'), f('General Ledger'), b('Faster month-end close'), f('Accounts Payable'),
  f('Bank Reconciliation'), p('Sage 200'), b('Audit-ready records'),
  f('Multi-currency'), f('Credit Control'), b('Fewer manual entries'), f('Cash Flow'),

  f('Inventory'), b('Real-time stock visibility'), f('Stock Counts'),
  f('Reorder Levels'), b('Less stock written off'), f('Warehousing'), f('Dispatch'),
  f('Point of Sale'), f('Multi-branch'), b('One stock position'),

  f('Procurement'), p('Sage Business Cloud'), f('Purchase Orders'), b('Lower operating cost'),
  f('Supplier Ledger'), f('Approvals'), b('Spend under control'), f('Goods Received'),
  p('AscendBooks'), f('Landed Cost'), b('Better supplier terms'),

  f('Payroll'), f('Leave'), b('Payroll that reconciles'),
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

/* -------------------------------------------------------------------------
   TEAMKAZI — drawn from TeamKazi-Brochure-Content.md.

   ⚠ Nothing from that document's exclusion list may appear here: no ERP
   integration, no email/SMS/WhatsApp notifications, no mobile app, no
   offline mode, no client portal, no budget alert thresholds, no finance
   exports. Every tile below maps to a shipped feature.
   ------------------------------------------------------------------------- */
export const teamkaziMesh: Tile[] = [
  p('Live project P&L'), b('Margin, not milestones'), f('Cost variance'),
  f('Schedule variance'), b('Know in week three'), f('Expense tracking'),

  p('Earned Value · CPI/SPI'), f('Contract vs cost budget'), f('Fixed-price billing'),
  b('Numbers you can defend'), f('Time & materials'),

  p('Critical path'), b('Five tasks decide the date'), f('Gantt with float bars'),
  f('Dependency arrows'), f('Blocked by · Blocks'), f('Circular deps blocked'),
  f('Weekends excluded'),

  p('Baselines'), b('The goalposts stop moving'), f('Slip detection'),
  f('Downstream impact'), b('Plans you can sign off'),

  p('AI work breakdown'), b('Start from a document'), f('Requirements to plan'),
  f('Meeting notes to tasks'), f('Daily brief'), f('Project analysis'),
  f('Portfolio insight'), f('AI assignee suggestions'),

  p('Control Centre'), b('Everything on one screen'), f('Seven project views'),
  f('Risk register'), f('Phases & milestones'), f('Health with reasoning'),
  b('One place, not five tools'),

  f('WBS numbering'), f('Nested subtasks'), f('Two-way roll-up'),
  f('Board & list views'), f('Group by anything'), f('Task detail drawer'),

  p('Timesheet approvals'), b('Approve time, see the cost'), f('Week calendar entry'),
  f('Drag-to-fill hours'), f('Auto-suggested entries'), f('Rolling week submit'),
  f('File evidence on entries'),

  p('Workload view'), b('See who’s drowning'), f('Team roster & cost'),

  p('Executive dashboard'), f('Portfolio KPIs'), f('Burn & health'),
  f('Drill-down navigation'), b('No “coming soon” tabs'),

  f('Recurring obligations'), f('Delegated to-dos'), f('Document library'),
  f('Milestone invoicing'), f('Rich text notes'),

  f('Row-level data isolation'), f('Role-based access'), f('Idle session timeout'),
  b('Agrees to the shilling'), b('No flattering defaults'),
];
