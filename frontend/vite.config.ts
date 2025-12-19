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
          // Séparer les vendors pour un meilleur code splitting
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
    // Compression agressive
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 3, // Plus de passes pour une meilleure compression
        dead_code: true,
        unused: true,
        collapse_vars: true,
        reduce_vars: true,
      },
      format: {
        comments: false,
      },
      mangle: {
        safari10: true,
      },
    },
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Optimisation des assets
    assetsInlineLimit: 4096, // Inline les petits assets (< 4KB)
    cssCodeSplit: true,
    cssMinify: true, // Minifier le CSS
    sourcemap: false, // Désactiver les sourcemaps en production
    // Tree shaking agressif
    treeshake: {
      moduleSideEffects: false,
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@supabase/supabase-js'], // Exclure si non utilisé
  },
  // Optimisation CSS
  css: {
    devSourcemap: false,
  },
});
