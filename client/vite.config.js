import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy:{
      '/api':{
        target: 'http://localhost:3000',
        secure: false,
      },
    },
    
  },
  build: {
    rollupOptions: {
      external: ['jspdf', 'file-saver'],
    }
  }
});
