import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginRadar } from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePluginRadar({
      // Google Analytics tag injection
      enableDev: true,
      analytics: {
        id: 'G-QKGXLHPFGK',
      },
    }),
    react()],
})
