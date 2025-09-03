import { CollectionConfig } from "payload";

const Blogs: CollectionConfig = {
  slug: "posts",
  labels: {
    singular: "Post",
    plural: "Posts",
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title_en",
    group: "Media & News",
  },
  fields: [
    {
      name: "image",
      type: "relationship",
      relationTo: "media",
      label: "Image",
      hasMany: true,
      required: true,

    },
    {
      name: "tags",
      type: "text",
      hasMany: true,
      label: "Key words (for seo)",
    },
    {
      name: "title_en",
      type: "text",
      label: "Title (English)",
      required: true,
    },
    {
      name: "title_ar",
      type: "text",
      label: "Title (Arabic)",
      required: true,
    },
    {
      name: "description_en",
      type: "text",
      required: true,
    },
    {
      name: "description_ar",
      type: "text",
      required: true,
    },
    // {
    //   name: "body_ar",
    //   type: "richText",
    //   label: "Body (Arabic)",
    //   required: true,
    // },
    // {
    //   name: "body_en",
    //   type: "richText",
    //   label: "Body (English)",
    //   required: true,
    // },
  ],
};

export default Blogs;
