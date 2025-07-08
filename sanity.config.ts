import { defineConfig } from "sanity";
import { schemaTypes } from "./schemaTypes";
import { structureTool } from "sanity/structure";
import deskStructure from "./deskStructure";

export default defineConfig({
  name: "default",
  title: "Hush Harbor",
  projectId: "0s7omnpm",
  dataset: "production",
  plugins: [structureTool({ structure: deskStructure })],
  schema: {
    types: schemaTypes,
  },
});
