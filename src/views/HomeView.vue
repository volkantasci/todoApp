<template>
  <div class="mt-7">
    <v-container>

      <v-row>
        <v-col cols="6">
          <v-text-field
            label="Title"
            dense
            v-model="todoTitle"
            outlined
            light
            color="secondary"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-autocomplete
            clearable
            :items="categories"
            item-text="name"
            item-value="id"
            label="Category"
            v-model="todoCategory"
            dense
            outlined
            color="secondary"
          />
        </v-col>
      </v-row>
          <v-text-field
              label="Content"
              v-model="todoContent"
              color="secondary"
              dense
              outlined
          />
      <v-btn
        block
        color="secondary"
        @click="addToList"
      >
        <v-icon left>mdi-arrow-down</v-icon>
        <span>Create</span>
      </v-btn>
      <v-divider class="mt-3"/>
      <div class="mt-8 text-center">
        <h3 class="blue-grey--text">Created Tasks</h3>
        <div v-if="todos.length < 1" class="text-center">
          <span>You don't have any tasks!</span>
        </div>
        <v-card
          hover
          v-for="todo in todos"
          :key="todo.id" class="mb-2 mt-5"
          shaped
          light
          elevation="5"
        >
          <v-card-title class="subtitle-1 orange--text" :class="classForTodoText(todo)">
            <span>{{ todo.title }}</span>
            <v-spacer />
            <span>{{ getCategoryName(todo.category) }}</span>
          </v-card-title>
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
        <div style="height: 60px"></div>
      </div>

    </v-container>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HomeView',
  data: () => ({
    todoTitle: '',
    todoContent: '',
    todoCategory: null
  }),

  computed: {
    ...mapGetters({
      nextId: 'getNexId',
      todos: 'getTodos',
      categories: 'categories/getCategoryList'
    })
  },

  methods: {
    ...mapActions({
      addTodo: 'addTodo',
      deleteTodo: 'deleteTodo'
    }),
    getCategoryName (categoryId) {
      return this.categories.find(c => c.id === categoryId).name
    },
    classForTodoText (todo) {
      if (todo.completed) {
        return 'text-decoration-line-through'
      } else {
        return ''
      }
    },
    addToList () {
      if (this.todoContent) {
        this.addTodo({
          todo: {
            id: this.nextId,
            content: this.todoContent,
            title: this.todoTitle,
            category: this.todoCategory,
            completed: false
          }
        })
        this.todoTitle = ''
        this.todoContent = ''
        this.todoCategory = null
      }
    }
  }
}
</script>
