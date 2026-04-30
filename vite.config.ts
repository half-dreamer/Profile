import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/",
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        about: "about.html",
        learning: "learning.html",
        life: "life.html"
      }
    }
  }
});
