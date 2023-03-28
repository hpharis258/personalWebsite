import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  baseDirectory: '/haroldasvaranauskas.com/dist',
  plugins: [react()],
})
