/**
 * WIZAG site navigation — single source of truth.
 *
 * Header, mobile drawer and footer all read from here, so the menu can never
 * drift between them. When Sanity is wired in phase 2 this file becomes the
 * fallback/seed and the shape stays identical.
 *
 * Structure agreed with the client 2026-07-20:
 *   Services              — the six service practices (brief §6)
 *   ERP                   — ERP Services first, then the platforms
 *   Business Applications — WIZAG's own product suite
 *   WETO · Industries · About WIZAG · Contact
 *
 * Insights is deliberately absent: the section is built but stays switched
 * off until real articles exist (brief §8.12 forbids invented content).
 */

export interface NavLink {
  label: string;
  href: string;
  /** Terse form for the top bar and footer columns, where the full service
   *  names are too long and wrap badly. Falls back to `label`. */
  short?: string;
  /** Short line shown under the label in mega/dropdown menus. */
  summary?: string;
  /** Renders a hairline divider ABOVE this item — used to separate
   *  the ERP service from the ERP platforms. */
  dividerBefore?: boolean;
  /** Not yet indexable — thin/stub page. Drives the noindex meta tag. */
  stub?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  /** Bar label. Nav labels must be terse — the full names are for page
   *  titles and dropdown contents, not the top bar. */
  short?: string;
  children?: NavLink[];
  /** Flagship item. Gets a restrained accent treatment in the nav so it
   *  reads as the priority offering without shouting. Exactly one item
   *  should carry this — a second would cancel the first. */
  feature?: boolean;
}

/* -------------------------------------------------------------------------
   SERVICES — the six practices. Copy is drawn from brief §6 positioning
   lines, condensed to a single clause each.
   ------------------------------------------------------------------------- */
export const services: NavLink[] = [
  {
    label: 'Executive Technology Services',
    short: 'Executive Technology',
    href: '/services/executive-technology-services',
    summary: 'Senior technology leadership without building an internal executive office.',
  },
  {
    label: 'ERP & Business Systems',
    short: 'ERP & Systems',
    href: '/services/erp-business-systems',
    summary: 'ERP services that improve control, visibility and business performance.',
  },
  {
    label: 'AI & Intelligent Automation',
    short: 'AI & Automation',
    href: '/services/ai-intelligent-automation',
    summary: 'Practical AI capabilities delivered as business services.',
  },
  {
    label: 'Process & Operational Excellence',
    short: 'Process Excellence',
    href: '/services/process-operational-excellence',
    summary: 'Improving how work flows across the organisation.',
  },
  {
    label: 'Data, Analytics & Business Intelligence',
    short: 'Data & Analytics',
    href: '/services/data-analytics-business-intelligence',
    summary: 'Turning business data into clear management insight.',
  },
  {
    label: 'Managed Technology Services',
    short: 'Managed Services',
    href: '/services/managed-technology-services',
    summary: 'Ongoing support and optimisation of business-critical technology.',
  },
];

/* -------------------------------------------------------------------------
   ERP — the service sits above the platforms, so a visitor reads
   "we do ERP work, and here are the platforms we do it on".
   Sage product names follow Sage's official naming.
   ------------------------------------------------------------------------- */
export const erp: NavLink[] = [
  {
    label: 'ERP Services',
    href: '/erp',
    summary: 'Advisory, selection, implementation, migration, integration and support.',
  },
  /* Renamed from "Sage 200 Evolution" on 2026-07-22. The client confirmed
     that WIZAG's Kenya licensing runs through Sage UK & Ireland, so the
     product sold here is Sage 200 (Standard / Professional) — not Sage 200
     Evolution, which is Sage's separate Africa & Middle East product with a
     different module set entirely. */
  {
    label: 'Sage 200',
    href: '/erp/sage-200',
    dividerBefore: true,
    summary: 'Business management for companies of roughly 5 to 200 people',
  },
  {
    label: 'Sage Business Cloud',
    href: '/erp/sage-business-cloud',
    summary: 'Cloud accounting for businesses that have outgrown spreadsheets',
  },
  /* WIZAG's own ERP, and the highest-margin product in this menu — no
     licence revenue leaves the group, and the implementation is all ours. */
  {
    label: 'WizERP',
    href: '/erp/wizerp',
    summary: 'Our own open-source ERP — no licence fee, fully customisable',
  },
  /* WIZAG's own product, and the only item in this menu sold to accounting
     FIRMS rather than to end businesses — the summary has to carry that,
     because the menu context implies the opposite. */
  {
    label: 'AscendBooks',
    href: '/erp/ascendbooks',
    summary: 'Managed ERP platform for accounting firms',
  },
];

/* -------------------------------------------------------------------------
   BUSINESS APPLICATIONS — WIZAG's own product suite.

   ⚠ DO NOT ADD: TimeTrax, MobiSales, CrownEHR.
   These appear on wizag.co.ke subdomains (demota., mobisales., crownehr.)
   but they belong to ANOTHER COMPANY — confirmed by the client 2026-07-21.
   They are not WIZAG products and must never be listed or marketed here.
   See also the wizag.co.ke redirect note: those subdomains must be excluded
   from any blanket 301 to wizag.biz.
   ------------------------------------------------------------------------- */
