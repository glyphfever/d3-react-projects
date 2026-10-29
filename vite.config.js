
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { readdirSync, existsSync } from 'node:fs';

const projectRoot = resolve(import.meta.dirname, 'projects');

const projectEntries = Object.fromEntries(
  readdirSync(projectRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .filter((entry) =>
      existsSync(resolve(projectRoot, entry.name, 'index.html'))
    )
    .map((entry) => [
      entry.name,
      resolve(projectRoot, entry.name, 'index.html'),
    ])
);

export default defineConfig({
  plugins: [react()],
  base: '/d3-react/',

  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        ...projectEntries,
      },
    },
  },
});
