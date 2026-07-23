/**
 * Industry pages — brief §8.8.
 *
 * ── BUILT 2026-07-23 ─────────────────────────────────────────────────
 * These nine pages were shells: a title, a generated sentence and a list of
 * six things the page "will cover". The client's instruction was that this
 * is where decision makers decide whether WIZAG is a fit for them, so every
 * page now has to answer three questions and answer them specifically:
 *
 *   1. Do you understand how my sector actually operates?
 *   2. Which of your products would I run, and why those?
 *   3. Which of your services would I need, and why those?
 *
 * ── THE BOUNDARIES ARE THE POINT ─────────────────────────────────────
 * Every page carries a `fit` statement naming what WIZAG does NOT do in
 * that sector. This is deliberate and it is the most important field here.
 *
 * WIZAG does not publish a hospital management system, a student
 * information system, a core banking system or a point-of-sale product.
 * Four of these nine sectors have a mandated or near-mandated system of
 * record that WIZAG has no product for — SHA's Taifa Care HMIS in
 * healthcare, KEMIS in education, IFMIS and e-GP in the public sector, and
 * the core systems SACCOs run under SASRA. A page that glossed over that
 * would be found out in the first meeting, and the reader most likely to
 * spot it is exactly the reader these pages are written for.
 *
 * Saying it first turns a gap into a position: WIZAG works on the finance,
 * operations and reporting layer around those systems, and on making them
 * talk to each other. That is a real, defensible offer.
 *
 * ⚠ WizPOS and RestPOS were removed from the site on client instruction
 * (2026-07-22), so there is NO point-of-sale product to offer. Retail &
 * Distribution says so plainly rather than implying front-of-till
 * capability we cannot deliver.
 *
 * ── WHAT IS NOT HERE (brief §8.12 / §3.2) ────────────────────────────
 * No client names, no sector case studies, no market-share or
 * customer-count claims, no "we have delivered N projects in this sector",
 * no logos. None has been supplied and inventing them is precisely what the
 * brief rules out. Nothing on these pages asserts prior work in a sector.
 *
 * ── EXTERNAL FACTS: ALL VERIFIED 2026-07-23, ALL DATED ───────────────
 * Each industry cites one or two facts about its regulatory environment.
 * These are what make the pages read as written by someone who works here.
 * They also date fastest, so each is listed with what to re-check:
 *
 *   Healthcare    SHA moved Level 4 facility claims to the Taifa Care HMIS
 *                 on 29 June 2026, and gave providers 90 days to integrate
 *                 with the national digital HMIS or lose contracting for
 *                 FY 2026/28. Digital Health Act 2023 created the Digital
 *                 Health Agency and mandates interoperability standards.
 *                 → RE-CHECK: the 90-day window closes late September 2026.
 *
 *   Logistics     From 1 July 2026 transit goods licences (C28) and
 *                 customs-controlled vehicle licences (C40) are processed
 *                 through RECTS integrated with iCMS. Manually issued
 *                 licences stay valid to 31 December 2026.
 *                 → RE-CHECK: after 31 December 2026 the transition is over.
 *
 *   Public sector e-GP launched 7 April 2025; from 1 July 2025 all national
 *                 and county procurement runs through it, integrated with
 *                 IFMIS, KRA iTax and the Business Registration Service.
 *                 Full transition due by the end of FY 2026/27.
 *
 *   Financial     SASRA gazetted 176 licensed deposit-taking SACCOs on
 *                 30 January 2026 and restricted five to credit-only.
 *                 Renewals are due by 30 September each year with three
 *                 years of audited IFRS statements; IFRS 9 expected credit
 *                 loss provisioning applies.
 *                 → RE-CHECK: the list is re-gazetted every January.
 *
 *   Education     About 1.2 million learners entered Grade 10 in January
 *                 2026 — the first Senior School cohort under CBC. Funding
 *                 flows are administered through KEMIS. TVET received
 *                 KSh 58.5bn in the 2026/27 budget.
 *
 *   NGOs          The Public Benefit Organizations Act 2013 commenced
 *                 14 May 2024 under Legal Notice 78 of 2024, replacing the
 *                 NGO Co-ordination Act 1990 and the NGO Board with the PBO
 *                 Authority. The Authority has since gazetted thousands of
 *                 organisations for deregistration over non-compliance.
 *
 *   Cross-sector  eTIMS return validation from January 2026, NSSF limits
 *                 from February 2026 and SHIF from October 2024 — all
 *                 sourced in full in src/data/services.ts.
 */
import type { IconName } from '../components/ui/Icon.astro';

export interface IndustryProduct {
  name: string;
  href: string;
  /** Why THIS product for THIS sector. Never a feature list. */
  why: string;
}

export interface IndustryPractice {
  name: string;
  href: string;
  why: string;
}

export interface FlowStage {
  stage: string;
  /** What goes wrong here when the systems do not join up. */
  strain: string;
}

export interface Industry {
  slug: string;
  title: string;
  short: string;
  icon: IconName;
  /** Manufacturing leads the index (brief §8.8). */
  feature?: boolean;
  positioning: string;
  lead: string;
  audience: string;
  situation: string[];
  /** Names the operating cycle the diagram walks through. */
  flowLabel: string;
  flow: FlowStage[];
  products: IndustryProduct[];
  practices: IndustryPractice[];
  firstMove: string;
  /** What WIZAG does NOT do here. Every page has one. */
  fit: string;
  image: {
    brief: string;
    purpose: string;
    file?: string;
    alt?: string;
    w?: number;
    h?: number;
  };
}

