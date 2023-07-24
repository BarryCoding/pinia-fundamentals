import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: [],
    id: 0,
  }),
  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.id++, completed: false })
    },
    removeTodo(todoId) {
      this.todoList = this.todoList.filter((todo) => todo.id !== todoId)
    },
    toggleCompleted(todoId) {
      const todo = this.todoList.find((todo) => todo.id === todoId)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
  },
})
