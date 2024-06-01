import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Dashboard from '../views/Dashboard.vue';
import Klassenverwaltung from '../views/Klassenverwaltung.vue'
import Register from '@/views/Register.vue';
import Login from '../views/Login.vue'
import store from '../store/index'
import Weather from '../views/Weather.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta : {requiresAuth : false}
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta : {requiresAuth : false}
  },
  {
    path: '/',
    name: 'login',
    component: Login,
    meta : {authentication : false}
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta : {requiresAuth : true}
  },
  {
    path: '/class',
    name: 'klassenverwaltung',
    component: Klassenverwaltung,
    meta : {requiresAuth : true}
  },

  {
    path: '/wetter',
    name: 'wetter',
    component: Weather,
    meta : {requiresAuth : true}
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from) => {
  await store.dispatch('checkAuthStatus')
  if (!store.state.isAuthenticated && to.meta.requiresAuth) {
    return { name: 'login' }
  }
})





export default router
