<template>
  <transition name="fade-preload">
    <div v-if="isLoading" class="preloader" aria-busy="true" aria-label="Cargando sitio web">
      <img src="./assets/Logo_GDLM.png" alt="Cargando Gota de Leche..." class="preloader-logo">
      <div class="preloader-text">Cargando Ecosistema</div>
    </div>
  </transition>

  <a href="#main-content" class="skip-link">Saltar al contenido principal</a>

  <div 
    class="app-container" 
    :class="[
      { 'high-contrast': isHighContrast },
      `font-level-${fontSizeLevel}`
    ]"
  >
    <div class="accessibility-widget" :class="{ 'widget-open': isWidgetOpen }">
      <button 
        @click="toggleWidget" 
        class="widget-trigger"
        :aria-expanded="isWidgetOpen"
        aria-controls="accessibility-panel"
        aria-label="Abrir opciones de accesibilidad"
      >
        <span class="widget-icon" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 -2.6 24.5 26"
            fill="currentColor"
            >
            <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.051 6.844a1 1 0 0 0 -1.152 -.663l-.113 .03l-2.684 .895l-2.684 -.895l-.113 -.03a1 1 0 0 0 -.628 1.884l.109 .044l2.316 .771v.976l-1.832 2.75l-.06 .1a1 1 0 0 0 .237 1.21l.1 .076l.101 .06a1 1 0 0 0 1.21 -.237l.076 -.1l1.168 -1.752l1.168 1.752l.07 .093a1 1 0 0 0 1.653 -1.102l-.059 -.1l-1.832 -2.75v-.977l2.316 -.771l.109 -.044a1 1 0 0 0 .524 -1.221zm-3.949 -4.184a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3z" />
          </svg>
        </span>
      </button>

      <div 
        id="accessibility-panel" 
        class="widget-panel" 
        role="region" 
        aria-label="Panel de configuración de accesibilidad"
      >
        <div class="panel-header">
          <h3>Accesibilidad</h3>
          <button @click="toggleWidget" class="panel-close-btn" aria-label="Cerrar panel">✕</button>
        </div>
        
        <div class="panel-section">
          <span class="section-label">Tamaño del texto:</span>
          <div class="acc-group">
            <button @click="changeFontSize('decrease')" class="acc-btn" aria-label="Disminuir tamaño de letra">A-</button>
            <button @click="changeFontSize('normal')" class="acc-btn" aria-label="Tamaño de letra normal">A</button>
            <button @click="changeFontSize('increase')" class="acc-btn" aria-label="Aumentar tamaño de letra">A+</button>
          </div>
        </div>

        <div class="panel-section">
          <span class="section-label">Contraste visual:</span>
          <button @click="toggleContrast" class="acc-btn btn-contrast" aria-label="Alternar modo de alto contraste">
            👁️ {{ isHighContrast ? 'Contraste Normal' : 'Alto Contraste' }}
          </button>
        </div>
      </div>
    </div>

    <header class="header" :class="{ 'header-scrolled': isScrolled }">
      <RouterLink to="/" class="logo-link">
      <div class="logo">
          <img src="./assets/Logo_GDLM.png" alt="Logo oficial de la ONG Nombre" class="logo-img">
          <h2>Gota de Leche Miramar</h2>
      </div>
      </RouterLink>

      <nav class="nav-links" aria-label="Navegación principal">
        <RouterLink to="/Home">Inicio</RouterLink>
        <RouterLink to="/quienes-somos">Quiénes somos</RouterLink>
        <RouterLink to="/como-ayudar">Cómo ayudar</RouterLink>
        <RouterLink to="/historias">Historias</RouterLink>
        <RouterLink to="/noticias">Noticias</RouterLink>
      </nav>
      
      <div class="header-actions">
        <div class="search-box" :class="{ 'search-open': isSearchOpen }" role="search">
          <input 
            ref="searchInput"
            type="text" 
            v-model="searchQuery" 
            placeholder="Buscar en el sitio..." 
            class="search-input"
            aria-label="Escribe los términos de búsqueda"
            @keyup.enter="realizarBusqueda"
          >
          <button class="icon-btn" @click="toggleSearch" :aria-label="isSearchOpen ? 'Cerrar buscador' : 'Abrir buscador'">
            <svg aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#607d8b"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              >
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg></button>
        </div>

        <RouterLink to="/como-ayudar" class="btn btn-donar">Contribuir / Donar</RouterLink>
        <RouterLink to="/contacto" class="btn btn-contacto">Contacto</RouterLink>
      </div>
    </header>

    <router-view></router-view>

    <footer class="footer" aria-label="Pie de página informativo">
      <div class="footer-column">
        <h4>Contacto</h4>
        
        <p>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" />
          </svg>
          <span aria-label="Teléfono +56 9 1234 5678"> +56 9 1234 5678</span>
        </p>

        <p>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3h18a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-18a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2zm17.948 4.072l-8.948 6.096l-8.948 -6.096v11.928h17.896v-11.928zm-1.896 -2.072h-14.104l7.052 4.805l7.052 -4.805z" />
          </svg>
          <span aria-label="Correo electrónico contacto@ongnombre.cl"> contacto@ongnombre.cl</span>
        </p>

        <p>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c4.418 0 8 3.582 8 8c0 5.25 -7.005 11.238 -7.53 11.696l-.47 .415l-.47 -.415c-.525 -.458 -7.53 -6.446 -7.53 -11.696c0 -4.418 3.582 -8 8 -8zm0 5a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
          </svg>
          <span> Calle Principal 123, Valparaíso</span>
        </p>
      </div>

      <div class="footer-column">
        <h4>Redes Sociales</h4>
        <div class="social-links">
          <a href="#" aria-label="Visitar nuestro perfil de Instagram">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -2.6 24 24" fill="currentColor">
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z"/>
            </svg>
            <span> Instagram</span>
          </a>
          <a href="#" aria-label="Visitar nuestra página de Facebook">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -3 24 24" fill="currentColor">
              <path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" />
            </svg>
            <span> Facebook</span>
          </a>
          <a href="#" aria-label="Visitar nuestra red profesional de LinkedIn">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -3 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.16-3.66c-1.22 0-2 .6-2.3 1.2v-1.1h-2.5v9h2.5v-4.9c0-1.2.4-2.1 1.7-2.1c1.2 0 1.4 1 1.4 2.2v4.8h2.36M7.8 8.6c.8 0 1.3-.5 1.3-1.2c0-.7-.5-1.2-1.3-1.2c-.8 0-1.3.5-1.3 1.2c0 .7.5 1.2 1.3 1.2M9 18.5V9.5H6.5v9H9z"/>
            </svg>
            <span> LinkedIn</span>
          </a>
        </div>
      </div>

      <div class="footer-column">
        <h4>Institucional</h4>
        <a href="#">Transparencia</a>
        <a href="#">Nuestros Asociados</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import Lenis from 'lenis'

