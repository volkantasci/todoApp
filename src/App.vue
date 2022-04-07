<template>
  <v-app>
    <top-nav-bar />
    <v-main>
      <side-navbar />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import TopNavBar from '@/components/TopNavBar'
import SideNavbar from '@/components/SideNavbar'
export default {
  name: 'App',
  components: {
    TopNavBar,
    SideNavbar
  },

  data: () => ({
    //
  })
}
</script>
<style>
body {
  max-width: 460px; margin: 0 auto 0 auto;
}
</style>
