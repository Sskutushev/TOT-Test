import { defineConfig } from 'vite'; // Trigger new deployment
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // For local development (serve), base is '/'.
  // For GitHub Pages (build), base must be '/repository-name/'.
  const base = '/';
  return {
    plugins: [react()],
    base: base,
    build: {
      outDir: 'docs',
    },
  };
});