<template>
  <div class="top-nav-bar">
    <v-app-bar
      dense
      dark
      elevation="5"
      app
    >
      <v-app-bar-nav-icon
        color="white"
        @click="$store.state.side_navbar = !$store.state.side_navbar"
      />
      <v-spacer />
      <span class="white--text text--darken-3">ToDo App</span>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'TopNavBar'
}
</script>

<style scoped>

</style>
