export default class Router {
  constructor(routes, root, mount) {
    this.current = { options: {}, context: {}, path: '' }
    this.mount = mount
    this.routes = routes
    this.root = root
    this.from = {}
    this.to = {}
    this.links()
    this.addListener()
    this.update()
    this.layout = false
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
          this.current.options.leave && this.current.options.leave.bind(this.current.context)(this.from, this.to)
          if (this.current.path === route.path) {
            this.current.options.route && this.current.options.route.bind(this.current.context)(this.from, this.to)
          } else {
            document.title = route.title || 'Leste'
            this.setName(route.name)
            const file = await route.component()
            const component = file.default
            this.current.path = route.path
            if (component.layout && !this.layout) {
              await this.mount(this.root, component.layout)
              this.layout = true
            }
            this.current = await this.mount(this.root, component)
            this.from = { ...this.to }
            this.to = this.params(slugs, parts)
            this.current.context.router = { push: this.push.bind(this), ...this.to }
            this.current.options.loaded && this.current.options.loaded.bind(this.current.context)(this.from, this.to)
          }
          break
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}