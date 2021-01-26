<template>
  <footer class="footer">
        <span class="todo-count">
          <strong>{{ $store.getters.activeTodos.length }}</strong>
          item(s) left
        </span>
    <button
        class="clear-completed"
        @click="$store.dispatch('clearCompleted')"
        v-show="$store.getters.completedTodos.length"
    >
      Clear completed
    </button>
  </footer>
</template>

<script>
export default {
};
</script>
