import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";

//import collections
import Media from "./src/app/(payload)/_collections/Media";
import Videos from "./src/app/(payload)/_collections/Videos";
import Categories from "./src/app/(payload)/_collections/Categories";
import Projects from "@/app/(payload)/_collections/Projects";
import { OrderedVideos } from "@/app/(payload)/_collections/OrderedVideos";

export default buildConfig({
  editor: lexicalEditor(),
  globals: [OrderedVideos],
  collections: [Media, Categories, Videos, Projects],
  secret: process.env.PAYLOAD_SECRET || "dlkfjdslkfjdlkfj",
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "mongodb://127.0.0.1:27017/ali_zayed",
  }),
  sharp,
});
