import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params } : { params: Promise<{ id: string }> }
) {
    const { id } = await params
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const data = await response.json();

    data.url = `https://placehold.co/1000x1000/black/white`
    data.thumbnailUrl = `https://placehold.co/300x300/black/white`

    return NextResponse.json(data)
}