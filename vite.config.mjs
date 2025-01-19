import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Disable source maps in production
    cssCodeSplit: true, // Split CSS for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Code splitting: separate dependencies for better performance
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  server: {
    port: 3000, // Specify development server port
    strictPort: true, // Fail if the specified port is in use
    open: true, // Automatically open the browser
    cors: true, // Enable CORS in development
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Pre-bundle dependencies
  },
});
