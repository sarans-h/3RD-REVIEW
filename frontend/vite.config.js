import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://threerd-review.onrender.com', // Your backend server
        changeOrigin: true,
        // secure: true, // Set to true in production, false in development
        // Automatically forward cookies in production
        withCredentials: true,
      },
    },
  },
});
