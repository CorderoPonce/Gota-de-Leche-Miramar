<template>
  <main id="main-content" class="body-content qs-page" tabindex="-1">
    
    <!-- ================= PORTADA: QUIÉNES SOMOS ================= -->
    <section class="qs-hero reveal">
      <div class="qs-hero-container">
        <!-- Textos -->
        <div class="qs-hero-content">
          <div class="sec-tag">Nuestra Esencia</div>
          <h1 class="qs-title">Más de un siglo protegiendo<br>el vínculo más puro.</h1>
          <p class="qs-subtitle">
            Desde 1918, la Sociedad Gota de Leche de Miramar se dedica al acompañamiento de lactantes y sus familias durante los primeros y más importantes años de vida, operando desde el corazón de Viña del Mar.
          </p>
        </div>
        
        <!-- Logo Gigante Decorativo -->
        <div class="qs-hero-logo">
          <img src="../assets/Logo_GDLM.png" alt="Emblema Gigante Gota de Leche" loading="lazy" decoding="async">
        </div>
      </div>

      <!-- Decoración: Ola separadora que conecta con la siguiente sección -->
      <div class="qs-hero-wave">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none">
          <path fill="var(--bg-surface)" fill-opacity="1" d="M0,128L80,133.3C160,139,320,149,480,144C640,139,800,117,960,122.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>

    <!-- ================= QUÉ HACEMOS ================= -->
    <section class="what-we-do-section" aria-label="Nuestras labores">
      <div class="content-inner sticky-layout">
        
        <!-- Columna Izquierda (Sticky) -->
        <div class="sticky-sidebar reveal delay-1">
          <h2 class="sec-title large-title">Nuestra Labor<br>en Terreno</h2>
          <p class="sec-desc large-desc">A través de un enfoque integral, no solo entregamos apoyo material, sino que construimos una red de contención humana y profesional para las familias de nuestra comuna.</p>
        </div>

        <!-- Columna Derecha (Scroll de Fotografías y Textos) -->
        <div class="scrolling-gallery">
          
          <article class="gallery-item reveal delay-2">
            <img src="../assets/F1.png" class="photo-placeholder" loading="lazy" decoding="async">
            <div class="gallery-text">
              <h3>Acompañamiento Nutricional</h3>
              <p>Ofrecemos orientación personalizada con profesionales de la salud, asegurando que cada lactante reciba el desarrollo óptimo en su etapa más crítica.</p>
            </div>
          </article>

          <article class="gallery-item reveal delay-1">
            <img src="../assets/F2.png" class="photo-placeholder" loading="lazy" decoding="async">
            <div class="gallery-text">
              <h3>Visitas Domiciliarias</h3>
              <p>Llevamos nuestra labor directamente a los hogares, brindando apoyo logístico, entregando suministros y evaluando el entorno familiar para una ayuda más precisa.</p>
            </div>
          </article>

          <article class="gallery-item reveal delay-1">
            <img src="../assets/F3.png" class="photo-placeholder" loading="lazy" decoding="async">
            <div class="gallery-text">
              <h3>Red de Madres y Educación</h3>
              <p>Facilitamos espacios de encuentro seguros y talleres de puericultura, donde las familias comparten experiencias y fortalecen sus herramientas de crianza respetuosa.</p>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- ================= HISTORIA / HITOS ================= -->
    <section class="history-section" aria-label="Nuestra historia">
      <div class="history-container">
        <div class="history-header reveal">
          <div class="sec-tag">Nuestra Trayectoria</div>
          <h2 class="sec-title">Hitos que han marcado<br>nuestra historia</h2>
        </div>

        <div class="timeline">
          <div class="timeline-item reveal" v-for="(hito, index) in hitos" :key="index">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-year">{{ hito.year }}</span>
              <h3 class="timeline-title">{{ hito.title }}</h3>
              <p class="timeline-desc">{{ hito.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Cierre de Historia MUCHÍSIMO MÁS GRANDE -->
        <div class="history-action reveal delay-2">
          <h2 class="history-action-title">El trabajo nunca se detiene.<br>Descubre lo que estamos haciendo hoy.</h2>
          
          <RouterLink to="/noticias" class="btn btn-jumbo cta-news-btn">
            Conoce más de nuestra labor <span class="arrow" aria-hidden="true">→</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ================= SECCIÓN CALL TO ACTION (Clímax) ================= -->
    <div class="climax-wrapper reveal">
      <section class="cta-section">
        <div class="cta-card">
          <h2 class="cta-title">¿Te gustaría formar parte<br>de esta historia?</h2>
          <p class="cta-desc">Tu tiempo, talento o aporte voluntario nos permite seguir entregando apoyo a quienes más lo necesitan. Únete a nuestra red de amor.</p>
          <div class="cta-btns">
            <RouterLink to="/como-ayudar" class="btn btn-donar btn-jumbo">Haz tu donación hoy</RouterLink>
            <RouterLink to="/contacto" class="btn btn-contacto-white btn-jumbo">Contáctanos</RouterLink>
          </div>
        </div>
      </section>
    </div>

  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const hitos = ref([
  { year: '1918', title: 'Nace la Sociedad', desc: 'Se funda la Corporación de Beneficencia Gota de Leche en Miramar, con la misión urgente de proteger la vida de los recién nacidos.' },
  { year: '1950', title: 'Expansión de la Ayuda', desc: 'Inauguración de nuestro primer centro de atención integral, permitiendo recibir a más familias y centralizar el apoyo alimentario.' },
  { year: '1998', title: 'Integración Educativa', desc: 'Se suman profesionales voluntarios para incorporar talleres de crianza, marcando un cambio hacia el apoyo psicosocial integral.' },
  { year: 'Actualidad', title: 'Comunidad Viva', desc: 'Hoy seguimos operando en Calle 5 #2065, adaptándonos a las nuevas realidades familiares y manteniendo nuestro servicio 100% gratuito.' }
])

let revealObserver = null

onMounted(() => {
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
  if (revealObserver) revealObserver.disconnect()
})
</script>

<style scoped>
/* ================= ESTRUCTURA GENERAL ================= */
.qs-page {
  padding-bottom: 0; /* Quitamos el padding global porque el Climax final cubre todo */
}

.sec-tag { font-size: calc(0.85rem * var(--font-modifier)); letter-spacing: 3px; text-transform: uppercase; color: var(--secondary-color); font-weight: 700; margin-bottom: 1rem; }
.sec-title { font-size: calc(2.8rem * var(--font-modifier)); font-weight: 800; color: var(--text-main); margin-bottom: 1.5rem; line-height: 1.15; letter-spacing: -1px; }
.sec-desc { color: var(--text-muted); font-size: calc(1.15rem * var(--font-modifier)); line-height: 1.8; }

/* ================= PORTADA (Hero c/ Logo Gigante y Ola) ================= */
.qs-hero {
  position: relative;
  min-height: 75vh;
  display: flex;
  align-items: center;
  padding: 6rem 5% 10rem;
  overflow: hidden;
}

.qs-hero-container {
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  position: relative;
  z-index: 2;
}

.qs-hero-content {
  flex: 1;
  max-width: 700px;
}

.qs-title {
  font-size: calc(4rem * var(--font-modifier));
  font-weight: 800;
  color: var(--text-main);
  line-height: 1.1;
  letter-spacing: -1.5px;
  margin-bottom: 1.5rem;
}

.qs-subtitle {
  font-size: calc(1.3rem * var(--font-modifier));
  color: var(--text-muted);
  line-height: 1.7;
}

/* El Logo Gigante Flotante */
.qs-hero-logo {
  flex: 0 0 35%;
  display: flex;
  justify-content: center;
}
.qs-hero-logo img {
  width: 100%;
  max-width: 380px;
  filter: drop-shadow(0 25px 40px rgba(65, 53, 104, 0.15));
  animation: floatLogo 8s ease-in-out infinite alternate;
  will-change: transform;
}
@keyframes floatLogo {
  0% { transform: translateY(0px) scale(1); }
  100% { transform: translateY(-20px) scale(1.03); }
}

/* La Ola Separadora */
.qs-hero-wave {
  position: absolute;
  bottom: -5px; 
  left: 0;
  width: 100%;
  line-height: 0;
  z-index: 1;
}
.qs-hero-wave svg {
  display: block;
  width: 100%;
  height: 120px;
}

/* ================= QUÉ HACEMOS (Separación Visual) ================= */
.what-we-do-section {
  background-color: var(--bg-surface);
  padding: 2rem 5% 10rem; 
}

.sticky-layout {
  max-width: 1400px; /* Agrandado para permitir mayor respiración */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.5fr; 
  gap: 10rem; /* MÁS SEPARACIÓN: 10rem en vez de 6rem */
  align-items: start;
}

.sticky-sidebar { position: sticky; top: 130px; }

/* Textos agrandados */
.large-title { font-size: calc(3.6rem * var(--font-modifier)); line-height: 1.1; margin-bottom: 2rem; }
.large-desc { font-size: calc(1.3rem * var(--font-modifier)); line-height: 1.7; }

.scrolling-gallery { display: flex; flex-direction: column; gap: 5rem; }
.gallery-item {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.04);
  transition: transform 0.4s ease;
}
.gallery-item:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(0,0,0,0.08); }
.photo-placeholder { width: 100%; height: 450px; background: linear-gradient(135deg, #d1c8e3, #e9e2f4); display: flex; align-items: center; justify-content: center; color: var(--text-muted); font-weight: 600; font-size: 1.2rem; }
.gallery-text { padding: 3.5rem; }
.gallery-text h3 { font-size: calc(1.8rem * var(--font-modifier)); color: var(--text-main); margin-bottom: 1rem; }
.gallery-text p { font-size: calc(1.15rem * var(--font-modifier)); color: var(--text-muted); line-height: 1.7; }

/* ================= HISTORIA / TIMELINE (Fondo animado) ================= */
.history-section {
  padding: 8rem 5%;
  /* FONDO ANIMADO SUTIL: Alterna entre blanco y lila extrasuave */
  background: linear-gradient(-45deg, #ffffff, #f7f5fb, #ffffff, #f0ebf8);
  background-size: 400% 400%;
  animation: gradient-shift 15s ease infinite;
  border-top: 1px solid var(--border-color);
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.history-container { max-width: 850px; margin: 0 auto; position: relative; z-index: 2; }
.history-header { text-align: center; margin-bottom: 6rem; }

.timeline { position: relative; border-left: 2px dashed var(--border-color); margin-left: 2rem; padding-bottom: 2rem; }
.timeline-item { position: relative; padding-left: 4rem; margin-bottom: 5rem; }
.timeline-dot { position: absolute; left: -9px; top: 0; width: 16px; height: 16px; border-radius: 50%; background-color: var(--secondary-color); box-shadow: 0 0 0 8px rgba(50, 115, 181, 0.15); }
.timeline-year { display: inline-block; font-size: calc(1.1rem * var(--font-modifier)); font-weight: 800; color: var(--primary-color); background: var(--bg-main); padding: 0.4rem 1.2rem; border-radius: 20px; margin-bottom: 1rem; }
.timeline-title { font-size: calc(1.6rem * var(--font-modifier)); color: var(--text-main); margin-bottom: 0.8rem; font-weight: 700; }
.timeline-desc { font-size: calc(1.15rem * var(--font-modifier)); color: var(--text-muted); line-height: 1.7; }

/* Cierre de Línea de Tiempo Imponente */
.history-action {
  text-align: center;
  margin-top: 6rem;
  padding-top: 6rem;
  border-top: 1px solid var(--border-color);
}
.history-action-title {
  color: var(--text-main);
  font-size: calc(2.4rem * var(--font-modifier));
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 3rem;
  letter-spacing: -1px;
}

/* Botón de Redirección Claro */
.btn-jumbo {
  font-size: calc(1.3rem * var(--font-modifier)) !important;
  padding: 1.2rem 3.5rem !important;
  border-radius: 50px;
}
.cta-news-btn {
  background-color: var(--secondary-color); /* Azul distintivo */
  color: white;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
}
.cta-news-btn .arrow {
  transition: transform 0.3s ease;
  font-size: 1.5rem;
}
.cta-news-btn:hover {
  box-shadow: 0 10px 25px rgba(50, 115, 181, 0.3);
}
.cta-news-btn:hover .arrow {
  transform: translateX(10px); /* Efecto de "ir hacia allá" */
}

/* ================= CLÍMAX FINAL (Textura y Animación) ================= */
.climax-wrapper {
  position: relative;
  background-color: #1e212e; /* Muy oscuro para enlazar con footer */
  padding: 10rem 5%;
  overflow: hidden;
  z-index: 1;
}

/* Textura: Malla de Puntos Oscuros */
.climax-wrapper::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.05) 2px, transparent 1px);
  background-size: 24px 24px;
  z-index: -1;
}

/* Animación: Orbe de luz pulsante */
.climax-wrapper::after {
  content: "";
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(50, 115, 181, 0.15) 0%, rgba(0,0,0,0) 70%);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  animation: pulse-glow 8s ease-in-out infinite alternate;
}
@keyframes pulse-glow {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.5); opacity: 1; }
}

