// app/utils/utilities.tsx
import moment from 'moment'

export const convertKelvinToCelsius = (kelvin: number) => {
  return Math.round(kelvin - 273.15)
}

export const convertUnixToTime = (unix: number, timezone: number) => {
  return moment
    .unix(unix)
    .utcOffset(timezone / 60)
    .format('HH:mm')
}

export const convertUnixToDay = (unix: number) => {
  return moment.unix(unix).format('ddd')
}

export const formatNumberWithSuffix = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  } else {
    return num
  }
}

export const airQualityIndexDescriptions = [
  {
    rating: 10,
    description: '매우 좋음',
  },
  {
    rating: 20,
    description: '좋음',
  },
  {
    rating: 30,
    description: '양호',
  },
  {
    rating: 40,
    description: '보통',
  },
  {
    rating: 50,
    description: '약간 나쁨',
  },
  {
    rating: 60,
    description: '나쁨',
  },
  {
    rating: 70,
    description: '상당히 나쁨',
  },
  {
    rating: 80,
    description: '매우 나쁨',
  },
  {
    rating: 90,
    description: '매우 나쁨',
  },
  {
    rating: 100,
    description: '매우 나쁨',
  },
]
