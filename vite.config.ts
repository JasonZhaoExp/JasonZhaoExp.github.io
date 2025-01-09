import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/JasonZhaoExp.github.io/',
  server: {
    port: 12345,
    host: '127.0.0.1'
  }
});
