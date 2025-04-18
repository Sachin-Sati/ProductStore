import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: process.env.NODE_ENV === 'production' 
          ? 'https://mern-stack-project-5kk4.onrender.com' 
          : "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      }
    }
  }
})