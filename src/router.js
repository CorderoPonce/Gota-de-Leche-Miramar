import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import QS from './pages/QS.vue'
import Contacto from './pages/Contacto.vue'
import Noticias from './pages/Noticias/Noticias.vue'
import NoticiaDetalle from './pages/Noticias/NoticiaDetalle.vue'
import Historias from './pages/Historias/Historias.vue'
import HistoriaDetalle from './pages/Historias/HistoriaDetalle.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/quienes-somos', component: QS },

  { path: '/como-ayudar', component: Contacto },

  { path: '/noticias', name: 'Noticias', component: Noticias },
  { path: '/noticias/:slug', name: 'NoticiaDetalle', component: NoticiaDetalle, props: true },

  { path: '/historias', name: 'Historias', component: Historias },
  { path: '/historias/:slug', name: 'HistoriaDetalle', component: HistoriaDetalle, props: true },

  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory('/Gota-de-Leche-Miramar/'), 
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100
      }
    }
    return savedPosition || { top: 0 }
  }
})

export default router