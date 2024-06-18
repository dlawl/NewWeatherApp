// declarations.d.ts
declare module 'lodash/debounce' {
  import { DebounceSettings } from 'lodash'

  function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
    func: T,
    wait?: number,
    options?: DebounceSettings
  ): T & { cancel: () => void; flush: () => void }

  export = debounce
}

declare module 'cmdk' {
  import * as React from 'react'

  interface CommandProps extends React.ComponentPropsWithoutRef<'div'> {}
  interface CommandInputProps extends React.ComponentPropsWithoutRef<'input'> {}
  interface CommandListProps extends React.ComponentPropsWithoutRef<'div'> {}
  interface CommandEmptyProps extends React.ComponentPropsWithoutRef<'div'> {}
  interface CommandGroupProps extends React.ComponentPropsWithoutRef<'div'> {}
  interface CommandSeparatorProps
    extends React.ComponentPropsWithoutRef<'div'> {}
  interface CommandItemProps extends React.ComponentPropsWithoutRef<'div'> {}
  interface CommandShortcutProps
    extends React.ComponentPropsWithoutRef<'span'> {}

  export const Command: React.ForwardRefExoticComponent<
    CommandProps & React.RefAttributes<HTMLDivElement>
  >
  export const CommandInput: React.ForwardRefExoticComponent<
    CommandInputProps & React.RefAttributes<HTMLInputElement>
  >
  export const CommandList: React.ForwardRefExoticComponent<
    CommandListProps & React.RefAttributes<HTMLDivElement>
  >
  export const CommandEmpty: React.ForwardRefExoticComponent<
    CommandEmptyProps & React.RefAttributes<HTMLDivElement>
  >
  export const CommandGroup: React.ForwardRefExoticComponent<
    CommandGroupProps & React.RefAttributes<HTMLDivElement>
  >
  export const CommandSeparator: React.ForwardRefExoticComponent<
    CommandSeparatorProps & React.RefAttributes<HTMLDivElement>
  >
  export const CommandItem: React.ForwardRefExoticComponent<
    CommandItemProps & React.RefAttributes<HTMLDivElement>
  >
  export const CommandShortcut: React.ForwardRefExoticComponent<
    CommandShortcutProps & React.RefAttributes<HTMLSpanElement>
  >
}

declare module '@radix-ui/react-dialog' {
  export * from '@radix-ui/react-dialog'
}

declare module 'lucide-react' {
  import * as React from 'react'

  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number
  }

  export const Search: React.FC<LucideProps>
}

declare module 'clsx' {
  export default function clsx(
    ...args: (
      | string
      | number
      | null
      | boolean
      | undefined
      | { [key: string]: unknown }
      | Array<
          | string
          | number
          | null
          | boolean
          | undefined
          | { [key: string]: unknown }
        >
    )[]
  ): string
  export type ClassValue =
    | string
    | number
    | null
    | boolean
    | undefined
    | { [key: string]: unknown }
    | Array<
        | string
        | number
        | null
        | boolean
        | undefined
        | { [key: string]: unknown }
      >
}

declare module 'tailwind-merge' {
  export function twMerge(...args: string[]): string
}
