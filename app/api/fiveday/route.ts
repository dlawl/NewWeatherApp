// app/api/fiveday/route.ts
import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY

    const searchParams = req.nextUrl.searchParams

    const lat = searchParams.get('lat')
    const lon = searchParams.get('lon')

    const dailyUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`

    const dailyRes = await fetch(dailyUrl, {
      next: { revalidate: 3600 },
    })

    const dailyData = await dailyRes.json()

    return NextResponse.json(dailyData)
  } catch (error) {
    console.log('일일 데이터를 가져오는 중 오류가 발생했습니다.')
    return new Response('일일 데이터를 가져오는 중 오류가 발생했습니다.', {
      status: 500,
    })
  }
}
