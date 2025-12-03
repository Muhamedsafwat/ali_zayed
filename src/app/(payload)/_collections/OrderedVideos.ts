// @ts-nocheck
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
  hooks: {
    beforeValidate: [
      async ({ data, req }) => {
        const payload = req.payload;

        // جلب كل categories
        const categoriesRes = await payload.find({
          collection: "categories",
          limit: 1000,
        });
        const categories = categoriesRes.docs || [];

        // جلب كل الفيديوهات
        const videosRes = await payload.find({
          collection: "videos",
          limit: 10000,
        });
        const videos = videosRes.docs || [];

        // إذا الـ Global فاضي (categories مش موجودة أو طولها صفر)
        if (!data.categories || data.categories.length === 0) {
          const categoriesWithVideos = categories.map((cat) => ({
            name: cat.name,
            videos: videos
              .filter((v) => v.category?.id === cat.id)
              .map((v) => ({ video: v.id })),
          }));
          return {
            ...data,
            categories: categoriesWithVideos,
          };
        }

        // لو فيه بيانات موجودة → خليها كما هي
        return data;
      },
    ],
  },

  fields: [
    {
      name: "categories",
      label: "Categories",
      type: "array",
      minRows: 1,
      labels: {
        singular: "Category",
        plural: "Categories",
      },
      fields: [
        {
          name: "name",
          label: "Category Name",
          type: "text",
          required: true,
        },
        {
          name: "videos",
          label: "Videos",
          type: "array",
          minRows: 0,
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
    },
  ],
};
