import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // For local development (serve), base is '/'.
  // For GitHub Pages (build), base should be '/' if serving from root of gh-pages branch.
  const base = '/'; // Changed to '/' for both serve and build for gh-pages root deployment
  return {
    plugins: [react()],
    base: base,
  };
});