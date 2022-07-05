class Iterator {
  constructor(node, props, data, append) {
    this.nodeElement = node
    this.props = props
    this.append = append
    this.data = data
  }
  async length(length) {
    length > this.nodeElement.children.length && await this.add(length)
    length < this.nodeElement.children.length && this.remove(length)
  }
  async set(arr) {
    await this.remove(0)
    await this.add(arr.length)
  }
  async add(length) {
    let qty = this.nodeElement.children.length
    while (length > qty) {
      await this.append(qty)
      qty++
    }
  }
  async remove(length) {
    let qty = this.nodeElement.children.length
    while (length < qty) {
      qty--
      if (this.nodeElement.reactivity.component) {
        for (const ref in this.nodeElement.reactivity.component) {
          const parts = ref.split('_')
          if (parts[1] == qty) this.nodeElement.reactivity.component[ref].length = 0
        }
      }
      await this.nodeElement.children[qty].unmount()
    }
  }
}

export { Iterator }