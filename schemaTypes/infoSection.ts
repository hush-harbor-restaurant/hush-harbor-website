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
  ],
  preview: {
    prepare() {
      return {
        title: "Info Settings",
        subtitle: 'Edit blurb and hours in the "Info" section of the website',
      };
    },
  },
};
