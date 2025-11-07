import { createRouter, createWebHistory } from 'vue-router'
import QuemSou from '../components/QuemSou.vue'
import OQueFaco from '../components/OQueFaco.vue'
import Hobbies from '../components/Hobbies.vue'

const routes = [
  {
    path: '/',
    redirect: '/quem-sou'
  },
  {
    path: '/quem-sou',
    name: 'QuemSou',
    component: QuemSou
  },
  {
    path: '/o-que-faco',
    name: 'OQueFaco',
    component: OQueFaco
  },
  {
    path: '/hobbies',
    name: 'Hobbies',
    component: Hobbies
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
