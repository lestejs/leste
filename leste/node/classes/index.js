function classes() {
  for (const [cl, v] of Object.entries(this.node.classes)) {
    const active = () => {
      if (v()) {
        this.nodeElement.classList.add(cl)
      } else this.nodeElement.classList.remove(cl)
    }
    this.refs.length = 0
    active()
    this.nodeElement.reactive(this.refs, 'classes', active)
  }
}

export { classes }
