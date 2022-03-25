function classes() {
  for (const [cl, v] of Object.entries(this.node.classes)) {
    const active = () => {
      if (v()) {
        const timer = setTimeout(() => {
          this.nodeElement.classList.add(cl)
          clearTimeout(timer)
        }, 0)
      } else this.nodeElement.classList.remove(cl)
    }
    this.refs.length = 0
    active()
    this.nodeElement.reactive(this.refs, 'classes', active)
  }
}

export { classes }
