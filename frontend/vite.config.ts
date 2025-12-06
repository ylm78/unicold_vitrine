import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5050,
    host: true,
  },
  build: {
    // Optimisation du build
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Séparer les vendors
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('lucide-react')) {
              return 'ui-vendor';
            }
            if (id.includes('emailjs')) {
              return 'emailjs-vendor';
            }
            // Autres node_modules
            return 'vendor';
          }
        },
        // Optimisation des noms de chunks
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2, // Plus de passes pour une meilleure compression
      },
      format: {
        comments: false,
      },
    },
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Optimisation des assets
    assetsInlineLimit: 4096, // Inline les petits assets (< 4KB)
    cssCodeSplit: true,
    sourcemap: false, // Désactiver les sourcemaps en production pour réduire la taille
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
