<script setup>
import { storeToRefs } from 'pinia'
import { useTodoListStore } from '../stores/todoList'

const store = useTodoListStore()
const { todoList } = storeToRefs(store)
const { toggleCompleted } = store
</script>

<template>
  <div
    v-for="{ item, id, completed } in todoList"
    :key="id"
    :class="{ completed }"
    @click.stop="toggleCompleted(id)"
  >
    {{ item }}
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
