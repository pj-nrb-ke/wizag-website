/**
 * Homepage content (brief §8).
 *
 * Headings, supporting copy and CTA labels are the brief's approved wording,
 * used verbatim. Where the brief specifies a list but not the prose around
 * it — service value propositions, the WIZAG response to each customer
 * problem, industry and engagement descriptions — the copy is drafted from
 * the §6 positioning statements and needs client sign-off.
 *
 * No statistics, percentages, client names or testimonials appear anywhere
 * here (brief §3.2 / §8.11). Nothing on this page claims a number.
 */
import type { IconName } from '../components/ui/Icon.astro';

/* --- §8.3 Customer problems -------------------------------------------
   Six diagnostic points, not eight (design audit §3.3: the longer list read
   as dense and gave no immediate visual recognition).

   The structural idea: each problem carries the icon of the practice that
   answers it, so the icon is doing real work rather than decorating. By the
   time the reader reaches the services section the icons are already
   familiar and mean something.
   --------------------------------------------------------------------- */
export const problems: {
  problem: string;
  response: string;
  icon: IconName;
  practice: string;
}[] = [
  {
    problem: 'Disconnected systems and data silos',
    response: 'Integration and a single source of record across finance, operations and reporting.',
    icon: 'erp-systems',
    practice: '/services/erp-business-systems',
  },
  {
    problem: 'Manual, repetitive processes',
    response: 'Process mapping first, then automation where it pays back.',
    icon: 'process-excellence',
    practice: '/services/process-operational-excellence',
  },
  {
    problem: 'Reporting that arrives too late to act on',
    response: 'Reporting built around the decisions your leadership actually has to make.',
    icon: 'data-analytics',
    practice: '/services/data-analytics-business-intelligence',
  },
  {
    problem: 'Rising technology costs',
    response: 'Licence, vendor and infrastructure review that cuts spend, not capability.',
    icon: 'managed-services',
    practice: '/services/managed-technology-services',
  },
  {
    problem: 'Difficulty adopting AI safely',
    response: 'A readiness assessment before any build, then a controlled pilot.',
    icon: 'ai-automation',
    practice: '/services/ai-intelligent-automation',
  },
  {
    problem: 'No senior technology leadership in-house',
    response: 'WETO gives you that leadership on subscription, without the headcount.',
    icon: 'exec-technology',
    practice: '/weto',
  },
];

/* --- §8.4 Core services ------------------------------------------------ */
export const coreServices: {
  name: string;
  href: string;
  icon: IconName;
  value: string;
  outcome: string;
}[] = [
  {
    name: 'Executive Technology Services',
    href: '/services/executive-technology-services',
    icon: 'exec-technology',
    value:
      'Senior technology leadership and strategic guidance without the cost of building a full internal executive office.',
    outcome: 'Better decisions and clearer investment priorities',
  },
  {
    name: 'ERP & Business Systems',
    href: '/services/erp-business-systems',
    icon: 'erp-systems',
    value:
      'Advisory, selection, implementation, migration, integration and support across your core business systems.',
    outcome: 'Reliable reporting and stronger operational control',
  },
  {
    name: 'AI & Intelligent Automation',
    href: '/services/ai-intelligent-automation',
    icon: 'ai-automation',
    value:
      'Practical AI delivered as a business service — readiness assessment, controlled pilot, then production.',
    outcome: 'Less repetitive work and faster decisions',
  },
  {
    name: 'Process & Operational Excellence',
    href: '/services/process-operational-excellence',
    icon: 'process-excellence',
    value:
      'Discovery, mapping and redesign of how work actually flows between people, departments and systems.',
    outcome: 'Leaner operations and fewer delays',
  },
  {
    name: 'Data, Analytics & Business Intelligence',
    href: '/services/data-analytics-business-intelligence',
    icon: 'data-analytics',
    value:
      'Management dashboards, executive reporting, and the data integration and modelling that sit behind them.',
    outcome: 'Better visibility and faster management reporting',
  },
  {
    name: 'Managed Technology Services',
    href: '/services/managed-technology-services',
    icon: 'managed-services',
    value:
      'Ongoing support, monitoring, vendor coordination and optimisation of business-critical technology.',
    outcome: 'Improved reliability and less internal burden',
  },
];

