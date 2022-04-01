/*
 * @description:判断传入的值是否为空值
 * @params:value
 * @returns:boolean
 */
export function isEmpty(value: String): boolean
export function isEmpty<T = any>(value: Array<T>): boolean
export function isEmpty(value: Object): boolean
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
export function isObject(value: any): boolean {
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
export function isArray(value: any): boolean {
  return Object.prototype.toString.call(value) == "[object Array]"
}

/*
 * @description:判断传入的值是不是字符串
 * @params:value
 * @returns:boolean
 */
export function isString(value: any): boolean {
  return typeof value == "string"
}

/*
 * @description:判断传入的值是不是map
 * @params:value
 * @returns:boolean
 */
export function isMap(value: any): boolean {
  return Object.prototype.toString.call(value) == "[object Map]"
}

/*
 * @description:判断传入的值是不是set
 * @params:value
 * @returns:boolean
 */
export function isSet(value: any): boolean {
  return Object.prototype.toString.call(value) == "[object Set]"
}

console.log(isEmpty(12))
