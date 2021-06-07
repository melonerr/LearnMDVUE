import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Team',
    name: 'Team',
    component: Team
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
