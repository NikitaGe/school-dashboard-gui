import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Dashboard from '../views/Dashboard.vue';
import Klassenverwaltung from '../views/Klassenverwaltung.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },

  {
    path: '/class',
    name: 'klassenverwaltung',
    component: Klassenverwaltung
  },




  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
