import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Dashboard from '../views/Dashboard.vue';
import Klassenverwaltung from '../views/Klassenverwaltung.vue'
import Login from '../views/Login.vue'
import store from '../store/index'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/login',
    name: 'login',
    component: Login,
    meta : {requiresAuth : false}
  },
/*
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta : {authentication : true}
  },
  */
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


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach(async (to, from) => {
  if (!store.state.isAuthenticated && to.name !== 'login') {
    return { name: 'login' }
  } 
})





export default router
