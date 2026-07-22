<template>
  <main id="main-content" class="body-content" tabindex="-1">
    <!-- ================= HERO SECTION ================= -->
    <section class="hero">
      <div class="hero-svg-bg">
        <svg viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
          <path class="wave-fill-secondary" d="M1440 0H750C980 280 800 550 920 800H1440V0Z"/>
          <path class="wave-fill" d="M1440 0H850C1100 280 930 550 1050 800H1440V0Z"/>
        </svg>
      </div>

      <div class="bg-blobs" aria-hidden="true">
        <div class="blob blob-1"></div>
      </div>

      <div class="hero-container reveal">
        <div class="hero-left">
          <h1>Cada gota de leche<br>es un acto de amor.</h1>
          <p>Con nuestra comunidad y familias, avanzamos de la mano en la crianza de la comuna y de forma totalmente gratuita.</p>
          
          <div class="hero-btns">
            <RouterLink to="/quienes-somos" class="btn btn-donar">Conócenos →</RouterLink>
            <RouterLink to="/contacto" class="btn btn-contacto">Pedir orientación</RouterLink>
          </div>
        </div>

        <div class="hero-right">
          <img src="../assets/Logo_GDLM.png" alt="Gota de Leche Ilustración" loading="lazy" decoding="async">
        </div>
      </div>
    </section>

    <!-- ================= CINTA ROTATIVA ================= -->
    <div class="mq-wrap" aria-hidden="true">
      <div class="mq-track">
        <div class="mq-item">❋ Lactancia materna</div>
        <div class="mq-item">❋ Vínculo madre e hijo</div>
        <div class="mq-item">❋ Bienestar infantil</div>
        <div class="mq-item">❋ Salud familiar</div>
        <div class="mq-item">❋ Lactancia materna</div>
        <div class="mq-item">❋ Vínculo madre e hijo</div>
        <div class="mq-item">❋ Bienestar infantil</div>
        <div class="mq-item">❋ Salud familiar</div>
        <div class="mq-item">❋ Lactancia materna</div>
        <div class="mq-item">❋ Vínculo madre e hijo</div>
        <div class="mq-item">❋ Bienestar infantil</div>
        <div class="mq-item">❋ Salud familiar</div>
      </div>
    </div>

    <section class="purpose-section reveal" aria-label="Nuestro propósito y servicios">
      <div class="content-inner">
        <div class="about-sidebar">
          <div class="sec-tag">Nuestro Propósito</div>
          <h2 class="sec-title">Una historia de amor de más de un siglo</h2>
          <div class="sec-desc">
            <p>La Sociedad Gota de Leche de Miramar es una corporación benéfica nacida con el propósito de proteger a los más pequeños y acompañar a sus madres en el proceso de crianza.</p>
            <p>Ofrecemos orientación, apoyo y comunidad, promoviendo el vínculo sagrado entre madre e hijo de forma totalmente voluntaria y gratuita.</p>
          </div>
        </div>

        <div class="srv-grid">
          <div class="bento-card card-wide">
            <div class="srv-icon"><i class="fa-solid fa-baby-carriage"></i></div>
            <div>
              <h3>Apoyo a la lactancia y nutrición</h3>
              <p>Orientación personalizada con apoyo profesional en cada etapa del proceso, garantizando el desarrollo óptimo del bebé.</p>
            </div>
          </div>
          
          <div class="bento-card">
            <div class="srv-icon"><i class="fa-solid fa-house-chimney-user"></i></div>
            <h3>Visitas a domicilio</h3>
            <p>Asistencia directa en el hogar, brindando apoyo logístico y contención en el entorno familiar.</p>
          </div>
          
          <div class="bento-card">
            <div class="srv-icon"><i class="fa-solid fa-users-rectangle"></i></div>
            <h3>Comunidad de madres</h3>
            <p>Espacios de encuentro y red de apoyo seguro donde compartir experiencias y mutua contención.</p>
          </div>
          
          <div class="bento-card">
            <div class="srv-icon"><i class="fa-solid fa-heart-pulse"></i></div>
            <h3>Control de lactantes</h3>
            <p>Seguimiento del desarrollo del bebé, controles de salud y asesoría nutricional especializada.</p>
          </div>
          
          <div class="bento-card">
            <div class="srv-icon"><i class="fa-solid fa-hand-holding-heart"></i></div>
            <h3>Ayuda solidaria</h3>
            <p>Apoyo material a familias vulnerables con ropa, insumos y recursos para el cuidado del bebé.</p>
          </div>
          
          <div class="bento-card card-wide">
            <div class="srv-icon"><i class="fa-solid fa-graduation-cap"></i></div>
            <div>
              <h3>Educación parental integral</h3>
              <p>Talleres sobre puericultura, desarrollo cognitivo infantil y metodologías de crianza respetuosa dictados periódicamente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= PANEL DE IMPACTO ================= -->
    <section class="impact-section reveal" aria-label="Logros e impacto de la organización">
      <div class="impact-container">
        <h2 class="section-title-impact">Con tu ayuda hemos logrado</h2>
        
        <div class="impact-grid" id="stats-container">
          <div class="impact-item">
            <span class="impact-number">+{{ statNinos }}</span>
            <span class="impact-label">Niños apoyados</span>
          </div>
          <div class="impact-item">
            <span class="impact-number">+{{ statAlimentos }}</span>
            <span class="impact-label">Alimentos distribuidos</span>
          </div>
          <div class="impact-item">
            <span class="impact-number">{{ statAnos }}</span>
            <span class="impact-label">Años en operación</span>
          </div>
          <div class="impact-item">
            <span class="impact-number">+{{ statVoluntarios }}</span>
            <span class="impact-label">Voluntarios activos</span>
          </div>
        </div>

        <div class="impact-action">
          <RouterLink to="/como-ayudar" class="btn btn-impacto btn-large">Quiero aportar hoy</RouterLink>
        </div>
      </div>
    </section>

    <!-- ================= HISTORIAS QUE INSPIRAN ================= -->
    <section class="stories-section reveal" aria-label="Historias de la comunidad">
      <div class="rotating-badge" aria-hidden="true">
            <svg viewBox="0 0 100 100">
              <defs>
                <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
              </defs>
              <circle cx="50" cy="50" r="45" class="badge-bg" />
              <text class="badge-text">
                <textPath href="#circlePath" textLength="228" lengthAdjust="spacing">
                  GOTA DE LECHE • MIRAMAR •
                </textPath>
              </text>
              <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" class="badge-icon">❤</text>
            </svg>
          </div>

      <div class="stories-header reveal">
        <h2 class="section-title">Historias que Inspiran</h2>
        <p class="section-subtitle">Detrás de cada número, hay una vida transformada gracias al esfuerzo conjunto.</p>
      </div>

      <div class="stories-grid">
        <!-- Tarjeta de Historia 1 -->
        <article class="story-card reveal delay-1" tabindex="0" @click="$router.push('/historias/1')" @keyup.enter="$router.push('/historias/1')">
          <div class="story-image-wrapper">
            <img src="../assets/H1.png" class="story-image-placeholder" loading="lazy" decoding="async">
          </div>
          <div class="story-content">
            <span class="quote-icon">“</span>
            <p class="story-quote">Frase Historia 1.</p>
            <div class="story-author">
              <h4>Protagonistas</h4>
              <span class="author-location">Comunidad Miramar, Viña del Mar</span>
            </div>
          </div>
        </article>

        <!-- Tarjeta de Historia 2 -->
        <article class="story-card reveal delay-2" tabindex="0" @click="$router.push('/historias/2')" @keyup.enter="$router.push('/historias/2')">
          <div class="story-image-wrapper">
            <img src="../assets/H2.png" class="story-image-placeholder" loading="lazy" decoding="async">
          </div>
          <div class="story-content">
            <span class="quote-icon">“</span>
            <p class="story-quote">Frase Historia 2.</p>
            <div class="story-author">
              <h4>Protagonistas</h4>
              <span class="author-location">Comunidad Miramar, Viña del Mar</span>
            </div>
          </div>
        </article>
      </div>

      <div class="more-stories-container reveal delay-3">
        <RouterLink to="/historias" class="btn btn-outline-primary">Leer más historias</RouterLink>
      </div>
    </section>

    <!-- ================= NOTICIAS ================= -->
    <section class="news-consolidated" aria-label="Últimas noticias publicadas">
      <h2 class="section-title reveal">Últimas Noticias</h2>
      <div class="news-slider-container reveal delay-1">
        <button class="nav-arrow left-arrow" @click="scrollNews('left')" aria-label="Desplazar noticias hacia la izquierda">❮</button>
        
        <div class="news-slider-wrapper">
          <div class="news-grid">
            
            <!-- últimas noticias -->
            <RouterLink 
              v-for="noticia in ultimasNoticias" 
              :key="noticia.id" 
              :to="`/noticias/${noticia.slug}`"
              class="news-item"
            >
              <div class="img-placeholder">
                <img :src="noticia.image" :alt="noticia.title" loading="lazy" decoding="async">
              </div>
              
              <div class="news-info">
                <h4>{{ noticia.title }}</h4>
                <p>{{ noticia.excerpt }}</p> 
              </div>
            </RouterLink>

          </div>
        </div>

        <button class="nav-arrow right-arrow" @click="scrollNews('right')" aria-label="Desplazar noticias hacia la derecha">❯</button>
      </div>

      <div class="more-news-container reveal delay-2">
        <RouterLink to="/noticias" class="btn btn-contacto">Ver todas las noticias</RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup>
  import { noticiasData } from './Noticias/noticias.js'
  import { ref, onMounted, onUnmounted } from 'vue'
  import imgN1 from '../assets/N1.png'
  import imgN2 from '../assets/N2.png'
  import imgN3 from '../assets/N3.png'
  import imgN4 from '../assets/N4.png'
  import imgN5 from '../assets/N5.png'

  const ultimasNoticias = noticiasData.slice(0, 4)

  //================= ANIMACIÓN DE NÚMEROS (STATS) =================-->
  const statNinos = ref(0)
  const statAlimentos = ref(0)
  const statAnos = ref(0)
  const statVoluntarios = ref(0)

  const animateValue = (targetRef, max, durationStr) => {
    let start = 0
    const duration = durationStr
    const stepTime = Math.abs(Math.floor(duration / max))
    
    const timer = setInterval(() => {
      start += Math.ceil(max / 50)
      if (start >= max) {
        targetRef.value = max.toLocaleString('es-CL')
        clearInterval(timer)
      } else {
        targetRef.value = start.toLocaleString('es-CL')
      }
    }, stepTime)
  }

  let observer = null
  let revealObserver = null


