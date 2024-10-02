// // app/api/geocoded/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY
    const searchParams = req.nextUrl.searchParams
    const city = searchParams.get('search')

    if (!city) {
      return new Response('도시를 입력해야 합니다.', { status: 400 })
    }

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
    const response = await fetch(url)
    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error('지오코딩 데이터를 가져오는 중 오류가 발생했습니다.:', error)
    return new Response('지오코딩 데이터를 가져오는 중 오류가 발생했습니다..', {
      status: 500,
    })
  }
}
