import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/",
  //server:{proxy:{"/apix": {target: "http://127.0.0.1:5173", //8080'http://localhost:5173",
  //                         changeOrigin: true, 
  //                         secure: false
  //                        }
  //              }
  //       },
//server:{proxy:{"/api/v1": "http://localhost:5173/",
//              },
//       },


       server:{proxy:{"/api/v1": { target: "http://localhost:5173/",    
       changeOrigin: true,
       secure: false,
       ws: true, 

       configure: (proxy, _options) => {
         proxy.on('error', (err, _req, _res) => {
           console.log('proxy error', err);
         });
         proxy.on('proxyReq', (proxyReq, req, _res) => {
           console.log('Sending Request to the Target:', req.method, req.url);
         });
         proxy.on('proxyRes', (proxyRes, req, _res) => {
           console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
         });
       },                          



     },
},
},







  plugins: [react()],
  build: {
    outDir: "/dist/",
    emptyOutDir: true,
    minify: false,
  },
})
