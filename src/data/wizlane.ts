/**
 * WizLane product page content.
 *
 * Extracted from the two source docs (WizLane_Sales_Brochure_Content.md and
 * WizLane_Full_Feature_List.md). Wording follows the sources; bullets are
 * tightened for a web column.
 *
 * ⚠ ONLY shipped features are marketed here. Per the feature list's own status
 * flags and roadmap, and the client's 2026-08-03 confirmations:
 *   · Live GPS map tracking is marked "not implemented" — NOT claimed. Customer
 *     tracking is described as status only (Pending → Delivered), never a live map.
 *   · Offline ePOD / walkaround capture is NOT live (client-confirmed 2026-08-03) —
 *     the "works with no signal / syncs later" claims were removed. ePOD capture
 *     is described as happening at the point of delivery, no offline promise.
 *   · KRA eTIMS is work-in-progress (client-confirmed 2026-08-03). Direct Safaricom
 *     Daraja and the NTSA-API link are stubs/planned — eTIMS is framed as "built
 *     for compliance" (designed-for), never as live generation. Sage two-way sync
 *     is a stub and is not asserted here.
 *   · PesaPal, SMS, WhatsApp, Email, Google Maps and fuel-card import are wired,
 *     so they may appear.
 *   · Plans / pricing tiers were removed 2026-08-03 (client could not confirm the
 *     tier structure) — matching the other product pages, which show no pricing.
 * No wizlane.ke / sales@wizlane.ke / phone number (the site publishes neither —
 * CLAUDE.md §6). The demo CTA is the site-standard /contact. The brochure's
 * placeholder testimonials and its single unverified "KES 180,000" customer
 * figure are deliberately omitted (anti-fabrication rule).
 *
 * Flow follows the brochure's own order (minus plans, removed 2026-08-03):
 * hook → problem → who → job lifecycle → modules → communications → mobile →
 * reporting → Kenya-first → security → call to action.
 */
import type { IconName } from '../components/ui/Icon.astro';

export const wizlane = {
  name: 'WizLane',
  hook: 'Run your fleet, not your paperwork',
  positioning:
    'WizLane is a cloud transport management system built for Kenyan and East African road freight. It runs the whole job — booking, dispatch, driver and vehicle compliance, fuel, delivery and invoicing — on one platform that connects your office, your drivers and your customers.',
  audience:
    'Built for transport companies, 3PLs, owner-operators and corporate fleets running the Mombasa–Nairobi and EAC corridors.',
};

/* The problem — the brochure's "reality of running a fleet in Kenya" framing. */
export const problems: { title: string; body: string; icon: IconName }[] = [
  {
    title: 'Jobs live on WhatsApp and paper',
    body: 'Drivers get job details over WhatsApp, so there is no record. The accountant is still chasing paper waybills at month-end, and nobody can say where a truck is right now.',
    icon: 'device',
  },
  {
    title: 'Costs leak where no one is looking',
    body: 'Fuel is 30–35% of operating cost. Receipts go missing, siphoning is suspected but impossible to prove, and tyres — the second-biggest cost — are barely tracked at all.',
    icon: 'fuel',
  },
  {
    title: 'Compliance catches you out',
    body: 'An NTSA roadblock stops a truck whose TLB quietly expired last week. A KRA officer asks for a receipt you cannot produce. The fine, and the grounded vehicle, both cost real money.',
    icon: 'flag',
  },
];

/* Who it's for — the brochure's four audience segments. */
export const audienceSegments: { title: string; body: string; icon: IconName }[] = [
  {
    title: 'Transport companies',
    body: 'Fleets of rigid trucks, semi-trailers, flatbeds and tankers moving across Kenya and the EAC corridor.',
    icon: 'truck',
  },
  {
    title: 'Third-party logistics (3PL)',
    body: 'Handling many customers, routes and compliance regimes at once, without losing the thread on any of them.',
    icon: 'process-excellence',
  },
  {
    title: 'Owner-operators',
    body: 'Scaling beyond what WhatsApp and spreadsheets can carry — without hiring a room full of clerks.',
    icon: 'growth',
  },
  {
    title: 'Corporate fleets',
    body: 'Teams that need audit-ready compliance records and boardroom-level cost reporting on the fleet.',
    icon: 'briefcase',
  },
];

/* How a job flows — drives the animated StepFlow diagram. The six-stage state
   machine from the feature list (Pending → Assigned → In Transit → At Border →
   Delivered → Invoiced). */