.cta-card {
  max-width: 1200px;
  margin: 0 auto;
  background: var(--impact-gradient);
  border-radius: 32px;
  padding: 7rem 4rem;
  text-align: center;
  box-shadow: 0 30px 60px rgba(0,0,0,0.4);
  /* Tarjeta expansiva al bajar */
  transform: scale(0.9);
  opacity: 0.8;
  transition: transform 1s cubic-bezier(0.25, 1, 0.5, 1), opacity 1s ease;
  will-change: transform;
}
.climax-wrapper.active .cta-card {
  transform: scale(1);
  opacity: 1;
}

.cta-title {
  color: #ffffff;
  font-size: calc(3.8rem * var(--font-modifier));
  font-weight: 800;
  letter-spacing: -1.5px;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}
.cta-desc {
  color: rgba(255, 255, 255, 0.85);
  font-size: calc(1.4rem * var(--font-modifier));
  max-width: 750px;
  margin: 0 auto 4rem;
  line-height: 1.6;
}
.cta-btns {
  display: flex;
  gap: 2rem;
  justify-content: center;
}
.btn-contacto-white {
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  padding: 1.2rem 3.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  font-size: calc(1.3rem * var(--font-modifier));
  transition: all 0.3s;
}
.btn-contacto-white:hover {
  background: #ffffff;
  color: var(--primary-color);
  transform: scale(1.02);
}

