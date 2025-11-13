import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Use environment variables for flexibility
const SERVER_PORT = process.env.VITE_PORT || 3000;
const API_TARGET = process.env.VITE_API_URL || "http://localhost:5000";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(SERVER_PORT),
    proxy: {
      "/api": {
        target: API_TARGET,
        changeOrigin: true,
      },
    },
  },
});
