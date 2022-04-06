<template>
  <div class="categories-view mt-8">
    <v-container>
      <v-text-field
        label="Category"
        dense
        outlined
        light
        color="indigo darken-4"
        v-model="category_name"
      >
        <template v-slot:append>
          <v-icon
            v-if="category_name"
            center
            @click="addToCategorieList"
          >mdi-plus-circle
          </v-icon>
        </template>
      </v-text-field>
      <div
        v-for="category in category_list"
        :key="category.id"
        class="grey lighten-4 mb-6 rounded"
        style="border-left: 5px solid indigo !important;"
      >
        <v-row>
          <v-col cols="4">
          </v-col>
          <v-col cols="4" class="text-center">
            {{ category.name }}
          </v-col>
          <v-col cols="4" class="text-right">
            <v-btn
              icon
              small
              color="indigo darken-4"
              @click="deleteCategory({category: category})"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CategoriesView',
  data () {
    return {
      category_name: '',
      table_headers: [
        {
          text: 'ID',
          sortable: false,
          value: 'id'
        },
        {
          text: 'Name',
          sortable: true,
          value: 'name'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      category_list: 'categories/getCategoryList'
    })
  },
  methods: {
    ...mapActions({
      addCategory: 'categories/addCategory',
      deleteCategory: 'categories/delCategory'
    }),

    addToCategorieList () {
      this.addCategory({
        category: {
          id: 5,
          name: this.category_name
        }
      })
      this.category_name = ''
    }
  }
}
</script>

<style scoped>

</style>
