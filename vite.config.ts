import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NEXTAUTH_URL": JSON.stringify(process.env.NEXTAUTH_URL || ""),
  },
});