export const businessApplications: NavLink[] = [
  /* WizCRM and TeamKazi lead — they are the two with full, written pages.
     Omitting `stub` keeps them indexable while the rest stay noindex.

     Trimmed to three on 2026-07-22 (client instruction): WizPOS, CloudHR and
     RestPOS were removed from the menu. Three items also means the dropdown
     renders as a single column automatically — DesktopNav switches to two
     columns only above five children, so there is nothing to configure.

     ⚠ Removing an entry here also removes its page: [slug].astro derives
     getStaticPaths from this array. Re-add the entry to bring the page back. */
  {
    label: 'WizCRM',
    href: '/business-applications/wizcrm',
    summary: 'The AI-first CRM for field-sales teams',
  },
  {
    label: 'TeamKazi',
    href: '/business-applications/teamkazi',
    summary: 'Project management with a live P&L on every project',
  },
  { label: 'WizSales', href: '/business-applications/wizsales', stub: true },
];

/* -------------------------------------------------------------------------
   INDUSTRIES — brief §8.8. Manufacturing leads: ERP, inventory,
   procurement and analytics are most relevant there.
   ------------------------------------------------------------------------- */
export const industries: NavLink[] = [
  { label: 'Manufacturing & Industrial', short: 'Manufacturing', href: '/industries/manufacturing-industrial' },
  { label: 'Financial Services', href: '/industries/financial-services' },
  { label: 'Retail & Distribution', short: 'Retail', href: '/industries/retail-distribution' },
  { label: 'Logistics & Supply Chain', short: 'Logistics', href: '/industries/logistics-supply-chain' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'Education', href: '/industries/education' },
  { label: 'Professional Services', href: '/industries/professional-services' },
  { label: 'NGOs & Non-Profits', href: '/industries/ngos-non-profits' },
  { label: 'Public Sector', href: '/industries/public-sector' },
];

/* -------------------------------------------------------------------------
   ABOUT — brief §9.
   ------------------------------------------------------------------------- */
export const about: NavLink[] = [
  { label: 'Company Overview', href: '/about' },
  { label: 'Leadership', href: '/about/leadership', stub: true },
  { label: 'Partners', href: '/about/partners', stub: true },
  { label: 'Careers', href: '/about/careers', stub: true },
];

/* -------------------------------------------------------------------------
   PRIMARY NAVIGATION
   ------------------------------------------------------------------------- */
/**
 * Seven items have to share the bar with a logo and a CTA. The `short` forms
 * keep the row under ~560px so the full desktop nav fits from 1024px — the
 * alternative was showing a hamburger on desktop, which reads as a phone site.
 * Full names still appear as page titles and dropdown headings.
 */
export const primaryNav: NavItem[] = [
  { label: 'Services', href: '/services', children: services },
  /* WETO sits second, directly after Services and ahead of ERP. It is the
     flagship offering, and position two is the most valuable slot in the bar
     after the logo. `feature` gives it the accent treatment — see
     DesktopNav/MobileNav. */
  { label: 'WETO', href: '/weto', feature: true },
  { label: 'ERP', href: '/erp', children: erp },
  {
    label: 'Business Applications',
    short: 'Applications',
    href: '/business-applications',
    children: businessApplications,
  },
  { label: 'Industries', href: '/industries', children: industries },
  { label: 'About WIZAG', short: 'About', href: '/about', children: about },
  { label: 'Contact', href: '/contact' },
];

/* -------------------------------------------------------------------------
   CALLS TO ACTION — brief §8.1 / §8.13
   ------------------------------------------------------------------------- */
/**
 * ONE primary action across the whole site.
 *
 * The design audit (§2.9) found too many competing calls to action — "speak
 * to WIZAG", "explore services", "discuss ERP", "get in touch" — which
 * splits intent and weakens all of them. Every primary CTA on every page now
 * resolves to this one.
 *
 * NOTE: this wording comes from the audit and supersedes the original
 * brief's "Schedule an Executive Consultation" (§8.1). Flagged for client
 * confirmation.
 */
export const primaryCta = {
  label: 'Book a Business Technology Assessment',
  shortLabel: 'Book an Assessment',
  href: '/contact',
} as const;

/** The single secondary action (audit §2.9). */
export const secondaryCta = {
  label: 'Explore Our Capabilities',
  href: '/services',
} as const;

/* -------------------------------------------------------------------------
   COMPANY DETAILS — brief §8.14.
   The address was confirmed by the client 2026-07-20 and supersedes the
   Unga House / Westlands address still listed in public directories.
   No telephone number is published (brief §8.14).
   ------------------------------------------------------------------------- */
export const company = {
  legalName: 'Wise & Agile Solutions Ltd',
  brand: 'WIZAG',
  tagline: 'Connected Intelligence',
  email: 'info@wizag.biz',
  website: 'wizag.biz',
  /** The active company page. A second, dormant page exists at
   *  /company/wizag-kenya — it should be merged or closed so the audience
   *  and the entity signal are not split. */
  linkedin: 'https://www.linkedin.com/company/wizag',
  address: {
    building: 'Valley View Office Park',
    unit: 'Tower A, 4th Floor',
    street: 'Off Limuru Road',
    area: 'Parklands',
    city: 'Nairobi',
    country: 'Kenya',
  },
} as const;

/** Footer column layout (brief §8.14). Columns use `short` labels and are
 *  capped so no single column runs away in height — each has a "see all"
 *  link back to its index page rather than listing everything. */
export const footerColumns = [
  { title: 'Services', links: services, allHref: '/services' },
  { title: 'ERP', links: erp, allHref: '/erp' },
  { title: 'Applications', links: businessApplications, allHref: '/business-applications' },
  { title: 'Industries', links: industries.slice(0, 5), allHref: '/industries' },
  { title: 'Company', links: about, allHref: '/about' },
] as const;
