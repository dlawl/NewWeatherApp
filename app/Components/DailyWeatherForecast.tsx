'use client'
import React from 'react'
import { useWeatherContext } from '@/app/context/weatherContext'
import { clearSky, cloudy, drizzleIcon, rain, snow } from '@/app/utils/Icons'
import { Placeholder } from '@/components/ui/placeholder'
import moment from 'moment'
import { convertKelvinToCelsius } from '@/app/utils/utilities'

interface WeatherForecast {
  dt_txt: string
  main: {
    temp: number
  }
  weather: {
    main: string
  }[]
}

interface FiveDayWeather {
  city: {
    name: string
  }
  list: WeatherForecast[]
}

function DailyWeatherForecast() {
  const { weatherForecast, fiveDayForecast } = useWeatherContext()

  const { weather } = weatherForecast
  const { city, list } = fiveDayForecast

  if (!fiveDayForecast || !city || !list) {
    return <Placeholder className="w-full" />
  }

  if (!weatherForecast || !weather) {
    return <Placeholder className="w-full" />
  }

  const today = moment().startOf('day')

  const groupedForecasts: { [key: string]: WeatherForecast[] } = list.reduce(
    (acc: { [key: string]: WeatherForecast[] }, weather: WeatherForecast) => {
      const date = weather.dt_txt.split(' ')[0]
      if (!acc[date]) {
        acc[date] = []
      }
      acc[date].push(weather)
      return acc
    },
    {}
  )

  const sortedForecastDates = Object.keys(groupedForecasts).sort((a, b) => {
    const dateA: moment.Moment = moment(a)
    const dateB: moment.Moment = moment(b)
    if (dateA.isSame(today, 'day')) return -1
    if (dateB.isSame(today, 'day')) return 1
    return dateA.diff(dateB)
  })

  const getWeatherIcon = (weatherMain: string) => {
    const iconStyle = { width: '100%' }
    switch (weatherMain) {
      case 'Drizzle':
        return <div style={iconStyle}>{drizzleIcon}</div>
      case 'Rain':
        return <div style={iconStyle}>{rain}</div>
      case 'Snow':
        return <div style={iconStyle}>{snow}</div>
      case 'Clear':
        return <div style={iconStyle}>{clearSky}</div>
      case 'Clouds':
        return <div style={iconStyle}>{cloudy}</div>
      default:
        return <div style={iconStyle}>{clearSky}</div>
    }
  }

  const getDayOfWeek = (dateString: string) => {
    return moment(dateString).format('ddd')
  }

  const getAverageTemperature = (forecasts: WeatherForecast[]) => {
    const totalTemp = forecasts.reduce(
      (acc, forecast) => acc + forecast.main.temp,
      0
    )
    return convertKelvinToCelsius(totalTemp / forecasts.length)
  }

  const forecastDays = Array.from({ length: 5 }, (_, i) =>
    today.clone().add(i, 'days').format('YYYY-MM-DD')
  )

  return (
    <div className="p-12 h-auto flex flex-row justify-between gap-4 col-span-full bg-blur items-center">
      {forecastDays.map(date => {
        const dayForecasts = groupedForecasts[date] || []
        const weatherMain =
          dayForecasts.length > 0 ? dayForecasts[0].weather[0].main : 'Clear'
        const avgTemp =
          dayForecasts.length > 0 ? getAverageTemperature(dayForecasts) : 'N/A'
        return (
          <div
            key={date}
            className="flex flex-col gap-6 text-dark-text items-center justify-center" // 추가된 justify-center 클래스
          >
            {getWeatherIcon(weatherMain)}
            <p className="text-gray-500">{getDayOfWeek(date)}</p>
            <p>{avgTemp}°C</p>
          </div>
        )
      })}
    </div>
  )
}

export default DailyWeatherForecast
