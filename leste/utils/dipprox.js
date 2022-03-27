function dipprox(target, handler) {
  const preproxy = new WeakMap()

  function makeHandler(p) {
    return {
      set(target, key, value, receiver) {
        const path = [...p, key]
        const ref = path.join('_')
        if (handler.beforeSet) {
          value = handler.beforeSet(target, path, value, ref) || value
        }
        if (value && typeof value === 'object') {
          value = proxify(value, path)
        }
        target[key] = value
        if (handler.set) {
          handler.set(target, path, value, ref)
        }
        return true
      },
      get(target, key) {
        if (handler.get) {
          handler.get(target, [...p, key])
        }
        return target[key]
      },
      deleteProperty(target, key) {
        if (Reflect.has(target, key)) {
          unproxy(target, key)
          let deleted = Reflect.deleteProperty(target, key)
          if (deleted && handler.deleteProperty) {
            handler.deleteProperty(target, [...p, key])
          }
          return deleted
        }
        return false
      }
    }
  }
  function unproxy(obj, key) {
    if (preproxy.has(obj[key])) {
      obj[key] = preproxy.get(obj[key])
      preproxy.delete(obj[key])
    }
    for (let k of Object.keys(obj[key])) {
      if (obj[key][k] != null && typeof obj[key][k] === 'object') {
        unproxy(obj[key], k);
      }
    }

  }
  function proxify(obj, path) {
    for (const key of Object.keys(obj)) {
      if (obj[key] && typeof obj[key] === 'object') {
        obj[key] = proxify(obj[key], [...path, key])
      }
    }
    const p = new Proxy(obj, makeHandler(path))
    preproxy.set(p, obj)
    return p
  }
  return proxify(target, [])
}

export { dipprox }