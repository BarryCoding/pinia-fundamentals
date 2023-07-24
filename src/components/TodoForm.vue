<script setup>
import { ref } from 'vue';
import { useTodoListStore } from '../stores/todoList';

const todo = ref('')

const store = useTodoListStore()

const addItem = (item) => {
  if (item.length === 0) return
  console.log(item)
  store.addTodo(item)
  todo.value = ''
}
</script>

<template>
  <div>
    <form @submit.prevent="addItem(todo)">
      <input type="text" v-model="todo"> <button>add</button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>