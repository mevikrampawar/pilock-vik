export const partners = [
  'Salto',
  'Avigilon',
  'ICT',
  '2N',
  'Akuvox',
  'Husaria',
  'Yealink',
  'Valcom',
  'TOA',
  'Luvicom',
  'JNL',
  'Q-SYS',
  'Atlona',
  'Axis',
  'Panduit',
  'Eaton',
  'TP-Link',
  'Hammond',
]

export const standard = [
  {
    title: 'Accountable Turnkey Delivery',
    body: 'One partner, full responsibility — design, installation, commissioning, and support on every project.',
    icon: 'shield-check',
  },
  {
    title: 'Commissioned & Documented Handover',
    body: 'Every system tested, labelled, and delivered with as-built documentation — ready to use on day one.',
    icon: 'file-check',
  },
  {
    title: 'Trusted Brand Ecosystem',
    body: 'Installations built on proven OEM platforms from leading manufacturers worldwide.',
    icon: 'layers',
  },
  {
    title: 'Responsive Ongoing Support',
    body: 'Service and support long after handover — no loose ends, ever.',
    icon: 'headset',
  },
  {
    title: 'Compliance-Aware',
    body: 'Systems installed with applicable codes and standards in mind — from UL-listed nursecall to building code.',
    icon: 'scale',
  },
  {
    title: 'Craftsmanship-First Workmanship',
    body: 'The quality of finish on every device, run, and rack — clean work you can see and sign off.',
    icon: 'ruler',
  },
]

export const journey = [
  {
    step: '01',
    title: 'Design Consultation',
    body: 'We understand your spaces, circulation, and requirements before a single system is proposed.',
  },
  {
    step: '02',
    title: 'Proposal Detail',
    body: 'A complete, priced system design — scope, drawings, and schedule, with nothing left to surprise.',
  },
  {
    step: '03',
    title: 'Solution Build',
    body: 'We install, program, and test every device and integration to the PI Standard.',
  },
  {
    step: '04',
    title: 'Project Handover',
    body: 'Commissioned, documented, labelled, and walked through as-built — ready to run.',
  },
  {
    step: '05',
    title: 'Ongoing Service & Support',
    body: 'Responsive service for the life of the system, from one accountable partner.',
  },
]

export const engagements = [
  {
    name: 'Design Consulting',
    body: 'Independent system scoping and specification before construction decisions are locked in.',
  },
  {
    name: 'New Builds',
    body: 'Technology designed in from the start — coordinated with the build, not bolted on after.',
  },
  {
    name: 'Retrofits',
    body: 'Upgrades that extend and modernize existing systems with minimal disruption.',
  },
  {
    name: 'Service & Support',
    body: 'Ongoing maintenance, monitoring, and responsive service after handover.',
  },
]

export const sectors = [
  {
    key: 'healthcare',
    name: 'Healthcare',
    short: 'Senior living to acute care, staff safety systems included.',
    systems: [
      'Nursecall & wander management',
      'Access control & door hardware',
      'CCTV & video surveillance',
      'Intercom, telephony & PA/mass notification',
    ],
  },
  {
    key: 'education',
    name: 'Education',
    short: 'K-12 to post-secondary campuses with lockdown-aware systems.',
    systems: [
      'PA & mass notification (two-way)',
      'Electronic access control',
      'Audio-video & collaboration',
      'Door intercom & entry systems',
    ],
  },
  {
    key: 'commercial',
    name: 'Commercial',
    short: 'Offices, retail, and institutional buildings that need to just run.',
    systems: [
      'IT infrastructure & structured cabling',
      'CCTV & video surveillance',
      'Door intercom & entry systems',
      'Telephony & audio-video',
    ],
  },
  {
    key: 'residential',
    name: 'Residential',
    short: 'Market, affordable, and supportive housing with secure entries.',
    systems: [
      'Electronic access control',
      'Intercom & resident entry apps',
      'CCTV & video surveillance',
      'Door hardware & locking',
    ],
  },
]

export const provenPackages: Record<string, { systems: string[] }> = {
  healthcare: {
    systems: [
      'IP nursecall with pendants and in-suite intercom tablets',
      'Wander management integrated with access control',
      'Nursecall alerts to phones, signage, and PA',
      'Electronic access control with lockdown response',
      'CCTV with fall-detection alerting',
      'Structured cabling and WiFi backbone',
    ],
  },
  education: {
    systems: [
      'Two-way IP mass notification with school-wide lockdown',
      'Electronic access controlled from a central dashboard',
      'Intercom and visitor management at every entry',
      'Audio-video collaboration for classrooms and halls',
      'CCTV tied to the access and intercom platforms',
      'Network and power infrastructure',
    ],
  },
  commercial: {
    systems: [
      'Unified access, video, and intercom platform',
      'Structured cabling, switching, WiFi, and UPS',
      'Cloud-managed video surveillance and logging',
      'Telephony with mobile apps and door control',
      'Conference and public audio-video',
    ],
  },
  residential: {
    systems: [
      'Wireless intelligent locking with cloud management',
      'Video intercoms and resident mobile apps',
      'Visitor and delivery management',
      'CCTV around entries and common spaces',
      'Door hardware and master key coordination',
      'Shared-network infrastructure',
    ],
  },
}