// app/Components/AirQuality.tsx
'use client'
import { useWeatherContext } from '@/app/context/weatherContext'
import { thermo } from '@/app/utils/Icons'
import { airQualityIndexDescriptions } from '@/app/utils/utilities'
import { Placeholder } from '@/components/ui/placeholder'
import React from 'react'

function AirQuality() {
  const { pollutionData } = useWeatherContext()

  if (
    !pollutionData ||
    !pollutionData.list ||
    !pollutionData.list[0] ||
    !pollutionData.list[0].main
  ) {
    return <Placeholder className="w-full col-span-2 md:col-span-full" />
  }

  const qualityIndex = pollutionData.list[0].main.aqi * 10
  const qualityDescription =
    airQualityIndexDescriptions.find(item => item.rating === qualityIndex)
      ?.description || 'Unknown'

  return (
    <div className="pt-6 pb-5 px-4 border rounded-lg flex flex-row items-center gap-4 bg-light-beige shadow-sm dark:shadow-none mt-0">
      <div className="icon-container">
        <div className="bg-dark-text text-white rounded-full h-24 w-24 flex items-center justify-center text-lg">
          {thermo}
        </div>
      </div>
      <div className="text-container flex flex-col justify-center w-full">
        <h2 className="font-medium text-dark-text">대기 오염</h2>
        <p className="mt-4 text-xl font-bold text-dark-text">{qualityIndex}</p>
        <p className="mt-2 text-md text-gray-500">{qualityDescription}</p>
      </div>
    </div>
  )
}

export default AirQuality
