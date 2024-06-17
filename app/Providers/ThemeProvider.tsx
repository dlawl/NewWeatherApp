// app/Providers/ThemeProvider.tsx
'use client'
import * as React from 'react'
import { WeatherContextProvider } from '@/app/context/weatherContext'

export function ThemeProvider({ children }) {
  return <WeatherContextProvider>{children}</WeatherContextProvider>
}
