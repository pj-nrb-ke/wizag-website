/**
 * WizFlow product page content.
 *
 * Extracted from the three source docs (WizFlow-Features.md,
 * WizFlow-Features-Ver1.md, wizflow-features-guide.md). Wording follows the
 * sources; bullets are tightened for a web column.
 *
 * ⚠ ONLY shipped features are marketed here. The ERP integrations
 * (QuickBooks/Zoho/Odoo/Tally/Sage 200/SAP Business One) are marked
 * "not started / deferred" in the source and MUST NOT appear — SAP Business
 * One is additionally banned site-wide (see CLAUDE.md §6). WhatsApp delivery
 * and the iOS app are marked pending in the source and are not claimed as live.
 *
 * Flow follows the sources' own suggested brochure order:
 * hook → problem → how it flows → routing → capabilities → KPIs → mobile →
 * security → call to action.
 */
import type { IconName } from '../components/ui/Icon.astro';

export const wizflow = {
  name: 'WizFlow',
  hook: 'Approvals that run themselves',
  positioning:
    'WizFlow turns email chains and spreadsheets into structured, no-code approval workflows — petty cash, purchases, leave, contracts, anything. People submit; approvers act from an inbox or a one-click email; managers see every request, KPI and bottleneck.',
  audience: 'Built for finance, HR, procurement and operations teams across Kenya and East Africa.',
};

/* The problem — the sources' "stop chasing email approvals" framing. */
export const problems: { title: string; body: string; icon: IconName }[] = [
  {
    title: 'Approvals live in email',
    body: 'Requests bounce between inboxes and spreadsheets. Nothing is structured, and the trail is whatever people remember to reply-all.',
    icon: 'mail',
  },
  {
    title: 'Nobody knows the status',
    body: 'Who is it with? How long has it been sitting there? The originator has no way to see, so they chase — and so does everyone above them.',
    icon: 'process-excellence',
  },
  {
    title: 'No record when it matters',
    body: 'When finance or an auditor asks who approved what, and when, the answer is a search through old email — if it exists at all.',
    icon: 'document',
  },
];

/* How a request flows — drives the animated StepFlow diagram. */
export const flowSteps: { n: string; title: string; body: string }[] = [
  {
    n: '1',
    title: 'Submit',
    body: 'A staff member picks a published workflow, fills a dynamic form, and submits. The request gets a reference number like PC-2026-00042.',
  },
  {
    n: '2',
    title: 'Route',
    body: 'WizFlow assigns the first approver and applies your rules — high-value items skip straight to finance, no separate workflow needed.',
  },
  {
    n: '3',
    title: 'Approve',
    body: 'Each approver reviews from their inbox or a one-click email link, then approves, returns for correction, or rejects — with a comment.',
  },
  {
    n: '4',
    title: 'Complete',
    body: 'The originator is notified, and every step is recorded with who acted, when, and why — a complete, exportable audit trail.',
  },
];

/* The core capabilities — the card grid. Each maps to shipped functionality. */
export const capabilities: { name: string; hook: string; points: string[]; icon: IconName }[] = [
  {
    name: 'No-code form designer',
    hook: 'Build the request form by dragging fields — no JSON, no developer.',
    points: [
      'Text, number, currency, date, dropdown, checkbox, attachment and calculated fields',
      'Dropdowns pull from fixed lists, master data, your user directory or an API',
      'Field-level permissions — control who can see or edit each field, at each step',
      'Live preview of exactly what staff will fill in',
    ],
    icon: 'process-excellence',
  },
  {
    name: 'Custom approval chains',
    hook: 'Model any policy — from a two-step expense to an eight-step capital-expenditure sign-off.',
    points: [
      'Order approvers as individuals or user groups; drag to reorder',
      'Groups expand to every member, with claim-to-act on shared steps',
      'Restrict who may start each process — everyone, named users, or groups',
      'Separation of duties: originators never approve their own request',
    ],
    icon: 'team',
  },
  {
    name: 'AI workflow creator',
    hook: 'Describe the process in plain English and get a draft workflow back.',
    points: [
      'Generates the form fields, approval steps and routing from a sentence',
      'Refine with follow-ups — "add a receipts attachment", "two finance approvals"',
      'Explains any existing workflow in plain language',
      'Works without an AI key too — deterministic templates still produce a usable draft',
    ],
    icon: 'ai-automation',
  },
  {
    name: 'Versioning & simulation',
    hook: 'Test a process before a single employee touches it.',
    points: [
      'Draft → preview → simulate → publish, so go-live is deliberate',
      'Simulate with sample data to see which steps run — without creating a real request',
      'Full version history, with rollback to any earlier version',
      'A health check flags missing approvers, broken routing and risky gaps before you publish',
    ],
    icon: 'flag',
  },
  {
    name: 'Approval inbox & email',
    hook: 'The approver’s command centre — on the web, or straight from their inbox.',
    points: [
      'Filter by workflow, status, amount, department, priority and overdue',
      'Act, and the next pending item opens automatically — never a blank screen',
      'One-click Approve / Reject from a secure email link — no login required',
      'Attach supporting files and add a comment on any action',
    ],
    icon: 'check',
  },
  {
    name: 'Recurring reminders',
    hook: 'Replace manual follow-up chasing with tracked, recurring tasks.',
    points: [
      'Assign a recurring task to people or groups on a schedule',
      'Staff mark it done; the system logs every occurrence as Done, Missed or Pending',
      'A compliance report shows who is keeping up — and who is not',
      'Export the compliance data for reviews or HR records',
    ],
    icon: 'schedule',
  },
];

/* The metric tiles the analytics hub surfaces — label-only, no invented
   figures. Drives the KPI infographic. */
export const kpis: { label: string; caption: string; icon: IconName }[] = [
  { label: 'Approval speed', caption: 'Average time to clear each request', icon: 'timesheet' },
  { label: 'SLA compliance', caption: 'Share of steps cleared within their deadline', icon: 'check' },
  { label: 'Overdue items', caption: 'What has breached, and by how long', icon: 'flag' },
  { label: 'Bottlenecks', caption: 'The slowest users, steps and departments', icon: 'process-excellence' },
  { label: 'Workload', caption: 'Who is loaded now, and who has room', icon: 'team' },
  { label: 'Approved value', caption: 'Requested, approved and pending, by department', icon: 'balance' },
];

/* What the KPI/analytics story adds up to — the section lead-in bullets. */
export const insight: string[] = [
  'Executive, department, user and per-workflow dashboards — click any KPI to open the list behind it',
  'Per-step SLAs with at-risk warnings at 80% and breach alerts, then automatic escalation to managers',
  'Bottleneck, workload, journey and heatmap analytics that show where requests slow down',
  'Scheduled reports emailed daily, weekly or monthly, plus exports to Excel and PDF',
];

/* Security & platform — the trust list, on the navy band. */
export const platform: string[] = [
  'Multi-tenant by design — each company’s users, workflows and data are isolated',
  'Role-based access across company admin, manager, originator and approver',
  'Two-factor authentication (TOTP) and approval delegation for time away',
  'Every login, approval and admin change recorded in a security audit log',
  'Webhooks with signed payloads, plus a public API and scoped API keys',
  'Deploy on your own VPS and domain, served over HTTPS with an automatic certificate',
];
