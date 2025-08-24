import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // For local development (serve), base is '/'.
  // For GitHub Pages (build), base must be '/repository-name/'.
  const base = command === 'serve' ? '/' : '/TOT-Test/'; // Corrected base path
  return {
    plugins: [react()],
    base: base,
  };
});