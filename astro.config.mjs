import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://hushharbor.co",
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
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
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
