import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import QS from './pages/QS.vue'
import Noticias from './pages/Noticias/Noticias.vue'
import NoticiaDetalle from './pages/Noticias/NoticiaDetalle.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/quienes-somos', component: QS },
  { path: '/noticias', name: 'Noticias', component: Noticias },
  { path: '/noticias/:slug', name: 'NoticiaDetalle', component: NoticiaDetalle, props: true },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory('/Gota-de-Leche-Miramar/'), 
  routes
})

export default router