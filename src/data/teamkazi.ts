/**
 * TeamKazi page content — extracted from TeamKazi-Brochure-Content.md.
 *
 * ⚠ THE SOURCE DOCUMENT CARRIES AN EXPLICIT EXCLUSION LIST. None of the
 * following may appear anywhere on this page, in any wording:
 *
 *   ERP integration (Sage/SAP) · email notifications · SMS or WhatsApp
 *   notifications · native mobile or desktop apps · offline mode ·
 *   client portal · budget alert thresholds · finance exports
 *
 * On mobile the permitted phrasing is "works in any browser, including your
 * phone". "Mobile app" is forbidden — note the contrast with WizCRM, which
 * genuinely has one. Do not copy phrasing between the two product pages.
 *
 * Tone, per the source's designer guidance: plain and specific. No
 * "revolutionary", "seamless" or "cutting-edge" — those signal the opposite
 * of the honesty this product is built on. Prefer a number to an adjective.
 */
import type { IconName } from '../components/ui/Icon.astro';

export const teamkazi = {
  name: 'TeamKazi',
  hook: 'Is this project still making money?',
  positioning:
    'Project management for firms that bill for their people’s time. Every project carries a live profit and loss — so you find out you are losing money in week three, not at handover.',
  audience: 'Built for professional services firms who bill for time and live or die by margin.',
};

/* The problem this exists to solve. Drawn from the positioning section:
   "Most project tools tell you what's late. TeamKazi tells you what late
   costs — while there's still time to do something about it." */
export const problems: { title: string; body: string; icon: IconName }[] = [
  {
    title: 'Late is visible. Costly is not.',
    body: 'Every project tool will tell you a task has slipped. Almost none will tell you what that slip has just done to your margin.',
    icon: 'flag',
  },
  {
    title: 'The plan takes days to build',
    body: 'A signed scope document gets turned into a work breakdown by hand, task by task, before any actual work starts.',
    icon: 'document',
  },
  {
    title: 'Numbers that will not survive a client meeting',
    body: 'Figures that disagree between modules, and a zero on screen where the honest answer was "not yet calculable".',
    icon: 'balance',
  },
];

/* The three pillars, verbatim headings from the source. Each is paired with
   one photograph on the page. */
export const pillars: {
  n: string;
  name: string;
  tagline: string;
  intro: string;
  points: string[];
  icon: IconName;
}[] = [
  {
    n: '01',
    name: 'Know your margin, not just your milestones',
    tagline: 'A live P&L on every project',
    intro:
      'Labour cost, expenses, contract value and earned value — reconciled to the same numbers, updated as the work happens.',
    points: [
      'Live profit and loss per project, not a month-end reconstruction',
      'Fixed-price and time-and-materials billing models',
      'Contract value and cost budget kept separate, so revenue and spend never get confused',
      'Earned Value Management: CPI and SPI, cost variance and schedule variance',
      'Expenses tracked against the project alongside labour',
      'Lock the approved plan as a baseline — variance is measured against what was signed off, not against a target someone quietly edited',
    ],
    icon: 'balance',
  },
  {
    n: '02',
    name: 'Let the AI do the setup',
    tagline: 'Start from a document, not a blank page',
    intro:
      'Hand it a requirements document and get a structured work breakdown back in minutes rather than days — then edit it before anything is committed.',
    points: [
      'Upload an SRS or scope document and get a draft breakdown of phases, tasks and subtasks',
      'You review and edit the draft before it becomes the plan',
      'Daily brief: what needs your attention today, across every project',
      'Project analysis — a plain-English reading of where a project actually stands',
      'Portfolio insight — the patterns running across all projects at once',
      'Meeting notes turned into assigned work',
    ],
    icon: 'ai-automation',
  },
  {
    n: '03',
    name: 'Numbers you can take to a client meeting',
    tagline: 'No flattering defaults',
    intro:
      'When TeamKazi cannot calculate something honestly, it says so and explains why — instead of showing you a zero and letting you find out later.',
    points: [
      'Portfolio-wide KPIs, burn, health distribution and profitability on one screen',
      'Project cards ranked by what actually needs attention',
      'Health status shown together with the reasoning behind it',
      'Drill from portfolio to project to task without losing your place',
      'Cross-project AI insight over the whole portfolio',
    ],
    icon: 'data-analytics',
  },
];

/* Everything underneath the three pillars — the feature sections of the
   source, regrouped into six blocks that fit a two-column grid. */
