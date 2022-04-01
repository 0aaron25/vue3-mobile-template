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

//注册插件等
createApp(App).use(vantCompoents).use(createPinia()).use(router).mount("#app")
