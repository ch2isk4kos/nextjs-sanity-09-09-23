import { createClient, groq } from "next-sanity";
import { Post } from "@/ts-types/Post";

// anywhere that uses this utility function will return a Promise with an array of Post objects
export async function getPosts(): Promise<Post[]> {
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