import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), react()],
  vite: {
    ssr: {
      noExternal: ["bulma"]
    }
  },
  adapter: node({
    mode: "standalone"
  })
});