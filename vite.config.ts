/*
 * @Author: nongchatea
 * @Date: 2024-01-09 15:31:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-01-22 13:37:27
 * @Description: ~
 */
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import { viteMockServe } from 'vite-plugin-mock';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
// 自动引入es
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 获取环境变量
  const env = loadEnv(mode, process.cwd());
  return {
    base: './',
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    },
    server: {
      hmr: true,
      // vite展示端口
      port: Number(env.VITE_WEB_PORT),
      proxy: {
        [env.VITE_SERVER_PREFIX_API]: {
          // 将所有访问VITE_SERVER_PREFIX_API(e.g. /api)开头的接口的host:port转换为target
          target: env.VITE_SERVER_API_URL,
          // 允许跨域传输
          changeOrigin: true,
          // 配置用来修改请求接口的访问(e.g. 抹去使得访问后端的请求不出现VITE_SERVER_PREFIX_API)
          rewrite: (path) => path.replace(new RegExp('^' + env.VITE_SERVER_PREFIX_API), '')
        }
      }
    },
    plugins: [
      vue(),
      VueSetupExtend(),
      AutoImport({
        // dts: 'src/auto-imports.d.ts', // 可以自定义文件生成的位置，默认是根目录下
        imports: ['vue']
      }),
      viteMockServe({
        mockPath: './src/mock',
        // 应用mock数据
        enable: env.VITE_ENABLE_MOCK === 'true' ? true : false,
        watchFiles: true,
        logger: true
      })
    ]
  };
});
