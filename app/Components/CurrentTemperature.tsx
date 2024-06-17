// app/Components/CurrentTemperature.tsx
'use client'
import React, { useEffect, useState } from 'react'
import { useWeatherContext } from '@/app/context/weatherContext'
import {
  clearSky,
  cloudy,
  drizzleIcon,
  navigation,
  rain,
  snow,
} from '@/app/utils/Icons'
import { convertKelvinToCelsius } from '@/app/utils/utilities'
import moment from 'moment'
import 'moment/locale/ko'

moment.locale('ko')

function CurrentTemperature() {
  const { weatherForecast } = useWeatherContext()

  // State
  const [localTime, setLocalTime] = useState<string>('')

  useEffect(() => {
    if (!weatherForecast || !weatherForecast.weather) return

    // Live time update
    const interval = setInterval(() => {
      const localMoment = moment().utcOffset(weatherForecast.timezone / 60)
      const formattedTime = localMoment.format('HH:mm:ss')

      setLocalTime(formattedTime)
    }, 1000)

    // clear interval
    return () => clearInterval(interval)
  }, [weatherForecast])

  if (!weatherForecast || !weatherForecast.weather) {
    return <div>Loading...</div>
  }

  const { main, name, weather, dt } = weatherForecast

  const temp = convertKelvinToCelsius(main?.temp)
  const minTemp = convertKelvinToCelsius(main?.temp_min)
  const maxTemp = convertKelvinToCelsius(main?.temp_max)
  const { main: weatherMain, description } = weather[0]

  const getIcon = () => {
    switch (weatherMain) {
      case 'Drizzle':
        return drizzleIcon
      case 'Rain':
        return rain
      case 'Snow':
        return snow
      case 'Clear':
        return clearSky
      case 'Clouds':
        return cloudy
      default:
        return clearSky
    }
  }

  const getDescription = (description: string) => {
    switch (description) {
      case 'clear sky':
        return '맑은 하늘'
      case 'few clouds':
        return '구름 조금'
      case 'scattered clouds':
        return '흩어진 구름'
      case 'broken clouds':
        return '부서진 구름'
      case 'shower rain':
        return '소나기'
      case 'rain':
        return '비'
      case 'thunderstorm':
        return '뇌우'
      case 'snow':
        return '눈'
      case 'mist':
        return '안개'
      case 'overcast clouds':
        return '흐린 구름'
      default:
        return description
    }
  }

  return (
    <div className="pt-6 pb-5 px-4 border rounded-lg flex flex-col justify-between bg-light-beige shadow-sm dark:shadow-none text-dark-text">
      <div className="flex flex-col">
        <p className="text-xl font-bold">{moment.unix(dt).format('dddd')}</p>
        <p className="text-sm">{moment.unix(dt).format('D MMM YYYY')}</p>
        <p className="text-sm flex gap-1">
          <span>{name}</span>
          <span>{navigation}</span>
        </p>
      </div>
      <div className="flex flex-col mt-6">
        <div className="flex mt-4">{getIcon()}</div>
        <div className="text-6xl">{temp}°C</div>
        <p className="text-lg capitalize mt-2">{getDescription(description)}</p>
      </div>
      <div className="flex mt-6">
        <span>최저: {minTemp}°</span>
        <span>최고: {maxTemp}°</span>
      </div>
    </div>
  )
}

export default CurrentTemperature
