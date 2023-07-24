<script setup>
import { storeToRefs } from 'pinia'
import { useTodoListStore } from '../stores/todoList'

const store = useTodoListStore()
const { todoList } = storeToRefs(store)
const { toggleCompleted, removeTodo } = store
</script>

<template>
  <div v-for="{ item, id, completed } in todoList" :key="id">
    <span :class="{ completed }"> {{ item }}</span>
    <span @click.stop="toggleCompleted(id)">&#10004;</span>
    <span @click.stop="removeTodo(id)">&#10060;</span>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
