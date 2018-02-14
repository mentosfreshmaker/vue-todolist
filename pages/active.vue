<template>
  <div class="mw6 mw6-ns center pa3 ph5-ns">
    <div v-if="todos.length > 0">
      <ul class="list pl0 ml0 mw6 ba b--light-silver br2">
        <li :key="todo.id" v-for="todo in todos" class="ph3 pv3 bb b--light-silver">{{todo.task}}</li>
      </ul>
    </div>
    <div v-else>
      <p>You have no active todos!</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { init } from './shared';

export default {
  fetch: init,
  computed: {
    ...mapState({
      todos: state => state.todos.filter(t => !t.complete)
    })
  }
}
</script>

<style>
</style>
