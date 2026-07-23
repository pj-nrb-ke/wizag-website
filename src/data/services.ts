/**
 * Service practice content — the six practices at /services/[slug].
 *
 * ── REWRITTEN 2026-07-23 ─────────────────────────────────────────────
 * The previous version was the brief §6 content verbatim: a one-sentence
 * positioning statement and a flat list of capability nouns per practice —
 * eighteen of them for ERP. The client's verdict on reading it live was
 * "very, very shallow", and it was: a buyer could not tell from any of it
 * what happens in an engagement, what they receive, or why they should
 * believe us over the next firm with the same list.
 *
 * What changed:
 *   · `positioning` is kept as the one-liner for nav, cards and meta tags.
 *   · `lead`, `situation`, `engagement`, `deliverables` and `boundaries` are
 *     new prose, written to answer the questions a buyer actually has.
 *   · `capabilities` became `capabilityGroups` — the SAME items, grouped and
 *     explained. No capability has been added, removed or renamed. Grouping
 *     and blurbs are editorial; the items are the client's approved list, so
 *     nothing here claims a service WIZAG has not said it offers.
 *
 * ── WHAT IS DELIBERATELY NOT HERE (brief §8.12) ──────────────────────
 * No clients, no logos, no testimonials, no case studies, no statistics
 * about WIZAG, no certifications, no team sizes, no years-in-business, no
 * delivery-time or price commitments. Every engagement description says what
 * happens, never how long it takes or what it costs — those are quotation
 * matters and must come from the client, not from me.
 *
 * ── EXTERNAL FACTS: ALL VERIFIED, ALL DATED ──────────────────────────
 * Four Kenyan operating facts are cited. Each was checked 2026-07-23 and
 * each is about the environment the buyer operates in — none of them claims
 * a WIZAG capability:
 *
 *   1. eTIMS. Electronic tax invoices are mandatory under the Tax Procedures
 *      (Electronic Tax Invoice) Regulations 2024 for turnover above KSh 5m,
 *      all VAT-registered businesses and all withholding agents. From
 *      1 January 2026 KRA validates income and expenses declared in returns
 *      against its own TIMS/eTIMS data, and an expense with no valid
 *      electronic invoice is disallowed — it becomes taxable income.
 *      ⚠ The client deferred WIZAG's eTIMS position on the Sage pages
 *      (2026-07-22: "for now ignore that, I will update you at a later
 *      date"). This is cited as market context only — it says what KRA does,
 *      not what WIZAG delivers. Flagged for the client: if it reads as an
 *      implied capability claim, cut the second paragraph of the ERP
 *      `situation` and nothing else needs to change.
 *
 *   2. NSSF. Act No. 45 of 2013, 6% employee + 6% employer. From the
 *      February 2026 payroll the Tier I limit moved KSh 8,000 → 9,000 and
 *      the Tier II upper limit KSh 72,000 → 108,000, taking the maximum
 *      employee deduction from KSh 4,320 to KSh 6,480. Year 4 of a phased
 *      schedule that began February 2023.
 *
 *   3. SHIF. Replaced NHIF on 1 October 2024, administered by the Social
 *      Health Authority: 2.75% of gross pay, minimum KSh 300, no upper cap,
 *      where NHIF was a banded schedule capped at KSh 1,700.
 *
 *   4. Data Protection Act 2019. Registration with the Office of the Data
 *      Protection Commissioner is required of data controllers and
 *      processors at annual turnover of KSh 5m and above, or more than ten
 *      employees.
 *
 *   5. Kenya National AI Strategy 2025–2030, launched by the Ministry of
 *      Information, Communications and the Digital Economy on 27 March 2025.
 *
 * These need a re-read each year. NSSF in particular is mid-schedule and the
 * limits move again.
 *
 * This drives /services/[slug]. When Sanity is wired these become documents
 * of the same shape and the templates do not change.
 */
import type { IconName } from '../components/ui/Icon.astro';

export interface CapabilityGroup {
  /** Editorial grouping label — not a service name. */
  name: string;
  /** One sentence saying what this group of work is for. */
  blurb: string;
  /** Brief §6 capability names, unchanged. */
  items: string[];
}

export interface EngagementStage {
  n: string;
  title: string;
  body: string;
}

