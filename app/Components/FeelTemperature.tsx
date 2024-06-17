// app/Components/FeelTemperature.tsx
'use client'
import { useWeatherContext } from '@/app/context/weatherContext'
import { thermometer } from '@/app/utils/Icons'
import { convertKelvinToCelsius } from '@/app/utils/utilities'
import { Placeholder } from '@/components/ui/placeholder'
import React from 'react'

function FeelTemperature() {
  const { weatherForecast } = useWeatherContext()

  if (
    !weatherForecast ||
    !weatherForecast?.main ||
    !weatherForecast?.main?.feels_like
  ) {
    return <Placeholder className="w-full" />
  }

  const { feels_like } = weatherForecast?.main

  return (
    <div className="pt-6 pb-5 px-4 border rounded-lg flex flex-row items-center gap-4 bg-light-beige shadow-sm dark:shadow-none mt-0">
      <div className="icon-container">
        <div className="bg-dark-text text-white rounded-full h-24 w-24 flex items-center justify-center text-lg">
          {thermometer}
        </div>
      </div>
      <div className="text-container flex flex-col justify-center">
        <h2 className="font-medium text-dark-text">체감 온도</h2>
        <p className="text-2xl text-dark-text">
          {convertKelvinToCelsius(feels_like)}°
        </p>
      </div>
    </div>
  )
}

export default FeelTemperature
