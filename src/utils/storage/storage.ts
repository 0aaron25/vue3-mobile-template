import { isNull, isObject } from ".."

/**
 * 存储数据
 */
export const setItem = (key: string, value: any): void => {
  // 将数组、对象类型的数据转化为 JSON 字符串进行存储
  if (isObject(value)) {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

/**
 * 获取数据
 */
export const getItem = (key: string) => {
  const data = window.localStorage.getItem(key)
  if (!isNull(data)) {
    try {
      return JSON.parse(data)
    } catch (err) {
      return data
    }
  } else {
    return null
  }
}

/**
 * 删除数据
 */
export const removeItem = (key: string) => {
  window.localStorage.removeItem(key)
}

/**
 * 删除所有数据
 */
export const removeAllItem = () => {
  window.localStorage.clear()
}
