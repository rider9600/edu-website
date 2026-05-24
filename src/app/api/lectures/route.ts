import { NextResponse } from 'next/server'
import { listLectures } from '@/lib/lectures'

export async function GET() {
  const list = listLectures()
  return NextResponse.json({ lectures: list })
}
