/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @description:判断传入的值是否为空值
 * @params:value
 * @returns:boolean
 */
export function isEmpty(value: string): boolean
export function isEmpty<T = any>(value: Array<T>): boolean
export function isEmpty(value: object): boolean
export function isEmpty<I = any, O = any>(value: Map<I, O>): boolean
export function isEmpty<T = any>(value: Set<T>): boolean
export function isEmpty(value: any): boolean {
  if (isString(value) || isArray(value)) {
    return value.length == 0
  } else if (isObject(value)) {
    return Object.keys(value).length == 0
  } else if (isMap(value) || isSet(value)) {
    return value.size == 0
  } else {
    return false
  }
}

/*
 * @description:判断传入的值是不是对象
 * @params:value
 * @returns:boolean
 */
export function isObject(value: any): value is object {
  return (
    Object.prototype.toString.call(value) == "[object Object]" &&
    typeof value == "object"
  )
}

/*
 * @description:判断传入的值是不是数组
 * @params:value
 * @returns:boolean
 */
export function isArray<T = any>(value: any): value is Array<T> {
  return Object.prototype.toString.call(value) == "[object Array]"
}

/*
 * @description:判断传入的值是不是字符串
 * @params:value
 * @returns:boolean
 */
export function isString(value: any): value is string {
  return typeof value == "string"
}

/*
 * @description:判断传入的值是不是map
 * @params:value
 * @returns:boolean
 */
export function isMap<T = any, O = any>(value: any): value is Map<T, O> {
  return Object.prototype.toString.call(value) == "[object Map]"
}

/*
 * @description:判断传入的值是不是set
 * @params:value
 * @returns:boolean
 */
export function isSet<T = any>(value: any): value is Set<T> {
  return Object.prototype.toString.call(value) == "[object Set]"
}

/*
 * @description:判断是否请求成功
 * @params:value
 * @returns:boolean
 */
export function isRequessSuccess(value: number): boolean {
  return value >= 200 && value <= 400
}
