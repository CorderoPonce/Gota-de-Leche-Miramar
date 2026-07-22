<template>
  <main id="main-content" class="body-content article-page" tabindex="-1">
    
    <article v-if="noticia" class="article-wrapper">
      
      <!-- ================= PORTADA ================= -->
      <header class="article-hero reveal">
        <div class="hero-inner">
          <div class="article-meta delay-1">
            <span class="category-pill">{{ noticia.category }}</span>
            <span class="publish-date">{{ noticia.date }}</span>
          </div>

          <h1 class="article-title delay-2">{{ noticia.title }}</h1>
          <p class="article-excerpt delay-2">{{ noticia.excerpt }}</p>
        </div>

        <nav class="breadcrumbs reveal" aria-label="Breadcrumbs">
            <ol>
              <li><RouterLink to="/">Inicio</RouterLink></li>
              <li><span class="separator">/</span></li>
              <li><RouterLink to="/noticias">Noticias</RouterLink></li>
              <li><span class="separator">/</span></li>
              
              <!-- El título ahora es un enlace a su propia ruta -->
              <li class="current" aria-current="page" :title="noticia.title">
                <RouterLink :to="`/noticias/${noticia.slug}`">
                  {{ noticia.title }}
                </RouterLink>
              </li>
            </ol>
          </nav>
      </header>

      <!-- ================= IMAGEN PRINCIPAL ================= -->
      <div class="article-cover reveal delay-3">
        <img :src="noticia.image" :alt="noticia.title" loading="lazy" decoding="async">
      </div>

      <!-- ================= CUERPO DEL TEXTO (Renderizado Dinámico) ================= -->
      <section class="article-body reveal">
        <div class="body-inner">
          <div class="html-content" v-html="noticia.content"></div>
          <div class="article-footer">
            <RouterLink to="/noticias" class="btn btn-outline-primary">Ver más noticias</RouterLink>
          </div>
        </div>
      </section>
      
    </article>

    <div v-else class="error-state reveal">
      <h1>Noticia no encontrada</h1>
      <p>Lo sentimos, el artículo que buscas no existe o ha sido eliminado.</p>
      <RouterLink to="/noticias" class="btn btn-secondary">Volver al catálogo</RouterLink>
    </div>

  </main>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { noticiasData } from './noticias.js'

const route = useRoute()
const noticia = computed(() => {
  return noticiasData.find(n => n.slug === route.params.slug)
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
.article-page {
  background-color: var(--bg-main);
  min-height: 100vh;
  padding-bottom: 6rem;
}

/* ================= PORTADA ================= */
.article-hero {
    margin-top: -50px;
    padding: calc(4rem + 50px) 5% 2rem;
    background-color: var(--bg-surface);
    text-align: center;
}

.hero-inner {
  max-width: 900px;
  margin: 0 auto;
}

.breadcrumbs {
    margin-top: 3.5rem;
}

.breadcrumbs ol {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  font-size: calc(0.95rem * var(--font-modifier));
}

.breadcrumbs li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.breadcrumbs a {
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.breadcrumbs a:hover {
  color: var(--primary-color);
}

.breadcrumbs .separator {
  color: var(--border-color);
  font-size: 0.8rem;
}

.breadcrumbs .current a {
  color: var(--secondary-color);
  font-weight: 700;
  display: inline-block; 
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: bottom;
}

.breadcrumbs .current a:hover {
  color: var(--primary-color);
  text-decoration: underline; 
  text-underline-offset: 4px;
}

.btn-back:hover {
  color: var(--primary-color);
}

.article-meta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.category-pill {
  background: var(--primary-color);
  color: #ffffff;
  padding: 0.4rem 1.2rem;
  border-radius: 50px;
  font-size: calc(0.85rem * var(--font-modifier));
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.publish-date {
  color: var(--text-muted);
  font-weight: 500;
  font-size: calc(1rem * var(--font-modifier));
}

.article-title {
  font-size: calc(3.5rem * var(--font-modifier));
  font-weight: 800;
  color: var(--text-main);
  line-height: 1.15;
  letter-spacing: -1.5px;
  margin-bottom: 2rem;
}

.article-excerpt {
  font-size: calc(1.3rem * var(--font-modifier));
  color: var(--text-muted);
  line-height: 1.6;
  max-width: 750px;
  margin: 0 auto;
}

/* ================= IMAGEN DE PORTADA ================= */
.article-cover {
  max-width: 1200px;
  margin: 4rem auto 4rem;
  padding: 0 5% ;
}

.article-cover img {
  width: 100%;
  height: auto;
  max-height: 600px;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.1);
}

/* ================= CUERPO DEL ARTÍCULO ================= */
.article-body {
  padding: 0 5%;
}

.body-inner {
  max-width: 750px;
  margin: 0 auto;
}

.html-content :deep(p) {
  font-size: calc(1.2rem * var(--font-modifier));
  color: var(--text-muted);
  line-height: 1.85;
  margin-bottom: 2rem;
}

.html-content :deep(strong) {
  color: var(--text-main);
  font-weight: 700;
}

.article-footer {
  margin-top: 5rem;
  padding-top: 3rem;
  border-top: 1px solid var(--border-color);
  text-align: center;
}

/* ================= ESTADO DE ERROR (404 Noticia no encontrada) ================= */
.error-state {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 5%;
}

.error-state h1 {
  font-size: 3rem;
  color: var(--text-main);
  margin-bottom: 1rem;
}

.error-state p {
  color: var(--text-muted);
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

/* ================= ANIMACIONES REVEAL ================= */
.reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1); }
.reveal.active { opacity: 1; transform: translateY(0); }
.delay-1 { transition-delay: 0.1s; }
.delay-2 { transition-delay: 0.2s; }
.delay-3 { transition-delay: 0.3s; }

/* ================= RESPONSIVO ================= */
@media (max-width: 768px) {
  .article-title { font-size: 2.5rem; }
  .article-excerpt { font-size: 1.15rem; }
  .article-hero { padding: 6rem 5% 3rem; }
  .html-content :deep(p) { font-size: 1.1rem; }
  .article-meta { flex-direction: column; gap: 0.8rem; }
}
</style>