export const jobSteps: { n: string; title: string; body: string }[] = [
  {
    n: '1',
    title: 'Booked',
    body: 'A job is created in under a minute — cargo type, pickup and drop, customer and rate. A booking deposit can be collected at this point.',
  },
  {
    n: '2',
    title: 'Assigned',
    body: 'A driver and vehicle are assigned with one click, and the driver is notified instantly by SMS, WhatsApp and push.',
  },
  {
    n: '3',
    title: 'In transit',
    body: 'The driver navigates to pickup and drop while the office follows the status; the customer is kept updated on their preferred channel.',
  },
  {
    n: '4',
    title: 'At border',
    body: 'On EAC runs the cross-border papers — C63, COMESA Yellow Card, SGR bond — travel attached to the job, ready at the post.',
  },
  {
    n: '5',
    title: 'Delivered',
    body: 'The driver captures a signed, photographed ePOD at the door — recipient name, signature, photo, GPS and timestamp — the moment the goods are handed over.',
  },
  {
    n: '6',
    title: 'Invoiced',
    body: 'Delivery raises a VAT-correct invoice with a payment link, and the whole job sits on a complete, exportable audit trail.',
  },
];

/* Core modules — the capability card grid. Each maps to a shipped module. */
export const modules: { name: string; hook: string; points: string[]; icon: IconName }[] = [
  {
    name: 'Job & order management',
    hook: 'Create, assign and track every shipment on a single screen.',
    points: [
      'Multi-stop routes with automatic LIFO loading order — last drop loaded first',
      'Cargo from general and bulk to refrigerated, hazardous, container and livestock',
      'Cross-border documents attached to the job: C63, COMESA Yellow Card, EAC CoO, SGR bond',
      'Pickup and drop set by Google Maps pin, with Plus Code support for unaddressed sites',
    ],
    icon: 'process-excellence',
  },
  {
    name: 'Driver management & compliance',
    hook: 'Keep drivers legal, and keep trucks moving.',
    points: [
      'Full profiles — licence class, PSV badge, medical and good-conduct certificates',
      'Automatic 30-, 14- and 7-day expiry alerts for every document, by SMS and email',
      'The 10-hour daily driving limit enforced in the system, with a warning at nine',
      'A one-tap NTSA compliance pack — road-legal readiness for any driver, any time',
    ],
    icon: 'team',
  },
  {
    name: 'Vehicle & fleet management',
    hook: 'Know the status of every vehicle before it leaves the yard.',
    points: [
      'TLB, insurance, speed-limiter and inspection tracked with expiry alerts at 30/14/7 days',
      'A green / amber / red compliance pack for every vehicle at a glance',
      'Service schedules triggered by date, kilometres or running hours',
      'Pre-trip walkaround and photo defect reporting, flowing into workshop job cards',
    ],
    icon: 'truck',
  },
  {
    name: 'Fuel management',
    hook: 'Fuel is a third of your operating cost — track every litre.',
    points: [
      'Automatic km/litre per vehicle, and a fleet-wide average',
      'Anomaly flags for suspected siphoning, impossible odometer jumps and overfills',
      'EPRA pump-price comparison — flags any fill paid above the published price',
      'Bulk fuel-card import from OilLibya and TotalEnergies, with advance reconciliation',
    ],
    icon: 'fuel',
  },
  {
    name: 'Tyre management',
    hook: 'Your second-biggest maintenance cost, finally tracked.',
    points: [
      'Full lifecycle per tyre — fitted position, tread depth and kilometres run',
      'Tread alerts as a tyre approaches the 1.6mm legal minimum',
      'Rotation, alignment and balancing history to catch abnormal wear',
      'Cost-per-km per tyre to compare brands, and depot stock with reorder alerts',
    ],
    icon: 'tyre',
  },
  {
    name: 'Electronic proof of delivery',
    hook: 'Eliminate paper waybills and prove every delivery.',
    points: [
      'Recipient name and ID, digital signature, photo, GPS and timestamp',
      'Weighbridge docket and container / seal number for bulk and port deliveries',
      'A branded PDF sent to the customer, and the invoice raised — no manual step',
    ],
    icon: 'document',
  },
  {
    name: 'Invoicing & finance',
    hook: 'Get paid faster, and stay KRA-compliant.',
    points: [
      'The invoice is raised the moment an ePOD is submitted',
      'VAT and withholding tax calculated and recorded correctly, every time',
      'Per-customer rate cards — per-kilometre, per-tonne or flat — snapshotted at billing',
      'A PesaPal payment link for M-Pesa, card or bank, and built for KRA eTIMS compliance',
    ],
    icon: 'balance',
  },
  {
    name: 'Compliance & legal',
    hook: 'Every document and every deadline, across the corridor.',
    points: [
      'Operator licence, speed-limiter and inspection certificates tracked to expiry',
      'A weighbridge log — Mariakani, Mlolongo, Gilgil, Webuye, Malaba — with overload alerts',
      'Cross-border records: C63, COMESA Yellow Card, EAC Certificate of Origin, SGR bond',
      'A one-click pre-trip compliance pack, and a daily digest at 07:00 EAT',
    ],
    icon: 'managed-services',
  },
  {
    name: 'Load & route planning',
    hook: 'Send the right load on the right route — and avoid the fine before you leave.',
    points: [
      'An automatic LIFO loading manifest, so there is no argument at the bay',
      'An axle-load checker against KENHA limits before the truck departs',
      'Cargo compatibility rules — no food-grade loaded with chemicals',
      'Corridor status, with distance, drive time and a fuel-cost estimate per route',
    ],
    icon: 'route',
  },
];

