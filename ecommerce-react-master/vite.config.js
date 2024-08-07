// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// export default defineConfig({
//   plugins: [
//     react(),
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
//     outDir: 'dist',
//     rollupOptions: {
//       input: {
//         main: path.resolve(__dirname, 'index.html'),
//       }
//     }
//   }
// });







// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { VitePWA } from 'vite-plugin-pwa';
// import path from 'path';

// export default defineConfig({
//   plugins: [
//     react(),
//     VitePWA({
//       injectManifest: {
//         swSrc: path.resolve(__dirname, 'src/sw-src.js'),
//       },
//       manifest: {
//         name: 'My E-Commerce App',
//         short_name: 'E-Commerce',
//         description: 'My awesome e-commerce app!',
//         theme_color: '#ffffff',
//         icons: [
//           {
//             src: 'icon-192x192.png',
//             sizes: '192x192',
//             type: 'image/png'
//           },
//           {
//             src: 'icon-512x512.png',
//             sizes: '512x512',
//             type: 'image/png'
//           }
//         ]
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
//     outDir: 'dist',
//     rollupOptions: {
//       input: {
//         main: path.resolve(__dirname, 'index.html'),
//       }
//     },
//     chunkSizeWarningLimit: 1600,
//   }
// });





import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectManifest: {
        swSrc: path.resolve(__dirname, 'src/sw-src.js'),
      },
      manifest: {
        name: 'My E-Commerce App',
        short_name: 'E-Commerce',
        description: 'My awesome e-commerce app!',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      devOptions: {
        enabled: true,
      },
    })
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
    },
    chunkSizeWarningLimit: 1600, // Adjust chunk size warning limit
  }
});
