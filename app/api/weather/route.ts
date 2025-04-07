// // app/api/weather/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY
    const searchParams = req.nextUrl.searchParams
    const lat = searchParams.get('lat')
    const lon = searchParams.get('lon')

    if (!lat || !lon) {
      return new Response('위도와 경도를 입력해야 합니다.', {
        status: 400,
      })
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    const response = await fetch(url)
    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error('날씨 데이터를 가져오는 중 오류가 발생했습니다:', error)
    return new Response('날씨 데이터를 가져오는 중 오류가 발생했습니다.', {
      status: 500,
    })
  }
}
