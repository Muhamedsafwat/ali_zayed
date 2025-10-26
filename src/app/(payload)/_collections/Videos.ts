//@ts-nocheck
import { CollectionConfig } from "payload";

const Videos: CollectionConfig = {
  slug: "videos",
  labels: {
    singular: "Video",
    plural: "Videos",
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    group: "videos",
  },
  hooks: {
    afterChange: [
      async ({ req }) => {
        const payload = req.payload;
        const videos = await payload.find({
          collection: "videos",
          limit: 10000,
        });

        await payload.updateGlobal({
          slug: "videosOrder",
          data: {
            ordered_videos: videos.docs.map((v) => ({ video: v.id })),
          },
        });
      },
    ],
    afterDelete: [
      async ({ req }) => {
        const payload = req.payload;
        const videos = await payload.find({ collection: "videos", limit: 0 });

        await payload.updateGlobal({
          slug: "videosOrder",
          data: {
            videos: videos.docs.map((v) => ({ video: v.id })),
          },
        });
      },
    ],
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: false,
    },
    {
      name: "description",
      type: "text",
      label: "Description",
      required: false,
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      required: true,
    },
    {
      name: "link",
      type: "text",
      label: "Google Drive Link ( share -> copy link )",
    },
    {
      name: "youtube_url",
      type: "text",
      label: "Youtube Link ( share -> copy link )",
    },
    {
      name: "highlight",
      type: "checkbox",
      admin: {
        position: "sidebar",
      },
    },
  ],
};

export default Videos;
