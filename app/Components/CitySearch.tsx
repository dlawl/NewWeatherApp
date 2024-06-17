'use client'
import {
  useWeatherContext,
  useWeatherContextUpdate,
} from '@/app/context/weatherContext'
import {
  CommandDialog as Command,
  CommandDialogInput as CommandInput,
} from '@/components/ui/commandDialog'
import { searchIcon } from '@/app/utils/Icons'
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

function CitySearch() {
  const {
    geoLocationList,
    searchInput,
    handleInput,
    setSearchInput,
    setGeoLocationList,
  } = useWeatherContext()
  const { updateCityCoordinates } = useWeatherContextUpdate()

  const [hoveredIndex, setHoveredIndex] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getClickedCoords = (lat: number, lon: number) => {
    updateCityCoordinates([lat, lon])
    setIsModalOpen(false)
    setSearchInput('')
    setGeoLocationList([])
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSearchInput('')
    setGeoLocationList([])
  }

  const handleClickOutside = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeModal()
    }
  }

  return (
    <div className="w-full flex flex-col items-center mt-0 relative z-[var(--z-max)]">
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-4/5 md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-md p-2 flex items-center justify-center gap-2 text-gray-500"
      >
        {searchIcon} 도시를 검색하세요
      </button>

      {isModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
            onClick={handleClickOutside}
          ></div>
          <div
            className="fixed inset-0 flex justify-center items-center z-[9999]"
            onClick={handleClickOutside}
          >
            <div
              className="w-4/5 md:w-2/5 lg:w-1/3 bg-white rounded-lg shadow-md p-4 relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-[-20px] right-[-30px] text-3xl text-white rounded-full"
                onClick={closeModal}
              >
                <FaTimes />
              </button>
              <Command className="rounded-lg border shadow-md">
                <CommandInput
                  value={searchInput}
                  onChangeCapture={handleInput}
                  className="w-full border-b"
                />
                <ul className="px-3 max-h-[300px] overflow-y-auto">
                  {geoLocationList?.length === 0 && searchInput && (
                    <p>No Results</p>
                  )}

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
        </>
      )}
    </div>
  )
}

export default CitySearch
