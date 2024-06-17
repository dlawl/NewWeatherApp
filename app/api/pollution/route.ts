// app/api/pollution/route.ts
import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams
    const lat = searchParams.get('lat')
    const lon = searchParams.get('lon')

    const apiKey = process.env.OPENWEATHERMAP_API_KEY

    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`

    const res = await axios.get(url)

    return NextResponse.json(res.data)
  } catch (error) {
    console.log('대기 오염 데이터를 가져오는 중 오류가 발생했습니다.', error)
    return new Response('대기 오염 데이터를 가져오는 중 오류가 발생했습니다.', {
      status: 500,
    })
  }
}
