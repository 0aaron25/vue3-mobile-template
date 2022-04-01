import vue from "@vitejs/plugin-vue"
import { fileURLToPath, URL } from "url"
import { defineConfig } from "vite"
import path from "path"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import styleImport, { VantResolve } from "vite-plugin-style-import"
import OptimizationPersist from "vite-plugin-optimize-persist"
import PkgConfig from "vite-plugin-package-config"

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      dts: "./src/types/auto-imports.d.ts",
    }),
    // //组件自动导入
    Components({
      // dirs 指定组件所在位置，默认为 src/components
      // 可以让我们使用自己定义组件的时候免去 import 的麻烦
      dirs: ["src/components/"],
      // 配置需要将哪些后缀类型的文件进行自动按需引入
      extensions: ["vue"],
      dts: "./src/types/components.d.ts",
    }),
    //样式导入
    styleImport({
      resolves: [VantResolve()],
    }),
    // //svg插件
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/icons")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",
    }),
    //解决首次启动项目耗时久问题
    PkgConfig(),
    OptimizationPersist(),
  ],
  resolve: {
    //变量别名设置
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
      "@stores": fileURLToPath(new URL("./src/stores", import.meta.url)),
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url),
      ),
      "@plugins": fileURLToPath(new URL("./src/plugins", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      //scss全局变量导入
      scss: {
        additionalData: `@import "@styles/variable.scss";`,
      },
    },
  },
})
