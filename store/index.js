import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      todos: []
    },
    mutations: {
      init(state, todos) {
        state.todos = todos
      },
      add(state, todo) {
        state.todos = [...state.todos, todo]
      },
      remove(state, id) {
        state.todos = state.todos.filter(t => t.id != id)
      },
      update(state, todo) {
        state.todos = state.todos.map(t =>
          t == todo.id
            ? todo
            : t
        )
      }

    },
    actions: {
      async add({ commit }, task) {
        const res = await axios.post(
          'https://todos-dvqxnrfdky.now.sh/todos',
          { task, complete: false }
        )
        commit('add', res.data)
      },
      async remove({ commit }, id) {
        const res = await axios.delete(`https://todos-dvqxnrfdky.now.sh/todos/${id}`)
        commit('remove', id)
      },
      async toggleComplete({ commit }, todo) {
        console.log(todo)
        const res = await axios.patch(
          `https://todos-dvqxnrfdky.now.sh/todos/${todo.id}`,
          { complete: !todo.complete }
        )
        commit('update', res.data)
      }
    }
  })
}

export default createStore
