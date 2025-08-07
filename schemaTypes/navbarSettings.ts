export default {
  name: "navbarSettings",
  title: "Navbar Settings",
  type: "document",
  fields: [
    {
      name: "reservationUrl",
      title: "Reservation URL",
      type: "url",
      validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }).required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Navbar Settings",
        subtitle: "Edit global reservation link",
      };
    },
  },
};