export const platform: { name: string; hook: string; points: string[]; icon: IconName }[] = [
  {
    name: 'Projects and the Control Centre',
    hook: 'Everything about a project, on one screen.',
    points: [
      'Seven views per project: Overview, Tasks, Schedule, Team, Documents, Meetings and Financials',
      'Health status at a glance, with the reasoning behind it',
      'Phases, milestones and a full risk register',
      'One place instead of five tools',
    ],
    icon: 'erp-systems',
  },
  {
    name: 'Tasks that reflect how work really runs',
    hook: 'Structured like a project plan. Fast like a to-do list.',
    points: [
      'Board and list views, drag and drop, group by anything',
      'Work Breakdown Structure numbering (1, 1.1, 1.1.1) applied automatically',
      'Nested subtasks with two-way roll-up — finish the children and the parent moves; complete the parent and the children follow',
      'Task detail drawer with assignees, hours, notes, attachments and rich text',
      'An analytics bar that filters the board when clicked: at risk, overdue, unassigned, by person',
    ],
    icon: 'process-excellence',
  },
  {
    name: 'Dependencies and the critical path',
    hook: 'Know which five tasks decide whether you finish on time.',
    points: [
      'Link tasks that must happen in order, with circular dependencies blocked before they can be saved',
      'Automatic critical path calculation',
      'Gantt chart with dependency arrows, float bars and weekends excluded',
      '“Blocked by” and “Blocks” shown on every task',
      'Automatic slip detection, with the downstream impact',
    ],
    icon: 'schedule',
  },
  {
    name: 'Timesheets and approvals',
    hook: 'Approve time knowing exactly what it costs you.',
    points: [
      'Week calendar with drag-to-fill time entry',
      'Auto-suggested entries from task activity, so people log time they would otherwise forget',
      'Submit by date range or rolling week',
      'Manager approval showing person, hours and cost together',
      'Rich notes and file evidence attached to entries',
    ],
    icon: 'timesheet',
  },
  {
    name: 'Team, workload and capacity',
    hook: 'See who’s drowning before they tell you.',
    points: [
      'Per-project team roster with hours and cost contribution',
      'Workload view across people — who is overloaded and who has room',
      'AI assignee suggestions based on current load and history',
    ],
    icon: 'team',
  },
  {
    name: 'Obligations, documents and milestones',
    hook: 'The things that aren’t projects, but still can’t be missed.',
    points: [
      'Personal to-dos, plus delegation with notification',
      'Recurring items for regular obligations — “file VAT by the 15th” generates itself and keeps nagging until it is done',
      'Per-project document library, with attachments on tasks and time entries',
      'Milestone tracking against the plan, and an invoice raised from a completed milestone',
    ],
    icon: 'document',
  },
];

/* The source's "Proof points worth using" — used verbatim in substance. */
export const proof: string[] = [
  'Seven project views, all functional — no “coming soon” tabs',
  'Critical path verified against a hand-computed textbook schedule before release',
  'Financial figures reconciled across three modules — Team, Earned Value and P&L agree to the shilling',
  'Where a number cannot be calculated, TeamKazi reports why instead of showing zero',
];

/* Built-in security. The database-level isolation claim is the strong one and
   is quoted close to the source wording. */
export const security: string[] = [
  'Every organisation’s data isolated at the database level, enforced by the database itself — not by application code that could have a bug in it',
  'Modern authentication with session security and idle timeout',
  'Role-based access',
];

/* -------------------------------------------------------------------------
   Drives the critical-path diagram. Days are relative to project start; the
   component converts them to percentages, so the numbers below are the only
   place the schedule is defined.

   Exactly five tasks are on the critical path — which is what makes the
   source's brochure line ("know which five tasks decide whether you finish
   on time") demonstrable rather than merely assertable.
   ------------------------------------------------------------------------- */
export const SCHEDULE_DAYS = 70;

export const criticalPath: {
  wbs: string;
  name: string;
  start: number;
  days: number;
  /** On the critical path — slipping this slips the project. */
  critical: boolean;
  /** Spare days before this task starts affecting the finish date. */
  float?: number;
}[] = [
  { wbs: '1.0', name: 'Survey & site handover', start: 0, days: 8, critical: true },
  { wbs: '1.1', name: 'Structural drawings', start: 8, days: 14, critical: true },
  { wbs: '1.2', name: 'Services layout', start: 8, days: 10, critical: false, float: 4 },
  { wbs: '2.0', name: 'Approvals', start: 22, days: 18, critical: true },
  { wbs: '2.1', name: 'Procurement', start: 22, days: 12, critical: false, float: 6 },
  { wbs: '3.0', name: 'Fit-out', start: 40, days: 22, critical: true },
  { wbs: '3.1', name: 'Snagging & handover', start: 62, days: 8, critical: true },
];

/* -------------------------------------------------------------------------
   Drives the margin demo. An illustrative project, deliberately unnamed —
   no client, real or invented, appears anywhere on this site.
   ------------------------------------------------------------------------- */
export const marginDemo = {
  project: 'Warehouse fit-out · Phase 2',
  contractValue: 'KSh 4,850,000',
  costToDate: 'KSh 1,690,000',
  /** Cross-faded in sequence to show margin eroding as the work happens. */
  margins: ['22.4%', '19.8%', '14.1%', '8.6%'],
  cpi: '0.86',
  spi: '0.94',
  /** Weekly margin, as a percentage of the bar track height. */
  bars: [82, 74, 55, 34],
  /* Worded as a variance readout, NOT an alert. Earned Value variance and
     baseline comparison are built; configurable budget alert thresholds are
     on the exclusion list, so nothing here may imply a notification fired. */
  varianceLabel: 'Cost variance vs baseline',
  varianceValue: '−8.2%',
  varianceReason: 'Labour overrun on Phase 2',
  /** The honest-by-design moment: a number it refuses to guess at. */
  withheldLabel: 'Forecast at completion',
  withheldReason: 'Not calculable — 2 timesheets awaiting approval',
};
