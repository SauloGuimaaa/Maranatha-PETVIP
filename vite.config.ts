import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Maranatha-PETVIP/',
  build: {
    outDir: 'dist',
    emptyOutDir: true, // Limpa o diretório antes de cada build
    assetsDir: 'assets', // Diretório de assets relativo ao outDir
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]', // Padrão de nomeação
        entryFileNames: 'assets/[name].[hash].js' // Organiza os arquivos JS
      }
    }
  },
  server: {
    port: 3000, // Porta padrão para desenvolvimento
    strictPort: true // Evita a seleção automática de portas
  },
  preview: {
    port: 4173 // Porta para vite preview
  }
});