<template>
  <div class="mw6 mw6-ns center pa3 ph5-ns">
    <form @submit.prevent="add(task)">
      <input v-model="task" class="w-100 ph3 mb3 items-center input-reset ba b--black-20 pa2 mb2" type="text"/>
    </form>
    <div v-if="todos.length > 0">
      <ul class="list pl0 ml0 mw6 ba b--light-silver br2">
        <li :key="todo.id" v-for="todo in todos" class="flex items-center ph3 pv3 bb b--light-silver">
          <span :class="{strike: todo.complete}" class="flex-auto">{{todo.task}}</span>
          <button @click="toggleComplete(todo)" ><img src="https://icon.now.sh/check" alt="complete" /></button>
          <button @click="remove(todo.id)"><img src="https://icon.now.sh/trash" alt="delete" /></button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>You have no todos!</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import { init } from './shared';

export default {
  fetch: init,
  data() {
    return {
      task: ''
    }
  },
  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },
  methods: {
    ...mapActions([
      'add',
      'remove',
      'toggleComplete'
    ])
  }
}
</script>

<style>
</style>
