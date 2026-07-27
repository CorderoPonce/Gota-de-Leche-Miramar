<template>
  <main id="main-content" class="body-content article-page" tabindex="-1">
    
    <article v-if="historia" class="article-wrapper">
      
      <header class="article-hero dark-hero">
        <div class="hero-inner">
          
          <div class="article-meta reveal delay-1">
            <span class="category-pill">{{ historia.role }}</span>
          </div>

          <h1 class="article-title reveal delay-2">{{ historia.name }}</h1>
          <!-- Agregamos clase serif a la cita -->
          <p class="article-excerpt serif-quote reveal delay-2">"{{ historia.quote }}"</p>
        </div>

        <nav class="breadcrumbs reveal" aria-label="Breadcrumbs">
            <ol>
              <li><RouterLink to="/">Inicio</RouterLink></li>
              <li><span class="separator">/</span></li>
              <li><RouterLink to="/historias">Historias</RouterLink></li>
              <li><span class="separator">/</span></li>
              <li class="current" aria-current="page" :title="historia.name">
                <RouterLink :to="`/historias/${historia.slug}`">{{ historia.name }}</RouterLink>
              </li>
            </ol>
          </nav>
      </header>

      <div class="article-cover reveal delay-3">
        <!-- El wrapper para darle el efecto de viñeta suave -->
        <div class="cover-wrapper">
          <img :src="historia.image" :alt="`Fotografía de ${historia.name}`" loading="lazy" decoding="async">
        </div>
      </div>

      <!-- Cuerpo del texto renderizado dinámicamente -->
      <section class="article-body reveal">
        <div class="body-inner">
          <div class="html-content" v-html="historia.content"></div>
          
          <div class="article-footer">
            <RouterLink to="/historias" class="btn btn-outline-primary">Explorar más historias</RouterLink>
          </div>
        </div>
      </section>
      
    </article>

    <div v-else class="error-state reveal">
      <h1>Historia no encontrada</h1>
      <p>Lo sentimos, no pudimos encontrar el relato que buscas.</p>
      <RouterLink to="/historias" class="btn btn-secondary">Volver al catálogo</RouterLink>
    </div>

  </main>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { historiasData } from './historias.js'

const route = useRoute()
const historia = computed(() => {
  return historiasData.find(h => h.slug === route.params.slug)
})

let revealObserver = null

onMounted(() => {
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
        revealObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el)
  })
})

onUnmounted(() => {
  if (revealObserver) revealObserver.disconnect()
})
</script>

<style scoped>
/* ================= ESTRUCTURA GENERAL ================= */
.article-page { background-color: #fbfbf9; min-height: 100vh; padding-bottom: 6rem; }

/* ================= HERO ================= */
.dark-hero {
  margin-top: -50px; 
  padding: calc(4rem + 50px) 5% 4rem; 
  background-color: #0a0a0a; /* Negro intenso */
  background-image: radial-gradient(circle at center, #1a1a1a 0%, #000 100%); /* Efecto de luz central */
  color: #fff;
  text-align: center;
  box-shadow: inset 0 -30px 40px -20px rgba(0,0,0,0.5); 
}
.hero-inner { max-width: 800px; margin: 0 auto; }

/* ================= BREADCRUMBS ================= */
.breadcrumbs { margin-bottom: 3.5rem; }
.breadcrumbs ol { list-style: none; padding: 0; margin: 0; display: flex; justify-content: left; align-items: center; flex-wrap: wrap; gap: 0.6rem; font-size: calc(0.95rem * var(--font-modifier)); }
.breadcrumbs li { display: flex; align-items: center; gap: 0.6rem; }
.breadcrumbs a { color: rgba(255,255,255,0.5); text-decoration: none; font-weight: 500; transition: color 0.3s ease; }
.breadcrumbs a:hover { color: #fff; }
.breadcrumbs .separator { color: rgba(255,255,255,0.2); font-size: 0.8rem; }
.breadcrumbs .current a { color: var(--secondary-color); font-weight: 700; display: inline-block; max-width: 250px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; vertical-align: bottom; }
.breadcrumbs .current a:hover { text-decoration: underline; text-underline-offset: 4px; }

/* ================= TIPOGRAFÍA ================= */
.article-meta { margin-bottom: 2.2rem; display: flex; justify-content: center; }
.category-pill { color: var(--secondary-color); font-size: calc(0.9rem * var(--font-modifier)); font-weight: 600; text-transform: uppercase; letter-spacing: 2px; border-bottom: 1px solid var(--secondary-color); padding-bottom: 4px; }
.article-title { font-family: Georgia, serif; font-size: calc(3.8rem * var(--font-modifier)); font-weight: 400; color: #fff; line-height: 1.1; margin-bottom: 2.3rem; }
.serif-quote { font-family: Georgia, serif; font-size: calc(1.8rem * var(--font-modifier)); color: rgba(255,255,255,0.8); line-height: 1.6; max-width: 700px; margin: 0 auto; font-style: italic; font-weight: 300; margin-bottom: 3rem;}

/* ================= IMAGEN DE PORTADA ================= */
.article-cover { max-width: 1000px; margin: -5rem auto 5rem; padding: 0 5%; position: relative; z-index: 10; }
.cover-wrapper { position: relative; border-radius: 12px; overflow: hidden; box-shadow: 0 25px 60px rgba(0,0,0,0.3); }
.cover-wrapper img { width: 100%; height: auto; max-height: 650px; object-fit: cover; display: block; }
.cover-wrapper::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; box-shadow: inset 0 0 80px rgba(0,0,0,0.3); pointer-events: none; }

/* ================= CUERPO ================= */
.article-body { padding: 0 5%; }
.body-inner { max-width: 680px; margin: 0 auto; }
.html-content :deep(p) { font-family: 'Inter', system-ui, sans-serif; font-size: calc(1.15rem * var(--font-modifier)); color: #333; line-height: 1.8; margin-bottom: 2rem; font-weight: 300; }
.html-content :deep(strong) { color: #000; font-weight: 600; }
.html-content :deep(p:first-of-type::first-letter) {
  font-family: Georgia, serif;
  font-size: 4.5rem;
  font-weight: 400;
  color: var(--primary-color);
  float: left;
  line-height: 0.8;
  padding-right: 12px;
  padding-top: 8px;
}
.article-footer { margin-top: 5rem; padding-top: 3rem; border-top: 1px solid rgba(0,0,0,0.1); text-align: center; }

/* ================= ANIMACIONES ================= */
.reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1); }
.reveal.active { opacity: 1; transform: translateY(0); }
.delay-1 { transition-delay: 0.1s; } .delay-2 { transition-delay: 0.2s; } .delay-3 { transition-delay: 0.3s; }

/* ================= RESPONSIVO ================= */
@media (max-width: 768px) {
  .article-title { font-size: 2.8rem; }
  .serif-quote { font-size: 1.3rem; }
  .dark-hero { padding: 6rem 5% 8rem; margin-top: 0; }
  .article-cover { margin-top: -5rem; }
}
</style>