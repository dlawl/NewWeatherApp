// app/Components/GeoMap.js
'use client'
import React, { useEffect } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useWeatherContext } from '@/app/context/weatherContext'

function MoveToLocation({ coordinates }) {
  const map = useMap()

  useEffect(() => {
    if (coordinates) {
      const zoomLevel = 13
      const flyToOptions = {
        duration: 1.5,
      }

      map.flyTo([coordinates.lat, coordinates.lon], zoomLevel, flyToOptions)
    }
  }, [coordinates, map])

  return null
}

function GeoMap() {
  const { weatherForecast } = useWeatherContext()

  const locationCoordinates = weatherForecast?.coord

  if (!weatherForecast || !weatherForecast.coord || !locationCoordinates) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    )
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
