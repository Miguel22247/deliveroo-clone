import { SanityClient, createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const sanityClient = createClient({
  projectId: "nhpt0tgo",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07",
})

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);

export default sanityClient;