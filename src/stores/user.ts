import { login } from "@/api/user/userLogin"
import type { ILoginParams } from "@/types/user/user"
import {
  getItem,
  removeAllItem,
  removeItem,
  setItem,
} from "@/utils/storage/storage"
import { defineStore } from "pinia"
const TOKEN = "token"
const EXPIRE_TIME = "expire_time"
import $router from "@/router/index"

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    token: getItem(TOKEN) || "",
    userInfo: {},
  }),
  actions: {
    async login(params: ILoginParams) {
      //1.发送登录请求
      const { data: res } = await login(params)
      //2.登录成功后保存token
      this.token = res.token
      this.saveToken(res.token)
      setItem(EXPIRE_TIME, res.expire)
      //3.跳转到主页
      $router.push("/")
    },
    saveToken(token: string) {
      this.token = token
      setItem(TOKEN, token)
    },
    clearToken() {
      removeItem(TOKEN)
    },
    logout() {
      this.$reset()
      removeAllItem()
    },
  },
})
