import { defineConfig } from 'vite';

export default defineConfig({
    root: '.',
    base: '/InfiniteCS-Website/',
    build: { outDir: 'dist' },
    server: { open: true },
});
