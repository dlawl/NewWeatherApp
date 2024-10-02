import { useWeatherContext } from '@/app/context/weatherContext'
import { thermo } from '@/app/utils/Icons'
import { airQualityIndexDescriptions } from '@/app/utils/utilities'
import { Placeholder } from '@/components/ui/placeholder'
import React, { useState, useEffect } from 'react'

function AirQuality() {
  const { pollutionData, isLoading } = useWeatherContext()
  const [qualityIndex, setQualityIndex] = useState<number | null>(null)
  const [qualityDescription, setQualityDescription] = useState<string>('')

  useEffect(() => {
    if (pollutionData?.list?.[0]?.main) {
      const index = pollutionData.list[0].main.aqi * 10
      setQualityIndex(index)
      setQualityDescription(
        airQualityIndexDescriptions.find(item => item.rating === index)
          ?.description || 'Unknown'
      )
    }
  }, [pollutionData])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (qualityIndex === null) {
    return <Placeholder className="w-full col-span-2 md:col-span-1" />
  }

  return (
    <div className="pt-6 pb-5 px-4 flex flex-col md:flex-row items-center gap-2 h-full bg-blur">
      <div className="icon-container">
        <div className="text-white rounded-full h-24 w-24 flex items-center justify-center text-lg">
          {thermo}
        </div>
      </div>
      <div className="text-container flex flex-col justify-center">
        <h2 className="font-medium text-dark-text">대기오염</h2>
        <p className="text-2xl text-dark-text">{qualityIndex}</p>
        <p className="text-lg text-dark-text">{qualityDescription}</p>
      </div>
    </div>
  )
}

export default AirQuality
