/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PROD_MOCK: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

/**
 * 是否处理请求结果
 */
interface RequestOptions {
  isTransformResponse?: boolean
}

/**
 *  响应结果
 */
interface IResponse<T = any> {
  code: number | string
  data: T
  msg: string
}
