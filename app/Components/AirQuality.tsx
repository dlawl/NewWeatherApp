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
    return <Placeholder className="w-full col-span-2 md:col-span-1" />
  }

  const qualityIndex = pollutionData.list[0].main.aqi * 10
  const qualityDescription =
    airQualityIndexDescriptions.find(item => item.rating === qualityIndex)
      ?.description || 'Unknown'

  return (
    <div className="pt-6 pb-5 px-4 flex flex-row items-center gap-2 h-full bg-blur">
      <div className="icon-container">
        <div className="text-white rounded-full h-24 w-24 flex items-center justify-center text-lg">
          {thermo}
        </div>
      </div>
      <div className="text-container flex flex-col justify-center">
        <h2 className="font-medium text-dark-text">대기오염</h2>
        <p className="text-2xl text-dark-text">{qualityIndex}</p>
      </div>
    </div>
  )
}

export default AirQuality
