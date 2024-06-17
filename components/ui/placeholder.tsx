// app/components/ui/placeholder.tsx
import { mergeNames } from '@/lib/helper'

function Placeholder({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={mergeNames('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  )
}

export { Placeholder }
