//app/context/weatherContext.js

'use client'
import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'
import axios from 'axios'
import debounce from 'lodash/debounce'
import {
  WeatherForecast,
  PollutionData,
  FiveDayForecast,
  GeoLocationItem,
  WeatherContextProps,
} from '../type/Types'

const WeatherContext = createContext<WeatherContextProps | undefined>(undefined)
const WeatherContextUpdate = createContext<
  | {
      updateCityCoordinates: (coords: [number, number]) => void
    }
  | undefined
>(undefined)

export const WeatherContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [weatherForecast, setWeatherForecast] =
    useState<WeatherForecast | null>(null)
  const [geoLocationList, setGeoLocationList] = useState<GeoLocationItem[]>([])
  const [searchInput, setSearchInput] = useState<string>('')
  const [activeCityCoords, setActiveCityCoords] = useState<[number, number]>([
    37.5665, 126.978,
  ])
  const [pollutionData, setPollutionData] = useState<PollutionData | null>(null)
  const [fiveDayForecast, setFiveDayForecast] =
    useState<FiveDayForecast | null>(null)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const fetchForecastData = useCallback(async (lat: number, lon: number) => {
    try {
      const [weatherRes, pollutionRes, fiveDayRes] = await Promise.all([
        axios.get(`api/weather?lat=${lat}&lon=${lon}`),
        axios.get(`api/pollution?lat=${lat}&lon=${lon}`),
        axios.get(`api/fiveday?lat=${lat}&lon=${lon}`),
      ])
      setWeatherForecast(weatherRes.data)
      setPollutionData(pollutionRes.data)
      setFiveDayForecast(fiveDayRes.data)
    } catch (error) {
      setErrorMessage('데이터를 가져오는 중 오류가 발생했습니다.')
    }
  }, [])

  const fetchGeoLocationList = useCallback(async (search: string) => {
    try {
      const res = await axios.get(`/api/geocoded?search=${search}`)
      setGeoLocationList(res.data)
    } catch (error) {
      setErrorMessage('지오코딩 데이터를 가져오는 중 오류가 발생했습니다.')
    }
  }, [])

  const debouncedFetchGeoLocationList = useCallback(
    debounce((search: string) => {
      fetchGeoLocationList(search).catch(error =>
        setErrorMessage('지오코딩 데이터를 가져오는 중 오류가 발생했습니다.')
      )
    }, 500),
    [fetchGeoLocationList]
  )

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(e.target.value)
      if (e.target.value === '') {
        setGeoLocationList([])
      } else {
        debouncedFetchGeoLocationList(e.target.value)
      }
    },
    [debouncedFetchGeoLocationList]
  )

  useEffect(() => {
    fetchForecastData(activeCityCoords[0], activeCityCoords[1])
  }, [activeCityCoords, fetchForecastData])

  return (
    <WeatherContext.Provider
      value={{
        weatherForecast,
        pollutionData,
        fiveDayForecast,
        geoLocationList,
        searchInput,
        handleInput,
        setSearchInput,
        setGeoLocationList,
        updateCityCoordinates: setActiveCityCoords,
        errorMessage,
      }}
    >
      <WeatherContextUpdate.Provider
        value={{ updateCityCoordinates: setActiveCityCoords }}
      >
        {children}
      </WeatherContextUpdate.Provider>
    </WeatherContext.Provider>
  )
}

export const useWeatherContext = () => {
  const context = useContext(WeatherContext)
  if (!context) {
    throw new Error(
      'useWeatherContext는 WeatherContextProvider 내에서 사용해야 합니다.'
    )
  }
  return context
}

export const useWeatherContextUpdate = () => {
  const context = useContext(WeatherContextUpdate)
  if (!context) {
    throw new Error(
      'useWeatherContextUpdate는 WeatherContextProvider 내에서 사용해야 합니다.'
    )
  }
  return context
}
