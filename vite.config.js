import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.NODE_ENV === "development" ? "/" : "https://cdn.taiiiyang.com/cocktails",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  extensions: [".js", ".jsx", ".ts", ".tsx"],
});
