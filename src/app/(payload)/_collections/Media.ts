import { CollectionConfig } from "payload";

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  labels: {
    singular: "Media",
    plural: "Media",
  },
  admin: {
    useAsTitle: "alt",
  },
  upload: {
    staticDir: "media",
    mimeTypes: ["image/*"], // Restrict to images only
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Alt Text",
      required: true,
    },
  ],
};

export default Media;
