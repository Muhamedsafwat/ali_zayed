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
      required: true,
    },
  ],
};

export default Videos;
