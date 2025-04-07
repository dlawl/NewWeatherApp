'use client'
import React, { useState, MouseEvent } from 'react'
import {
  useWeatherContext,
  useWeatherContextUpdate,
} from '@/app/context/weatherContext'
import {
  CommandDialog as Command,
  CommandDialogInput as CommandInput,
} from '@/components/ui/commandDialog'
import { searchIcon } from '@/app/utils/Icons'
import { FaTimes } from 'react-icons/fa'

interface GeoLocationItem {
  name: string
  country: string
  state: string
  lat: number
  lon: number
}

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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const getClickedCoords = (lat: number, lon: number) => {
    updateCityCoordinates([lat, lon])
    closeModal()
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSearchInput('')
    setGeoLocationList([])
  }

  const handleClickOutside = (event: MouseEvent<HTMLDivElement>) => {
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
                  {geoLocationList.length === 0 && searchInput && (
                    <p>결과가 없습니다.</p>
                  )}

                  {geoLocationList.map(
                    (item: GeoLocationItem, index: number) => {
                      const { country, state, name, lat, lon } = item
                      return (
                        <li
                          key={index}
                          onMouseEnter={() => setHoveredIndex(index)}
                          className={`py-3 px-2 text-sm rounded-sm cursor-default
                          ${hoveredIndex === index ? 'bg-accent' : ''}
                        `}
                          onClick={() => getClickedCoords(lat, lon)}
                        >
                          <p className="text">
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
