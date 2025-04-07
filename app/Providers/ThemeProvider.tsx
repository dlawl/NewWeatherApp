// app/Providers/ThemeProvider.tsx
'use client'
import * as React from 'react'
import { WeatherContextProvider } from '@/app/context/weatherContext'

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <WeatherContextProvider>{children}</WeatherContextProvider>
}