const isLoading = ref(true)
// Estados de Accesibilidad
const isWidgetOpen = ref(false)
const isHighContrast = ref(false)
const fontSizeLevel = ref(2) 

const toggleWidget = () => { isWidgetOpen.value = !isWidgetOpen.value }
const toggleContrast = () => { isHighContrast.value = !isHighContrast.value }

const changeFontSize = (action) => {
  if (action === 'decrease' && fontSizeLevel.value > 1) fontSizeLevel.value--
  if (action === 'normal') fontSizeLevel.value = 2
  if (action === 'increase' && fontSizeLevel.value < 3) fontSizeLevel.value++
}

// Control de Scroll para el Header
const isScrolled = ref(false)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 80
}

// Buscador Global
const isSearchOpen = ref(false)
const searchQuery = ref('')
const searchInput = ref(null)

const footerEl = ref(null)
const footerHeight = ref(0)
let resizeObserver = null

const toggleSearch = async () => {
  isSearchOpen.value = !isSearchOpen.value
  if (isSearchOpen.value) {
    await nextTick()
    searchInput.value.focus()
  } else {
    searchQuery.value = ''
  }
}

const realizarBusqueda = () => {
  if (searchQuery.value.trim() !== '') {
    alert(`Realizando búsqueda de: ${searchQuery.value}`)
    toggleSearch()
  }
}

