import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig(({ mode }) => {
  // Carga variables de entorno desde `.env`, `.env.production`, etc.
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      host: '0.0.0.0', // Necesario para que funcione en contenedores Docker
      port: 5173,
    },
    define: {
      // Esto expone las variables de entorno al código del cliente
      'process.env': {
        VITE_API_URL: env.VITE_API_URL,
      },
    },
  };
});