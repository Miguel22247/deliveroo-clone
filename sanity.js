import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "nhpt0tgo",
  dataset: "project",
  useCdn: true,
  apiVersion: "2024-02-14",
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;