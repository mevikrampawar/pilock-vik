import type { CSSProperties } from 'react'

import { cn } from '@/lib/utils'

/*
  KeywayEmblem — the brand signature.
  A lock-cylinder face rendered in "metal": brass rings, ink plate, and a
  keyway slot with bitting teeth. Page-guide strokes (ticks, faint rings)
  read from theme variables so the emblem sits cleanly on both light and
  dark surfaces. The metal itself stays constant in either mode.
*/

// 24 graduation ticks make the outer ring read as a machined cylinder face.
const ticks = Array.from({ length: 24 }, (_, i) => i * 15)

type KeywayEmblemProps = {
  className?: string
  /** When true, the outer brass ring draws itself on mount (hero). */
  animated?: boolean
  /** Compact scale for header / footer and small contexts. */
  small?: boolean
}

export function KeywayEmblem({
  className,
  animated = false,
  small = false,
}: KeywayEmblemProps) {
  // Circumference of the outer ring — used to animate the stroke draw.
  const dash = 2 * Math.PI * 92

  return (
    <svg
      viewBox="0 0 200 200"
      className={cn('block', className)}
      role="img"
      aria-label="PI Locks keyway emblem"
    >
      <defs>
        {/* Brushed-metal face gradient for the cylinder plate. */}
        <radialGradient id="pi-face" cx="50%" cy="42%" r="70%">
          <stop offset="0%" stopColor="oklch(0.24 0.022 250)" />
          <stop offset="100%" stopColor="oklch(0.15 0.025 250)" />
        </radialGradient>
      </defs>

      <g className={small ? 'scale-[0.42]' : ''}>
        {ticks.map((deg) => (
          <line
            key={deg}
            x1="100"
            y1="6"
            x2="100"
            y2="12"
            stroke="var(--em-tick)"
            strokeWidth="1"
            transform={`rotate(${deg} 100 100)`}
          />
        ))}

        {/* Outer brass ring — self-draws during the hero load sequence. */}
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke="var(--brass)"
          strokeWidth="1.4"
          className={animated ? 'draw-ring' : ''}
          style={animated ? ({ ['--dash']: dash } as CSSProperties) : undefined}
        />
        {/* Faint guidance rings (theme-dependent visibility). */}
        <circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="var(--em-ring)"
          strokeWidth="1"
          strokeDasharray="2 6"
        />
        <circle
          cx="100"
          cy="100"
          r="48"
          fill="url(#pi-face)"
          stroke="var(--em-ring)"
          strokeWidth="1"
        />
        <circle
          cx="100"
          cy="100"
          r="36"
          fill="none"
          stroke="var(--em-ring)"
          strokeWidth="1"
          strokeDasharray="1 5"
        />

        {/* Keyway slot with bitting teeth along its left wall. */}
        <rect
          x="90"
          y="58"
          width="20"
          height="44"
          rx="8"
          fill="var(--brass-soft)"
          stroke="var(--brass)"
          strokeWidth="1.4"
        />
        <rect x="90" y="66" width="8" height="6" rx="1.5" fill="var(--ink)" />
        <rect x="90" y="80" width="8" height="6" rx="1.5" fill="var(--ink)" />
        <rect x="90" y="94" width="8" height="6" rx="1.5" fill="var(--ink)" />

        {/* Keyhole — the eye of the lock. */}
        <circle
          cx="100"
          cy="118"
          r="12"
          fill="var(--ink)"
          stroke="var(--brass)"
          strokeWidth="1.4"
        />
        <line
          x1="95"
          y1="130"
          x2="95"
          y2="138"
          stroke="var(--brass)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.7"
        />
        <line
          x1="105"
          y1="130"
          x2="105"
          y2="138"
          stroke="var(--brass)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.7"
        />
      </g>
    </svg>
  )
}