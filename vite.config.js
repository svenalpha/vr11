import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/",
  server:{proxy:{"/apix": {target: "'http://127.0.0.1:5173", //8080'http://localhost:5173",
                           changeOrigin: true, 
                           secure: false
                          }
                }
         },
  plugins: [react()],
  build: {
    outDir: "/dist/",
    emptyOutDir: true,
    minify: false,
  },
})