/* --- §8.5 ERP spotlight ------------------------------------------------ */
export const erpCapabilities = [
  'Sage 200',
  'Sage Business Cloud',
  'ERP advisory & selection',
  'Implementation & migration',
  'Systems integration',
  'Reporting & analytics',
  'Support & optimisation',
  'Managed ERP services',
];

/* --- §8.6 WETO --------------------------------------------------------- */
export const wetoBenefits = [
  'Fractional CTO leadership',
  'Technology roadmap',
  'AI as a Service',
  'Process improvement',
  'Technology governance',
  'Vendor management',
  'Continuous value delivery',
];

/* --- §8.7 Transformation framework -------------------------------------
   Each stage now names its OUTPUT as well as its activity (design audit
   §2.6). A named deliverable per stage is what makes a framework read as
   something the firm owns rather than a generic row of service columns —
   a client can point at a stage and say what they get from it.

   ⚠ STAGE NAMING CONFLICT: the brief (§8.7) specifies
   Discover → Diagnose → Design → Deliver → Manage & Optimise, which is what
   is used here. The design audit (§2.6) proposes
   Discover → Prioritise → Design → Deliver → Improve. Renaming a
   proprietary model is a branding decision, so the formally approved brief
   wording stands until the client confirms otherwise.
   --------------------------------------------------------------------- */
export const frameworkStages: {
  name: string;
  description: string;
  output: string;
  icon: IconName;
}[] = [
  {
    name: 'Discover',
    description:
      'Understand the organisation, its goals, systems, processes, stakeholders and current challenges.',
    output: 'Current-state map',
    icon: 'exec-technology',
  },
  {
    name: 'Diagnose',
    description: 'Identify inefficiencies, risks, system gaps and the highest-value opportunities.',
    output: 'Prioritised opportunities',
    icon: 'data-analytics',
  },
  {
    name: 'Design',
    description: 'Develop the technology, ERP, AI and operational improvement roadmap.',
    output: 'Roadmap and business case',
    icon: 'process-excellence',
  },
  {
    name: 'Deliver',
    description: 'Implement the systems, integrations, automation and process changes.',
    output: 'Working systems',
    icon: 'erp-systems',
  },
  {
    name: 'Manage & Optimise',
    description:
      'Measure outcomes, support operations, improve performance and keep delivering value.',
    output: 'Measured outcomes',
    icon: 'managed-services',
  },
];

/* --- §8.9 Why WIZAG ---------------------------------------------------- */
export const differentiators: { title: string; body: string }[] = [
  {
    title: 'Business-first approach',
    body: 'We begin with the operating problem, not the software. The system follows the decision, not the other way round.',
  },
  {
    title: 'One accountable partner',
    body: 'Strategy, ERP, AI, implementation, support and optimisation are coordinated under a single relationship.',
  },
  {
    title: 'Senior-led delivery',
    body: 'Clients work with experienced leadership and specialists, not a rotating bench of junior consultants.',
  },
  {
    title: 'Continuous value',
    body: 'We stay involved to manage, measure, support and improve what we put in — the engagement does not end at go-live.',
  },
];

/* --- §8.10 Engagement models ------------------------------------------- */
export const engagementModels: { name: string; body: string }[] = [
  {
    name: 'Project engagement',
    body: 'For defined ERP implementations, integrations, audits, migrations, automation or transformation work with a clear scope and end point.',
  },
  {
    name: 'Managed services',
    body: 'For ongoing ERP support, application management, infrastructure, reporting and continuous optimisation under an agreed service level.',
  },
  {
    name: 'WETO subscription',
    body: 'For fractional CTO leadership, AI as a Service, governance and continuous transformation support on a recurring basis.',
  },
  {
    name: 'Dedicated technology team',
    body: 'For organisations that need a long-term, multidisciplinary WIZAG team working alongside their own people.',
  },
];

/* --- §8.11 Business outcomes ------------------------------------------- */
export const businessOutcomes = [
  'Better management visibility',
  'Improved process efficiency',
  'Reduced operational cost',
  'Stronger controls and compliance',
  'Faster decision-making',
  'Higher return on ERP investment',
  'Improved customer service',
  'Scalable technology operations',
];
