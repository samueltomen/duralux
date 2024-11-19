import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.34.101',
    port: 3000,
  },
  resolve: {
    alias: {
      '@/components': '/src/components',
      '@/utils': '/src/utils',
      '@/hooks': '/src/hooks',
    },
  },
})
