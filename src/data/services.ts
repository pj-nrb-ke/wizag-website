/**
 * Service practice detail — brief §6.
 *
 * Every field here is the brief's own approved content: the positioning
 * statement, the service list, the business outcomes and the CTA label for
 * each of the six practices. Nothing is invented.
 *
 * This drives /services/[slug]. When Sanity is wired, these become documents
 * of the same shape and the templates do not change.
 */
import type { IconName } from '../components/ui/Icon.astro';

export interface ServicePractice {
  slug: string;
  title: string;
  /** Terse form for nav bars and cards. */
  short: string;
  icon: IconName;
  /** Brief §6 "Positioning". */
  positioning: string;
  /** Brief §6 "Services". */
  capabilities: string[];
  /** Brief §6 "Business Outcomes". */
  outcomes: string[];
  /** Brief §6 "Suggested CTA". */
  cta: string;
  ctaHref: string;
}

export const practices: ServicePractice[] = [
  {
    slug: 'executive-technology-services',
    title: 'Executive Technology Services',
    short: 'Executive Technology',
    icon: 'exec-technology',
    positioning:
      'Senior technology leadership and strategic guidance without the cost of building a full internal executive technology office.',
    capabilities: [
      'Fractional CTO',
      'Technology strategy',
      'Digital transformation roadmap',
      'Technology audits',
      'Technology governance',
      'IT investment planning',
      'Vendor and solution management',
      'Risk and compliance oversight',
      'Executive advisory',
      'Continuous technology reviews',
    ],
    outcomes: [
      'Better technology decisions',
      'Stronger executive oversight',
      'Clearer investment priorities',
      'Reduced vendor confusion',
      'Improved governance',
      'Better alignment between business and technology',
    ],
    cta: 'Explore Executive Technology Services',
    ctaHref: '/contact',
  },
  {
    slug: 'erp-business-systems',
    title: 'ERP & Business Systems',
    short: 'ERP & Systems',
    icon: 'erp-systems',
    positioning:
      'ERP services that improve control, visibility, efficiency and business performance.',
    capabilities: [
      'ERP advisory',
      'ERP selection',
      'Sage 200',
      'Sage Business Cloud',
      'ERP implementation',
      'ERP migration',
      'ERP customisation',
      'ERP integration',
      'Data migration',
      'Financial management systems',
      'Inventory and procurement systems',
      'Manufacturing systems',
      'Payroll and HR integration',
      'ERP reporting',
      'Business intelligence',
      'ERP support',
      'ERP optimisation',
      'Managed ERP services',
    ],
    outcomes: [
      'Reliable financial reporting',
      'Better operational control',
      'Improved inventory visibility',
      'Reduced manual work',
      'Better interdepartmental coordination',
      'Improved return on ERP investment',
    ],
    cta: 'Discuss Your ERP Requirements',
    ctaHref: '/contact',
  },
  {
    slug: 'ai-intelligent-automation',
    title: 'AI & Intelligent Automation',
    short: 'AI & Automation',
    icon: 'ai-automation',
    positioning: 'Practical AI capabilities delivered as business services.',
    capabilities: [
      'AI strategy',
      'AI readiness assessment',
      'AI as a Service',
      'Enterprise AI assistants',
      'Intelligent automation',
      'Predictive analytics',
      'Intelligent document processing',
      'Natural language interfaces',
      'Demand forecasting',
      'Anomaly detection',
      'Process mining',
      'Custom AI solutions',
      'AI-enabled reporting',
    ],
    outcomes: [
      'Faster decision-making',
      'Reduced repetitive work',
      'Better forecasting',
      'Improved service delivery',
      'Lower processing costs',
      'Increased productivity',
    ],
    cta: 'Explore AI Services',
    ctaHref: '/contact',
  },
  {
    slug: 'process-operational-excellence',
    title: 'Process & Operational Excellence',
    short: 'Process Excellence',
    icon: 'process-excellence',
    positioning: 'Improving how work flows across the organisation.',
    capabilities: [
      'Process discovery',
      'Process mapping',
      'Process diagnostics',
      'Workflow redesign',
      'Operational audits',
      'Process automation',
      'Waste reduction',
      'Duplicate activity reduction',
      'Internal control improvement',
      'KPI development',
      'Continuous improvement',
      'Productivity improvement',
    ],
    outcomes: [
      'Leaner operations',
      'Reduced delays',
      'Better productivity',
      'Improved accountability',
      'Lower operating costs',
      'More consistent service delivery',
    ],
    cta: 'Improve Your Business Processes',
    ctaHref: '/contact',
  },
  {
    slug: 'data-analytics-business-intelligence',
    title: 'Data, Analytics & Business Intelligence',
    short: 'Data & Analytics',
    icon: 'data-analytics',
    positioning: 'Turning business data into clear management insight.',
    capabilities: [
      'Management dashboards',
      'Executive reporting',
      'Data integration',
      'Data warehousing',
      'Business intelligence',
      'Financial analytics',
      'Operational analytics',
      'Forecasting',
      'KPI tracking',
      'AI-assisted insights',
      'Self-service reporting',
      'Decision-support systems',
    ],
    outcomes: [
      'Better visibility',
      'Faster management reporting',
      'More reliable decisions',
      'Improved planning',
      'Better performance tracking',
      'Stronger accountability',
    ],
    cta: 'Explore Data & Analytics',
    ctaHref: '/contact',
  },
  {
    slug: 'managed-technology-services',
    title: 'Managed Technology Services',
    short: 'Managed Services',
    icon: 'managed-services',
    positioning:
      'Ongoing support, management and optimisation of business-critical technology.',
    capabilities: [
      'Application support',
      'ERP support',
      'Cloud and infrastructure management',
      'Database support',
      'System monitoring',
      'Vendor coordination',
      'Cybersecurity oversight',
      'Business continuity',
      'Backup and recovery oversight',
      'Technology governance',
      'Continuous service reviews',
      'Continuous optimisation',
    ],
    outcomes: [
      'Improved reliability',
      'Lower downtime',
      'Better support',
      'Reduced internal burden',
      'Better vendor accountability',
      'Predictable technology operations',
    ],
    cta: 'Explore Managed Services',
    ctaHref: '/contact',
  },
];

