/**
 * tabs相关类型
 */
export interface clickTabType {
  name: string | number
  title: string
  event: MouseEvent
  disabled: boolean
}
export interface titleMapType {
  [key: number]: string
}
