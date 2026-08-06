import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Multi-page app: every page has its own physical HTML entry point.
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  appType: "mpa",
  server: { port: 8080, host: true },
  build: {
    rollupOptions: {
      input: {
        home: "index.html",
        about: "about/index.html",
        services: "services/index.html",
        contact: "contact/index.html",
        notFound: "404.html",
      },
    },
  },
});
