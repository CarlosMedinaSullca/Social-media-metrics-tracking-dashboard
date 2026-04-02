import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      '/facebook': {
        target: 'https://graph.facebook.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/facebook/, '')
      }
    }
  },
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
    },
  },
});
