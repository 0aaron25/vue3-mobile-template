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
import { viteMockServe } from "vite-plugin-mock"
import { visualizer } from "rollup-plugin-visualizer"

export default (env: ConfigEnv) => {
  const isBuild = env.command === "build"
  const prodMock = true
  const vitePlugins: (Plugin | Plugin[])[] = [
    vue(),
    visualizer({
      filename: "./node_modules/.cache/visualizer/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
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
    viteMockServe({
      //忽略以_开头的文件
      ignore: /^\_/,
      //从mock文件夹读取mock数据
      mockPath: "mock",
      //设置是否启用本地 xxx.ts 文件，不要在生产环境中打开它.设置为 false 将禁用 mock 功能
      localEnabled: !isBuild,
      // 设置打包是否启用 mock 功能
      prodEnabled: isBuild && prodMock,
    }),
  ]

  return vitePlugins
}
