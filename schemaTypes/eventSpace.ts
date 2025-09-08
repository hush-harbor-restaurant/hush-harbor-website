export default {
  name: "eventSpace",
  title: "Event Space",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "seated",
      title: "Seated Capacity",
      type: "number",
    },
    {
      name: "standing",
      title: "Standing Capacity",
      type: "number",
    },
    {
      name: "reservationUrl",
      title: "Reservation URL",
      type: "url",
      description: "Link to reservation page (e.g., Tock or other system)",
      validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }),
    },
    {
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      description: "Lower numbers appear first",
      validation: (Rule) => Rule.required(),
    },
  ],
};