export interface ServicePractice {
  slug: string;
  title: string;
  /** Terse form for nav bars and cards. */
  short: string;
  icon: IconName;
  /** Brief §6 "Positioning" — one line, used in nav, cards and meta tags. */
  positioning: string;
  /** Hero lead. Says something the competition would not say. */
  lead: string;
  /** Who this is for, plainly, so the wrong reader can leave early. */
  audience: string;
  /** The operating situation, in the buyer's terms. 2–3 paragraphs. */
  situation: string[];
  capabilityGroups: CapabilityGroup[];
  /** How an engagement actually runs. Shape only — never durations or fees. */
  engagement: EngagementStage[];
  /** Artefacts the client ends up holding. */
  deliverables: string[];
  /** Where this practice is the wrong answer. Kept short and unhedged. */
  boundaries: string;
  /** Brief §6 "Business Outcomes". Rendered as the right-hand column of the
   *  PracticeShift diagram rather than as a second bullet list. */
  outcomes: string[];
  /** Brief §6 "Suggested CTA". */
  cta: string;
  ctaHref: string;
}

export const practices: ServicePractice[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'executive-technology-services',
    title: 'Executive Technology Services',
    short: 'Executive Technology',
    icon: 'exec-technology',
    positioning:
      'Senior technology leadership and strategic guidance without the cost of building a full internal executive technology office.',
    lead: 'Most established businesses reach a point where technology decisions are too consequential to take without senior technical judgement — and too infrequent to justify a technology executive on the payroll. This practice puts that judgement in the room for the decisions that warrant it.',
    audience:
      'For boards, chief executives and finance directors carrying technology decisions they have no independent way to interrogate.',
    situation: [
      'The pattern is recognisable. The business runs on systems chosen at different times for different reasons, each defended by the supplier who sold it. A quotation arrives, and nobody in the room can say with authority whether the price is reasonable, whether the integration will hold, or what the thing will cost to run in its third year.',
      'The decision gets made anyway — usually by whoever is most confident, or most recently persuaded. The cost surfaces later, as a renewal nobody budgeted for, an integration that has to be rebuilt, or a supplier who turns out to be the only person alive who understands a system the business cannot trade without.',
      'A fractional arrangement changes who is in the room rather than how much you spend. The judgement a large company keeps on staff, applied to the decisions that actually need it, and absent from the ones that do not.',
    ],
    capabilityGroups: [
      {
        name: 'Leadership in the room',
        blurb:
          'A named senior technologist who sits on your side of the table, attends the meetings that matter and is accountable for the advice given.',
        items: ['Fractional CTO', 'Executive advisory'],
      },
      {
        name: 'Direction and investment',
        blurb:
          'A written view of where the technology estate is going, what it will take to get there, and in what order — so spending can be planned rather than reacted to.',
        items: ['Technology strategy', 'Digital transformation roadmap', 'IT investment planning'],
      },
      {
        name: 'Governance and risk',
        blurb:
          'An independent read on what you actually have, what it exposes the business to, and what needs attention before it becomes an audit finding.',
        items: ['Technology governance', 'Risk and compliance oversight', 'Technology audits'],
      },
      {
        name: 'Suppliers and review',
        blurb:
          'One accountable party across every vendor relationship, and a standing rhythm of review so the estate does not quietly drift out of date.',
        items: ['Vendor and solution management', 'Continuous technology reviews'],
      },
    ],
    engagement: [
      {
        n: '01',
        title: 'Read what exists',
        body: 'Contracts, licences, renewal dates, the architecture as built rather than as documented, and where technology money has actually gone. We talk to the people who use the systems daily, not only to the people who bought them.',
      },
      {
        n: '02',
        title: 'Say where you stand',
        body: 'A written position on the estate: what is sound, what is fragile, what is over-supplied and what is exposed. Written for a board to read, not for a technical audience.',
      },
      {
        n: '03',
        title: 'Agree the order of work',
        body: 'Priorities sequenced by consequence, with the reasoning shown. You decide what to act on and what to leave — nothing is bundled, and declining a recommendation does not end the arrangement.',
      },
      {
        n: '04',
        title: 'Stay in the room',
        body: 'A standing commitment with the same named person: papers before board meetings, a view on decisions as they arise, and a scheduled review of the roadmap against what has changed in the business.',
      },
    ],
    deliverables: [
      'A written technology position — what you run, what it costs, what it exposes you to',
      'A prioritised roadmap with the sequencing reasoning shown, not just the conclusions',
      'A supplier and contract register with renewal dates and a named owner against each',
      'Board papers ahead of the meetings, written to be read by non-technical directors',
      'A scheduled review against the roadmap: what moved, what did not, and what should change',
    ],
    boundaries:
      'Where we have an interest, we will say so before you ask. WIZAG publishes its own ERP and is a Sage business partner, so on system selection we are not a disinterested party and you should weigh our advice with that in front of you. Where a decision genuinely needs someone with nothing to sell, we will tell you that too.',
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

  /* ------------------------------------------------------------------ */
  {
    slug: 'erp-business-systems',
    title: 'ERP & Business Systems',
    short: 'ERP & Systems',
    icon: 'erp-systems',
    positioning:
      'ERP services that improve control, visibility, efficiency and business performance.',
    lead: 'ERP programmes fail in predictable ways, and almost never for technical reasons. They fail because the process was never agreed before the software was configured, because the data going in was worse than anyone admitted, or because nobody owned the system after go-live.',
    audience:
      'For businesses running finance and operations on systems that no longer talk to each other — or on one system nobody uses past the basics.',
    situation: [
      'The tell is month-end. If closing the books means exporting from two systems, reconciling them in a spreadsheet and asking someone to confirm the stock figure by hand, the problem is not the closing process. It is that no single record of the business exists, so every question has to be answered by assembling one.',
      'That has become more expensive to live with. Electronic tax invoicing is now mandatory for VAT-registered businesses, withholding agents and anyone turning over more than five million shillings, and since January 2026 the Revenue Authority validates the income and expenses declared in a return against its own eTIMS records. An expense with no matching electronic invoice is disallowed and becomes taxable income. A business whose purchase records live partly in a system and partly in a drawer is carrying a tax exposure, not just an administrative irritation.',
      'An ERP is how a business stops keeping several versions of itself. That is worth saying plainly, because it is also the hard part — the software is the smaller half of the work, and any firm that tells you otherwise is selling the licence.',
    ],
    capabilityGroups: [
      {
        name: 'Deciding what you need',
        blurb:
          'Independent work on requirements and fit before anything is bought, including the honest question of whether the system you already own can be made to do the job.',
        items: ['ERP advisory', 'ERP selection', 'Sage 200', 'Sage Business Cloud'],
      },
      {
        name: 'Getting it in',
        blurb:
          'Configuration, data and integration — the phase where programmes are won or lost, and where the data work is always larger than the plan assumed.',
        items: [
          'ERP implementation',
          'ERP migration',
          'Data migration',
          'ERP customisation',
          'ERP integration',
        ],
      },
      {
        name: 'What it runs',
        blurb:
          'The operational areas an ERP is expected to carry, on one ledger, so a sale, a stock movement and a posting are the same event rather than three.',
        items: [
          'Financial management systems',
          'Inventory and procurement systems',
          'Manufacturing systems',
          'Payroll and HR integration',
        ],
      },
      {
        name: 'Getting value out',
        blurb:
          'Most businesses use a fraction of what they have already paid for. This is the work of closing that gap without buying anything further.',
        items: ['ERP reporting', 'Business intelligence', 'ERP optimisation'],
      },
      {
        name: 'Keeping it running',
        blurb:
          'Support and ongoing management after go-live, which is when statutory changes arrive and when most implementations quietly begin to decay.',
        items: ['ERP support', 'Managed ERP services'],
      },
    ],
    engagement: [
      {
        n: '01',
        title: 'Map how the business runs now',
        body: 'Before any software is discussed: how an order becomes an invoice, where the same figure is entered twice, what has to be true for month-end to close, and which spreadsheets are load-bearing.',
      },
      {
        n: '02',
        title: 'Establish requirements, then fit',
        body: 'A written requirements document you could put to any supplier — including ones that are not us. Only then the question of whether the current system can be made to work, and only after that the question of replacing it.',
      },
      {
        n: '03',
        title: 'Configure, migrate and prove',
        body: 'Configuration against the agreed process, then the data. We run a period in parallel and reconcile it against the existing system, so the numbers are proven before the business depends on them.',
      },
      {
        n: '04',
        title: 'Go live, then stay through a close',
        body: 'Cutover, then support through the first month-end — the point at which every gap that survived testing makes itself known. Handover happens after that close, not before it.',
      },
    ],
    deliverables: [
      'A process map of how the business actually runs, agreed by the people who run it',
      'A written requirements document you could put to any supplier, not only to us',
      'A data migration plan naming what comes across, what is archived and what is abandoned',
      'A configured system with a parallel period reconciled line by line before cutover',
      'Written procedures for the people who will use it, and a named support route after go-live',
    ],
    boundaries:
      'We will tell you when you do not need a new ERP. A good share of what presents as a system problem is a process problem wearing a system’s clothes, and replacing the software carries it across intact — at considerable cost, and with the added disadvantage that everyone now blames the new system.',
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

  /* ------------------------------------------------------------------ */
  {
    slug: 'ai-intelligent-automation',
    title: 'AI & Intelligent Automation',
    short: 'AI & Automation',
    icon: 'ai-automation',
    positioning: 'Practical AI capabilities delivered as business services.',
    lead: 'Most of what is sold as enterprise AI is a demonstration. The useful question is narrower: which specific piece of work in this business is repetitive, high in volume, rule-shaped, and currently done by someone who could be doing something better.',
    audience:
      'For organisations under pressure to have an AI position, who would rather have one working process than five pilots.',
    situation: [
      'Kenya published a national AI strategy in March 2025, and the pressure on boards to show an AI position has risen steadily since. That pressure produces poor decisions: pilots with no owner, tools bought before the problem was named, and proofs of concept that impress in a meeting and never reach anybody’s daily work.',
      'The work that actually pays is unglamorous — invoice and delivery-note capture, document classification, reconciliation matching, demand forecasting, exception detection. It is measurable, it has an owner, and it either removes a cost or removes a delay. None of it makes a good slide.',
      'Readiness decides the outcome. A model built on figures that disagree between systems produces confident wrong answers faster than a person produced uncertain ones, and anything touching customer or employee records brings the Data Protection Act with it — registration with the Data Protection Commissioner applies from five million shillings of turnover or ten employees. That is a lawful-basis question before it is a technical one.',
    ],
    capabilityGroups: [
      {
        name: 'Working out what is worth doing',
        blurb:
          'An honest assessment of where automation would pay and where it would not, before any commitment. Most candidate ideas should die at this stage, and most do.',
        items: ['AI strategy', 'AI readiness assessment'],
      },
      {
        name: 'Taking out the routine',
        blurb:
          'The high-volume, rule-shaped work that consumes skilled people’s weeks — captured, classified and routed without anyone keying it in.',
        items: ['Intelligent automation', 'Intelligent document processing', 'Process mining'],
      },
      {
        name: 'Seeing what is coming',
        blurb:
          'Forecasting and detection built on your own operating history, so planning starts from what the data shows rather than from last year plus a feeling.',
        items: ['Predictive analytics', 'Demand forecasting', 'Anomaly detection'],
      },
      {
        name: 'Putting it in people’s hands',
        blurb:
          'Interfaces that let people ask a question in their own words and get an answer from the systems they already have.',
        items: ['Enterprise AI assistants', 'Natural language interfaces', 'AI-enabled reporting'],
      },
      {
        name: 'Built for your case',
        blurb:
          'Where nothing off the shelf fits the problem, built to your process and run as a service rather than handed over as a project.',
        items: ['Custom AI solutions', 'AI as a Service'],
      },
    ],
    engagement: [
      {
        n: '01',
        title: 'Assess readiness honestly',
        body: 'What data exists, whether it agrees with itself, what volumes actually run, and where skilled people’s time is going. This stage frequently concludes that the data has to be fixed first, and we will say so.',
      },
      {
        n: '02',
        title: 'Score the candidates',
        body: 'A shortlist of processes scored on volume, clarity of rules, data quality and value at stake, with the scoring shown. Most ideas do not survive contact with this list, which is the point of having it.',
      },
      {
        n: '03',
        title: 'Build one, properly',
        body: 'The strongest candidate only, built into production and measured against how the work is done today. One process working end to end is worth more than four pilots, and it is the thing that earns the second one.',
      },
      {
        n: '04',
        title: 'Hand it over with its rules',
        body: 'Monitoring, a named owner, and a written statement of what the system decides on its own and what it escalates to a person — because the day it is wrong is the day that matters.',
      },
    ],
    deliverables: [
      'A readiness assessment covering data quality, systems, volumes and lawful basis',
      'A scored shortlist of candidate processes, with the reasoning behind each score',
      'A working automation in production — not a demonstration, not a sandbox',
      'A measured before-and-after against how the process ran previously',
      'Written human-in-the-loop rules: what the system decides, and what it must escalate',
    ],
    boundaries:
      'We do not sell AI as a category. If the answer is a better-designed form, a report the business already owns, or a rule configured in the ERP, that is what we will recommend — it will cost less, it will work sooner, and it will still be working in two years.',
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

  /* ------------------------------------------------------------------ */
  {
    slug: 'process-operational-excellence',
    title: 'Process & Operational Excellence',
    short: 'Process Excellence',
    icon: 'process-excellence',
    positioning: 'Improving how work flows across the organisation.',
    lead: 'Every organisation runs two processes: the one in the manual and the one people actually follow. The distance between them is where the delays, the duplicated effort and a surprising share of the risk live.',
    audience:
      'For operations, finance and service leaders who can see that work takes longer than it should but cannot point to where it goes.',
    situation: [
      'Nobody sets out to build a bad process. They accumulate. A check added after something went wrong, an approval added when someone left, a spreadsheet that began as a stopgap and became load-bearing. Every addition made sense on the day it was made. Nobody has looked at the whole since.',
      'The cost rarely appears in the accounts as a line. It shows as things taking longer than anyone can explain, the same query answered twice by two departments, and a small number of people who are the only ones who know how something works — which is a continuity risk that only declares itself when they resign.',
      'Process work is not a report. It is agreeing how the work should run with the people who do it, then changing the systems they use so that the new way is the easier way. A recommendation that depends on people remembering to behave differently has a half-life of about a quarter.',
    ],
    capabilityGroups: [
      {
        name: 'Seeing the work as it is',
        blurb:
          'Following real transactions end to end rather than reading the documented version, because the two are never the same and the difference is the finding.',
        items: [
          'Process discovery',
          'Process mapping',
          'Process diagnostics',
          'Operational audits',
        ],
      },
      {
        name: 'Redesigning it',
        blurb:
          'Removing steps that no longer earn their place, while keeping every control that exists for a reason — and being able to say which is which.',
        items: ['Workflow redesign', 'Waste reduction', 'Duplicate activity reduction'],
      },
      {
        name: 'Making it hold',
        blurb:
          'Building the agreed process into the systems people use daily, so the correct path is also the path of least resistance.',
        items: ['Process automation', 'Internal control improvement'],
      },
      {
        name: 'Knowing whether it worked',
        blurb:
          'Measures agreed before the change, baselined before the change, and reviewed after it — so the improvement is demonstrable rather than asserted.',
        items: ['KPI development', 'Productivity improvement', 'Continuous improvement'],
      },
    ],
    engagement: [
      {
        n: '01',
        title: 'Follow the work',
        body: 'We sit with the people doing it and follow real transactions from start to finish — including the workarounds, the side spreadsheets and the informal approvals that never appear in a procedure document.',
      },
      {
        n: '02',
        title: 'Show it back',
        body: 'A map of the process as it actually runs, put in front of the people who run it. Disagreement at this stage is productive: where two departments describe the same step differently, that is usually the finding.',
      },
      {
        n: '03',
        title: 'Redesign it together',
        body: 'What goes, what stays, what is automated — and for every remaining step, a stated reason why it exists. Controls are kept deliberately, not by default, and removed deliberately, never by accident.',
      },
      {
        n: '04',
        title: 'Build it in and measure',
        body: 'Changes made in the systems people use, then measured against the baseline taken beforehand. A process that lives only in a document has already started reverting.',
      },
    ],
    deliverables: [
      'A current-state map built from real transactions, not from the procedure manual',
      'A quantified account of duplication, rework and delay, with the point each occurs',
      'A redesigned process with the control purpose of every remaining step stated',
      'The changes made in the systems people actually use, not only in a recommendation',
      'Agreed measures with a baseline taken before the change, so the result is demonstrable',
    ],
    boundaries:
      'We will not deliver a process improvement report and leave. If the recommendations cannot be built into the systems people use every day, the old process returns within a quarter — everyone involved knows it, and the report becomes evidence that consultants do not work.',
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

  /* ------------------------------------------------------------------ */
  {
    slug: 'data-analytics-business-intelligence',
    title: 'Data, Analytics & Business Intelligence',
    short: 'Data & Analytics',
    icon: 'data-analytics',
    positioning: 'Turning business data into clear management insight.',
    lead: 'Most businesses do not have a data problem. They have an agreement problem — two departments producing different numbers for the same question, both defensible, and no established answer to which one governs.',
    audience:
      'For management teams whose meetings spend more time reconciling figures than deciding what to do about them.',
    situation: [
      'The symptom is familiar enough to be a cliché. Sales reports one revenue figure, finance reports another, both can be justified from their own system, and the meeting becomes an argument about the discrepancy instead of a decision about the business.',
      'The cause is almost always structural rather than technical. The same concept — a customer, a sale, a completed job, a month — is defined differently in each system, and nobody has written down which definition governs when they disagree. Both numbers are correct. They are answers to different questions that happen to share a name.',
      'A dashboard built on top of that disagreement makes it faster and more authoritative, not more true. The work that matters is agreeing the definitions, integrating the sources and putting one figure in front of everybody. The dashboard is the last step of that work, not the first.',
    ],
    capabilityGroups: [
      {
        name: 'Getting the data together',
        blurb:
          'Bringing figures out of the systems that hold them into one place that can be reported from, without breaking the systems themselves.',
        items: ['Data integration', 'Data warehousing'],
      },
      {
        name: 'Agreeing what the numbers mean',
        blurb:
          'Defining each measure once, with an owner, so the same question asked in two departments returns the same answer.',
        items: ['Business intelligence', 'KPI tracking', 'Decision-support systems'],
      },
      {
        name: 'Reporting that runs itself',
        blurb:
          'Management information that is already current when the meeting starts, rather than assembled by hand in the three days before it.',
        items: ['Management dashboards', 'Executive reporting', 'Self-service reporting'],
      },
      {
        name: 'Looking forward, not only back',
        blurb:
          'Analysis that supports the decision in front of you, rather than describing a quarter that has already closed.',
        items: [
          'Financial analytics',
          'Operational analytics',
          'Forecasting',
          'AI-assisted insights',
        ],
      },
    ],
    engagement: [
      {
        n: '01',
        title: 'Start from the decisions',
        body: 'Which decisions the management meeting actually has to make, and what would have to be known to make them well. Not what the systems happen to be able to produce — that question comes later and answers itself.',
      },
      {
        n: '02',
        title: 'Trace every figure to source',
        body: 'Where each number originates, who owns it, how it is calculated and where two systems define it differently. This is the unglamorous stage and it is the one that determines whether anybody believes the result.',
      },
      {
        n: '03',
        title: 'Build the single source',
        body: 'Integrate the sources, define each measure once, then reconcile the output against the figures the business already trusts. Numbers that cannot be reconciled to something familiar do not get believed, however good the model behind them.',
      },
      {
        n: '04',
        title: 'Put it in front of people — and retire what it replaces',
        body: 'Handover to the managers who need it, and deliberate withdrawal of the spreadsheet it supersedes. Leave both running and you have not replaced the old reporting, you have added to it.',
      },
    ],
    deliverables: [
      'A definitions register: every reported measure, its source, its owner and its calculation',
      'An integrated data layer that the reporting runs from',
      'Dashboards built around the decisions being made, not around available fields',
      'A reconciliation against the figures the business already trusts, so the output is believed',
      'Handover so managers answer their own questions instead of queuing behind IT',
    ],
    boundaries:
      'We will not build a dashboard on numbers we cannot reconcile. Presenting figures beautifully does not resolve a disagreement about what they mean — it makes the disagreement authoritative, and harder to unpick later.',
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

  /* ------------------------------------------------------------------ */
  {
    slug: 'managed-technology-services',
    title: 'Managed Technology Services',
    short: 'Managed Services',
    icon: 'managed-services',
    positioning:
      'Ongoing support, management and optimisation of business-critical technology.',
    lead: 'Support is easy to buy and hard to judge. Everyone offers it, every proposal reads the same, and the difference only becomes visible on the day something breaks — which is the worst possible moment to find out what you actually bought.',
    audience:
      'For businesses whose systems are now too important to be looked after by whoever happens to be good with computers.',
    situation: [
      'In most established mid-sized businesses, support is a person rather than an arrangement. A finance manager who is capable with systems becomes the first line for the whole office. It works, until the week it does not — and in the meantime the business is paying a finance manager to do a job it did not hire one for.',
      'The second failure is quieter and more expensive. Backups run and nobody has attempted a restore. Licences renew automatically at a price nobody reviewed. A supplier holds operational knowledge that exists nowhere in writing. None of these is a problem on its own, and they tend to become a problem together.',
      'Statutory change is the standing test of whether an arrangement is real. NSSF limits moved again in February 2026, taking the maximum employee deduction from KSh 4,320 to KSh 6,480; SHIF replaced NHIF in October 2024 with a percentage of gross pay and no upper cap where NHIF had bands. Every one of those changes had to reach payroll before a deadline. Support that only answers when called does not handle that class of work.',
    ],
    capabilityGroups: [
      {
        name: 'Keeping systems available',
        blurb:
          'Day-to-day support of the applications the business trades on, with monitoring that finds problems before the people using them do.',
        items: ['Application support', 'ERP support', 'Database support', 'System monitoring'],
      },
      {
        name: 'Running the platform',
        blurb:
          'The infrastructure underneath, including the recovery arrangements that are worth exactly what they were last tested at.',
        items: [
          'Cloud and infrastructure management',
          'Backup and recovery oversight',
          'Business continuity',
        ],
      },
      {
        name: 'Holding suppliers to account',
        blurb:
          'One party carrying the outcome across every vendor involved, so nobody in your business spends their week refereeing between suppliers.',
        items: ['Vendor coordination', 'Technology governance'],
      },
      {
        name: 'Staying ahead of it',
        blurb:
          'Security oversight and a standing review rhythm, so the estate improves between incidents rather than only after them.',
        items: [
          'Cybersecurity oversight',
          'Continuous service reviews',
          'Continuous optimisation',
        ],
      },
    ],
    engagement: [
      {
        n: '01',
        title: 'Take stock first',
        body: 'What runs, on what, supported by whom, licensed until when. For most businesses this is the first written inventory they have ever held, and it routinely finds renewals nobody was tracking.',
      },
      {
        n: '02',
        title: 'Agree what actually matters',
        body: 'Which systems the business genuinely cannot trade without, and what an acceptable outage looks like for each. Service levels follow business consequence, rather than everything being treated as equally urgent.',
      },
      {
        n: '03',
        title: 'Take it on',
        body: 'Monitoring, defined response, named contacts and an escalation route that works whether or not you happen to know someone. The arrangement is written down, which is what makes it reviewable.',
      },
      {
        n: '04',
        title: 'Review on a rhythm',
        body: 'A scheduled service review with the same people: what broke, what was slow, what is due for renewal, what changed in the business, and what should change in the arrangement as a result.',
      },
    ],
    deliverables: [
      'A systems and supplier register with renewal dates and a named owner for each',
      'Service levels tied to business criticality rather than to a generic support tier',
      'Proactive monitoring with a defined response, not a mailbox that is watched when convenient',
      'Recovery that has been tested, with the date of the last test on record',
      'A regular service review with the same named people, and a written record of it',
    ],
    boundaries:
      'We do not take on an estate we have not assessed. Agreeing service levels for systems nobody has inventoried is how support contracts come to cover everything in principle and nothing in practice — and both sides only discover which during the first serious incident.',
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

/** Flat capability list, for the index cards. Derived so the groups stay the
 *  single source and the two can never disagree. */
export const allCapabilities = (practice: ServicePractice): string[] =>
  practice.capabilityGroups.flatMap((group) => group.items);

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
