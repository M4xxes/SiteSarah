import { defineConfig } from "vite";

// Configuration Vite minimale pour un site statique
// On sert simplement les fichiers HTML/CSS/IMG existants.
export default defineConfig({
  root: ".",
  server: {
    port: 5173,
    open: "/",
  },
  preview: {
    port: 5173,
  },
});

