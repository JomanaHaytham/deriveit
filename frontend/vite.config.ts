import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// During development, /api is proxied to the FastAPI backend so the browser
// never needs to know the backend URL (and no API key ever reaches the client).
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: { chunkSizeWarningLimit: 900 },
  server: {
    port: 5173,
    proxy: {
      '/api': { target: process.env.VITE_BACKEND_URL ?? 'http://127.0.0.1:8000', changeOrigin: true },
    },
  },
})
