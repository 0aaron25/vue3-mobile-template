import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

export interface RequestInterceptors {
  // 请求拦截
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  // 响应拦截
  responseInterceptors?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch?: (err: any) => any
}

// 自定义传入的参数
export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors
}

class Request {
  // axios 实例
  instance: AxiosInstance
  // 拦截器对象
  interceptorsObj?: RequestInterceptors

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptorsObj = config.interceptors

    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        console.log("全局请求拦截器")
        return res
      },
      (err: any) => err,
    )

    // 使用实例拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch,
    )
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch,
    )
    // 全局响应拦截器保证最后执行
    this.instance.interceptors.response.use(
      // 因为我们接口的数据都在res.data下，所以我们直接返回res.data
      (res: AxiosResponse) => {
        console.log("全局响应拦截器")
        return res.data
      },
      (err: any) => err,
    )
  }
}

export default Request
