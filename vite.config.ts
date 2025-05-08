import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Maranatha-PETVIP/', // Substitua pelo nome do seu repositório
  build: {
    outDir: 'dist',
    assetsDir: './assets' // Adicione esta linha
  }
});