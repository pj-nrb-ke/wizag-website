/**
 * AscendBooks™ — page content.
 *
 * Source: C:\Users\pj\Downloads\AscendBooks Brochure (A4) New.pdf (4pp).
 *
 * ── THE ONE THING THAT SHAPES THIS WHOLE PAGE ─────────────────────────
 * AscendBooks is NOT an ERP sold to businesses. It is a managed ERP
 * platform sold to ACCOUNTING FIRMS, who run their own SME clients on it.
 * WIZAG operates the infrastructure; the firm keeps the client relationship.
 *
 * Every other page in the ERP menu sells to end businesses. This one sells
 * to partners. If that is not obvious within about five seconds, an SME
 * owner arriving from the menu reads the entire page wrong — which is why
 * the audience is stated in the eyebrow, the hook and the first paragraph
 * rather than being left to imply itself.
 *
 * ── OWNERSHIP ────────────────────────────────────────────────────────
 * WIZAG's own product; Wise & Agile Solutions Limited holds the copyright
 * and the AscendBooks™ trademark (client confirmed 2026-07-23). So unlike
 * the Sage pages there is no third-party brand restriction here — the logo
 * is ours to adapt, and the claims are ours to make.
 *
 * The named third-party systems under `migratesFrom` are other companies'
 * trademarks, referenced only to say what we migrate data out of. That is
 * ordinary nominative use; do not style them as endorsements or partnerships.
 *
 * ── NOT CARRIED OVER FROM THE BROCHURE ───────────────────────────────
 *   The direct phone number (+254 728 956308) and sales@wizag.biz. The site
 *   publishes no telephone number (brief §8.14) and uses info@wizag.biz via
 *   the contact page. Flagged for the client — if the partner programme
 *   should be an exception, it is a deliberate decision, not a copy-paste.
 *
 * Copy is rewritten rather than lifted. The brochure leans on "seamlessly",
 * "empowering" and "leverage", which the brief bans; the substance is kept
 * and the voice is ours.
 */
import type { IconName } from '../components/ui/Icon.astro';

export const ascendbooks = {
  name: 'AscendBooks',
  /* ™ on the first prominent mention only — repeated symbols read as legal
     anxiety rather than confidence. */
  nameTM: 'AscendBooks™',
  eyebrow: 'Partner programme · for accounting firms',
  hook: 'Your clients get enterprise ERP. You get none of the servers.',
  positioning:
    'A managed enterprise ERP platform built for accounting practices. Your firm runs its clients’ day-to-day accounting on it; WIZAG runs the hosting, the migrations, the reports and the support underneath.',
  audience: 'For accounting and advisory firms serving SME clients across Kenya and East Africa.',
  /* The brochure's closing line, and the sharpest sentence in it. */
  tagline: 'You scale the relationship. We scale the infrastructure.',
  /* WIZAG's self-description in its own brochure. Note this is WIZAG
     describing its own role in its own product — unlike the Sage pages,
     where a similar phrase was removed because it implied a Sage tier. */
  role: 'Enterprise ERP Infrastructure Partner',
};

/* ---------------------------------------------------------------------
   THE SPLIT — drives the division-of-labour diagram. This is the single
   idea the page has to land, so it gets the hero visual.
   --------------------------------------------------------------------- */
export const division = {
  firmTitle: 'Your firm keeps',
  firmItems: [
    'The client relationship',
    'Advisory and interpretation',
    'Day-to-day accounting operations',
    'Your brand, in front of the client',
  ],
  wizagTitle: 'WIZAG runs',
  wizagItems: [
    'Hosting and the ERP environment',
    'Backups, monitoring, performance',
    'Data migration and go-live',
    'Reports, customisation, support',
  ],
  seam: 'One service, as far as your client sees',
};

