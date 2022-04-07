<template>
  <v-app>
    <top-nav-bar />
    <v-main>
      <side-navbar />
      <router-view/>
      <bottom-nav />
    </v-main>
  </v-app>
</template>

<script>
import TopNavBar from '@/components/TopNavBar'
import SideNavbar from '@/components/SideNavbar'
import BottomNav from '@/components/BottomNav'
export default {
  name: 'App',
  components: {
    TopNavBar,
    SideNavbar,
    BottomNav
  },

  data: () => ({
    //
  })
}
</script>
<style>

</style>
