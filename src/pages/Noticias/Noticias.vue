<template>
  <main id="main-content" class="body-content news-page" tabindex="-1">
    
    <!-- ================= PORTADA ================= -->
    <section class="news-hero reveal">
      <div class="news-hero-content">
        <div class="sec-tag">Transparencia y Comunidad</div>
        <h1 class="page-title">Noticias y Novedades</h1>
        <p class="page-subtitle">
          Entérate de nuestras últimas campañas, alianzas y el trabajo en terreno que realizamos día a día por las familias de Viña del Mar.
        </p>
      </div>
    </section>

    <!-- ================= CATÁLOGO ================= -->
    <section class="news-catalog">
      <div class="catalog-container">
        
        <div class="news-grid">
          <!-- BDD "noticiasData" -->
          <article 
            v-for="(noticia, index) in noticias" 
            :key="noticia.id" 
            class="news-card reveal" 
            :class="`delay-${(index % 3) + 1}`"
          >
            <RouterLink :to="`/noticias/${noticia.slug}`" class="card-link">
              <!-- Imagen de la tarjeta -->
              <div class="card-image-wrapper">
                <img :src="noticia.image" :alt="noticia.title" loading="lazy" decoding="async">
                <div class="card-category">{{ noticia.category }}</div>
              </div>

              <!-- Contenido de la tarjeta -->
              <div class="card-content">
                <span class="card-date">{{ noticia.date }}</span>
                <h2 class="card-title">{{ noticia.title }}</h2>
                <p class="card-excerpt">{{ noticia.excerpt }}</p>
                
                <div class="card-footer">
                  <span class="read-more">Leer artículo completo <span class="arrow" aria-hidden="true">→</span></span>
                </div>
              </div>

            </RouterLink>
          </article>
        </div>

      </div>
    </section>

  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
// Importación BDD de noticias
import { noticiasData } from './noticias.js'
const noticias = ref(noticiasData)

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
.news-page {
  background-color: var(--bg-main);
  background-image: radial-gradient(var(--bg-dots) 2px, transparent 1px);
  background-size: 24px 24px;
  background-attachment: fixed;
  min-height: 100vh;
  padding-bottom: 8rem;
}

.sec-tag { 
    font-size: calc(0.85rem * var(--font-modifier)); 
    letter-spacing: 3px; text-transform: uppercase; 
    color: var(--secondary-color); font-weight: 700; 
    margin-bottom: 1.5rem; 
}

/* ================= PORTADA ================= */
.news-hero {
  margin-top: -50px;
  padding: calc(5rem + 50px) 5% 4rem;
  text-align: center;
  background-color: var(--bg-surface);
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 5rem;
}

.news-hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: calc(3.5rem * var(--font-modifier));
  font-weight: 800;
  color: var(--text-main);
  line-height: 1.1;
  letter-spacing: -1.5px;
  margin-bottom: 2rem;
}

.page-subtitle {
  font-size: calc(1.2rem * var(--font-modifier));
  color: var(--text-muted);
  line-height: 1.7;
}

/* ================= NOTICIAS ================= */
.catalog-container {
  max-width: 1700px;
  margin: 0 auto;
  padding: 0 5%;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 3rem;
}

/* ================= TARJETAS DE NOTICIAS (CARDS) ================= */
.news-card {
  background: var(--bg-surface);
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  box-shadow: 0 10px 30px rgba(0,0,0,0.04);
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease;
  will-change: transform;
}

.news-card:hover, .news-card:focus-within {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  border-color: var(--secondary-color);
}

.card-link {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

.card-image-wrapper {
  position: relative;
  width: 100%;
  padding-top: 60%;
  background-color: var(--border-color);
  overflow: hidden;
}

.card-image-wrapper img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.news-card:hover .card-image-wrapper img {
  transform: scale(1.05);
}

.card-category {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: var(--primary-color);
  color: #ffffff;
  padding: 0.4rem 1.2rem;
  border-radius: 50px;
  font-size: calc(0.85rem * var(--font-modifier));
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  z-index: 2;
}

.card-content {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-date {
  font-size: calc(0.95rem * var(--font-modifier));
  color: var(--text-muted);
  margin-bottom: 1rem;
  font-weight: 500;
}

.card-title {
  font-size: calc(1.6rem * var(--font-modifier));
  font-weight: 800;
  color: var(--text-main);
  line-height: 1.25;
  letter-spacing: -0.5px;
  margin-bottom: 1rem;
}

.card-excerpt {
  font-size: calc(1.05rem * var(--font-modifier));
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 2rem;
  /* Truncamiento si el texto es muy largo */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  margin-top: auto;
  border-top: 1px solid var(--border-color);
  padding-top: 1.5rem;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: calc(1rem * var(--font-modifier));
  color: var(--secondary-color);
}

.read-more .arrow {
  transition: transform 0.3s ease;
}

.news-card:hover .read-more .arrow {
  transform: translateX(8px);
}

/* ================= ANIMACIONES REVEAL ================= */
.reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1); }
.reveal.active { opacity: 1; transform: translateY(0); }
.delay-1 { transition-delay: 0.1s; }
.delay-2 { transition-delay: 0.2s; }
.delay-3 { transition-delay: 0.3s; }

/* ================= ALTO CONTRASTE ================= */
.high-contrast .news-hero { background-color: #000; border-bottom: 2px solid #fff; }
.high-contrast .news-card { background: #000; border: 2px solid #fff; }
.high-contrast .card-category { background: #fff; color: #000; border: 1px solid #000; }
.high-contrast .read-more { color: #ff0; }

/* ================= RESPONSIVO ================= */
@media (max-width: 768px) {
  .page-title { font-size: 2.8rem; }
  .news-hero { padding: 6rem 5% 3rem; }
  .news-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .card-content { padding: 2rem; }
}
</style>