import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  root: path.resolve(__dirname, 'demo/src'),
  publicDir: path.resolve(__dirname, 'demo/public'),
  plugins: [react()],
  resolve: {
    alias: {
      'react-image-annotation-v2': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'demo/dist'),
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
}); 