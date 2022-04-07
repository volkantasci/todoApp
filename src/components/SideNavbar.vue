<template>
  <div class="side-navbar">
    <v-navigation-drawer
      dark
      app
      temporary
      v-model="$store.state.side_navbar"
    >
      <div class="text-center mt-4">
        <v-avatar
          width="60px"
          height="60px"
        >
          <v-img src="/todo-logo.png"></v-img>
        </v-avatar>
      </div>
      <v-list>
        <v-list-item
          v-for="item in navlist"
          :key="item.id"
          link
          route :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SideNavbar',
  computed: {
    ...mapGetters({
      navlist: 'getNavlist'
    })
  }
}
</script>

<style scoped>

</style>
