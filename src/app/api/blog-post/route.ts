const baseUrl = "https://bitsaac-api.onrender.com/api/v1"

export async function POST(req: Request) {
  const body = await req.json()
  const res = await fetch(`${baseUrl}/blog/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: body.title,
      subTitle: body.subTitle,
      author: body.author,
      coverImage: body.coverImage,
      imageCredit: body.imageCredit,
      contentType: body.contentType,
      category: body.category,
      content: body.content,
    }),
  })
  const data = await res.json()

  return Response.json(data)
}
