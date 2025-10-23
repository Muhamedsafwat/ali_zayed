import { CollectionConfig } from "payload";

const Projects: CollectionConfig = {
  slug: "projects",
  labels: {
    singular: "Project",
    plural: "Projects",
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "name",
    group: "projects",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Project name",
          required: true,
        },
        {
          name: "type",
          type: "text",
          required: true,
          label: "Type or Subtitle",
        },
      ],
    },
    {
      name: "thumbnail",
      type: "relationship",
      relationTo: "media",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      required: true,
    },
    {
      name: "details",
      type: "array",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
            },
            {
              name: "content",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};

export default Projects;
