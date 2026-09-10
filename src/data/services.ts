export type Service = {
  slug: string
  name: string
  shortName: string
  tagline: string
  intro: string
  partners: string[]
  integrations: string[]
  flagship?: boolean
}

export type ServiceGroup = {
  key: string
  'S/N': string
  label: string
  name: string
  blurb: string
  services: Service[]
}

export const serviceGroups: ServiceGroup[] = [
  {
    key: 'security-access',
    'S/N': 'S/N 01',
    label: 'Security & Access',
    name: 'Security & Access',
    blurb:
      'The systems people picture when they think of PI Locks — the flagship of the brand. Electronic access, video, entry, and the physical hardware that holds it all together.',
    services: [
      {
        slug: 'electronic-access-control',
        name: 'Electronic Access Control',
        shortName: 'Access Control',
        flagship: true,
        tagline:
          'Wireless intelligent locking to full on-premises or cloud-managed platforms — programmed, commissioned, and documented.',
        intro:
          'We design, install, and maintain premium electronic access control systems for residential, commercial, education, healthcare, and high-security environments — from wireless intelligent locking to full on-premises or cloud-managed platforms. Every installation is fully programmed, commissioned, and documented before handover.',
        partners: ['Salto Systems', 'Avigilon', 'ICT'],
        integrations: [
          'Building lockdown tied to public address / mass notification',
          'Video verification and license-plate recognition with CCTV',
          'Door opening modes controlled from the phone system',
          'Intercom-driven elevator visitor management',
          'Intrusion system alarm-point sharing',
        ],
      },
      {
        slug: 'cctv-video-surveillance',
        name: 'CCTV & Video Surveillance',
        shortName: 'CCTV',
        tagline:
          'Premium video monitoring and alerting — on-premises or cloud — with full remote management and analytics.',
        intro:
          'Premium video monitoring and alerting — on-premises or cloud-hosted — engineered for healthcare, education, industrial, and commercial sites, with full remote management and analytics.',
        partners: ['Avigilon', 'Axis Communications'],
        integrations: [
          'License-plate recognition for access authorization',
          'Unified video, access, and intercom dashboard',
          'Analytics-triggered announcements and signage',
          'Centralized logging and reporting',
          'Fall / incident alerts fed to nursecall',
        ],
      },
      {
        slug: 'door-intercom-entry',
        name: 'Door Intercom & Entry Systems',
        shortName: 'Intercom & Entry',
        tagline:
          'IP intercoms with video, mobile apps, and cloud control that put visitor management in staff and residents’ hands.',
        intro:
          'Entry you can trust — IP intercoms with video, mobile apps, and cloud control that put visitor management in the hands of staff and residents.',
        partners: ['2N', 'Akuvox'],
        integrations: [
          'Video verification to IP phones and mobile apps',
          'Visitor entry and elevator floor control',
          'CCTV tie-in for larger buildings',
          'Cloud resident apps for visitors and deliveries',
        ],
      },
      {
        slug: 'door-hardware-locking',
        name: 'Door Hardware & Locking',
        shortName: 'Door Hardware',
        tagline:
          'The physical integrity behind the electronics — cylinders, electromechanical locks, and egress hardware that are a natural extension of the brand.',
        intro:
          'Premium access is more than electronics — it is the hardware holding the door. We supply and install cylinders, master key systems, electromechanical locking, and egress hardware, coordinated with the access control platform so the physical and electronic layers behave as one.',
        partners: ['Salto Systems', 'ICT'],
        integrations: [
          'Electromechanical locking coordinated with access control',
          'Master key systems layered over electronic credentials',
          'Egress hardware matched to life-safety requirements',
          'Mortise and integrated electric strikes for retrofit and new build',
        ],
      },
    ],
  },
  {
    key: 'telecom-low-voltage',
    'S/N': 'S/N 02',
    label: 'Telecom & Low Voltage',
    name: 'Telecom & Low Voltage',
    blurb:
      'The nervous system of a building — voice, notification, sound, and staff safety — installed to the same premium standard as the security layer.',
    services: [
      {
        slug: 'telephony',
        name: 'Telephony',
        shortName: 'Telephony',
        tagline:
          'Flexible on-premises, cloud, or hybrid phone systems — desk phones, DECT, and mobile apps.',
        intro:
          'Flexible on-premises, cloud, or hybrid phone systems — desk phones, DECT, and mobile apps — designed and installed to a consistent, premium standard.',
        partners: ['Husaria', 'Yealink'],
        integrations: [
          'Mobile apps on iOS and Android',
          'SIP device takeovers for painless upgrades',
          'Intercom video delivered to video phones',
          'Single-button door control',
          'Two-way paging via handsets',
        ],
      },
      {
        slug: 'public-address-mass-notification',
        name: 'Public Address & Mass Notification',
        shortName: 'PA & Mass Notification',
        tagline:
          'Full two-way mass notification — audio, text, strobe, and display — for institutional environments.',
        intro:
          'Full two-way mass notification — audio, text, strobe, and display — purpose-built for education, healthcare, industrial, and community environments.',
        partners: ['Valcom', 'TOA'],
        integrations: [
          'Lockdown initiation from a single point',
          'BMS control interfacing',
          'Mobile alarm initiation',
          'Nursecall text-to-speech and digital signage',
          'Emergency help stations tied to phones and CCTV',
        ],
      },
      {
        slug: 'audio-video-systems',
        name: 'Audio-Video Systems',
        shortName: 'Audio-Video',
        tagline:
          'Conference rooms to gathering halls — IP-based audio and video with simple tablet control.',
        intro:
          'Conference rooms to gathering halls — IP-based audio and video distribution with simple tablet control and plug-and-play collaboration.',
        partners: ['Q-SYS', 'Atlona', 'Yealink'],
        integrations: [
          'Conferencing tied to the phone system',
          'Tabletop video inputs for distribution',
          'Centralized music with emergency paging override',
          'Tablet control of screens, blinds, and lighting',
        ],
      },
      {
        slug: 'nursecall',
        name: 'Nursecall',
        shortName: 'Nursecall',
        tagline:
          'Hardwired and wireless staff-call systems, from independent living to complex and acute care.',
        intro:
          'UL-listed compliant nursecall, hardwired and wireless, from independent living to complex and acute care. Every pathway is supervised, logged, and delivered with as-built documentation.',
        partners: ['Luvicom', 'JNL'],
        integrations: [
          'Alarms routed to phones and mobile apps',
          'Wander management tied to access control',
          'Alerts to signage and public address',
          'Centralized logging and reporting',
          'Pendants with in-suite intercom tablets',
        ],
      },
    ],
  },
  {
    key: 'infrastructure-design',
    'S/N': 'S/N 03',
    label: 'Infrastructure & Design',
    name: 'Infrastructure & Design',
    blurb:
      'The backbone every system depends on — structured cabling, power, and network — plus independent design guidance before a single cable is pulled.',
    services: [
      {
        slug: 'it-infrastructure',
        name: 'IT Infrastructure',
        shortName: 'IT Infrastructure',
        tagline:
          'Structured cabling, power backup, switching, WiFi, and monitoring — the back-of-house backbone.',
        intro:
          'Structured cabling, power backup, switching, WiFi, and monitoring — the back-of-house backbone that keeps every system online.',
        partners: ['Panduit', 'Eaton', 'TP-Link', 'Hammond'],
        integrations: [
          'Network monitoring and alerting',
          'Automated shutdown on power loss',
          'WiFi location reporting',
        ],
      },
      {
        slug: 'design-consulting',
        name: 'Design Consulting',
        shortName: 'Design Consulting',
        tagline:
          'Independent, quality-first guidance on choosing and specifying building technology systems.',
        intro:
          'Independent, quality-first guidance on choosing and specifying the right building technology systems — before a single cable is pulled.',
        partners: [],
        integrations: [
          'Needs and site analysis',
          'Technology system specification',
          'Budget clarity and phasing',
          'Standards and code alignment',
        ],
      },
    ],
  },
]

export const allServices: Service[] = serviceGroups.flatMap(
  (group) => group.services
)

export const flagshipService = allServices.find(
  (service) => service.flagship
)