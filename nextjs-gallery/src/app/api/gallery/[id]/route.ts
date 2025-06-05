import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params } : { params: Promise<{ id: string }> }
) {
    const { id } = await params
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const photo = await response.json();


 

    photo.url = `https://placehold.co/1000x1000/black/white`
    photo.thumbnailUrl = `https://placehold.co/300x300/black/white`

    return NextResponse.json(photo)
}