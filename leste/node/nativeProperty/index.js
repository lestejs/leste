function debounce(fn, timeout = 300) {
  let timer
  return (...args) => {
    if (!timer) {
      fn.apply(this, args)
    }
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
    }, timeout)
  }
}

function listeners(key, value) {
  if (typeof value === 'function') {
    this.nodeElement[key] = (event) => this.node[key].bind(this.context)(event, debounce)
  }
}

function general(key, value) {
  if (typeof value === 'function') {
    const active = () => {
      const val = value.bind(this.context)()
      if (typeof val === 'object') {
        Object.assign(this.nodeElement[key], val)
      } else this.nodeElement[key] = val
    }
    this.refs.length = 0
    this.common.fl = true
    active()
    this.nodeElement.reactive(this.refs, key, active)
  } else this.nodeElement[key] = value
}

function native(key, value) {
  if (key in this.nodeElement) {
    if (key.substr(0, 2) === 'on') {
      this.listeners(key, value)
    } else this.general(key, value)
  }
}

export default { native, listeners, general }