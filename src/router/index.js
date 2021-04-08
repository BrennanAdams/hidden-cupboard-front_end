import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import contactPage from '../views/contactPage.vue'
import infoPage from '../views/infoPage.vue'
import loginPage from '../views/loginPage.vue'
import signupPage from '../views/signupPage.vue'
import cupboardPage from '../views/CupboardPage.vue'
import recipePage from '../views/RecipePage.vue'

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
  },
  {
    path: '/signupPage',
    name: 'signup',
    component: signupPage
  },
  {
    path: '/cupboardPage',
    name: 'cupboardPage',
    component: cupboardPage
  },
  {
    path: '/recipePage',
    name: 'recipePage',
    component: recipePage
  }
]

const router = new VueRouter({
  routes
})

export default router
