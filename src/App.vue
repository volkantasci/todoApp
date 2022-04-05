<template>
  <v-app>
    <top-nav-bar />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import TopNavBar from '@/components/TopNavBar'
export default {
  name: 'App',
  components: {
    TopNavBar
  },

  data: () => ({
    //
  })
}
</script>
