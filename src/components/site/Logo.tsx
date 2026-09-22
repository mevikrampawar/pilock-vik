import { cn } from '@/lib/utils'

import { KeywayEmblem } from '@/components/site/KeywayEmblem'

type LogoProps = {
  className?: string
  markClassName?: string
}

export function Logo({ className, markClassName }: LogoProps) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <KeywayEmblem className={cn('size-9 shrink-0', markClassName)} />
      <span className="flex flex-col leading-none">
        <span className="display text-xl whitespace-nowrap">
          PI <span className="display-accent">Locks</span>
        </span>
        <span className="mt-1.5 font-mono text-[9px] tracking-[0.24em] text-muted-foreground uppercase whitespace-nowrap">
          Access · Security · Comms
        </span>
      </span>
    </span>
  )
}