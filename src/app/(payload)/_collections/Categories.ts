import { CollectionConfig } from "payload";

const Categories: CollectionConfig = {
  slug: "categories",
  labels: {
    singular: "Category",
    plural: "Categories",
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "name",
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

export default Categories;
