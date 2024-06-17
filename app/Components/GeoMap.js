// app/Components/GeoMap.js
'use client'
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { useWeatherContext } from '@/app/context/weatherContext'
import { Placeholder } from '@/components/ui/placeholder'

const MapContainer = dynamic(
  () => import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
)
const MoveToLocation = dynamic(() => import('./MoveToLocation.tsx'), {
  ssr: false,
})

function GeoMap() {
  const { weatherForecast } = useWeatherContext()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const locationCoordinates = weatherForecast?.coord

  if (
    !isClient ||
    !weatherForecast ||
    !weatherForecast.coord ||
    !locationCoordinates
  ) {
    return <Placeholder className="w-full h-[400px]" />
  }

  return (
    <div className="flex-1 border rounded-lg h-[400px]">
      <MapContainer
        center={[locationCoordinates.lat, locationCoordinates.lon]}
        zoom={13}
        scrollWheelZoom={false}
        className="rounded-lg"
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MoveToLocation coordinates={locationCoordinates} />
      </MapContainer>
    </div>
  )
}

export default GeoMap
