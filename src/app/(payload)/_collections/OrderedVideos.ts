// src/globals/VideosOrder.ts
import { GlobalConfig } from "payload";

export const OrderedVideos: GlobalConfig = {
  slug: "videosOrder",
  label: "Videos Order ⬇️⬆️",
  access: {
    read: () => true,
  },
  admin: {
    group: "videos",
  },
  fields: [
    {
      name: "ordered_videos",
      label: "Videos List",
      type: "array",
      minRows: 1,
      labels: {
        singular: "Video",
        plural: "Videos",
      },
      fields: [
        {
          name: "video",
          label: "Video",
          type: "relationship",
          relationTo: "videos",
          required: true,
        },
      ],
    },
  ],
};
