import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    postcss: "./postcss.config.js",
  },
  optimizeDeps: {
    force: true,
  },
});
