// app/api/geocoded/route.ts
import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY
    const searchParams = req.nextUrl.searchParams

    const city = searchParams.get('search')
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`

    const res = await axios.get(url)

    return NextResponse.json(res.data)
  } catch (error) {
    console.log('지오코딩 데이터를 가져오는 중 오류가 발생했습니다.')
    return new Response('지오코딩 데이터를 가져오는 중 오류가 발생했습니다.', {
      status: 500,
    })
  }
}
