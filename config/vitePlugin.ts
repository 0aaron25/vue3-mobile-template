import vue from "@vitejs/plugin-vue"
import path from "path"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import styleImport, { VantResolve } from "vite-plugin-style-import"
import OptimizationPersist from "vite-plugin-optimize-persist"
import PkgConfig from "vite-plugin-package-config"
import type { ConfigEnv, Plugin } from "vite"
import ViteRestart from "vite-plugin-restart"

export default (env: ConfigEnv) => {
  const vitePlugins: (Plugin | Plugin[])[] = [
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
    ViteRestart({
      // 配置监听的文件
      restart: ["**/config/*.[jt]s"],
    }),
  ]
  return vitePlugins
}
