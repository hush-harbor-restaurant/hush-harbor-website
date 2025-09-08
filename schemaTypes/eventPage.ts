export default {
  name: "eventPage",
  title: "Events Page",
  type: "document",
  fields: [
    {
      name: "blurb",
      title: "Short Blurb",
      type: "text",
      description: 'Appears at the top of the "Private Events" page.',
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Event Page Settings",
        subtitle: 'Edit the top blurb on the "Events" page',
      };
    },
  },
};
