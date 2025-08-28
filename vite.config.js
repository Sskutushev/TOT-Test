import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // For local development (serve), base is '/'.
  // For GitHub Pages (build), base must be '/repository-name/'.
  const base = command === 'serve' ? '/' : '/TOT-Test/';
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    base: base,
    build: {
      outDir: 'docs',
    },
  };
});