export const getPractice = (slug: string) => practices.find((p) => p.slug === slug);

/* -------------------------------------------------------------------------
   THE SHIFT — drives the PracticeShift diagram on each practice page.

   The brief's `outcomes` are the destination; these pair each one with the
   state it replaces. A buyer recognises themselves in the left column, which
   is what makes the right column mean anything — a list of good outcomes on
   its own reads as everyone's list.

   ⚠ The "before" lines describe common operating conditions, not any client
   or engagement. Nothing here claims a result WIZAG has produced. Kept
   generic deliberately: brief §8.12 forbids invented case material.

   Added as a separate record rather than a field on ServicePractice so the
   brief's approved content stays exactly as approved.
   ------------------------------------------------------------------------- */
export const practiceShift: Record<string, { before: string; after: string }[]> = {
  'executive-technology-services': [
    {
      before: 'Technology decisions taken without senior technical judgement in the room',
      after: 'A technology view at board level, on every decision',
    },
    {
      before: 'Vendors managed by whoever happened to pick up the phone',
      after: 'One person accountable for every vendor relationship',
    },
    {
      before: 'IT spend agreed project by project, as each one arrives',
      after: 'Investment planned against a roadmap you can defend',
    },
    {
      before: 'Risk discovered during the audit',
      after: 'Risk reviewed long before it becomes a finding',
    },
  ],

  'erp-business-systems': [
    {
      before: 'Month-end assembled by hand from several systems',
      after: 'Reporting that runs from one set of numbers',
    },
    {
      before: 'Stock figures nobody entirely trusts',
      after: 'One inventory position, visible to everyone',
    },
    {
      before: 'The same data keyed into three different places',
      after: 'Entered once, posted everywhere it belongs',
    },
    {
      before: 'An ERP nobody uses past the basics',
      after: 'The system finally earning what you paid for it',
    },
  ],

  'ai-intelligent-automation': [
    {
      before: 'Documents keyed in by hand, one at a time',
      after: 'Extracted, validated and posted for approval',
    },
    {
      before: 'Forecasts built on last year plus a feeling',
      after: 'Forecasts built on what the data actually shows',
    },
    {
      before: 'Problems noticed when somebody complains',
      after: 'Anomalies flagged as they appear',
    },
    {
      before: 'Skilled people spending their week on repetition',
      after: 'Skilled people on the work that needs judgement',
    },
  ],

  'process-operational-excellence': [
    {
      before: 'Nobody can draw how the work actually flows',
      after: 'The process mapped, agreed and measured',
    },
    {
      before: 'Approvals sitting in somebody’s inbox',
      after: 'Steps that move without being chased',
    },
    {
      before: 'The same check done twice by two teams',
      after: 'Duplicate work removed, the control kept',
    },
    {
      before: 'Performance discussed by opinion',
      after: 'Performance tracked against agreed measures',
    },
  ],

  'data-analytics-business-intelligence': [
    {
      before: 'Numbers living in separate spreadsheets',
      after: 'One integrated source everyone reports from',
    },
    {
      before: 'A management pack that takes three days to build',
      after: 'A dashboard that is already current',
    },
    {
      before: 'Different answers depending who you ask',
      after: 'One version of the figure everyone can stand behind',
    },
    {
      before: 'Reporting requests queued behind IT',
      after: 'Managers answering their own questions',
    },
  ],

  'managed-technology-services': [
    {
      before: 'Faults reported by the people they affect',
      after: 'Issues caught by monitoring first',
    },
    {
      before: 'Backups assumed to be working',
      after: 'Recovery tested rather than hoped for',
    },
    {
      before: 'Internal staff pulled off their jobs onto support',
      after: 'Your team back on the work you hired them for',
    },
    {
      before: 'Vendors pointing at each other',
      after: 'One party accountable for the outcome',
    },
  ],
};

