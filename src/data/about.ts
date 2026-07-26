/**
 * Company / About content.
 *
 * ── CURATED 2026-07-23 ───────────────────────────────────────────────
 * The About page was a hero, the four homepage differentiators, and the
 * address. It read as a stub. This file gives the page its own substance:
 * an identity narrative, a considered statement of how WIZAG works, and the
 * "one partner" structure — none of it duplicated from the homepage, which
 * already owns the framework, engagement models and outcomes.
 *
 * ── WHAT IS DELIBERATELY ABSENT — AND WHY (this matters here most) ────
 * An About page is where a company is most tempted to invent, and where
 * invention is most damaging. NONE of the following appears, because none is
 * verified and the brief (§3.2 / §8.12) forbids it:
 *
 *   · Founding year / years in business — public directories list BOTH 2013
 *     and 2003. Stating either would be a guess presented as fact.
 *   · Headcount, number of clients, projects delivered, revenue.
 *   · Client names, logos, testimonials, case studies.
 *   · Leadership names, titles or biographies (that is /about/leadership,
 *     and it needs real people the client supplies — it must not be faked).
 *   · Certifications, awards, ISO numbers, partner tiers.
 *   · SAP Business One. A prior note recorded a claimed SAP B1 partnership
 *     that could not be verified in any partner directory and appears
 *     NOWHERE else on the site. It is not introduced here. Sage is the only
 *     platform partnership stated, consistent with the rest of the site.
 *
 * Everything below is either brand-level positioning the client approved, or
 * a direct restatement of what the site already offers. If the client later
 * supplies a real founding year, an "our story", or leadership bios, they
 * slot in — this file is written to receive them.
 *
 * Verified/established facts used: legal name, Nairobi (Parklands) address,
 * info@wizag.biz, Sage business partner, and WIZAG's own products (WizERP,
 * AscendBooks, WizCRM, TeamKazi) — all already published across the site.
 */
import type { IconName } from '../components/ui/Icon.astro';

/* The identity narrative — the centre of the page. Three paragraphs, no
   invented facts, written to say what WIZAG is and, more usefully, what it
   deliberately is not. */
export const story: string[] = [
  'Wise & Agile Solutions — WIZAG — is an enterprise transformation and technology services company based in Nairobi. We help established organisations improve how they operate: the systems they run on, the processes that move work through them, and the reporting their leadership depends on to make decisions.',
  'We are deliberately not a software vendor, an ERP reseller or an AI startup. A business built to sell a product tends to arrive with the answer already decided — the licence, the platform, the model — before the question has been asked. We are engaged to understand the operating problem first, and to recommend the smallest change that solves it. Sometimes that is one of our own products; sometimes it is a platform we implement; and sometimes it is neither.',
  'That distinction shapes everything downstream — how we scope work, how we price it, and why we will tell a client when the thing they have asked for is not the thing they need. It is easier to say once, on this page, than to prove one engagement at a time: we would rather be the firm that talked you out of the wrong project than the one that delivered it well.',
];

/* The tagline, given substance rather than left as decoration. */
export const namePoint =
  'Connected Intelligence is a claim about how the parts fit together: strategy connected to the systems that carry it, systems connected to the operations that run on them, and all of it connected to the numbers leadership actually uses. Most problems we are called in for live in the gaps between those things, not inside any one of them.';

/* How WIZAG works — the essay-depth version of the homepage's four
   differentiators. Same four convictions, written at About-page length and
   with the honest edge the homepage keeps brief. Icons added here. */