const updateFooterMargin = () => {
  if (footerEl.value) {
    footerHeight.value = footerEl.value.offsetHeight
  }
}

let lenis

onMounted(() => {
  // Apaga el preloader después de 1.5s
  setTimeout(() => { isLoading.value = false }, 1500)

  lenis = new Lenis({
    duration: 1.2, // Tiempo que tarda en frenar (mismo del prototipo)
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva de freno sedosa
    smoothWheel: true,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (lenis) lenis.destroy()
})
</script>

<style>
.preloader {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: var(--bg-main); z-index: 999999;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.5rem;
}
.preloader-logo {
  width: 140px; height: auto; object-fit: contain;
  animation: pulseLogo 1.8s ease-in-out infinite;
  filter: drop-shadow(0 10px 25px rgba(56, 43, 92, 0.15));
}
.preloader-text {
  font-size: 0.8rem; font-weight: 700; letter-spacing: 3px; 
  text-transform: uppercase; color: var(--text-main);
}
@keyframes pulseLogo {
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.8; }
}
.fade-preload-leave-active { transition: opacity 0.8s ease; }
.fade-preload-leave-to { opacity: 0; }

/* ================= WIDGET FLOTANTE DE ACCESIBILIDAD ================= */
.accessibility-widget { position: fixed; bottom: 25px; right: 25px; z-index: 2000; display: flex; flex-direction: column; align-items: flex-end; gap: 12px; }
.widget-trigger { width: 55px; height: 55px; border-radius: 50%; background-color: #1a202c; border: 2px solid #4a5568; color: white; cursor: pointer; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; }
.widget-icon { font-size: 1.8rem; }
.widget-panel { position: absolute; bottom: 70px; right: 0; width: 280px; background-color: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.5rem; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15); display: flex; flex-direction: column; gap: 1.2rem; opacity: 0; transform: translateY(20px) scale(0.95); pointer-events: none; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.widget-open .widget-panel { opacity: 1; transform: translateY(0) scale(1); pointer-events: auto; }
.widget-open .widget-trigger { background-color: var(--primary-color); border-color: var(--primary-color); }
.panel-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; }
.panel-header h3 { margin: 0; font-size: 1.1rem; color: var(--text-main); }
.panel-close-btn { background: none; border: none; color: var(--text-muted); font-size: 1rem; cursor: pointer; }
.panel-section { display: flex; flex-direction: column; gap: 0.6rem; }
.section-label { font-size: calc(0.9rem * var(--font-modifier)); font-weight: 600; color: var(--text-main); }
.acc-group { display: flex; gap: 0.5rem; }
.acc-btn { flex: 1; background: #f1f5f9; color: #1a202c; border: 1px solid #cbd5e1; padding: 0.5rem; cursor: pointer; font-weight: bold; border-radius: 6px; font-size: 0.9rem; }

/* Enlace invisible para navegación por teclado */
.skip-link { position: absolute; top: -100px; left: 1rem; background: #27ae60; color: white; padding: 1rem; z-index: 9999; font-weight: bold; text-decoration: none; border-radius: 0 0 5px 5px; transition: top 0.2s ease; }
.skip-link:focus { top: 0; }

/* ================= HEADER GLOBAL CON INTEGRACIÓN AL SCROLL ================= */
.header { 
  position: sticky; 
  top: 0; 
  z-index: 1000; 
  background-color: var(--bg-surface); 
  padding: 1.2rem 5%; /* Padding inicial amplio: el header se ve imponente y fusionado */
  
  /* Transición suave multitarea que ahora incluye al padding para cambiar de forma */
  transition: padding 0.3s ease, background-color 0.4s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease; 
  border-bottom: 1px solid transparent; 
}

/* Estado activo cuando el usuario baja (Efecto de encogimiento y flotación restaurado) */
.header.header-scrolled { 
  padding: 1.2rem 5%; 
  background-color: rgba(255, 255, 255, 1);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.06); 
  border-bottom: 1px solid var(--border-color); 
}

/* Desactiva transparencias en alto contraste para mantener legibilidad estricta 
.high-contrast .header.header-scrolled {
  background-color: #000000;
  backdrop-filter: none;
} /*

/* Identidad Visual y Animación del Logo */
.logo { 
  display: flex; 
  align-items: center; 
  gap: 12px; 
}

.logo-img { 
  width: 60px; 
  height: 60px; 
  object-fit: contain; 
  display: block; 
  /* Transición para que el logo acompañe el cambio de forma del header */
  transition: width 0.3s ease, height 0.3s ease; 
}

/* El logo también se adapta de forma sutil cuando el header se compacta */
.header.header-scrolled .logo-img {
  width: 45px;
  height: 45px;
}

.logo h2 { 
  margin: 0; 
  color: var(--text-main); 
  font-size: calc(1.8rem * var(--font-modifier)); 
  transition: font-size 0.3s ease;
}

/* Los títulos del menú también pueden acompañar la reducción de tamaño si lo deseas */
.header.header-scrolled .logo h2 {
  font-size: calc(1.6rem * var(--font-modifier));
}

/* Navegación del Header */
.nav-links { display: flex; gap: 2rem; }
.nav-links a { text-decoration: none; color: var(--text-main); font-weight: 500; font-size: calc(1.1rem * var(--font-modifier)); transition: color 0.3s; }
.nav-links a:hover, .nav-links a:focus { color: var(--primary-color); }

/* Buscador */
.search-box { display: flex; align-items: center; transition: all 0.3s ease; border-radius: 20px; overflow: hidden; }
.search-box.search-open { background-color: var(--border-color); padding-left: 1rem; }
.search-input { width: 0; opacity: 0; border: none; background: transparent; outline: none; font-size: calc(1rem * var(--font-modifier)); color: var(--text-main); transition: all 0.3s ease; padding: 0; }
.search-box.search-open .search-input { width: 180px; opacity: 1; padding: 0.5rem 0; }
.icon-btn { background: none; border: none; font-size: 1.4rem; cursor: pointer; color: var(--text-main); }
.icon-btn:focus { outline: 2px solid var(--primary-color); }

/* ================= FOOTER GLOBAL ================= */
.footer { 
  background-color: #1a202c; 
  color: #cbd5e0; 
  padding: 4rem 5%; 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  gap: 3rem; 
  margin-top: auto; /* Asegura que el footer se vaya al fondo si la página es corta */
}
.footer-column h4 { color: white; margin-bottom: 1.5rem; font-size: calc(1.2rem * var(--font-modifier)); }
.footer-column p, .footer-column a { margin-bottom: 1rem; font-size: calc(1rem * var(--font-modifier)); }
.footer-column a { color: #cbd5e0; text-decoration: none; display: block; transition: color 0.3s; }
.footer-column a:hover, .footer-column a:focus { color: var(--secondary-color); text-decoration: underline; }

/* ================= RESPONSIVIDAD GLOBAL (Header y Widget) ================= */
@media (max-width: 768px) {
  .header { position: relative; flex-direction: column; gap: 1.5rem; padding: 1rem; }
  .logo-img { width: 50px; height: 50px; }
  .search-box.search-open .search-input { width: 100%; }
  .nav-links { flex-wrap: wrap; justify-content: center; }
  .accessibility-widget { bottom: 15px; right: 15px; }
  .widget-panel { width: 250px; bottom: 65px; }
}
</style>