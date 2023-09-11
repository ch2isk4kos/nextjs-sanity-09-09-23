import { PortableTextBlock } from "sanity";

export type Post = {
  _id: string;
  _createdAt: Date;
  title: string;
  description: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
}