/* Why partner — page 1 of the brochure. */
export const whyPartner: { title: string; body: string; icon: IconName }[] = [
  {
    title: 'Enterprise ERP without the capital',
    body: 'Offer your clients a structured, audited ERP environment without buying servers, hiring specialists or taking on a platform to maintain.',
    icon: 'cloud',
  },
  {
    title: 'More clients, no more IT overhead',
    body: 'Adding the tenth client costs you what adding the second did. The platform absorbs the growth rather than your operations team.',
    icon: 'growth',
  },
  {
    title: 'Insight, not just bookkeeping',
    body: 'Structured dashboards, multi-entity consolidation and AI-assisted processing let you sell analysis rather than compliance work.',
    icon: 'data-analytics',
  },
  {
    title: 'A technical team behind yours',
    body: 'Our technology and analytics people handle the parts your practice was never set up to do — and they answer to you, not to the client.',
    icon: 'team',
  },
];

/* How it works — the four-step engagement, page 2. */
export const howItWorks: { n: string; title: string; body: string }[] = [
  {
    n: '01',
    title: 'We set up your environment',
    body: 'A managed enterprise ERP environment configured for your practice and the way it works.',
  },
  {
    n: '02',
    title: 'We migrate the client data',
    body: 'Handled end to end — mapping, validation, reconciliation and go-live support, so the opening balances agree before anyone relies on them.',
  },
  {
    n: '03',
    title: 'Your team runs the accounting',
    body: 'Day-to-day operations stay with your people. The client deals with you, as they always have.',
  },
  {
    n: '04',
    title: 'We keep it running and improving',
    body: 'Support, customisation, optimisation and maintenance — continuously, not as a project that ends.',
  },
];

/* What WIZAG manages — page 3. */
export const managed: { name: string; body: string; icon: IconName }[] = [
  {
    name: 'Data migration',
    body: 'Mapping, validation, reconciliation and go-live support, handled end to end. The part that most often goes wrong, done by people who have done it before.',
    icon: 'migrate',
  },
  {
    name: 'Hosting and support',
    body: 'A fully managed enterprise ERP environment with backups, monitoring and performance management. Nobody at your firm becomes its accidental administrator.',
    icon: 'cloud',
  },
  {
    name: 'Reports and customisation',
    body: 'From decision-focused reporting through to system changes, aligned to how your clients actually operate rather than how the software ships.',
    icon: 'document',
  },
];

/* Advanced capabilities — page 2. */
export const capabilities: { name: string; body: string; icon: IconName }[] = [
  {
    name: 'Reporting, analytics and business intelligence',
    body: 'Structured dashboards, multi-entity consolidation and financial analytics — so a client conversation can move past what happened to what to do about it.',
    icon: 'data-analytics',
  },
  {
    name: 'AI-integrated workflows',
    body: 'Uploaded documents are extracted, validated and converted into structured accounting transactions, which takes the manual keying — and the keying errors — out of the process.',
    icon: 'ai-automation',
  },
  {
    name: 'Structured ERP architecture',
    body: 'Audit trails, system controls and defined processes, so the same work is done the same way across every client and every month.',
    icon: 'erp-systems',
  },
];

/* Systems we migrate clients off. Third-party marks — nominative use only. */
export const migratesFrom: string[] = [
  'QuickBooks',
  'Tally',
  'Sage 50 / Pastel',
  'Excel-based systems',
  'Other accounting systems',
];

/* What the firm gains — page 3, merged with "Your advantage as a partner",
   page 4. The two lists overlapped heavily in the brochure. */
export const gains: string[] = [
  'Zero infrastructure responsibility, and no capital tied up in it',
  'Faster onboarding for new SME clients',
  'ERP specialists on demand — support, reports, customisation',
  'Recurring revenue that expands with the client base',
  'A model that scales rather than one that strains',
  'Enterprise-grade capability behind a practice of your size',
];

/* Qualification — page 4. Written as self-selection rather than a pitch:
   a partner programme that takes the wrong firms fails slowly and expensively. */
export const idealFor: string[] = [
  'Serve a growing or increasingly complex client portfolio',
  'Want new revenue from AI-enabled and advisory services',
  'Would rather access enterprise capability than build it',
  'Are looking to differentiate in a crowded market',
];

/* The brochure's own capacity statement. WIZAG's claim about WIZAG's own
   onboarding capacity — not an invented scarcity device, but stated plainly
   rather than used as pressure. */
export const capacityNote =
  'Onboarding is deliberately limited each quarter. Migrations and environment setup are done properly or not at all, and that puts a ceiling on how many firms we can take on at once.';
