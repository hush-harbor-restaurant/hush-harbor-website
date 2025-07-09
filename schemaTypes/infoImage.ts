import { defineType } from "sanity";

export default defineType({
  name: "infoImage",
  title: "Info Image",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "A short name to identify the image (e.g., 'Info Photo')",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "alt",
      title: "Alt Text",
      type: "string",
      description: "Important for accessibility and SEO",
    },
  ],
});
