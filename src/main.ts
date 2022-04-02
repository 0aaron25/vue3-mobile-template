import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"

import router from "@/router"
//导入vant组件
import vantCompoents from "@plugins/vant/vant"

//导入全局样式
import "@styles/global.scss"

//导入svg组件
import "virtual:svg-icons-register"

const app = createApp(App)
//注册插件等

app.config.errorHandler = (err, vm, info) => {
  // 处理错误
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  console.log(err, vm, info)
}

app.use(vantCompoents).use(createPinia()).use(router).mount("#app")
