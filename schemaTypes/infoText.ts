import { defineType } from "sanity";

export default defineType({
  name: "infoText",
  title: "Info Text",
  type: "document",
  fields: [
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
});
