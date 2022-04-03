import type { LoginEnum } from "@/enums/index"
import { useLoginStore } from "@stores/login"

const useLogin = () => {
  const login = useLoginStore()
  const setLoginType = (state: LoginEnum) => {
    login.loginType = state
  }

  const getCurrentLoginType = () => {
    return login.loginType
  }

  const getShow = (state: LoginEnum) => {
    return getCurrentLoginType() == state
  }

  return {
    setLoginType,
    getCurrentLoginType,
    getShow,
  }
}

export default useLogin
