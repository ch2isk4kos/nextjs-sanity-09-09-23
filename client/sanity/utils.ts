import { createClient, groq } from "next-sanity";
import { Post } from "@/ts-types/Post";

const client = createClient({
  projectId: "p0m10kju",
  dataset: "production",
  apiVersion: "2023-09-09",
});

// anywhere that uses this utility function will return a Promise with an array of Post objects
export async function getPosts(): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post"] | order(_createdAt desc){
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

// returns 3 most recent posts
export async function getRecentPosts(): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post"] | order(_createdAt desc)[0..2]{
      _id,
      _createdAt,
      title,
      description,
      "slug": slug.current,
      "image": image.asset->url,
      url
    }`
  )
}

