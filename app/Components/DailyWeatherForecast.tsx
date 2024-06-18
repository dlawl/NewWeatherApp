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
  const { fiveDayForecast } = useWeatherContext()

  if (!fiveDayForecast?.city || !fiveDayForecast?.list) {
    return <Placeholder className="w-full" />
  }

  const today = moment().startOf('day')

  const groupedForecasts = fiveDayForecast.list.reduce(
    (acc: { [key: string]: WeatherForecast[] }, weather: WeatherForecast) => {
      const date = weather.dt_txt.split(' ')[0]
      if (!acc[date]) acc[date] = []
      acc[date].push(weather)
      return acc
    },
    {}
  )

  const getWeatherIcon = (weatherMain: string) => {
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

  const getDayOfWeek = (dateString: string) => moment(dateString).format('ddd')

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
    <div className="p-4 md:p-12 h-auto flex flex-col md:flex-row justify-between gap-4 col-span-full bg-blur items-center">
      {forecastDays.map(date => {
        const dayForecasts = groupedForecasts[date] || []
        const weatherMain =
          dayForecasts.length > 0 ? dayForecasts[0].weather[0].main : 'Clear'
        const avgTemp =
          dayForecasts.length > 0 ? getAverageTemperature(dayForecasts) : 'N/A'
        return (
          <div
            key={date}
            className="flex flex-col gap-2 md:gap-6 text-dark-text items-center justify-center"
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
