import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Photos from '@/views/Photos.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'
import Welcome from '@/views/Welcome.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/photos',
      component: Photos,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/welcome',
      component: Welcome,
    },
  ],
})
