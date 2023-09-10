import { createClient, groq } from "next-sanity";

export async function getPosts() {
  const client = createClient({
    projectId: "p0m10kju",
    dataset: "production",
    apiVersion: "2023-09-09",
  });

  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}