'use client'

import React from 'react'
import { useWeatherContext } from '@/app/context/weatherContext'
import AirQuality from './Components/AirQuality'
import DailyWeatherForecast from './Components/DailyWeatherForecast'
import FeelTemperature from './Components/FeelTemperature'
import Moisture from './Components/Moisture'
import GeoMap from './Components/GeoMap'
import CitySearch from './Components/CitySearch'
import CurrentTemperature from './Components/CurrentTemperature'
import WindSpeed from './Components/WindSpeed'

export default function Home() {
  const { weatherForecast } = useWeatherContext()

  if (!weatherForecast) {
    return <div>Loading...</div>
  }

  return (
    <main className="mx-auto p-4 relative z-0" style={{ maxWidth: '1000px' }}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 relative z-0">
        <div className="col-span-12 mb-2">
          <CitySearch />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <CurrentTemperature />
        </div>
        <div className="col-span-12 lg:col-span-8 h-[400px]">
          <GeoMap />
        </div>
        <div className="col-span-12 mt-2">
          <DailyWeatherForecast />
        </div>
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
          <AirQuality />
          <FeelTemperature />
          <Moisture />
          <WindSpeed />
        </div>
      </div>
    </main>
  )
}