/* ================= ANIMACIONES REVEAL ================= */
.reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1); }
.reveal.active { opacity: 1; transform: translateY(0); }
.delay-1 { transition-delay: 0.1s; }
.delay-2 { transition-delay: 0.2s; }

/* ================= ALTO CONTRASTE ESPECÍFICO ================= */
.high-contrast .what-we-do-section, .high-contrast .history-section { background: #000000; animation: none; }
.high-contrast .gallery-item { background: #000000; border: 2px solid #ffffff; }
.high-contrast .photo-placeholder { background: #000000; color: #ffffff; border-bottom: 2px solid #ffffff; }
.high-contrast .timeline-dot { background-color: #ffff00; box-shadow: 0 0 0 4px #000000, 0 0 0 6px #ffff00; }
.high-contrast .timeline-year { background: #ffffff; color: #000000; }
.high-contrast .climax-wrapper { background-color: #000000; }
.high-contrast .climax-wrapper::before, .high-contrast .climax-wrapper::after { display: none; } /* Apagar texturas en alto contraste */
.high-contrast .cta-card { background: #000000; border: 2px solid #ffffff; }
.high-contrast .cta-title { color: #ffffff !important; }
.high-contrast .cta-desc { color: #ffff00 !important; }
.high-contrast .btn-contacto-white { background: #000000; color: #ffff00; border-color: #ffff00; }
.high-contrast .btn-contacto-white:hover { background: #ffff00; color: #000000; }

/* ================= RESPONSIVO ================= */
@media (max-width: 1100px) {
  .qs-hero-container { flex-direction: column; text-align: center; }
  .qs-hero-content { max-width: 100%; }
  .qs-title { font-size: 3.2rem; }
  .qs-hero-logo { margin-top: 3rem; }
  .sticky-layout { gap: 6rem; }
}

@media (max-width: 992px) {
  .sticky-layout { grid-template-columns: 1fr; gap: 4rem; }
  .sticky-sidebar { position: static; text-align: center; }
  .large-title { font-size: 3rem; }
}

@media (max-width: 768px) {
  .cta-btns { flex-direction: column; }
  .photo-placeholder { height: 250px; }
  .gallery-text { padding: 2rem; }
  .timeline { margin-left: 0.5rem; }
  .cta-title { font-size: 2.5rem; }
}
</style>