import { CollectionConfig } from "payload/types";

const Posts: CollectionConfig = {
  slug: "posts",
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
      required: true,
      unique: true,
      localized: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
      localized: true,
    },
    {
      name: "tags",
      type: "array",
      minRows: 1,
      required: true,
      fields: [
        {
          name: "tag",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "published",
      type: "checkbox",
    },
  ],
};

export default Posts;
