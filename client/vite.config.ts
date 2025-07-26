import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      // Pastikan path ini benar relatif terhadap lokasi client/vite.config.ts
      "@": path.resolve(import.meta.dirname, "src"), // Mengacu ke client/src
      "@shared": path.resolve(import.meta.dirname, "..", "shared"), // Mengacu ke shared/
      "@assets": path.resolve(import.meta.dirname, "..", "attached_assets"), // Mengacu ke attached_assets/
    },
  },
  root: path.resolve(import.meta.dirname), // Root proyek Vite adalah direktori 'client'
  build: {
    // --- INI PERUBAHAN KRUSIAL UNTUK client/vite.config.ts ---
    // Akan membuat output di 'dist/public' di root repositori Vercel
    // import.meta.dirname di client/vite.config.ts adalah 'client/'
    // '..' naik ke root repositori, lalu ke 'dist/public'
    outDir: path.resolve(import.meta.dirname, "..", "dist", "public"), // Path final: kersandona/dist/public
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
