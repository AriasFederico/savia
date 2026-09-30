import babel from '@rolldown/plugin-babel';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  css: {
    preprocessorOptions: {
      scss: {
        // Aquí le dices a Vite que "inyecte" el archivo en cada .scss
        // Asegúrate de poner la ruta correcta hacia tu archivo
        additionalData: `@use "/src/_config.scss" as *;`,
      },
    },
  },
});
