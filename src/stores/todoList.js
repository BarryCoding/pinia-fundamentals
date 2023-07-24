import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: [],
    id: 0,
  }),
  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.id++, complete: false })
    },
    removeTodo(todoId) {
      this.todoList = this.todoList.filter((todo) => todo.id !== todoId)
    },
  },
})
