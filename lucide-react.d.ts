// lucide-react.d.ts
declare module 'lucide-react' {
  import * as React from 'react'

  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number
  }

  export const Search: React.FC<LucideProps>
}
