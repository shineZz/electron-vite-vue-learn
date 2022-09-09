import { rmSync } from 'fs'
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron, { onstart } from 'vite-plugin-electron'
import pkg from './package.json'
import AutoImport from 'unplugin-auto-import/vite'

rmSync('dist', { recursive: true, force: true }) // v14.14.0

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'], // 自动导入vue和vue-router相关函数
      dts: 'src/auto-import.d.ts', // 生成 `auto-import.d.ts` 全局声明
    }),
    electron({
      main: {
        entry: 'electron/main/index.ts',
        vite: {
          build: {
            // For Debug
            sourcemap: true,
            outDir: 'dist/electron/main',
          },
          // Will start Electron via VSCode Debug
          plugins: [process.env.VSCODE_DEBUG ? onstart() : null],
        },
      },
      preload: {
        input: {
          // You can configure multiple preload here
          index: path.join(__dirname, 'electron/preload/index.ts'),
        },
        vite: {
          build: {
            // For Debug
            sourcemap: 'inline',
            outDir: 'dist/electron/preload',
          },
        },
      },
      // Enables use of Node.js API in the Renderer-process
      // https://github.com/electron-vite/vite-plugin-electron/tree/main/packages/electron-renderer#electron-renderervite-serve
      renderer: {},
    }),
  ],
  server: process.env.VSCODE_DEBUG
    ? {
        host: pkg.debug.env.VITE_DEV_SERVER_HOSTNAME,
        port: pkg.debug.env.VITE_DEV_SERVER_PORT,
      }
    : undefined,
})
