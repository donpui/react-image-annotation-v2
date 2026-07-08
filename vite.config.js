import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  publicDir: false,
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ReactImageAnnotation',
      formats: ['es', 'cjs'],
      fileName: (format) => {
        if (format === 'es') return 'react-image-annotation-v2.mjs'
        if (format === 'cjs') return 'react-image-annotation-v2.cjs'
        return 'react-image-annotation-v2.js'
      },
    },
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'styled-components',
      ],
      output: {
        exports: 'named',
      },
    },
  },
}) 
