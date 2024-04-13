import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
/*
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
   plugins: [react()],
  define: {
    // Pass environment variables to the client-side code
    'import.meta.env.VITE_AGENT': JSON.stringify(process.env.VITE_AGENT),
  },
});*/