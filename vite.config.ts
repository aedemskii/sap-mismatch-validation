import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/sap-mismatch-validation',
  plugins: [react()],
});
