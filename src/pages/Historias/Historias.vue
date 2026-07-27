<template>
  <main id="main-content" class="stories-catalog-page" tabindex="-1">
    
    <!-- HERO -->
    <section class="stories-hero reveal">
      <div 
        v-for="(historia, index) in historiasData" 
        :key="historia.id"
        class="story-slide"
        :class="{ active: currentStory === index }"
      >
        <div class="story-bg" :style="{ backgroundImage: `url(${historia.image})` }"></div>
        <div class="story-overlay"></div>

        <div class="story-content reveal" :class="{ 'active': currentStory === index }">
          <span class="quote-mark" aria-hidden="true">“</span>
          <h2 class="story-quote">{{ historia.quote }}</h2>
          
          <div class="story-meta">
            <p class="story-author">{{ historia.name }}</p>
            <p class="story-role">{{ historia.role }}</p>
          </div>

          <RouterLink :to="`/historias/${historia.slug}`" class="btn-ghost">
            Leer su historia
          </RouterLink>
        </div>
      </div>

      <div class="story-controls">
        <button @click="prevStory" aria-label="Historia anterior" class="ctrl-btn">❮</button>
        <div class="story-indicators">
          <span v-for="(_, index) in historiasData" :key="index" class="indicator" :class="{ active: currentStory === index }" @click="setStory(index)"></span>
        </div>
        <button @click="nextStory" aria-label="Historia siguiente" class="ctrl-btn">❯</button>
      </div>
      
      <div class="scroll-indicator reveal delay-2">
        <span>Explorar archivo</span>
        <div class="mouse-icon"></div>
      </div>
    </section>

    <!-- CATÁLOGO -->
    <section class="stories-archive">
      <div class="archive-container">
        <h3 class="archive-title reveal">Todas las historias</h3>
        <div class="archive-grid">
          <RouterLink 
            v-for="(historia, index) in historiasData" 
            :key="`grid-${historia.id}`"
            :to="`/historias/${historia.slug}`"
            class="archive-card reveal"
            :class="`delay-${(index % 3) + 1}`"
          >
            <div class="archive-img">
              <img :src="historia.image" :alt="historia.name" loading="lazy">
              <div class="archive-overlay"></div>
            </div>
            <div class="archive-info">
              <h4>{{ historia.name }}</h4>
              <p>{{ historia.role }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { historiasData } from './historias.js'

const currentStory = ref(0)
let storyInterval = null
let revealObserver = null

const startTimer = () => {
  storyInterval = setInterval(() => {
    currentStory.value = (currentStory.value + 1) % historiasData.length
  }, 6000)
}

const resetTimer = () => {
  if (storyInterval) clearInterval(storyInterval)
  startTimer()
}

const nextStory = () => { 
    currentStory.value = (currentStory.value + 1) % historiasData.length 
    resetTimer()
}

const prevStory = () => { 
    currentStory.value = (currentStory.value - 1 + historiasData.length) % historiasData.length 
    resetTimer()
}

const setStory = (index) => { 
    currentStory.value = index 
    resetTimer()
}

onMounted(() => {
    startTimer
    storyInterval = setInterval(nextStory, 6000)
  
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
        if (!entry.target.classList.contains('story-content')) {
          revealObserver.unobserve(entry.target)
        }
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el)
  })
})

onUnmounted(() => {
  if (storyInterval) clearInterval(storyInterval)
  if (revealObserver) revealObserver.disconnect()
})
</script>

