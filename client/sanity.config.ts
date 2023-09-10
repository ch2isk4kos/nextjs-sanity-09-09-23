import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "p0m10kju",
  dataset: "production",
  title: "Next.js with Sanity Studio Demo",
  apiVersion: "2023-09-09",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {types: schemas},
  // useCdn: true,
})

export default config;