/* On the road — the driver mobile app section. */
export const driverApp: string[] = [
  'A native app for any Android or iOS phone, secured with two-factor sign-in',
  'One-tap navigation to pickup and drop, and a job list with live status',
  'The pre-trip walkaround — any failed item raises a defect on the spot',
  'Capture the ePOD — recipient signature, photo and GPS — at the point of delivery',
];

/* The metric tiles the analytics module surfaces — label-only, no invented
   figures. Drives the KPI infographic. */
export const kpis: { label: string; caption: string; icon: IconName }[] = [
  { label: 'Revenue per vehicle', caption: 'Per vehicle, per trip and per customer', icon: 'balance' },
  { label: 'On-time delivery', caption: 'The share of deliveries that arrive on time', icon: 'check' },
  { label: 'Fuel cost per km', caption: 'Fleet average, and per vehicle', icon: 'fuel' },
  { label: 'Empty-return ratio', caption: 'Costly empty runs, measured and reduced', icon: 'route' },
  { label: 'Maintenance cost', caption: 'Per vehicle, per month', icon: 'truck' },
  { label: 'Weighbridge fines', caption: 'What overloads cost, by vehicle and driver', icon: 'flag' },
];

/* What the reporting story adds up to — the section lead-in bullets. */
export const reportingInsight: string[] = [
  'Executive, operations, fleet, finance and fuel dashboards — each drilling into the records behind it',
  'Cross-border transit-time analysis: Mombasa–Kampala, Nairobi–Kigali',
  'A custom report builder with role presets for dispatch, finance and fleet',
  'Every report scheduled by email, and exported to Excel or PDF',
];

/* Kenya-first design — the brochure's "what WizLane does" differentiators. */
export const kenyaFirst: string[] = [
  'NTSA licence and TLB tracking, with expiry alerts',
  'Built for KRA eTIMS invoice compliance',
  'COMESA Yellow Card and C63 forms attached to every cross-border job',
  'EAC corridor records kept per trip',
  'KENHA axle-load limits checked before departure',
  'M-Pesa and card payments through PesaPal, on booking and invoice',
  'Plus Code support for rural, unaddressed sites',
  'English and Kiswahili in the driver app and customer portal',
  'Runs on everyday Android and iOS smartphones — no special hardware',
];

/* Security & platform — the trust list, on the navy band. */
export const platform: string[] = [
  'Multi-tenant by design — every company’s data is fully isolated',
  'Eight roles, from admin and dispatcher to driver, finance and auditor',
  'An immutable audit log: who did what, when, and exactly what changed',
  'All data encrypted in transit and at rest, with automatic daily backups',
  'Signed-URL file access — documents and photos are never exposed directly',
  'Deployed on enterprise-grade cloud infrastructure',
];

/* Plans / pricing tiers were removed 2026-08-03 — the client could not confirm
   the tier structure, and the other product pages publish no pricing. If a
   confirmed tier list arrives later, restore a `plans` export here and re-add the
   Plans section to the page (see git history for the previous version). */
