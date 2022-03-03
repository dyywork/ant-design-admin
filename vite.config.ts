import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const {resolve} = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  server: {
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      },
    
    }
  }
})
