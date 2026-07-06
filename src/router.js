import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import QS from './pages/QS.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/quienes-somos', component: QS },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory('/Gota-de-Leche-Miramar/'), 
  routes
})

export default router