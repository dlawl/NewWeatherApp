// // app/api/fiveday/route.ts

import { NextRequest, NextResponse } from 'next/server'

const fetchWeatherData = async (url: string) => {
  const response = await fetch(url, { next: { revalidate: 3600 } })
  if (!response.ok) {
    throw new Error('네트워크 응답이 올바르지 않습니다.')
  }
  return response.json()
}

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY
    const searchParams = req.nextUrl.searchParams
    const lat = searchParams.get('lat')
    const lon = searchParams.get('lon')

    if (!lat || !lon) {
      return new Response('위도를 입력해야 합니다.', {
        status: 400,
      })
    }

    const dailyUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
    const dailyData = await fetchWeatherData(dailyUrl)

    return NextResponse.json(dailyData)
  } catch (error) {
    console.error('일일 데이터를 가져오는 중 오류가 발생했습니다:', error)
    return new Response('일일 데이터를 가져오는 중 오류가 발생했습니다.', {
      status: 500,
    })
  }
}
