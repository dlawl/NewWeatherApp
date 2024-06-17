// app/api/weather/route.ts
import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY

    const searchParams = req.nextUrl.searchParams

    const lat = searchParams.get('lat')
    const lon = searchParams.get('lon')

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

    const res = await axios.get(url)

    return NextResponse.json(res.data)
  } catch (error) {
    console.log('날씨 데이터를 가져오는 중 오류가 발생했습니다.')
    return new Response('날씨 데이터를 가져오는 중 오류가 발생했습니다.', {
      status: 500,
    })
  }
}
