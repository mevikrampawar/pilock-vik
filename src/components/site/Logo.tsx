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
        src={asset('media/logo.jpg')} 
        alt="PI Locks Logo" 
        className={cn('h-16 w-auto object-contain mix-blend-screen', markClassName)} 
      />
    </span>
  )
}