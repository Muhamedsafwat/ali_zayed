import { CollectionConfig } from "payload";

const SevenVideoCategories: CollectionConfig = {
  slug: "seven-video-categories",
  labels: {
    singular: "Category",
    plural: "Categories",
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "name",
    group: "Seven",
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Category name",
      required: true,
    },
    {
      name: "description",
      type: "text",
      label: "Description",
      required: false,
    },
    {
      name: "aspect_ratio",
      type: "select",
      options: ["Portrait", "Landscape"],
    },
  ],
};

export default SevenVideoCategories;
