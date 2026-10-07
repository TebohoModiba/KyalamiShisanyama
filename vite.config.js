import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Tells Vite to resolve all assets relative to your GitHub repository folder path
  base: '/KyalamiShisanyama/',
})
