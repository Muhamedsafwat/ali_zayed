import { CollectionConfig } from "payload";

const SevenVideos: CollectionConfig = {
  slug: "seven-videos",
  labels: {
    singular: "Video",
    plural: "Videos",
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    group: "Seven",
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
      relationTo: "seven-video-categories",
      required: true,
    },
    {
      name: "link",
      type: "text",
      label: "Google Drive Link ( share -> copy link )",
      required: true,
    },
  ],
};

export default SevenVideos;