export const principles: { title: string; body: string; icon: IconName }[] = [
  {
    title: 'We start with the operating problem, not the software',
    body: 'Every technology decision follows a business one. The first part of any engagement is spent understanding how your organisation actually runs — where work slows, where two systems disagree, where cost hides — and only then is a change recommended. The smallest change that works is usually the right one, and now and then it involves buying nothing at all.',
    icon: 'exec-technology',
  },
  {
    title: 'One partner, one line of accountability',
    body: 'Strategy, systems, implementation, support and improvement normally come from different suppliers — each accountable for its own piece, none for the outcome. WIZAG holds all of it under a single relationship, so when something has to work end to end there is one party answerable for whether it does.',
    icon: 'managed-services',
  },
  {
    title: 'Senior people, on your actual work',
    body: 'You work with experienced practitioners rather than a rotating bench of junior consultants learning on your engagement. The people who scope the work are involved in delivering it, and are still there when it goes live — which is the point at which most of the questions arrive.',
    icon: 'team',
  },
  {
    title: 'The engagement does not end at go-live',
    body: 'Most value is lost after implementation, when the people who built the system move on and nobody owns it. We stay — to measure what it delivered, support the people using it, and keep it fit as the business and its statutory obligations change. Go-live is the middle of the work, not the end of it.',
    icon: 'growth',
  },
];

/* The "one partner" structure, framed as the three things a client
   experiences in sequence. Each links to a real section of the site, so this
   is identity framing rather than a second copy of the homepage service
   list. */
export const pillars: {
  step: string;
  name: string;
  body: string;
  href: string;
  linkLabel: string;
  icon: IconName;
}[] = [
  {
    step: '01',
    name: 'Decide',
    body: 'Executive technology leadership and independent advice — the senior judgement to make good technology decisions, available without carrying a full-time technology executive on the payroll.',
    href: '/services/executive-technology-services',
    linkLabel: 'Executive Technology Services',
    icon: 'exec-technology',
  },
  {
    step: '02',
    name: 'Build',
    body: 'ERP and business systems — Sage platforms where they fit, and our own WizERP, AscendBooks and business applications where they fit better. Selected on merit, implemented, migrated and integrated.',
    href: '/erp',
    linkLabel: 'ERP & Business Systems',
    icon: 'erp-systems',
  },
  {
    step: '03',
    name: 'Run',
    body: 'Process improvement, data and reporting, intelligent automation and managed services — the work that turns a system that has gone live into one that keeps earning its cost.',
    href: '/services/managed-technology-services',
    linkLabel: 'Managed Technology Services',
    icon: 'managed-services',
  },
];

/* The honest boundary, restated at company level. It is the single most
   trust-building thing an advisory firm can put on its About page, and it is
   true of how WIZAG positions itself everywhere else on the site. */
export const boundary =
  'We are not the right partner for everyone. If your need is a single licence at the lowest price, a body of contractors to direct yourself, or a system your regulator has already chosen for you, there are firms better shaped for that than we are — and we will say so early, rather than bill you to find out slowly.';

/* Photography. `file` present renders the image; otherwise the documented
   placeholder shows. Prompts for the office shot are in
   docs/about-image-prompts.md.

   The "approach" image reuses an existing house-style photograph (originally
   the WizERP growth shot) so the page ships with a real image today; it can
   be replaced with an About-original using the prompt in the same doc. */
export const aboutImages: Record<
  string,
  { brief: string; purpose: string; file?: string; alt?: string; w?: number; h?: number }
> = {
  approach: {
    file: 'about-approach.jpg',
    alt: 'Three colleagues in animated discussion around a table in a sunlit office, working something through together.',
    w: 1160,
    h: 870,
    brief:
      'Three or four WIZAG-type professionals in genuine discussion around a table in a bright Nairobi office — engaged with each other and the work, not the camera. Warm, senior, collaborative.',
    purpose:
      'The centre of the page is about how WIZAG works with clients. Show peers solving something together, in the house register.',
  },
  office: {
    brief:
      'A bright, modern office interior or a professional exterior context in Parklands, Nairobi — clean, well-appointed, calm. No signage, no logos, no identifiable neighbouring brands.',
    purpose:
      'Grounds the company in a real place next to the address. Establishes that WIZAG is a physical, credible operation, not a virtual one.',
  },
};
