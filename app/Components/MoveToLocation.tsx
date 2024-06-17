// app/components/MoveToLocation.tsx
import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

function MoveToLocation({ coordinates }) {
  const map = useMap()

  useEffect(() => {
    if (map && coordinates) {
      const zoomLevel = 13
      const flyToOptions = {
        duration: 1.5,
      }

      if (typeof map.flyTo === 'function') {
        map.flyTo([coordinates.lat, coordinates.lon], zoomLevel, flyToOptions)
      } else {
        console.error('flyTo function is not available on map instance')
      }
    }
  }, [coordinates, map])

  return null
}

export default MoveToLocation
