import type { ILoginParams } from "@/types/user/user"
import { post } from "@/utils/http/request"

/**
 * 用户登录
 */
export const login = (params: ILoginParams): Promise<IResponse> => {
  return post({ url: "/user/login", params }).then((res) => res.data)
}
