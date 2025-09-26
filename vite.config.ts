// vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// 1. 'url' 모듈에서 필요한 함수를 추가로 가져옵니다.
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 2. '@'의 경로를 최신 방식에 맞게 수정합니다.
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})