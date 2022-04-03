import { ref } from "vue"
import type { Ref } from "vue"
const useCountDown = (
  count: number, // 倒计时总时长
): [Ref<number>, Ref<boolean>, CallableFunction] => {
  // 计时器
  let _timer: NodeJS.Timer | null = null
  // 总时长
  const _count = ref<number>(count)
  // 是否正在倒计时中
  const _isRunning = ref<boolean>(false)
  // 开始
  const start = (): void => {
    _isRunning.value = true
    _timer = setInterval(() => {
      if (_count.value === 0) {
        clearInterval(<NodeJS.Timer>_timer)
        _isRunning.value = false
        reset()
        return
      }
      _count.value--
    }, 1000)
  }
  // 重置
  const reset = (): void => {
    _count.value = count
  }
  return [_count, _isRunning, start]
}
export default useCountDown
