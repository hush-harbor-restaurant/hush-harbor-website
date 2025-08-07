export default {
  name: "eventSpaceBlurb",
  title: "Events Blurb",
  type: "document",
  fields: [
    {
      name: "blurb",
      title: "Short Blurb",
      type: "text",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Events Blurb",
        subtitle: 'Edit the top blurb on the "Events" page',
      };
    },
  },
};
