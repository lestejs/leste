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
  async change(t, key, pr) {
    // if (!path && Array.isArray(value)) {
    //   this.set(value)
    // }
    // if (path && key < this.node.children.length) {
    this.edit(t, key, pr)
    // }
  }
  set(arr) {
    for (const [pr, v] of Object.entries(this.props)) {
      if (typeof v === 'function') {
        for (let index = 0;index < arr.length;index++) {
          this.nodeElement.power(index, pr, v(arr[index], index))
        }
      }
    }
  }
  edit(value, index, pr) {
    const v = this.props[pr]
    if (index) {
      this.nodeElement.power(index, pr, v(this.data[index], index))
    } else {
      for (let index = 0;index < this.nodeElement.children.length;index++) {
        this.nodeElement.power(index, pr, v(this.data[index], index))
      }
    }
  }
  async add(length) {
    while (length > this.nodeElement.children.length) {
      await this.append()
    }
  }
  remove(length) {
    while (length < this.nodeElement.children.length) {
      this.nodeElement.lastElementChild.remove()
    }
  }
}

export { Iterator }