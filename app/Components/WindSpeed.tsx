// app/Components/WindSpeed.tsx
'use client'
import { useWeatherContext } from '@/app/context/weatherContext'
import { wind } from '@/app/utils/Icons'
import { Placeholder } from '@/components/ui/placeholder'
import React from 'react'

function WindSpeed() {
  const { weatherForecast } = useWeatherContext()

  const windSpeed = weatherForecast?.wind?.speed

  if (!windSpeed) {
    return <Placeholder className="w-full" />
  }

  return (
    <div className="pt-6 pb-5 px-4 border rounded-lg flex flex-row items-center gap-4 bg-light-beige shadow-sm dark:shadow-none mt-0">
      <div className="icon-container">
        <div className="bg-dark-text text-white rounded-full h-24 w-24 flex items-center justify-center text-lg">
          {wind}
        </div>
      </div>
      <div className="text-container flex flex-col justify-center">
        <h2 className="font-medium text-dark-text">바람</h2>
        <p className="text-2xl text-dark-text">{Math.round(windSpeed)} m/s</p>
      </div>
    </div>
  )
}

export default WindSpeed
