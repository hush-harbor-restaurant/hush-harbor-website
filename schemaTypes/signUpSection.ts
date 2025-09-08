export default {
  name: "signUpSection",
  title: "Sign Up Section",
  type: "document",
  fields: [
    {
      name: "header",
      title: "Header",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ctaUrl",
      title: "CTA Button URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "horizontalImages",
      title: "Horizontal Images (4)",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .min(4)
          .max(4)
          .error("Exactly 4 horizontal images are required."),
    },
    {
      name: "verticalImages",
      title: "Vertical Images (2)",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .max(2)
          .error("Exactly 2 vertical images are required."),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Sign Up Section blurb",
      };
    },
  },
};
