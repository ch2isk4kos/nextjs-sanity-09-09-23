import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import post from "./sanity/schemas/post-schema";

const config = defineConfig({
  projectId: "p0m10kju",
  dataset: "production",
  title: "Next.js with Sanity Studio Demo",
  apiVersion: "2023-09-09",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: [ post ]},
})

export default config;