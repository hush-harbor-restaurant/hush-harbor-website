import { defineType } from "sanity";

export default defineType({
  name: "menuItem",
  title: "Menu Item",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "price", title: "Price", type: "number" },
    {
      name: "section",
      title: "Menu Section",
      type: "reference",
      to: [{ type: "menuSection" }],
    },
    { name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] },
  ],
});