/* Product routes, so a rename is one edit rather than nine. */
const P = {
  sage200: { name: 'Sage 200', href: '/erp/sage-200' },
  sageCloud: { name: 'Sage Business Cloud', href: '/erp/sage-business-cloud' },
  wizerp: { name: 'WizERP', href: '/erp/wizerp' },
  ascendbooks: { name: 'AscendBooks', href: '/erp/ascendbooks' },
  wizcrm: { name: 'WizCRM', href: '/business-applications/wizcrm' },
  teamkazi: { name: 'TeamKazi', href: '/business-applications/teamkazi' },
} as const;

const S = {
  exec: { name: 'Executive Technology Services', href: '/services/executive-technology-services' },
  erp: { name: 'ERP & Business Systems', href: '/services/erp-business-systems' },
  ai: { name: 'AI & Intelligent Automation', href: '/services/ai-intelligent-automation' },
  process: { name: 'Process & Operational Excellence', href: '/services/process-operational-excellence' },
  data: { name: 'Data, Analytics & Business Intelligence', href: '/services/data-analytics-business-intelligence' },
  managed: { name: 'Managed Technology Services', href: '/services/managed-technology-services' },
} as const;

export const industries: Industry[] = [
  /* ================================================================== */
  {
    slug: 'manufacturing-industrial',
    title: 'Manufacturing & Industrial',
    short: 'Manufacturing',
    icon: 'factory',
    feature: true,
    positioning:
      'Costing, inventory, production and procurement on one ledger, so margin is known while it can still be acted on.',
    lead: 'Manufacturing is the sector where every weakness in a business system compounds. A stock figure that is wrong by a week makes the production plan wrong, which makes the costing wrong, which makes the price wrong — and none of it surfaces until the month has already been sold.',
    audience:
      'For manufacturers running production on experience and spreadsheets while the accounts run somewhere else entirely.',
    situation: [
      'The recurring question in a manufacturing business is not what the revenue was. It is what each line actually cost to make. That answer requires materials, labour, overhead recovery and scrap to meet in one place at the same time, and in most operations they do not — materials are in one system, hours are on paper, overheads are applied at a rate somebody set two years ago, and scrap is a number nobody enjoys discussing.',
      'What follows is predictable. Standard costs drift away from actual costs and nobody notices because there is no variance to look at. Products stay in the range long after they stopped earning. Prices get set from a cost that was true when it was calculated. The business is profitable in aggregate and nobody can say which parts of it are carrying the rest.',
      'On top of that sits an increasingly unforgiving compliance floor. Electronic tax invoicing now applies across purchases and sales, and since January 2026 the Revenue Authority validates declared expenses against its own eTIMS records — so a raw-material purchase that never reached the system is no longer just a costing gap, it is a disallowed expense.',
    ],
    flowLabel: 'Procure to close',
    flow: [
      {
        stage: 'Procure',
        strain: 'Orders raised outside the system, so committed spend stays invisible until the invoice lands',
      },
      {
        stage: 'Produce',
        strain: 'Actual material usage written on the floor and keyed in days later, if at all',
      },
      {
        stage: 'Cost',
        strain: 'Standard costs still at the rate somebody set two years ago, with no variance being watched',
      },
      {
        stage: 'Sell',
        strain: 'Prices quoted from a sheet that has drifted away from the real cost to make',
      },
      {
        stage: 'Close',
        strain: 'Month-end waiting on a stock count that half the room does not believe',
      },
    ],
    products: [
      {
        ...P.wizerp,
        why: 'Our own ERP, and the one built for this shape of business — manufacturing, inventory, purchasing and finance on a single ledger, so a material issue and its cost are the same event. Because we wrote it, a costing method that does not match how you actually run can be changed rather than worked around.',
      },
      {
        ...P.sage200,
        why: 'Where the requirement is strong financial control and stock visibility rather than deep production routing, Sage 200 is the shorter, lower-risk implementation and the one we would recommend on its merits.',
      },
      {
        ...P.wizcrm,
        why: 'For manufacturers selling through distributors and trade counters, where the orders are taken on the road and the visit notes never make it back to the office.',
      },
    ],
    practices: [
      {
        ...S.erp,
        why: 'Selection, implementation and the data migration — including the bill of materials work, which is always larger than the plan assumes.',
      },
      {
        ...S.process,
        why: 'Mapping the floor as it actually runs before any of it is configured. Automating an undocumented process reproduces it faithfully, including the parts that were never meant to be there.',
      },
      {
        ...S.data,
        why: 'Margin by product line, by customer and by run — the reporting that turns a costing system into a pricing decision.',
      },
      {
        ...S.managed,
        why: 'Manufacturing systems fail expensively and at inconvenient hours. Monitoring, defined response and tested recovery rather than a number to call.',
      },
    ],
    firstMove:
      'We would start by following one product from purchase order to despatch note and asking what it cost — then comparing that answer to the standard cost the business currently prices from. That single exercise usually settles what the real problem is, and it is frequently not the one the business called us about.',
    fit: 'We are not a shop-floor automation or SCADA vendor, and we do not supply machine controllers or line telemetry. Where production data lives in plant equipment we integrate with it; we do not replace it. If your problem is on the machine rather than in the ledger, we are the wrong first call.',
    image: {
      brief:
        'Two colleagues on a clean, well-lit production floor in Kenya — one holding a tablet, the other pointing at a stock rack, both engaged and one smiling. Modern, orderly, busy. No branding on any packaging.',
      purpose:
        'Manufacturing buyers dismiss anyone whose imagery is a stock photo of a robot arm. The room should look like a real, working Kenyan plant.',
    },
  },

  /* ================================================================== */
  {
    slug: 'financial-services',
    title: 'Financial Services',
    short: 'Financial Services',
    icon: 'bank',
    positioning:
      'The finance, reporting and control layer around your core system — built for institutions that file to a regulator on a schedule.',
    lead: 'Financial institutions are judged on the quality of numbers they submit to somebody else. That makes the reporting layer, not the core system, the place where most of the operational risk actually sits.',
    audience:
      'For SACCOs, microfinance institutions, insurance intermediaries and investment firms whose regulatory reporting is assembled by hand each period.',
    situation: [
      'The core system holds the member or policy records and does that job. What it rarely does well is produce the institution’s own management and regulatory accounts, so those get assembled in a spreadsheet each period by one or two people who understand the mapping — and understand it in their heads.',
      'The calendar is unforgiving. Deposit-taking SACCOs file renewal applications by 30 September with three years of audited IFRS statements, and hold prudential ratios that are tested rather than estimated. SASRA gazettes the licensed list each January; the January 2026 notice licensed 176 institutions and restricted five to credit-only business for the year. Provisioning under IFRS 9 has to be forward-looking, which means the loan book has to be capable of being modelled, not just counted.',
      'The exposure is concentration. When the mapping between the core system and the statutory return lives in one person’s working file, the institution has a reporting dependency it has never named as a risk — and it fails on the period after that person leaves, not before.',
    ],
    flowLabel: 'Onboard to report',
    flow: [
      {
        stage: 'Onboard',
        strain: 'Member and customer records captured twice, with the two versions diverging quietly',
      },
      {
        stage: 'Transact',
        strain: 'Core system balances that have to be manually agreed to the general ledger each period',
      },
      {
        stage: 'Provision',
        strain: 'Expected credit loss calculated in a workbook only one person can open with confidence',
      },
      {
        stage: 'Report',
        strain: 'Statutory returns rebuilt from scratch every cycle instead of produced',
      },
      {
        stage: 'Audit',
        strain: 'Weeks spent evidencing figures that should have been traceable to source all along',
      },
    ],
    products: [
      {
        ...P.sage200,
        why: 'A controlled general ledger with the analysis dimensions a regulated institution needs — branch, product, fund — so management and statutory reporting come out of the accounting system rather than out of a workbook.',
      },
      {
        ...P.sageCloud,
        why: 'For brokers, agencies and smaller institutions where the requirement is disciplined cloud accounting with proper audit trail, not a full business management suite.',
      },
      {
        ...P.teamkazi,
        why: 'Where the institution runs change programmes, branch rollouts or systems projects, and needs to know what each is costing while it is still running.',
      },
    ],
    practices: [
      {
        ...S.data,
        why: 'The heart of it: tracing every reported figure to source, defining each measure once, and producing the return rather than reassembling it. This is where the concentration risk gets removed.',
      },
      {
        ...S.erp,
        why: 'Integrating the core system to the ledger so the two agree by construction instead of by reconciliation.',
      },
      {
        ...S.managed,
        why: 'A regulated institution cannot miss a filing because a system was down. Monitoring, defined response and recovery that has been tested rather than assumed.',
      },
      {
        ...S.exec,
        why: 'Independent technical judgement in the room when the core system contract comes up for renewal — which for most institutions is the largest technology decision they make.',
      },
    ],
    firstMove:
      'We would take your most recent regulatory return and trace three figures on it back to source. Where the trail runs through a spreadsheet, a manual journal or somebody’s knowledge, that is the finding — and it is usually enough to establish the scope of the work without a lengthy discovery exercise.',
    fit: 'We do not publish a core banking system, a SACCO management system or a policy administration platform, and we would not recommend replacing yours as an opening move. Our work is the finance, control and reporting layer around it, and the integration between them. If you are shopping for a new core system, we can help you evaluate it — but you should know we are not selling one.',
    image: {
      brief:
        'Two finance professionals at a bright meeting table reviewing a printed statutory return together, one tracing a figure with a pen, both composed and quietly satisfied. Modern Nairobi office, no branding, no legible figures on the page.',
      purpose:
        'This sector buys on competence and discretion. The image should read as controlled, not celebratory.',
    },
  },

  /* ================================================================== */
  {
    slug: 'retail-distribution',
    title: 'Retail & Distribution',
    short: 'Retail',
    icon: 'store',
    positioning:
      'Stock, pricing, margin and settlement across every branch and route — behind whatever tills and apps you already run.',
    lead: 'Retail and distribution businesses rarely fail on sales. They fail on the gap between what the system says is in stock and what is actually on the shelf — and on the discovery, months later, that a fast-moving line has been sold below cost the whole time.',
    audience:
      'For distributors, wholesalers and multi-branch retailers running several locations, several price lists and at least one system that does not talk to the others.',
    situation: [
      'The operating problem is that stock exists in more places than the system does. Goods sit in a main store, in branch stock, on a van, in transit between branches and in a customer’s hands unpaid for. Where each of those is tracked differently, the total is a reconstruction rather than a figure, and everyone learns to add a margin of doubt to it.',
      'Pricing carries the same weakness. Trade terms, volume breaks, branch-level discretion and promotional pricing accumulate until nobody can state the true realised margin on a line without going and working it out. That calculation is almost never done at the speed decisions get made at.',
      'Compliance has narrowed the room to improvise. Every sale needs a valid electronic invoice, every purchase needs one to be deductible, and since January 2026 the Revenue Authority validates both against declared returns. A business running some of its trade outside the system is now doing so at a measurable cost.',
    ],
    flowLabel: 'Buy to bank',
    flow: [
      {
        stage: 'Buy',
        strain: 'Purchase decisions made on a stock figure the buyer already discounts in their head',
      },
      {
        stage: 'Hold',
        strain: 'Branch, van and transit stock counted on different rhythms and never quite agreeing',
      },
      {
        stage: 'Price',
        strain: 'Terms and discounts layered until realised margin per line is unknown',
      },
      {
        stage: 'Sell',
        strain: 'Route and counter sales landing in the ledger days after the customer walked out',
      },
      {
        stage: 'Collect',
        strain: 'Debtors chased from a statement the customer disputes on age alone',
      },
    ],
    products: [
      {
        ...P.wizerp,
        why: 'Multi-location inventory, purchasing, sales and finance on one ledger, so branch, van and transit stock are one position rather than four counts. We wrote it, so unusual pricing and settlement rules can be built rather than approximated.',
      },
      {
        ...P.sage200,
        why: 'Where the priority is financial control, stock valuation and clean multi-currency purchasing, with the trading side already handled adequately elsewhere.',
      },
      {
        ...P.wizcrm,
        why: 'Built for exactly this: field representatives calling on trade customers, capturing the visit and the order on the phone, and working offline where coverage does not reach.',
      },
    ],
    practices: [
      {
        ...S.erp,
        why: 'Getting one stock position across every location, which is nearly always the real project behind a retail ERP request.',
      },
      {
        ...S.data,
        why: 'Realised margin by line, branch, customer and route — available at the speed buying decisions are actually made.',
      },
      {
        ...S.process,
        why: 'Goods receipting, transfers and returns are where stock accuracy is lost. These are process problems well before they are system problems.',
      },
      {
        ...S.ai,
        why: 'Demand forecasting on your own sales history, and document capture for the supplier invoices that currently get keyed in one at a time.',
      },
    ],
    firstMove:
      'We would count one fast-moving line in one branch and compare it to what every system in the business believes is there. The size of that gap, and where in the flow it opens up, is a more useful basis for scoping than any requirements workshop.',
    fit: 'We do not sell a point-of-sale product. WIZAG withdrew its POS applications, so we have no till software to put in front of you and no reason to prefer one over another — we integrate with what you already run at the counter. If you are looking for a new POS, that is somebody else’s sale and we will say so early.',
    image: {
      brief:
        'A well-organised Kenyan wholesale storeroom in bright daylight — tidy racking, two colleagues mid-aisle, one checking a tablet against the shelves, both engaged. Busy and prosperous. No product branding or readable labels.',
      purpose:
        'Distribution buyers want to see a store that looks like theirs on a good day, not a European fulfilment centre.',
    },
  },

  /* ================================================================== */
  {
    slug: 'logistics-supply-chain',
    title: 'Logistics & Supply Chain',
    short: 'Logistics',
    icon: 'truck',
    positioning:
      'Job costing, documentation and settlement for operators whose margin is decided by paperwork and delay.',
    lead: 'In logistics the revenue is agreed at the start and the margin is decided afterwards, by demurrage, detention, deadheading and the documents that arrive late. Operators who can see a job’s true cost while it is still running are working from different information to those who find out at invoicing.',
    audience:
      'For transporters, clearing and forwarding agents and third-party logistics operators working the regional corridors.',
    situation: [
      'A single consignment generates more documents than any other transaction in ordinary commerce, and each one is a point at which a cost can attach without anyone recording it. Storage that ran two days over. A container returned late. A trip repositioned empty because nothing was booked back. The rate was fixed weeks ago; every one of these events comes out of the margin, and most are captured after the invoice has gone out.',
      'Regional operations are digitising fast and on a fixed timetable. Since 1 July 2026 transit goods licences and customs-controlled vehicle licences are issued through the Regional Electronic Cargo Tracking System integrated with iCMS; manually issued licences stay valid only to 31 December 2026. Cargo moves under electronic seals, through smart gates with number-plate recognition, tracked in real time across the Northern Corridor.',
      'That is a considerable amount of accurate operational data being generated about your business by somebody else’s system. Operators whose own records cannot be reconciled to it are at a disadvantage in every dispute they enter.',
    ],
    flowLabel: 'Booking to settlement',
    flow: [
      {
        stage: 'Quote',
        strain: 'Rates set from an average cost per trip rather than the cost of this trip on this lane',
      },
      {
        stage: 'Move',
        strain: 'Trip events recorded in drivers’ messages, tracking systems and nobody’s ledger',
      },
      {
        stage: 'Clear',
        strain: 'Customs and corridor documents handled outside the system that has to invoice from them',
      },
      {
        stage: 'Invoice',
        strain: 'Accessorial charges discovered after billing, then written off rather than argued',
      },
      {
        stage: 'Settle',
        strain: 'Job profitability known weeks late, by which time the next job is priced the same way',
      },
    ],
    products: [
      {
        ...P.wizerp,
        why: 'Job-level costing with purchasing, finance and fixed assets on one ledger, so third-party charges attach to the consignment that incurred them rather than to a monthly overhead pool.',
      },
      {
        ...P.teamkazi,
        why: 'Where the work is project-shaped — a relocation, a contract haulage programme, a warehouse commissioning — TeamKazi carries a live cost-to-date against the agreed value while it is still running.',
      },
      {
        ...P.sage200,
        why: 'Strong multi-currency purchasing and settlement for operators paying counterparties across several jurisdictions in several currencies.',
      },
    ],
    practices: [
      {
        ...S.ai,
        why: 'Document-heavy is exactly where intelligent capture pays. Bills of lading, delivery notes and third-party invoices extracted and matched instead of keyed in one at a time.',
      },
      {
        ...S.process,
        why: 'Establishing where every cost is meant to attach to a job, and closing the points where costs currently arrive after the invoice.',
      },
      {
        ...S.data,
        why: 'Profitability by lane, by customer and by vehicle, so pricing is set from what the work actually costs on that route.',
      },
      {
        ...S.erp,
        why: 'Integration between operational systems, corridor platforms and the ledger — so your record and the tracked record agree.',
      },
    ],
    firstMove:
      'We would take twenty completed jobs and rebuild the true margin on each, including every charge that attached after invoicing. The distribution of that result is usually the whole argument: it is rarely a uniform squeeze, and the lanes losing money are rarely the ones anyone suspected.',
    fit: 'We are not a transport management or fleet telematics vendor. We do not supply tracking hardware, and we do not replace RECTS, iCMS or your existing TMS — those are systems of record you integrate with, not systems you choose. Our work is the costing, documentation and settlement layer that sits between them and your accounts.',
    image: {
      brief:
        'Two logistics professionals at a bright depot office in Kenya, reviewing a consignment document together at a desk, trucks visible but out of focus through the window behind. Composed, in control, one smiling.',
      purpose:
        'The cliché is a photograph of trucks. The buyer is not a truck — show the people who decide what a job is worth.',
    },
  },

  /* ================================================================== */
  {
    slug: 'healthcare',
    title: 'Healthcare',
    short: 'Healthcare',
    icon: 'health',
    positioning:
      'The finance, procurement and reporting side of a health facility — around the clinical system, not instead of it.',
    lead: 'Kenyan health providers are being asked to become digital organisations on a fixed timetable. SHA moved Level 4 facility claims onto the Taifa Care HMIS in June 2026 and gave providers ninety days to integrate with the national system or lose contracting. That is a clinical systems deadline with a very large finance problem attached to it.',
    audience:
      'For hospitals, clinics and health groups whose clinical systems are moving faster than their finance function can follow.',
    situation: [
      'The Digital Health Act 2023 created the Digital Health Agency and set interoperability standards for health data. What followed has been rapid: claims processing consolidated onto a national platform, real-time patient verification, electronic claim submission, and providers who do not meet the requirements becoming ineligible for contracting in the FY 2026/28 cycle. For most facilities, meeting that deadline has consumed all available attention.',
      'What has not moved at the same pace is everything behind it. Revenue that used to be recognised on invoice is now recognised on adjudication, so the receivable is a claims position rather than a debtor ledger. Procurement of consumables and pharmaceuticals still runs on reorder habits. The cost of a bed-day, a theatre hour or a department is estimated rather than measured.',
      'The result is a facility that can submit claims correctly and still cannot say which of its services make money. That is a solvable problem, and it is a finance and reporting problem rather than a clinical one.',
    ],
    flowLabel: 'Patient to payment',
    flow: [
      {
        stage: 'Register',
        strain: 'Patient and payer details captured clinically, then re-entered for billing',
      },
      {
        stage: 'Treat',
        strain: 'Consumables issued against a patient but not against a cost centre',
      },
      {
        stage: 'Claim',
        strain: 'Submissions tracked in the clinical system while the ledger still shows an invoice',
      },
      {
        stage: 'Reconcile',
        strain: 'Rejections and part-payments aged by hand, with no view of the real claims position',
      },
      {
        stage: 'Account',
        strain: 'Departmental cost and margin estimated, so service-line decisions are made on instinct',
      },
    ],
    products: [
      {
        ...P.sage200,
        why: 'A general ledger with departmental and cost-centre analysis, plus purchasing and stock control for pharmacy and consumables — so what a department consumes is recorded against what it earns.',
      },
      {
        ...P.sageCloud,
        why: 'For single-site clinics and practices where the requirement is disciplined accounting with a proper audit trail rather than a full business management suite.',
      },
      {
        ...P.teamkazi,
        why: 'For the capital side — a new wing, a theatre refit, an equipment programme — where cost-to-date against budget needs to be visible while the work is still going on.',
      },
    ],
    practices: [
      {
        ...S.erp,
        why: 'Integration between the clinical or HMIS platform and the finance ledger, so a claim, a payment and a posting are the same event rather than three records.',
      },
      {
        ...S.data,
        why: 'Cost and margin by department and service line, and a claims position that is current rather than reconstructed.',
      },
      {
        ...S.process,
        why: 'Procurement, stock issue and claim submission are process work. Done properly they reduce both rejection rates and consumable leakage.',
      },
      {
        ...S.managed,
        why: 'A provider whose systems are down cannot submit, and cannot be paid. Monitoring and tested recovery, with the availability expectations written down.',
      },
    ],
    firstMove:
      'We would take one month of submitted claims and follow them into the accounts — how many were rejected, on what grounds, how long the rest took to settle, and whether the ledger and the clinical system agree on the total. Most facilities have never had that number produced in one place.',
    fit: 'We do not publish a hospital management system, an EMR or a clinical platform, and we do not compete with the accredited HMIS vendors SHA requires you to integrate with. That choice is yours and it is a clinical decision. We work on the finance, procurement and reporting layer around it — and on making that layer agree with whatever clinical system you have chosen.',
    image: {
      brief:
        'A hospital administrator and a finance colleague reviewing figures together at a desk in a bright, modern Kenyan health facility administration office. Professional and calm. No patients, no clinical procedures, no readable screens.',
      purpose:
        'The buyer here is administration, not clinical staff. Photographing patients would be both wrong and off-target.',
    },
  },

  /* ================================================================== */
  {
    slug: 'education',
    title: 'Education',
    short: 'Education',
    icon: 'education',
    positioning:
      'Fee income, procurement and multi-campus reporting for institutions absorbing a structural change to the sector.',
    lead: 'Roughly 1.2 million learners entered Grade 10 in January 2026, the first Senior School cohort under the competency-based curriculum. Institutions are managing new pathways, new subject combinations and new funding flows using finance systems designed for the structure that has just been replaced.',
    audience:
      'For schools, colleges, TVET institutions and universities managing fee income and procurement across more than one site.',
    situation: [
      'Education finance has an unusual shape: income arrives in concentrated bursts around term dates, is committed months ahead of receipt, and is never entirely collected. Fee arrears are simultaneously a debtors problem, a pastoral problem and a governance problem, and most institutions manage them in a system that treats them only as the first.',
      'Structural change has added to the load. Senior School pathways, KEMIS-administered funding flows and TVET expansion — the sector received KSh 58.5 billion in the 2026/27 budget with capitation running through central systems — all mean the money now arrives through channels the institution does not control and must reconcile to.',
      'Where an institution runs several campuses or several legal entities, this compounds. Each site builds its own arrangement, the group consolidates by spreadsheet, and by the time the board sees a position it is a term old.',
    ],
    flowLabel: 'Enrolment to accounts',
    flow: [
      {
        stage: 'Enrol',
        strain: 'Learner records held in the academic system, billing rebuilt separately from them',
      },
      {
        stage: 'Bill',
        strain: 'Fee structures, bursaries and waivers applied by hand, differently at each site',
      },
      {
        stage: 'Collect',
        strain: 'Receipts across several channels matched to students manually, days after clearing',
      },
      {
        stage: 'Spend',
        strain: 'Procurement committed against a budget nobody can see the current balance of',
      },
      {
        stage: 'Consolidate',
        strain: 'Group position assembled per campus, arriving a term after the decisions needed it',
      },
    ],
    products: [
      {
        ...P.sage200,
        why: 'Multi-entity, multi-campus accounting with budget control and commitment tracking, so a department can see what is left before it commits rather than after.',
      },
      {
        ...P.sageCloud,
        why: 'For single-site schools and colleges that need proper accounting and audit trail without the weight of a full business management implementation.',
      },
      {
        ...P.teamkazi,
        why: 'For capital works and donor-funded programmes — a new block, a laboratory, an equipment grant — where spend against budget has to be reportable at any point, not just at completion.',
      },
    ],
    practices: [
      {
        ...S.erp,
        why: 'Integrating the student or academic system to finance, so a fee charged, a payment received and a posting made are one chain rather than three lists.',
      },
      {
        ...S.data,
        why: 'Arrears by cohort, campus and age; cost per learner; and a group consolidation the board can read in the week it relates to.',
      },
      {
        ...S.process,
        why: 'Fee collection, bursary approval and procurement are process problems, and they are where the leakage and most of the audit findings are.',
      },
      {
        ...S.managed,
        why: 'Institutions rarely have the internal depth to run finance systems well through admissions peaks. This is support that anticipates the calendar.',
      },
    ],
    firstMove:
      'We would age the fee arrears properly — by cohort, by campus and by how they arose — and reconcile the total to the ledger. In most institutions the reconciled figure and the reported figure are not the same, and the difference is the beginning of the conversation.',
    fit: 'We do not publish a student information system, a learning platform or a timetabling product, and we do not replace KEMIS or the ministry systems you report through. Those are the sector’s systems of record. We work on the finance, procurement and reporting layer around them, and on integrating the two.',
    image: {
      brief:
        'Two administrators in a bright Kenyan school or college bursar’s office reviewing a printed schedule together, both engaged and one smiling. Institutional but modern. No learners, no readable documents, no school branding.',
      purpose:
        'The buyer is the bursar or the board, not a teacher. Classroom photography would target the wrong reader entirely.',
    },
  },

  /* ================================================================== */
  {
    slug: 'professional-services',
    title: 'Professional Services',
    short: 'Professional Services',
    icon: 'briefcase',
    positioning:
      'Time, cost and recovery on every engagement — so a firm knows which work is worth doing while it is still doing it.',
    lead: 'A professional firm sells time it cannot restock and cannot easily measure. Which is why so many firms know their revenue precisely, their utilisation approximately, and their realised margin per engagement not at all.',
    audience:
      'For consulting, engineering, legal, accounting and advisory firms billing time and expertise against fixed and variable fees.',
    situation: [
      'The economics of a firm are decided by three numbers: how much of available time is billable, how much of billed time is recovered, and how much of the fee survives to the bottom line once delivery is done. All three depend on timesheets, which are the least popular administrative act in any firm and the first thing to slip when people are busy.',
      'The consequence is a lag. Work is delivered, time is recorded late or not at all, the invoice is raised on a fee agreed months earlier, and the true margin becomes visible after the engagement has closed and the same terms have already been quoted to the next client.',
      'For firms that are themselves in finance and accounting, there is a second layer: the client work runs on client systems, each different, and the firm carries the cost of maintaining competence across all of them.',
    ],
    flowLabel: 'Pitch to recovery',
    flow: [
      {
        stage: 'Pitch',
        strain: 'Fees quoted from a rate card rather than from what similar work actually consumed',
      },
      {
        stage: 'Resource',
        strain: 'Who is available and who is overloaded known by asking around, not by looking',
      },
      {
        stage: 'Deliver',
        strain: 'Scope expanding through goodwill, with no record of when it started',
      },
      {
        stage: 'Record',
        strain: 'Timesheets completed at the end of the month, from memory',
      },
      {
        stage: 'Recover',
        strain: 'Write-offs taken quietly at invoicing and never fed back into pricing',
      },
    ],
    products: [
      {
        ...P.teamkazi,
        why: 'Built precisely for this: a live profit and loss on every engagement, timesheets people will actually complete, and a margin position that updates as the work happens rather than after it. If your firm bills time against agreed fees, start here.',
      },
      {
        ...P.ascendbooks,
        why: 'For accounting and advisory firms specifically — a managed ERP platform your firm runs client work on, so you are not maintaining competence across a dozen different client systems. WIZAG built it and holds full copyright to it.',
      },
      {
        ...P.wizcrm,
        why: 'Where the firm has a genuine business development function and the pipeline currently lives in individual partners’ heads.',
      },
      {
        ...P.sageCloud,
        why: 'The firm’s own books, kept properly, with the audit trail a professional practice is expected to be able to produce.',
      },
    ],
    practices: [
      {
        ...S.process,
        why: 'Engagement setup, scope change and approval are process problems. A firm that cannot say when scope moved cannot bill for it.',
      },
      {
        ...S.data,
        why: 'Utilisation, realisation and margin by engagement, client and team — the three numbers that decide whether a firm grows profitably or just grows.',
      },
      {
        ...S.exec,
        why: 'For firms whose technology decisions currently rest with whichever partner has the strongest opinion.',
      },
      {
        ...S.ai,
        why: 'Document-heavy professional work is well suited to intelligent capture and classification, which returns chargeable hours to fee earners.',
      },
    ],
    firstMove:
      'We would take three completed engagements — one that went well, one that overran, one where nobody is sure — and rebuild the actual margin on each from the time recorded. The gap between that and what was assumed at pricing is normally the entire business case.',
    fit: 'We are not a practice management vendor for regulated legal case management or a specialist audit toolset, and we do not replace the professional software your discipline requires. Where you run those, we integrate with them. Our work is the commercial layer — what the work costs, what it recovers, and what that should change about pricing.',
    image: {
      brief:
        'Two professionals at a table in a bright Nairobi office reviewing an engagement schedule together, one gesturing at a figure, both engaged and one smiling. Smart business dress. No readable screens or documents.',
      purpose:
        'This buyer recognises their own office instantly and dismisses anything that looks like a different country.',
    },
  },

  /* ================================================================== */
  {
    slug: 'ngos-non-profits',
    title: 'NGOs & Non-Profits',
    short: 'NGOs',
    icon: 'team',
    positioning:
      'Grant, fund and donor reporting that comes out of the accounting system instead of being rebuilt for every report.',
    lead: 'A non-profit is accountable to more parties than a commercial business and has fewer people to satisfy them. Every donor wants the same money reported in a different shape, on a different calendar, in a different currency — and most organisations meet that demand by hand.',
    audience:
      'For NGOs, foundations and non-profits running multiple grants with separate donor reporting obligations.',
    situation: [
      'The structural difficulty is that funds are restricted and reporting is not aligned. One expense may be split across three grants with three different reporting periods, three budget structures and two currencies. Where the accounting system holds only one dimension of analysis, the other two live in a workbook — and the workbook becomes the real system of record while the ledger becomes a formality.',
      'The regulatory footing has changed underneath this. The Public Benefit Organizations Act 2013 finally commenced on 14 May 2024, replacing the NGO Co-ordination Act and moving oversight from the NGO Board to the PBO Authority, with annual reporting to the Authority. It has since gazetted thousands of organisations for deregistration over non-compliance, which has made administrative discipline an existential matter rather than a housekeeping one.',
      'Meanwhile the sector’s own funding environment has tightened, and donors increasingly weigh the credibility of an organisation’s financial reporting when deciding renewals. The reporting is no longer just an obligation attached to the grant. It is part of what wins the next one.',
    ],
    flowLabel: 'Grant to report',
    flow: [
      {
        stage: 'Award',
        strain: 'Budget structures set up per donor, with no common chart underneath them',
      },
      {
        stage: 'Spend',
        strain: 'Costs allocated across grants after the fact, by whoever remembers the split',
      },
      {
        stage: 'Track',
        strain: 'Burn rate against each grant known monthly at best, and rarely by project staff',
      },
      {
        stage: 'Report',
        strain: 'Every donor report rebuilt by hand in the donor’s own format and calendar',
      },
      {
        stage: 'Audit',
        strain: 'Grant audits evidenced from workbooks rather than from a traceable ledger',
      },
    ],
    products: [
      {
        ...P.sage200,
        why: 'Multi-dimensional analysis is the whole answer here: one transaction carrying donor, project, activity and cost-centre coding at once, so a donor report is a view of the ledger rather than a reconstruction of it. Multi-currency handles grants held and reported in different currencies.',
      },
      {
        ...P.teamkazi,
        why: 'Programme and project tracking with cost-to-date against budget, so a project manager can see burn rate against their own grant without waiting for the finance team to produce it.',
      },
      {
        ...P.sageCloud,
        why: 'For smaller organisations with a handful of grants, where the priority is a clean audit trail rather than complex fund accounting.',
      },
    ],
    practices: [
      {
        ...S.data,
        why: 'Getting donor reports to come out of the system in the donor’s shape, which is the single largest recoverable time cost in most finance teams.',
      },
      {
        ...S.erp,
        why: 'Designing the chart of accounts and analysis dimensions so restricted funds are tracked by construction rather than by memory.',
      },
      {
        ...S.process,
        why: 'Procurement, approval and allocation are where grant audit findings come from. These are process controls before they are system settings.',
      },
      {
        ...S.managed,
        why: 'Sector finance teams are small and stretched. Support that does not assume a full internal IT function, because there usually is not one.',
      },
    ],
    firstMove:
      'We would take your most demanding donor report and establish how much of it could be produced from the ledger as it stands today. The answer is normally a small proportion, and the gap between that and one hundred per cent is a precise description of the work.',
    fit: 'We do not publish a grants management or programme monitoring and evaluation platform, and where you already run one we integrate with it rather than replace it. We also do not write donor reports for you — we build the systems that produce them. If what you need is a finance officer rather than a finance system, that is worth establishing before either of us spends money.',
    image: {
      brief:
        'Two programme and finance colleagues reviewing a printed budget together at a bright, plain office table in Kenya, both engaged and one smiling. Modest, purposeful surroundings — not corporate, not impoverished. No donor logos or branding of any kind.',
      purpose:
        'This sector is acutely sensitive to imagery. No beneficiaries, no field photography, no logos. Show the finance office, because that is who buys.',
    },
  },

  /* ================================================================== */
  {
    slug: 'public-sector',
    title: 'Public Sector',
    short: 'Public Sector',
    icon: 'government',
    positioning:
      'Advisory, process and reporting work for public entities operating inside mandated national systems.',
    lead: 'Public entities do not get to choose their systems of record. IFMIS carries the finances, e-GP carries the procurement, and since July 2025 every national and county procurement runs through it. The room to improve is not in replacing those systems — it is in everything the entity does around them.',
    audience:
      'For state corporations, agencies, authorities and county entities working within mandated national platforms.',
    situation: [
      'The e-GP platform launched in April 2025 and became the exclusive route for public procurement from 1 July 2025, integrated with IFMIS, KRA iTax and the Business Registration Service, with full transition due by the end of FY 2026/27. That is a substantial change in how entities plan, commit and evidence spending, delivered on a timetable nobody chose.',
      'What entities are left holding is the work between the mandated systems. Internal approvals ahead of a requisition. Records that satisfy an auditor when the national system holds only the transaction. Board and oversight reporting that has to be assembled from platforms designed for consolidation upward, not for management within.',
      'This is unglamorous work and it is where most of the recoverable time sits. It is also where audit findings come from, and public-sector audit findings are read by people outside the entity.',
    ],
    flowLabel: 'Plan to account',
    flow: [
      {
        stage: 'Plan',
        strain: 'Procurement plans built in spreadsheets, then re-entered into the mandated platform',
      },
      {
        stage: 'Approve',
        strain: 'Internal approvals conducted on paper and email, ahead of a system that records only the outcome',
      },
      {
        stage: 'Commit',
        strain: 'Commitment against vote known centrally but not by the department that is spending it',
      },
      {
        stage: 'Deliver',
        strain: 'Contract performance tracked by whoever holds the file, not by the entity',
      },
      {
        stage: 'Account',
        strain: 'Management and oversight reporting assembled by hand from systems built to report upward',
      },
    ],
    products: [
      {
        ...P.teamkazi,
        why: 'Project and programme tracking with cost-to-date, milestones and documented obligations — for capital works and donor-funded programmes where an entity has to evidence delivery as well as spend.',
      },
      {
        ...P.sage200,
        why: 'For state corporations and commercially operating entities that keep their own books alongside the national systems, with budget control and commitment tracking at department level.',
      },
    ],
    practices: [
      {
        ...S.process,
        why: 'The internal workflow around the mandated systems — requisition, approval, records — which is where the delay and the audit findings actually originate.',
      },
      {
        ...S.data,
        why: 'Management and oversight reporting drawn from what the entity holds, rather than assembled by hand from platforms designed to report upward.',
      },
      {
        ...S.exec,
        why: 'Independent technical judgement for boards and accounting officers evaluating proposals, where the entity has no internal technology executive.',
      },
      {
        ...S.managed,
        why: 'Support and continuity for the systems the entity does own, with the accountability written down rather than assumed.',
      },
    ],
    firstMove:
      'We would map one procurement from the moment somebody identifies a need to the moment it is recorded in the national system — every internal approval, every document, every wait. The elapsed time in that map is nearly always dominated by steps that happen before the mandated platform is touched at all.',
    fit: 'We do not replace IFMIS, e-GP or any mandated national platform, and we would treat any firm offering to as a warning sign. We also do not participate in procurement processes we have advised on the specification for — that is a conflict, and it is one we decline rather than manage. Our work is the internal process, the reporting layer and the systems the entity genuinely owns.',
    image: {
      brief:
        'Two public-sector professionals in a bright, orderly meeting room in Kenya reviewing a printed procurement schedule together, composed and engaged. Institutional but modern and well-kept. No flags, crests, government branding or identifiable buildings.',
      purpose:
        'Must read as competent and neutral. Any national insignia would imply an endorsement that does not exist.',
    },
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);

/** Nav-shaped list, so navigation.ts and these pages can never disagree
 *  about which industries exist or where they live. */
export const industryLinks = industries.map((i) => ({
  label: i.title,
  short: i.short,
  href: `/industries/${i.slug}`,
}));
