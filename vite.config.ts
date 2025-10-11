import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Toute requête commençant par /api sera proxyfée vers le backend
      '/api': 'http://127.0.0.1:5078'
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
