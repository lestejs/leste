export default async function router(options, callback) {
  const currentPath = decodeURI(window.location.pathname + window.location.search).toString().replace(/\/$/, '').replace(/^\//, '')
  for (const route of options.routes) {
    try {
      const reg = new RegExp('^' + route.path.replace(/:\w+/g, '(\\w+)') + '$')
      const slug = currentPath.match(reg)
      if (slug) {
        const obj = options.components[route.name]
        if (!route.cache) obj.cache = await obj.component
        document.title = route.name
        const src = obj.cache.default
        callback(src)
      }
    } catch (err) {
      console.log(err)
    }
  }
}