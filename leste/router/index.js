import Leste from '~/leste'

export default class Router {
  constructor(routes, root) {
    this.current = {}
    this.routes = routes
    this.root = root
    this.from = {}
    this.to = {}
    this.links()
    this.addListener()
    this.update()
  }
  setName(name) {
    this.root.setAttribute('name', name)
  }
  addListener() {
    window.addEventListener('popstate', () => {
      this.update()
    }, false)
  }
  links() {
    this.root.onclick = (event) => {
      const a = event.target.closest('a[link]')
      if (a && a.href) {
        event.preventDefault()
        this.push(a.href)
      }
    }
  }
  params(slugs, parts) {
    const param = {}
    slugs && slugs.forEach((slug, index) => {
      param[slug.substring(1)] = parts[index + 1]
    })
    return {path: parts[0], param }
  }
  push(path) {
    history.pushState(null, null, path)
    this.update()
  }
  async update() {
    const path = decodeURI(window.location.pathname + window.location.search).toString().replace(/\/$/, '').replace(/^\//, '')
    for (const route of this.routes) {
      try {
        const slugs = route.path.match(/:\w+/g)
        const reg = new RegExp('^' + route.path.replace(/:\w+/g, '(\\w+)') + '$')
        const parts = path.match(reg)
        if (parts) {
          this.from = { ...this.to }
          this.to = this.params(slugs, parts)
          if (this.current?.cache && (route.path === this.current.cache.path)) {
            this.current.props.routeUpdate(this.from, this.to)
          } else {
            document.title = route.title || 'Leste'
            this.setName(route.name)
            this.current?.cache && this.current.props.unmount()
            if (!route.cache) {
              const src = await route.component()
              route.cache = src.default
              route.cache.path = route.path
              route.props = {navigate: {push: this.push, ...this.to }}
            }
            const leste = new Leste(this.root)
            await leste.mount(this.root, route.cache, route.props)
            this.current = route
          }
          break
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}