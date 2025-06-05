export async function GET() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=30`)
    const data = await res.json();

    return Response.json(data)
}