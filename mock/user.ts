import type { MockMethod } from "vite-plugin-mock"

const user: unknown = [
  {
    url: "/user/login",
    timeout: 200,
    method: "POST",
    response: () => {
      return {
        code: 0,
        data: {
          token: "eca4bb1529bb5b4dcd3c9aa68e9e185d",
          expire: 1200,
          onLine: true,
        },
        msg: "success",
      }
    },
  },
]

export default user as MockMethod[]
