import { cn } from '@/lib/utils'

import { asset } from '@/data/media'

type LogoProps = {
  className?: string
  markClassName?: string
}

export function Logo({ className, markClassName }: LogoProps) {
  return (
    <span className={cn('flex flex-col items-center justify-center gap-1.5', className)}>
      <img 
        src={asset('media/logo.png')} 
        alt="PI Locks Logo" 
        className={cn('h-10 object-contain', markClassName)} 
      />
      <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-gold-500 uppercase">
        PI Locks
      </span>
    </span>
  )
}