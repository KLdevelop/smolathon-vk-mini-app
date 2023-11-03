import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import viteBasicSslPlugin from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  plugins: [react(), viteBasicSslPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 10888,
    https: true,
  },
});
