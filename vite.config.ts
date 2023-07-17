import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {outDir: '/Users/nicolacassagovilla/Documents/Informatik/React-JS/thecodegeek.github.io', emptyOutDir: true}
  }
)
