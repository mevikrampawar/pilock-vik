/*
  Media catalog — every photograph and clip used on the site, referenced
  through `asset()` so the base path (playground vs. prod) flips in one
  place via Vite's BASE_URL.

  Images are royalty-free placeholders for review. The site says as much
  in a spec caption where it matters — no invented "real project" photos.
*/

export const asset = (path: string) => import.meta.env.BASE_URL + path

export const media = {
  /* Hero — the opening frame. */
  hero: {
    src: 'media/building-night.jpg',
    caption: 'A building after dark — where locking matters most. (Licensed stock)',
  },

  /* Contact sheet — the craft stills. */
  contactSheet: [
    {
      src: 'media/access-reader.jpg',
      alt: 'An electronic access control card reader on a wall',
      tag: 'Access',
      caption: 'Badge briefly, enter calmly.',
    },
    {
      src: 'media/dome-cam.jpg',
      alt: 'A dome CCTV camera reflecting its surroundings',
      tag: 'Video',
      caption: 'A camera with eyes on the room.',
    },
    {
      src: 'media/fingerprint.jpg',
      alt: 'A fingerprint scanner for biometric entry',
      tag: 'Identity',
      caption: 'The door knows who you are.',
    },
    {
      src: 'media/cam-lens.jpg',
      alt: 'A surveillance camera lens in close detail',
      tag: 'Detail',
      caption: 'The optics behind the image.',
    },
  ],

  /* Service families — one frame each. */
  families: {
    'security-access': {
      src: 'media/access-reader.jpg',
      caption: 'Electronic access — the flagship.',
    },
    'telecom-low-voltage': {
      src: 'media/office-corridor.jpg',
      caption: 'The voice, sound, and alarm backbone.',
    },
    'infrastructure-design': {
      src: 'media/glass-angles.jpg',
      caption: 'The structure the systems stand on.',
    },
  },

  /* Sectors — one frame each. */
  sectors: {
    healthcare: { src: 'media/office-corridor.jpg', alt: 'A quiet institutional corridor' },
    education: { src: 'media/glass-low.jpg', alt: 'Low-angle view of a campus building' },
    commercial: { src: 'media/glass-facade.jpg', alt: 'A glass office facade' },
    residential: { src: 'media/apartment-doors.jpg', alt: 'Doors along a warm hallway' },
  },

  /* The PI Standard — the proof anchor. */
  standard: {
    src: 'media/smart-cams.jpg',
    caption: 'White cameras and smart devices, on dark. (Licensed stock)',
  },

  /* Video clips — muted, looping, ambient. */
  film: {
    craft: {
      src: 'media/lock-key-720.mp4',
      poster: 'media/access-reader.jpg',
      caption: 'The craft — a door, a key, one standard.',
    },
    corridor: {
      src: 'media/corridor-bw-720.mp4',
      poster: 'media/apartment-doors.jpg',
      caption: 'The corridor your systems live in.',
    },
  },
} as const

export const serviceMedia: Record<string, string> = {
  'electronic-access-control': 'media/access-reader.jpg',
  'cctv-video-surveillance': 'media/dome-cam.jpg',
  'door-intercom-entry': 'media/access-reader.jpg',
  'door-hardware-locking': 'media/apartment-doors.jpg',
  'automatic-door-operators': 'media/glass-low.jpg',
  telephony: 'media/office-corridor.jpg',
  'public-address-mass-notification': 'media/cam-lens.jpg',
  'audio-video-systems': 'media/glass-facade.jpg',
  nursecall: 'media/smart-cams.jpg',
  'it-infrastructure': 'media/office-corridor.jpg',
  'design-consulting': 'media/corridor-minimal.jpg',
}