/* Photography per practice — one image each.
   `file` present means a real photograph is in place; `brief`/`purpose` alone
   means the slot still shows a documented placeholder. Prompts for the
   outstanding ones are in docs/services-image-prompts.md.

   ⚠ Three images placed 2026-07-23 from a 3-panel grid, at the client's
   instruction and against my advice — they are ~560-680px wide where the slot
   wants ~1120 for a retina display, and the boardroom pair are smiling
   straight at the camera, which the house style bans. The boardroom frame
   also had a fabricated BI dashboard behind it with garbled headings and
   "Sales by Region" printed twice; the crop was pulled tight to reduce it to
   an out-of-focus sliver, but it is still there. Client has accepted these as
   interim and expects to replace them. */
export const practiceImage: Record<
  string,
  { brief: string; purpose: string; file?: string; alt?: string; w?: number; h?: number }
> = {
  'executive-technology-services': {
    file: 'services-executive-technology.jpg',
    alt: 'Two senior colleagues seated at a boardroom table in a sunlit office, a wall screen out of focus behind them.',
    w: 560,
    h: 420,
    brief:
      'A senior technology advisor presenting to two directors across a boardroom table in a sunlit Nairobi office, mid-explanation with an open confident gesture, the directors engaged and one smiling.',
    purpose: 'This practice is sold to boards. Show the room it is sold in.',
  },
  'erp-business-systems': {
    brief:
      'Three colleagues around a desk in a bright modern office reviewing a printed operations report together, one pointing at a figure, all pleased with what they are seeing.',
    purpose: 'ERP is bought by finance and operations together, not by one person.',
  },
  'ai-intelligent-automation': {
    brief:
      'Two colleagues at a bright desk watching a laptop as something completes, both reacting with genuine pleasure — the moment work that used to take hours finishes on its own.',
    purpose: 'Automation is abstract. The recognisable moment is the relief when it works.',
  },
  'process-operational-excellence': {
    file: 'services-process-excellence.jpg',
    alt: 'Three colleagues standing in discussion, one explaining a point from a tablet, sticky notes on a board behind them.',
    w: 680,
    h: 510,
    brief:
      'Four colleagues standing at a wall covered in sticky notes mapping a process, one placing a note while another gestures at the flow, energetic and collaborative.',
    purpose: 'Process work is visibly collaborative. This is the one practice with a real physical activity to photograph.',
  },
  'data-analytics-business-intelligence': {
    brief:
      'A manager and an analyst side by side at a bright desk, the analyst turning a laptop toward the manager and the manager reacting with recognition — a question finally answered.',
    purpose: 'The product of analytics is a person understanding something. Show the understanding.',
  },
  'managed-technology-services': {
    file: 'services-managed-services.jpg',
    alt: 'An open-plan operations floor, colleagues working at monitors while three others confer over a tablet nearby.',
    w: 680,
    h: 510,
    brief:
      'Two support engineers at a bright, well-kept operations desk with several monitors, relaxed and in control, one turning to speak to the other.',
    purpose: 'Managed services sells calm. The room should look like nothing is on fire — because it is not.',
  },
};
