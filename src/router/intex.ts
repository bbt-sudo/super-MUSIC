import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'
import User from '../views/User/index.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/user',
    name: 'user',
    component: User,
    children: [
      {
        path: 'register',
        name: 'register',
        component: () => import('../views/User/Register/index.vue'),
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/User/Login/index.vue'),
      },
    ],
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
