import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "src/vue/index.ts",
      name: "NoiserText",
      fileName: "index",
      formats: ["es"],
    },
    outDir: "dist/vue",
  },
});
