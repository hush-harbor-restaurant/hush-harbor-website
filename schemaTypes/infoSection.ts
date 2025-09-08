export default {
  name: "infoSection",
  title: "Info Section",
  type: "document",
  fields: [
    {
      name: "blurb",
      title: "Short Blurb",
      type: "text",
    },
    {
      name: "hours",
      title: "Open Hours",
      type: "string",
    },
    {
      name: "image",
      title: "Info Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Info Settings",
        subtitle: 'Edit blurb, hours, and image in the "Info" section',
      };
    },
  },
};
