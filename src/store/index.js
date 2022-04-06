import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import categories from '@/store/categories/categories'

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
      },
      {
        id: 3,
        text: 'Categories',
        link: '/categories',
        icon: 'mdi-tag'
      }
    ]
  },
  getters: {
    getTodos (state) {
      return state.todos.sort((a, b) => {
        if (a.id > b.id) return -1
        if (b.id > a.id) return 1
        return 0
      })
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
  modules: {
    categories
  }
})
