const post = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string"},
    { name: "description", title: "Description", type: "string"},
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" }},
    { name: "image", title: "Image", type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "Alt", type: "string" }]},
    { name: "url", title: "URL", type: "url"},
    { name: "content", title: "Content", type: "array", of: [{ type: "block" }]},
  ]
}

export default post;