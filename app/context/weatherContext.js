// app/context/weatherContext.js
'use Client'
import axios from 'axios'
import React, { useContext, createContext, useState, useEffect } from 'react'
import { debounce } from 'lodash'

const WeatherContext = createContext()
const WeatherContextUpdate = createContext()

export const WeatherContextProvider = ({ children }) => {
  const [weatherForecast, setWeatherForecast] = useState({})
  const [geoLocationList, setGeoLocationList] = useState([])
  const [searchInput, setSearchInput] = useState('')

  const [activeCityCoords, setActiveCityCoords] = useState([37.5665, 126.978])

  const [pollutionData, setPollutionData] = useState({})
  const [fiveDayForecast, setFiveDayForecast] = useState({})

  const [errorMessage, setErrorMessage] = useState('')

  const fetchForecastData = async (lat, lon) => {
    try {
      const res = await axios.get(`api/weather?lat=${lat}&lon=${lon}`)
      setWeatherForecast(res.data)
    } catch (error) {
      setErrorMessage('날씨 데이터를 가져오는 중 오류가 발생했습니다.')
    }
  }

  const fetchPollutionData = async (lat, lon) => {
    try {
      const res = await axios.get(`api/pollution?lat=${lat}&lon=${lon}`)
      setPollutionData(res.data)
    } catch (error) {
      setErrorMessage('대기 오염 데이터를 가져오는 중 오류가 발생했습니다.')
    }
  }

  const fetchFiveDayForecast = async (lat, lon) => {
    try {
      const res = await axios.get(`api/fiveday?lat=${lat}&lon=${lon}`)
      setFiveDayForecast(res.data)
    } catch (error) {
      setErrorMessage('5일 예보 데이터를 가져오는 중 오류가 발생했습니다.')
    }
  }

  const fetchGeoLocationList = async search => {
    try {
      const res = await axios.get(`/api/geocoded?search=${search}`)
      setGeoLocationList(res.data)
    } catch (error) {
      setErrorMessage('지오코딩 데이터를 가져오는 중 오류가 발생했습니다.')
    }
  }

  const handleInput = e => {
    setSearchInput(e.target.value)

    if (e.target.value === '') {
      setGeoLocationList([])
    }
  }

  useEffect(() => {
    const debouncedFetch = debounce(search => {
      fetchGeoLocationList(search)
    }, 500)

    if (searchInput) {
      debouncedFetch(searchInput)
    }
    return () => debouncedFetch.cancel()
  }, [searchInput])

  useEffect(() => {
    fetchForecastData(activeCityCoords[0], activeCityCoords[1])
    fetchPollutionData(activeCityCoords[0], activeCityCoords[1])
    fetchFiveDayForecast(activeCityCoords[0], activeCityCoords[1])
  }, [activeCityCoords])

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
        value={{
          updateCityCoordinates: setActiveCityCoords,
        }}
      >
        {children}
      </WeatherContextUpdate.Provider>
    </WeatherContext.Provider>
  )
}

export const useWeatherContext = () => useContext(WeatherContext)
export const useWeatherContextUpdate = () => useContext(WeatherContextUpdate)
