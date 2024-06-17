// components/ui/page.tsx
'use client'

import AirQuality from './Components/AirQuality'
import DailyWeatherForecast from './Components/DailyWeatherForecast'
import FeelTemperature from './Components/FeelTemperature'
import Moisture from './Components/Moisture'
import GeoMap from './Components/GeoMap'
import CitySearch from './Components/CitySearch'
import CurrentTemperature from './Components/CurrentTemperature'
import WindSpeed from './Components/WindSpeed'

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-2xl p-4 relative z-0">
      <div className="grid grid-cols-12 gap-4 relative z-0">
        <div className="col-span-12 md:col-span-3 space-y-4">
          <div className="mt-0 w-full">
            <CitySearch />
          </div>
          <CurrentTemperature />
          <AirQuality />
        </div>
        <div className="col-span-12 md:col-span-6 space-y-4">
          <DailyWeatherForecast />
          <div className="h-[400px]">
            <GeoMap />
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 space-y-4">
          <WindSpeed />
          <FeelTemperature />
          <Moisture />
        </div>
      </div>
    </main>
  )
}
