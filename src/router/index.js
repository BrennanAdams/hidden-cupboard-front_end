import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import contactPage from '../views/contactPage.vue'
import infoPage from '../views/infoPage.vue'
import loginPage from '../views/loginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contactPage',
    name: 'Contact',
    component: contactPage
  },
  {
    path: '/infoPage',
    name: 'Info',
    component: infoPage
  },
  {
    path: '/loginPage',
    name: 'Login',
    component: loginPage
  }
]

const router = new VueRouter({
  routes
})

export default router
