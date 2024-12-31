import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'


export default defineConfig({
  plugins: [react()],
  server:{
    host:true,
      },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
