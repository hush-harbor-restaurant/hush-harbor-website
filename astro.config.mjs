import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: netlify(),
  integrations: [
    sanity({
      projectId: "0s7omnpm",
      dataset: "production",
      useCdn: false,
      apiVersion: "2025-01-28",
      studioBasePath: "/admin",
    }),
    react(),
  ],
  vite: {
    define: {
      "process.env": {},
    },
    plugins: [tailwindcss()],
  },
});