// Noticias y Desplazamiento
const newsContainer = ref(null)

const scrollNews = (direction) => {
  if (newsContainer.value) {
    const firstItem = newsContainer.value.querySelector('.news-item')
    if (firstItem) {
      const itemWidth = firstItem.offsetWidth
      const gap = parseFloat(getComputedStyle(newsContainer.value.querySelector('.news-grid')).gap) || 40
      const scrollAmount = direction === 'left' ? -(itemWidth + gap) : (itemWidth + gap)
      newsContainer.value.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }
}

onMounted(() => {
  // Lógica para que los números cuenten al hacer scroll y verlos
  observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
      animateValue(statNinos, 1500, 1500)
      animateValue(statAlimentos, 8500, 2000)
      animateValue(statAnos, 10, 1500)
      animateValue(statVoluntarios, 400, 1500)
      observer.disconnect()
    }
  })
  
  const statsContainer = document.getElementById('stats-container')
  if (statsContainer) observer.observe(statsContainer)

    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          revealObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })

    document.querySelectorAll('.reveal').forEach((el) => {
      revealObserver.observe(el)
    })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
  if (revealObserver) revealObserver.disconnect()
})
</script>

<style scoped>
.body-content {
  flex: 1;
  padding: 0;
  outline: none;
}

