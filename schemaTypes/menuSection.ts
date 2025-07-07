import { defineType } from "sanity";

export default defineType({
  name: "menuSection",
  title: "Menu Section",
  type: "document",
  fields: [
    { name: "title", title: "Section Title", type: "string" },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          "food",
          "cocktail",
          "beer",
          "wine",
          "non-alcoholic",
          "special",
          "happy hour",
        ],
      },
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Used to order sections on the page",
    },
  ],
});
