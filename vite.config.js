import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function isExternal(id: string) {
  return !id.startsWith(".") && !path.isAbsolute(id) && !id.startsWith("~/");
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rollupOptions: {
    external: isExternal,
  },
});
