import { fileURLToPath, URL } from "url"
import { defineConfig } from "vite"
import creatVitePlugins from "./config/vitePlugin"
import type { ConfigEnv } from "vite"
export default defineConfig((env: ConfigEnv) => {
  return {
    plugins: creatVitePlugins(env),
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
        "@api": fileURLToPath(new URL("./src/api", import.meta.url)),
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
  }
})
