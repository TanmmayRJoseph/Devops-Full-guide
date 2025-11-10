import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    host: true, // allows access from Docker container network
    port: 5173,
    strictPort: true, // fail if 5173 is already in use
    watch: {
      usePolling: true, // 👈 enables file change detection inside Docker on Windows
    },
  },
});
