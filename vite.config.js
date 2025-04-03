import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/engy-47.github.io/',
  plugins: [react()],
});

