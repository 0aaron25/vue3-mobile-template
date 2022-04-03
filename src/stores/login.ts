import { defineStore } from "pinia"
import { LoginEnum } from "@/enums/index"
export const useLoginStore = defineStore({
  id: "login",
  state: () => ({
    formModel: {
      phoneOrEmail: "",
      password: "",
      repassword: "",
      captcha: "",
      phone: "",
    },
    loginType: LoginEnum.Login,
  }),
  actions: {
    summitForm() {
      console.log("我提交表单啦", this.formModel)
    },
  },
})
