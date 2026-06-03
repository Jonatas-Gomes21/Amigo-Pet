import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import flowbiteReact from "flowbite-react/plugin/vite";
import sitemap from "vite-plugin-sitemap"; // ← adiciona essa linha

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    flowbiteReact(),
    sitemap({
      hostname: "https://amigo-petshop.vercel.app",
      routes: ["/", "/agendamento"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});