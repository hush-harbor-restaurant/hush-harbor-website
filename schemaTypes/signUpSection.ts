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
  ],
  preview: {
    prepare() {
      return {
        title: "Sign Up Section blurb",
      };
    },
  },
};
