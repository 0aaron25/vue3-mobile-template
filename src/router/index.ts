import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

import { useUserStore } from "@stores/user"

// 白名单
const whiteList = ["/login"]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login/Login.vue"),
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const user = useUserStore()
  // 存在 token ，进入主页
  if (user.token) {
    //有token则进入首页
    if (to.path == "/login") {
      next("/")
    } else {
      next()
    }
  } else {
    // 没有token的情况下，可以进入白名单
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next("/login")
    }
  }
})

export default router
