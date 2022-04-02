/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import qs from "qs"
import { isObject, isRequessSuccess } from ".."

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { Toast } from "vant"

//默认超时时长
axios.defaults.timeout = 1000 * 30

// 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = false

// 允许跨域
axios.defaults.headers.post["Access-Control-Allow-Origin-Type"] = "*"

// 返回支持的状态码
axios.defaults.validateStatus = function (status: number) {
  return status >= 200 && status <= 500
}

//请求实例
const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.BASE_URL}`,
})

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 添加_t时间戳防止get请求缓存
    if (config.method === "get") {
      config.params = {
        ...config.params,
        ...{ _t: new Date().getTime() },
      }
    }

    if (isObject(config.data)) {
      // eslint-disable-next-line no-param-reassign
      config.data = {
        ...config.data,
      }
      //判断是不是formData格式
      if (config.headers?.["content-type"]) {
        const contentType: string = config.headers["content-type"] + ""
        if (/^application\/x-www-form-urlencoded/.test(contentType)) {
          config.data = qs.stringify(config.data)
        }
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (!isRequessSuccess(response.status)) {
      Toast({
        message: response.statusText,
        position: "top",
      })
      return Promise.reject(response.statusText)
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export const request = <T = any>(
  config: AxiosRequestConfig,
  // options?: RequestOptions,
): Promise<T> => {
  const conf = config
  return new Promise((resolve, reject) => {
    axiosInstance
      .request<any, AxiosResponse<IResponse>>(conf)
      .then((res: AxiosResponse<IResponse>) => {
        const data: any = res
        resolve(data as T)
      })
      .catch((error) => reject(error))
  })
}

export function get<T = any>(
  config: AxiosRequestConfig,
  // options?: RequestOptions,
): Promise<T> {
  return request({ ...config, method: "GET" })
}

export function post<T = any>(config: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: "POST" })
}
