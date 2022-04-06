<template>
  <div class="mt-7">
    <v-container>

      <v-text-field
        label="Görev"
        dense
        v-model="todoText"
        outlined
        light
        color="secondary"
      >
        <template v-slot:append>
          <v-fade-transition>
            <v-icon
              v-if="todoText"
              @click="addToList"
            >
              mdi-plus-circle
            </v-icon>
          </v-fade-transition>
        </template>
      </v-text-field>
      <div class="mt-8">
        <v-card
          hover
          v-for="todo in todos"
          :key="todo.id" class="mb-2"
          shaped
          dark
          color="secondary lighten-1"
        >
          <v-card-text :class="classForTodoText(todo)" style="font-size: 105% !important;">{{
              todo.content
            }}
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
              icon
              v-if="!todo.completed"
              small
              color="green"
              @click="todo.completed = true"
            >
              <v-icon>mdi-check</v-icon>
            </v-btn>
            <v-btn
              icon
              v-if="todo.completed"
              small
              color="green"
              @click="todo.completed = false"
            >
              <v-icon>mdi-backup-restore</v-icon>
            </v-btn>
            <v-btn
              icon
              small
              color="red"
              @click="deleteTodo({todo: todo})"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>

    </v-container>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HomeView',
  data: () => ({
    todoText: ''
  }),

  computed: {
    ...mapGetters({
      nextId: 'getNexId',
      todos: 'getTodos'
    })
  },

  methods: {
    ...mapActions({
      addTodo: 'addTodo',
      deleteTodo: 'deleteTodo'
    }),
    classForTodoText (todo) {
      if (todo.completed) {
        return 'text-decoration-line-through'
      } else {
        return ''
      }
    },
    addToList () {
      if (this.todoText) {
        this.addTodo({
          todo: {
            id: this.nextId,
            content: this.todoText,
            completed: false
          }
        })
        this.todoText = ''
      }
    }
  }
}
</script>
