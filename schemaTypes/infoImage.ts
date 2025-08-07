export default {
  name: "infoImage",
  title: "Image for the info section",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "alt",
      title: "Alternative Text",
      type: "string",
    },
  ],
};
