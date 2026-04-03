import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/2100-Group-Website/',
  plugins: [react()],
  assetsInclude: ['**/*.stl'],
})