<style scoped>
.stories-catalog-page { padding-top: 0 !important; background-color: #0a0a0a; }
.stories-hero { position: relative; width: 100%; height: 90vh; min-height: 600px; overflow: hidden; background-color: #000; }
.story-slide { position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; visibility: hidden; transition: opacity 1s ease-in-out, visibility 1s; z-index: 1; }
.story-slide.active { opacity: 1; visibility: visible; z-index: 2; }
.story-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-size: cover; background-position: center 20%; transform: scale(1.08); transition: transform 7s ease-out; }
.story-slide.active .story-bg { transform: scale(1); }
.story-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 100%); z-index: 3; }
.story-content { position: absolute; top: 50%; left: 8%; transform: translateY(-50%); max-width: 700px; z-index: 4; color: #fff; padding-left: 2rem; opacity: 0; transition: all 0.8s ease; }
.story-content.active { opacity: 1; transform: translateY(-50%) translateX(20px); }
.quote-mark { position: absolute; top: -40px; left: -20px; font-size: 8rem; font-family: Georgia, serif; line-height: 1; color: var(--secondary-color); opacity: 0.3; z-index: -1; }
.story-quote { font-size: calc(2.4rem * var(--font-modifier)); font-family: Georgia, serif; font-style: italic; font-weight: 400; line-height: 1.3; margin-bottom: 2.5rem; text-wrap: balance; }
.story-meta { margin-bottom: 3rem; border-left: 2px solid var(--secondary-color); padding-left: 1.5rem; }
.story-author { font-size: 1.2rem; font-weight: 700; color: #fff; margin: 0 0 0.3rem 0; }
.story-role { font-size: 1rem; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 2px; }
.btn-ghost { display: inline-block; padding: 1rem 2.5rem; border: 1px solid rgba(255,255,255,0.4); color: #fff; background: transparent; border-radius: 30px; font-weight: 400; text-decoration: none; transition: all 0.3s ease; backdrop-filter: blur(5px); }
.btn-ghost:hover { background: #fff; color: #000; border-color: #fff; }
.story-controls { position: absolute; bottom: 40px; right: 5%; z-index: 5; display: flex; align-items: center; gap: 1.5rem; }
.ctrl-btn { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fff; width: 45px; height: 45px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.3s; backdrop-filter: blur(5px); }
.ctrl-btn:hover { background: rgba(255,255,255,0.2); }
.story-indicators { display: flex; gap: 10px; }
.indicator { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.3); cursor: pointer; transition: all 0.3s; }
.indicator.active { background: #fff; transform: scale(1.3); }
.scroll-indicator { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); z-index: 5; color: rgba(255,255,255,0.6); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; display: flex; flex-direction: column; align-items: center; gap: 10px; }
.mouse-icon { width: 24px; height: 36px; border: 2px solid rgba(255,255,255,0.5); border-radius: 12px; position: relative; }
.mouse-icon::before { content: ''; position: absolute; top: 6px; left: 50%; transform: translateX(-50%); width: 4px; height: 4px; background: #fff; border-radius: 50%; animation: scroll-down 1.5s infinite; }
@keyframes scroll-down { 0% { opacity: 1; transform: translate(-50%, 0); } 100% { opacity: 0; transform: translate(-50%, 15px); } }

/* CATÁLOGO */
.stories-archive { padding: 6rem 5%; background-color: #0a0a0a; color: #fff; }
.archive-container { max-width: 1200px; margin: 0 auto; }
.archive-title { font-size: 1.8rem; font-weight: 300; margin-bottom: 3rem; text-align: center; color: rgba(255,255,255,0.8); border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem; }
.archive-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem; }
.archive-card { position: relative; border-radius: 12px; overflow: hidden; display: block; text-decoration: none; color: #fff; transition: transform 0.4s ease; border: 1px solid rgba(255,255,255,0.05); }
.archive-card:hover { transform: translateY(-8px); border-color: rgba(255,255,255,0.2); }
.archive-img { position: relative; padding-top: 120%; /* Formato retrato */ overflow: hidden; }
.archive-img img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; filter: grayscale(30%); transition: filter 0.4s ease, transform 0.6s ease; }
.archive-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 60%); }
.archive-card:hover .archive-img img { filter: grayscale(0%); transform: scale(1.05); }
.archive-info { position: absolute; bottom: 0; left: 0; width: 100%; padding: 2rem 1.5rem; }
.archive-info h4 { font-family: Georgia, serif; font-size: 1.5rem; font-weight: 400; margin: 0 0 0.3rem 0; }
.archive-info p { font-size: 0.85rem; color: var(--secondary-color); text-transform: uppercase; letter-spacing: 1px; margin: 0; }

/* Animaciones */
.reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1); }
.reveal.active { opacity: 1; transform: translateY(0); }
.delay-1 { transition-delay: 0.1s; } .delay-2 { transition-delay: 0.2s; } .delay-3 { transition-delay: 0.3s; }

@media (max-width: 768px) {
  .story-content { left: 5%; top: auto; bottom: 100px; transform: none; padding-left: 0; }
  .story-content.active { transform: translateX(10px); }
  .story-controls { left: 5%; right: auto; bottom: 30px; }
  .scroll-indicator { display: none; }
  .archive-img { padding-top: 100%; }
}
</style>