.bg-blobs {
  position: absolute;
  top: 0; left: 0; 
  width: 100%; height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none; 
}
.blob {
  position: absolute;
  filter: blur(70px);
  border-radius: 50%;
  opacity: 0.35;
  animation: float-blob 10s ease-in-out infinite alternate;
  will-change: transform;
}
.blob-1 {
  top: -10%; left: -5%;
  width: 350px; height: 350px;
  background: var(--secondary-color);
  will-change: transform;
}

@keyframes float-blob {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(40px, 50px) scale(1.1); }
}

/* --- Sello Circular Rotativo --- */
.rotating-badge {
  position: absolute;
  top: 0px;
  right: 5%;
  z-index: 10;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: var(--primary-color);
  box-shadow: 0 12px 25px rgba(0,0,0,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.rotating-badge svg {
  width: 100%;
  height: 100%;
  animation: spin-badge 16s linear infinite;
  transform-origin: center center;
  will-change: transform;
}

.badge-bg {
  fill: transparent;
  stroke: var(--bg-surface);
  stroke-width: 1;
  opacity: 0.3;
}

.badge-text {
  font-size: 9.5px;
  font-weight: 700;
  fill: var(--bg-surface);
}

.badge-icon {
  font-size: 26px;
  fill: var(--secondary-color);
}

@keyframes spin-badge {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* ================= HERO SECTION ================= */
.hero {
  position: relative;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  padding: 0 5%;
}

.hero-svg-bg {
  position: absolute;
  top: 0; right: 0;
  width: 50%; height: 100%;
  z-index: 1; pointer-events: none;
}
.hero-svg-bg svg { width: 100%; height: 100%; object-fit: cover; }
.hero-svg-bg path.wave-fill { fill: var(--hero-wave); transition: fill 0.6s ease; }

.hero-svg-bg path.wave-fill-secondary { 
  fill: var(--secondary-color); 
  opacity: 0.15; 
  transition: fill 0.6s ease, opacity 0.6s ease; 
}

.hero-container {
  width: 100%; max-width: 1300px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  position: relative; z-index: 2;
}

.hero-left { flex: 0 0 52%; max-width: 650px; padding-bottom: 2rem; }
.hero-left h1 {
  font-size: calc(3.5rem * var(--font-modifier)); font-weight: 800;
  line-height: 1.15; color: var(--text-main); letter-spacing: -1.5px;
  margin-bottom: 1.5rem; 
}
.hero-left p {
  font-size: calc(1.15rem * var(--font-modifier)); color: var(--text-muted);
  line-height: 1.75; margin-bottom: 2.5rem; max-width: 500px;
}
.hero-btns { display: flex; gap: 1rem; margin-bottom: 4rem; }

.hero-right { flex: 0 0 40%; display: flex; justify-content: center; align-items: center; position: relative; z-index: 2; }
.hero-right img { width: 100%; max-width: 520px; height: auto;}


/* ================= CINTA ROTATIVA ================= */
.mq-wrap {
  overflow: hidden; padding: 1.5rem 0; background: var(--bg-surface);
  border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color);
  margin-bottom: 5rem;
}
.mq-track {
  display: flex; gap: 3rem;
  width: 200%;
  animation: marquee-right 35s linear infinite;
}
.mq-item {
  display: flex; align-items: center; gap: 1rem; font-size: calc(0.9rem * var(--font-modifier));
  letter-spacing: 2px; text-transform: uppercase; color: var(--text-muted); font-weight: 600; white-space: nowrap;
}

@keyframes marquee-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

/* ================= SECCIÓN: NUESTRO PROPÓSITO ================= */
.purpose-section {
  padding: 4rem 5%;
  background: transparent;
  margin-bottom: 7rem;
}

.content-inner { 
  max-width: 1350px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  gap: 6rem;
  align-items: start;
}

.about-sidebar {
  position: sticky;
  top: 130px;
}

.sec-tag { 
  font-size: calc(0.85rem * var(--font-modifier));
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--secondary-color);
  font-weight: 700;
  margin-bottom: 1rem;
}

.sec-title { 
  font-size: calc(2.8rem * var(--font-modifier));
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 1.8rem;
  line-height: 1.3;
  letter-spacing: -2.5px;
}

.sec-desc {
  color: var(--text-muted);
  font-size: calc(1.15rem * var(--font-modifier));
  line-height: 1.8;
}

.sec-desc p { 
  margin-bottom: 1.2rem; 
}

.srv-grid { 
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.bento-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: 28px;
  padding: 3.5rem 3rem;
  text-align: left;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease, background 0.6s ease;
  box-shadow: 0 8px 30px rgba(0,0,0,0.04);
}

.card-wide {
  grid-column: span 2;
  display: flex;
  align-items: center;
  gap: 3rem;
}

.bento-card:hover, .bento-card:focus {
  transform: scale(1.02);
  box-shadow: 0 15px 40px rgba(0,0,0,0.08);
  outline: 2px solid var(--secondary-color);
}

.srv-icon {
  width: 75px; height: 75px;
  border-radius: 20px;
  flex-shrink: 0;
  background: rgba(50, 115, 181, 0.1);
  color: var(--secondary-color);
  display: flex; align-items: center; justify-content: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  transition: background 0.6s ease, color 0.6s ease;
}

.card-wide .srv-icon {
  margin-bottom: 0;
}

.bento-card h3 {
  font-size: calc(1.3rem * var(--font-modifier));
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.8rem;
}

.bento-card p {
  font-size: calc(1.05rem * var(--font-modifier));
  color: var(--text-muted);
  line-height: 1.7;
}

.high-contrast .bento-card { background: #000000; border: 2px solid #ffffff; }
.high-contrast .sec-tag { color: #ffff00; }
.high-contrast .srv-icon { background: #000000; color: #ffff00; border: 1px solid #ffff00; }
.high-contrast .hero-svg-bg path.wave-fill-secondary { fill: #ffff00; opacity: 0.25; }
.high-contrast .blob { display: none; }
.high-contrast .badge-bg { fill: #000000; stroke: #ffffff; }
.high-contrast .badge-text { fill: #ffff00; }
.high-contrast .badge-icon { fill: #ffffff; }
.high-contrast .dot-grid-pattern { background-image: radial-gradient(#ffff00 2px, transparent 2px); opacity: 1; }

/* Panel de Logros */
.impact-section { background: var(--impact-gradient); border-radius: 12px; padding: 5rem 2rem; margin-bottom: 5rem; }
.impact-container { max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 2rem; }
.impact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 3.5rem 2.5rem; text-align: center; }
.impact-item { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; }
.impact-number { font-size: calc(3.5rem * var(--font-modifier)); font-weight: 800; color: #ffffff; line-height: 1.1; }
.impact-label { font-size: calc(1.15rem * var(--font-modifier)); color: #e0f2fe; font-weight: 500; text-transform: uppercase; line-height: 1.4; letter-spacing: 0.5px; }
.impact-action { display: flex; justify-content: center; align-items: center; width: 100%; margin-top: 1rem; }
.btn-large { padding: 1.1rem 3rem; font-size: calc(1.15rem * var(--font-modifier)); }
.btn-impacto { background-color: var(--btn-impacto-bg); color: var(--btn-impacto-text); font-weight: bold; border: 2px solid var(--btn-impacto-bg); }
.btn-impacto:hover, .btn-impacto:focus { background-color: transparent; color: #ffffff; }

/* ================= HISTORIAS QUE INSPIRAN ================= */
.stories-section {
  padding: 2rem 5%;
  margin-bottom: 5rem;
  position: relative;
}

.stories-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-subtitle {
  color: var(--text-muted);
  font-size: calc(1.1rem * var(--font-modifier));
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.story-card {
  display: flex;
  flex-direction: column;
  background: var(--bg-surface);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--border-color);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.story-card:hover, .story-card:focus {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  outline: 2px solid var(--primary-color);
}

.story-image-wrapper {
  position: relative;
  width: 100%;
  padding-top: 60%;
  background-color: var(--border-color);
}

.story-image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  font-weight: 500;
  font-size: calc(1.1rem * var(--font-modifier));
  background: linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 100%); 
}

.story-content {
  padding: 2.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.quote-icon {
  position: absolute;
  top: -20px;
  left: 20px;
  font-size: 5rem;
  line-height: 1;
  color: var(--primary-color);
  opacity: 0.2;
  font-family: Georgia, serif;
}

.story-quote {
  font-size: calc(1.15rem * var(--font-modifier));
  color: var(--text-main);
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 2rem;
  flex: 1;
}

.story-author {
  margin-top: auto;
  border-top: 1px solid var(--border-color);
  padding-top: 1.5rem;
}

.story-author h4 {
  margin: 0 0 0.3rem 0;
  color: var(--secondary-color);
  font-size: calc(1.1rem * var(--font-modifier));
}

.author-location {
  font-size: calc(0.9rem * var(--font-modifier));
  color: var(--text-muted);
  display: block;
}

.more-stories-container {
  text-align: center;
}

.btn-outline-primary {
  display: inline-block;
  padding: 0.8rem 2rem;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  background: transparent;
  border-radius: 30px;
  font-weight: 600;
  font-size: calc(1rem * var(--font-modifier));
  text-decoration: none;
  transition: all 0.3s;
}

.btn-outline-primary:hover, .btn-outline-primary:focus {
  background: var(--primary-color);
  color: white;
}

/* ================= NOTICIAS ================= */
.news-consolidated { margin-bottom: 5rem; }
.section-title-impact { color: #fff; margin-bottom: 2.5rem; font-size: calc(2.2rem * var(--font-modifier)); text-align: center; }
.section-title { color: var(--text-main); margin-bottom: 2.5rem; font-size: calc(2.2rem * var(--font-modifier)); text-align: center; }
.news-slider-container { position: relative; display: flex; align-items: center; padding: 0 110px; }
.news-slider-wrapper { overflow-x: auto; scroll-snap-type: x mandatory; scroll-behavior: smooth; width: 100%; padding: 1rem 0; scrollbar-width: none; }
.news-slider-wrapper::-webkit-scrollbar { display: none; }
.news-grid { display: flex; gap: 2.5rem; }
.news-item { flex: 0 0 calc(33.333% - 1.666rem); scroll-snap-align: start; cursor: pointer; transition: all 0.3s ease; text-decoration: none; color: inherit;}
.img-placeholder { height: 220px; position: relative; overflow: hidden; border-radius: 12px 12px 0 0; }
.img-placeholder img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
.news-info { padding: 2rem; }
.news-info h4 { margin: 0 0 1rem 0; font-size: calc(1.3rem * var(--font-modifier)); line-height: 1.2; }
.news-info p { line-height: 1.6; font-size: calc(1rem * var(--font-modifier)); }
.nav-arrow { background: var(--bg-surface); border: 1px solid var(--border-color); box-shadow: 0 4px 12px rgba(0,0,0,0.15); color: var(--text-main); font-size: 1.8rem; width: 60px; height: 60px; border-radius: 50%; cursor: pointer; position: absolute; top: 50%; transform: translateY(-50%); display: flex; align-items: center; justify-content: center; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); z-index: 20; }
.nav-arrow:hover, .nav-arrow:focus { background-color: var(--secondary-color); color: white; border-color: var(--secondary-color); transform: translateY(-50%) scale(1.1);box-shadow: 0 6px 18px rgba(52, 152, 219, 0.4);}
.left-arrow { left: 55px; } 
.right-arrow { right: 55px; }
.more-news-container { text-align: center; margin-top: 3rem; }
.news-item:hover .img-placeholder img { transform: scale(1.05); }
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* ================= ANIMACIÓN REVEAL ================= */
.reveal { 
  opacity: 0; 
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

.reveal.active { 
  opacity: 1; 
  transform: translateY(0);
}

.delay-1 { transition-delay: 0.5s; }
.delay-2 { transition-delay: 0.6s; }
.delay-3 { transition-delay: 0.7s; }

@media (max-width: 1024px) {
  .news-item { flex: 0 0 calc(50% - 1.25rem);}
  .stories-grid { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
}

@media (max-width: 992px) {
  .content-inner { grid-template-columns: 1fr; gap: 4rem; }
  .about-sidebar { position: static; text-align: center; }
  .hero-container { flex-direction: column; text-align: center; gap: 1rem; padding-top: 2rem;} 
  .hero-left { flex: 0 0 100%; max-width: 100%; padding-bottom: 0; }
  .hero-right { flex: 0 0 100%; max-width: 100%; padding-bottom: 2rem; }
  .hero-left p { margin: 0 auto 2.5rem auto; }
  .hero-btns { justify-content: center; margin-bottom: 0; }
  .hero-right img { max-width: 90%; margin: 0 0 0 0; }
  .hero-svg-bg { display: none; }
}

@media (max-width: 768px) {
  .main-action-buttons { grid-template-columns: 1fr; }
  .slider-placeholder { padding: 4rem 2rem; min-height: 350px; }
  .slide-content h2 { font-size: 2rem; }
  .news-slider-container { padding: 0 15px; }
  .news-item { flex: 0 0 100%; }
  .nav-arrow { display: flex; width: 45px; height: 45px; font-size: 1.2rem; }
  .left-arrow { left: -5px; } 
  .right-arrow { right: -5px; }
  .stories-grid { grid-template-columns: 1fr; }
  .srv-grid { grid-template-columns: 1fr; }
  .card-wide { grid-column: span 1; flex-direction: column; text-align: center; }
  .card-wide .srv-icon { margin: 0 auto 1.5rem; }
  .hero-left h1 { font-size: calc(2.8rem * var(--font-modifier)); }
  .hero-btns { flex-direction: column; gap: 1rem; }
  .hero-btns .btn { width: 100%; }
  .srv-grid { grid-template-columns: 1fr; } 
  .card-wide { grid-column: span 1; display: block; text-align: left; padding: 3.5rem 3rem; }
  .card-wide .srv-icon { margin: 0 0 1.5rem 0; }
  .rotating-badge { width: 90px; height: 90px; top: -30px; right: auto; left: 50%; transform: translateX(-50%);}
  .stories-header { padding-top: 3.5rem; }
}
</style>