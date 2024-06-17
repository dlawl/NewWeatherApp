// app/components/ui/placeholder.tsx
import clsx from 'clsx'

function Placeholder({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx('animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  )
}

export { Placeholder }
