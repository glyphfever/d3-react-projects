
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  base: '/d3-react-projects/',

  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        bar: resolve(import.meta.dirname, 'projects/bar-chart/index.html'),
        pie: resolve(import.meta.dirname, 'projects/pie-chart/index.html'),
      },
    },
  },
});
