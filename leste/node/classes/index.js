function classes() {
  for (const cl in this.node.classes) {
    const active = () => {
      if (this.node.classes[cl]()) {
        this.nodeElement.classList.add(cl)
      } else this.nodeElement.classList.remove(cl)
    }
    this.refs.length = 0
    this.common.fl = true
    active()
    this.nodeElement.reactive(this.refs, 'classes', active)
  }
}

export { classes }
