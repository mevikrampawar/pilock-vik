import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages hosts this repo under /pilock-vik/, so asset paths must
  // be absolute-relative to that base at runtime. (Prod repo stays /PI_Locks/.)
  base: '/pilock-vik/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Shorthand so components can import via "@/…" everywhere.
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    // Split heavy framework code into its own chunk so the marketing
    // page's first paint loads a leaner bundle.
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'vendor-react',
              test: /node_modules\/(react|react-dom|react-router|react-router-dom|next-themes|sonner)\//,
            },
            {
              name: 'vendor-forms',
              test: /node_modules\/(react-hook-form|zod|@hookform)\//,
            },
            {
              name: 'vendor-radix',
              test: /node_modules\/radix-ui\//,
            },
          ],
        },
      },
    },
  },
})