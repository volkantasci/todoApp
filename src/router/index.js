import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import AboutView from '@/views/AboutView'
import CategoriesView from '@/views/CategoriesView'
import DonateView from '@/views/DonateView'
import StarsView from '@/views/StarsView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/categories',
    name: 'Category',
    component: CategoriesView
  },
  {
    path: '/donate',
    name: 'Donate',
    component: DonateView
  },
  {
    path: '/stars',
    name: 'Stars',
    component: StarsView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
