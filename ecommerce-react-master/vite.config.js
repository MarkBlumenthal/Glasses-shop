import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  },
  preview: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      }
    }
  }
});






// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';
// import { VitePWA } from 'vite-plugin-pwa';

// export default defineConfig({
//   plugins: [
//     react(),
//     VitePWA({
//       srcDir: 'src',
//       filename: 'sw.js',
//       strategies: 'injectManifest',
//       injectManifest: {
//         swSrc: path.resolve(__dirname, 'src/sw-src.js'),
//       },
//       devOptions: {
//         enabled: true,
//       },
//     })
//   ],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src')
//     }
//   },
//   server: {
//     port: process.env.PORT || 3000,
//     host: '0.0.0.0'
//   },
//   preview: {
//     port: process.env.PORT || 3000,
//     host: '0.0.0.0'
//   },
//   build: {
//     outDir: 'dist'
//   }
// });



