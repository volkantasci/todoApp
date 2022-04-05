<template>
  <div class="mt-7">
    <v-container>
      <v-row>
        <v-col cols="9">
          <v-text-field
            label="Görev"
            dense
            v-model="todoText"
          />
        </v-col>
        <v-col cols="3" class="text-right">
          <v-btn
            dark
            class="orange white--text"
            @click="addToList"
          >
            <v-icon dark>mdi-playlist-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <div class="mt-8">
        <v-card
          :hover="!todo.completed"
          v-for="todo in todos"
          :key="todo.id" class="mb-2"
          shaped
          color="orange lighten-5"
        >
          <v-card-text :class="classForTodoText(todo)" style="font-size: 105% !important;">{{ todo.content }}</v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
              icon
              small
              color="green"
              @click="todo.completed = true"
            >
              <v-icon>mdi-check</v-icon>
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
