<template>
  <div class="bottom-nav">
    <v-bottom-navigation
      v-model="value"
      :background-color="color"
      dark
      shift
      fixed
    >
      <v-btn route to="/">
        <span>Home</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn route to="/donate">
        <span>Donate</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn route to="/stars">
        <span>Give Stars</span>

        <v-icon>mdi-star</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: 'BottomNav',
  data () {
    return {
      value: 0
    }
  },
  computed: {
    color () {
      if (this.value === 1) return 'deep-orange darken-2'
      else if (this.value === 2) return 'blue-grey darken-1'
      else return 'indigo darken-4'
    }
  }
}
</script>

<style scoped>

</style>
