import { defineConfig } from "vite";

export default defineConfig({
  base: "/Profile/",
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
