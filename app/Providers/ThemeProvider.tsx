// app/Providers/ThemeProvider.tsx
// 'use client'
// import * as React from 'react'
// import { type ThemeProviderProps } from 'next-themes/dist/types'
// import { WeatherContextProvider } from '@/app/context/weatherContext'

// export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
//   return <WeatherContextProvider>{children}</WeatherContextProvider>
// }

'use client'
import * as React from 'react'
import { WeatherContextProvider } from '@/app/context/weatherContext'

export function ThemeProvider({ children }) {
  return <WeatherContextProvider>{children}</WeatherContextProvider>
}
