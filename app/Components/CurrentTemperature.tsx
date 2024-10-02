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
  const [localTime, setLocalTime] = useState<string>('')

  useEffect(() => {
    if (!weatherForecast || !weatherForecast.timezone) return

    // 타이머로 실시간으로 시간 업데이트
    const intervalId = setInterval(() => {
      const localMoment = moment().utcOffset(weatherForecast.timezone / 60)
      setLocalTime(localMoment.format('HH:mm')) // 초 없이 시간, 분까지만 표시
    }, 1000)

    // 컴포넌트가 언마운트될 때 타이머 정리
    return () => clearInterval(intervalId)
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
    const descriptions: { [key: string]: string } = {
      'clear sky': '맑은 하늘',
      'few clouds': '구름 조금',
      'scattered clouds': '흩어진 구름',
      'broken clouds': '부서진 구름',
      'shower rain': '소나기',
      rain: '비',
      thunderstorm: '뇌우',
      snow: '눈',
      mist: '안개',
      'overcast clouds': '흐린 구름',
    }
    return descriptions[description] || description
  }

  return (
    <div className="pt-6 pb-5 px-4 flex flex-col justify-between text-dark-text h-full bg-blur">
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
        <p className="text-sm">{localTime}</p> {/* 실시간으로 시간 업데이트 */}
      </div>
      <div className="flex mt-6">
        <span>최저: {minTemp}°</span>
        <span>최고: {maxTemp}°</span>
      </div>
    </div>
  )
}

export default CurrentTemperature
