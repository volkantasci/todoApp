import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    side_navbar: false,
    nextId: 1,
    navlist: [
      {
        id: 1,
        text: 'Home',
        link: '/',
        icon: 'mdi-view-dashboard'
      },
      {
        id: 2,
        text: 'About',
        link: '/about',
        icon: 'mdi-information'
      }
    ]
  },
  getters: {
    getTodos (state) {
      return state.todos
    },

    getNavlist (state) {
      return state.navlist
    },

    getNexId (state) {
      return state.nextId
    }
  },
  mutations: {
    addTodo (state, payload) {
      state.todos.push(payload.todo)
      state.nextId++
    },

    deleteTodo (state, payload) {
      state.todos = state.todos.filter((todo) => todo.id !== payload.todo.id)
      state.nextId--
    }
  },
  actions: {
    addTodo (context, payload) {
      context.commit('addTodo', payload)
    },

    deleteTodo (context, payload) {
      context.commit('deleteTodo', payload)
    }
  },
  modules: {}
})
