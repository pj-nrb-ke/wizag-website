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
      'Sage 200 Evolution',
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
