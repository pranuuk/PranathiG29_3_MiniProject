import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Mini-e-commerce-react/', 
  plugins: [react()],
});
