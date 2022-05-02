let timer = null
function delay(callback, delay) {
  clearTimeout(timer)
  return new Promise(resolve => {
    timer = setTimeout(() => {
      callback && callback()
      clearTimeout(timer)
      resolve()
    }, delay || 0)
  })
}
export { delay }