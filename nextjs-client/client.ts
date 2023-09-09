import sanityClient from "@sanity/client";
const sanityProjectID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export const readClient = sanityClient({
  projectId: `${sanityProjectID}`,
  dataset: "production",
  useCdn: true,
})