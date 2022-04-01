import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import "@styles/global.scss"
import router from "@/router"
import "virtual:svg-icons-register"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount("#app")
