import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: '0s7omnpm',
      dataset: 'production',
      useCdn: false,
      apiVersion: "2025-01-28",
      studioBasePath: '/admin',
    }),
    react()
  ],
  vite: {
    define: {
      'process.env': {},
    },
  },
});
