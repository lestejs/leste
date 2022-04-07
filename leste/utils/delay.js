function delay(callback, delay) {
  return new Promise(resolve => {
    const timer = setTimeout(() => {
      callback && callback()
      clearTimeout(timer)
      resolve()
    }, delay || 0)
  })
}
export { delay }