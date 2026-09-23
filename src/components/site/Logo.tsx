import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  markClassName?: string
}

export function Logo({ className, markClassName }: LogoProps) {
  return (
    <span className={cn('flex flex-col items-center justify-center gap-1.5', className)}>
      <svg
        viewBox="0 0 100 100"
        className={cn('h-11 w-auto', markClassName)}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* The 'p' loop */}
        <circle cx="38" cy="45" r="16" stroke="var(--gold-500)" strokeWidth="12" />
        {/* The 'p' stem and curve up to 'i' */}
        <path
          d="M 26 29 V 75 C 26 88, 44 88, 55 75 C 62 66, 68 55, 68 45"
          stroke="var(--gold-500)"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
        />
        {/* The 'i' stem */}
        <path
          d="M 68 40 V 75"
          stroke="var(--gold-500)"
          strokeWidth="12"
          strokeLinecap="round"
        />
        {/* The 'i' dot */}
        <circle cx="68" cy="16" r="7.5" fill="var(--gold-500)" />
      </svg>
      <span className="font-sans text-[13px] font-bold tracking-[0.25em] text-gold-500 uppercase mt-1">
        PI Locks
      </span>
    </span>
  )
}