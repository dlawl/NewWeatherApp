'use client'
import {
  useWeatherContext,
  useWeatherContextUpdate,
} from '@/app/context/weatherContext'
import {
  CommandDialog as Command,
  CommandDialogInput as CommandInput,
} from '@/components/ui/commandDialog'
import React from 'react'

function CitySearch() {
  const { geoLocationList, searchInput, handleInput } = useWeatherContext()
  const { updateCityCoordinates } = useWeatherContextUpdate()

  const [hoveredIndex, setHoveredIndex] = React.useState<number>(0)

  const getClickedCoords = (lat: number, lon: number) => {
    updateCityCoordinates([lat, lon])
  }

  return (
    <div className="w-full flex flex-col items-center mt-0 relative z-[var(--z-max)]">
      <div className="w-full bg-white rounded-lg shadow-md relative z-[var(--z-max)]">
        <Command className="rounded-lg border shadow-md">
          <CommandInput
            value={searchInput}
            onChangeCapture={handleInput}
            className="w-full border-b"
          />
          <ul className="px-3 max-h-[300px] overflow-y-auto">
            {geoLocationList?.length === 0 && searchInput && <p>No Results</p>}

            {geoLocationList &&
              geoLocationList.map(
                (
                  item: {
                    name: string
                    country: string
                    state: string
                    lat: number
                    lon: number
                  },
                  index: number
                ) => {
                  const { country, state, name } = item
                  return (
                    <li
                      key={index}
                      onMouseEnter={() => setHoveredIndex(index)}
                      className={`py-3 px-2 text-sm rounded-sm cursor-default
                      ${hoveredIndex === index ? 'bg-accent' : ''}
                    `}
                      onClick={() => {
                        getClickedCoords(item.lat, item.lon)
                      }}
                    >
                      <p className=" text">
                        {name}, {state && state + ','} {country}
                      </p>
                    </li>
                  )
                }
              )}
          </ul>
        </Command>
      </div>
    </div>
  )
}

export default CitySearch
