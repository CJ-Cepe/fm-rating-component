const { defineConfig } = require('vite')
const path = require('path')

module.exports = defineConfig({
    base: './',
    plugins: [react()],
    build: {
        outDir: 'dist',
        sourcemap: true,
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
            },
        },
    },
})