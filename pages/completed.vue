<template>
  <div class="pa3 pa5-ns">
    <header class="bg-white black-80 tc pv4 avenir">
      <h1 class="mt2 mb0 baskerville i fw1 f1">Todo List</h1>
      <h2 class="mt2 mb0 f6 fw4 ttu tracked">Completed Todos</h2>
      <nav class="bt bb tc mw7 center mt4">
        <nuxt-link exact class="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/">All</nuxt-link>
        <nuxt-link class="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/active">Active</nuxt-link>
        <nuxt-link class="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" to="/completed">Completed</nuxt-link>
      </nav>
    </header>

    <article class="mw6 mw6-ns center pa3 ph5-ns">
      <div v-if="todos.length > 0">
        <ul class="list pl0 ml0 mw6 ba b--light-silver br2">
          <li :key="todo.id" v-for="todo in todos" class="ph3 pv3 bb b--light-silver">{{todo.task}}</li>
        </ul>
      </div>
      <div v-else>
        <p>You have no completed todos!</p>
      </div>
    </article>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { init } from './shared';

export default {
  fetch: init,
  computed: {
    ...mapState({
      todos: state => state.todos.filter(t => t.complete)
    })
  }
}
</script>

<style>
</style>
