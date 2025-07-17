import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**", ".netlify/**"],
  },
  {
    plugins: {
      "simple-import-sort": eslintPluginSimpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
    },
  },
];
