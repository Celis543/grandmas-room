// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/grandmas-room/', 
  assetsInclude: ['**/*.hdr','**/*.glb'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['three', 'bootstrap'] // Example of splitting 'three' and 'bootstrap' into a vendor chunk
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Adjust chunk size warning limit if necessary
  }
});
