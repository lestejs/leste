const todo = {
  template: `<div class="todo">1</div>`,
}

export default {
  template: `<div class="todos"></div>`,
  nodes() {
    return {
      todos: {
        component: {
          src: todo,
          data: 5,
        }
      }
    }
  }
}