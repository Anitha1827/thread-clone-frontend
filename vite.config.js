import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // Proxy configuration to handle CORS during development
    proxy: {
      "/api": {
        target: "https://thread-clone-backend.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
