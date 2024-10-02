// app/components/ui/commandDialog.tsx
'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandSeparator,
  CommandItem,
  CommandShortcut,
} from 'cmdk'
import { Search } from 'lucide-react'

import { mergeNames } from '@/lib/helper'

const CommandDialog = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Command>
>(({ className, ...props }, ref) => (
  <Command
    ref={ref}
    className={mergeNames(
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
      className
    )}
    {...props}
  />
))
CommandDialog.displayName = 'CommandDialog'

const CommandDialogInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<typeof CommandInput>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandInput
      ref={ref}
      className={mergeNames(
        'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  </div>
))
CommandDialogInput.displayName = 'CommandDialogInput'

const CommandDialogList = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof CommandList>
>(({ className, ...props }, ref) => (
  <CommandList
    ref={ref}
    className={mergeNames(
      'max-h-[300px] overflow-y-auto overflow-x-hidden',
      className
    )}
    {...props}
  />
))
CommandDialogList.displayName = 'CommandDialogList'

const CommandDialogEmpty = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof CommandEmpty>
>((props, ref) => (
  <CommandEmpty ref={ref} className="py-6 text-center text-sm" {...props} />
))
CommandDialogEmpty.displayName = 'CommandDialogEmpty'

const CommandDialogGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof CommandGroup>
>(({ className, ...props }, ref) => (
  <CommandGroup
    ref={ref}
    className={mergeNames(
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
      className
    )}
    {...props}
  />
))
CommandDialogGroup.displayName = 'CommandDialogGroup'

const CommandDialogSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof CommandSeparator>
>(({ className, ...props }, ref) => (
  <CommandSeparator
    ref={ref}
    className={mergeNames('-mx-1 h-px bg-border', className)}
    {...props}
  />
))
CommandDialogSeparator.displayName = 'CommandDialogSeparator'

const CommandDialogItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof CommandItem>
>(({ className, ...props }, ref) => (
  <CommandItem
    ref={ref}
    className={mergeNames(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  />
))
CommandDialogItem.displayName = 'CommandDialogItem'

const CommandDialogShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={mergeNames(
        'ml-auto text-xs tracking-widest text-muted-foreground',
        className
      )}
      {...props}
    />
  )
}
CommandDialogShortcut.displayName = 'CommandDialogShortcut'

export {
  CommandDialog,
  CommandDialogInput,
  CommandDialogList,
  CommandDialogEmpty,
  CommandDialogGroup,
  CommandDialogItem,
  CommandDialogShortcut,
  CommandDialogSeparator,
}
