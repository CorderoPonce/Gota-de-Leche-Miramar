<template>
  <main id="main-content" class="help-page" tabindex="-1">
    
    <!-- ================= CABECERA ================= -->
    <section class="help-hero reveal">
      <div class="hero-content">
        <div class="sec-tag">Súmate a nuestra causa</div>
        <h1 class="page-title">Tu apoyo transforma vidas</h1>
        <p class="page-subtitle">
          Existen muchas formas de ser parte de la Gota de Leche Miramar. Tu ayuda llega directamente a las familias de Viña del Mar que más lo necesitan.
        </p>
      </div>
    </section>

    <!-- ================= GRILLA ================= -->
    <section class="ways-to-help">
      <div class="help-grid">
        
        <article class="help-card featured-card reveal delay-1">
          <div class="card-icon">🤍</div>
          <h3>Aporte Económico</h3>
          <p>La forma más rápida y directa de ayudar. Tus donaciones financian la compra de fórmulas lácteas especiales, suplementos vitamínicos y el mantenimiento de nuestro centro de atención.</p>
          <ul class="help-benefits">
            <li>✓ Aportes únicos o mensuales</li>
            <li>✓ Certificado de donación disponible</li>
            <li>✓ Transacción 100% segura</li>
          </ul>
          <a href="#" class="btn btn-primary btn-large">Donar ahora (Webpay)</a>
        </article>

        <article class="help-card reveal delay-2">
          <div class="card-icon">📦</div>
          <h3>Donación de Insumos</h3>
          <p>Recibimos constantemente artículos de primera necesidad para armar kits de apoyo a madres y lactantes en situación de vulnerabilidad.</p>
          <p class="small-text"><strong>¿Qué necesitamos hoy?</strong> Pañales (tallas G y XG), ropa de bebé en buen estado, fórmulas lácteas selladas y útiles de aseo infantil.</p>
          <a href="#contacto" class="btn btn-outline">Coordinar entrega</a>
        </article>

        <article class="help-card reveal delay-3">
          <div class="card-icon">🤝</div>
          <h3>Voluntariado</h3>
          <p>Dona tu talento y tiempo. Buscamos profesionales de la salud (pediatras, nutricionistas, psicólogos), así como personas motivadas para logística y clasificación de donaciones.</p>
          <p class="small-text">Súmate a nuestro equipo de trabajo en terreno y marca la diferencia con tus propias manos.</p>
          <a href="mailto:voluntariado@gotadeleche.cl" class="btn btn-outline">Postular como voluntario</a>
        </article>

      </div>
    </section>

    <!-- ================= CONTACTO ================= -->
    <section id="contacto" class="contact-section reveal">
      <div class="contact-container">
        <div class="contact-info">
          <h2>¿Tienes dudas o quieres contactar con nosotros?</h2>
          <p>Estamos siempre abiertos a conversar con empresas, instituciones y personas naturales que quieran sumar esfuerzos.</p>
          
          <div class="contact-links">
            <a href="mailto:contacto@gotadeleche.cl" class="contact-item">
              <span class="icon">✉</span>
              contacto@gotadeleche.cl
            </a>
            <div class="contact-item">
              <span class="icon">📍</span>
              Calle 5 #2065, Viña del Mar
            </div>
          </div>

          <div class="social-links">
            <p class="social-title">Encuéntranos en nuestras redes:</p>
            <div class="social-icons">
              <a href="#" target="_blank" aria-label="Instagram" class="social-btn">Instagram</a>
              <a href="#" target="_blank" aria-label="Facebook" class="social-btn">Facebook</a>
              <a href="#" target="_blank" aria-label="WhatsApp" class="social-btn">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= CIERRE ================= -->
    <section class="impact-message reveal">
      <div class="impact-overlay"></div>
      <div class="impact-content">
        <span class="quote-mark" aria-hidden="true">“</span>
        <blockquote>
          Con tu ayuda, estás entregando dignidad, esperanza y la oportunidad de un desarrollo sano a la próxima generación.
        </blockquote>
        <p class="impact-signature">— El equipo de la Sociedad Gota de Leche Miramar</p>
      </div>
    </section>

  </main>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

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
.help-page {
  background-color: var(--bg-main);
  background-image: radial-gradient(var(--bg-dots) 1px, transparent 1px);
  background-size: 24px 24px;
  background-attachment: fixed;
}

/* ================= HERO ================= */
.help-hero {
  padding: 5rem 5% 2rem;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.sec-tag { font-size: calc(0.85rem * var(--font-modifier)); letter-spacing: 3px; text-transform: uppercase; color: var(--secondary-color); font-weight: 700; margin-bottom: 1.5rem; }
.page-title { font-size: calc(3.5rem * var(--font-modifier)); font-weight: 800; color: var(--text-main); line-height: 1.1; letter-spacing: -1.5px; margin-bottom: 1.5rem; }
.page-subtitle { font-size: calc(1.2rem * var(--font-modifier)); color: var(--text-muted); line-height: 1.7; }

/* ================= GRILLA ================= */
.ways-to-help {
  padding: 2rem 5% 6rem;
}

.help-grid {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  align-items: stretch;
}

.help-card {
  background: var(--bg-surface);
  border-radius: 24px;
  padding: 3rem 2rem;
  border: 1px solid var(--border-color);
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  display: flex;
  flex-direction: column;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.help-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
}

.featured-card {
  background: var(--primary-color);
  color: #fff;
  border: none;
  transform: scale(1.02);
}

.featured-card:hover {
  transform: scale(1.02) translateY(-8px);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.help-card h3 { font-size: 1.8rem; font-weight: 800; margin-bottom: 1rem; color: var(--text-main); }
.featured-card h3 { color: #fff; }

.help-card p { font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem; }
.featured-card p { color: rgba(255,255,255,0.9); }

.small-text { font-size: 0.95rem !important; margin-bottom: 2rem !important; }

.help-benefits {
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem 0;
  font-weight: 500;
  font-size: 1.05rem;
  line-height: 1.8;
}

.btn {
  margin-top: auto;
  text-align: center;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-large { font-size: 1.1rem; padding: 1.2rem 2rem; background: #fff; color: var(--primary-color); }
.btn-large:hover { background: var(--secondary-color); color: #fff; }

.btn-outline { border: 2px solid var(--border-color); color: var(--text-main); }
.btn-outline:hover { border-color: var(--primary-color); color: var(--primary-color); }

/* ================= CONTACTO ================= */
.contact-section {
  padding: 6rem 5%;
  background-color: var(--bg-surface);
  border-top: 1px solid var(--border-color);
}

.contact-container {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.contact-info h2 { font-size: 2.2rem; color: var(--text-main); margin-bottom: 1rem; }
.contact-info p { font-size: 1.15rem; color: var(--text-muted); margin-bottom: 3rem; }

.contact-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin-bottom: 4rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-main);
  text-decoration: none;
  transition: color 0.3s ease;
}

a.contact-item:hover { color: var(--secondary-color); }
.contact-item .icon { font-size: 1.5rem; }

.social-title { font-weight: 700; color: var(--text-muted); margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 1px; }

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social-btn {
  padding: 0.8rem 1.5rem;
  background: var(--bg-main);
  border: 1px solid var(--border-color);
  border-radius: 50px;
  color: var(--text-main);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.social-btn:hover {
  background: var(--primary-color);
  color: #fff;
  border-color: var(--primary-color);
}

/* ================= CIERRE ================= */
.impact-message {
  position: relative;
  padding: 4rem 5%;
  background-image: url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1920');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: #fff;
  text-align: center;
}

.impact-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(10, 10, 10, 0.85);
}

.impact-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
}

.impact-content .quote-mark {
  display: block;
  font-size: 6rem;
  font-family: Georgia, serif;
  color: var(--secondary-color);
  line-height: 0.5;
  margin-bottom: 1rem;
}

.impact-content blockquote {
  font-family: Georgia, serif;
  font-size: calc(2.5rem * var(--font-modifier));
  font-weight: 400;
  font-style: italic;
  line-height: 1.4;
  margin: 0 0 2rem 0;
  text-wrap: balance;
}

.impact-signature {
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
}

/* ================= ANIMACIONES ================= */
.reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1); }
.reveal.active { opacity: 1; transform: translateY(0); }
.delay-1 { transition-delay: 0.1s; }
.delay-2 { transition-delay: 0.2s; }
.delay-3 { transition-delay: 0.3s; }

/* ================= RESPONSIVO ================= */
@media (max-width: 768px) {
  .page-title { font-size: 2.8rem; }
  .help-hero { padding: 6rem 5% 3rem; }
  .featured-card { transform: scale(1); }
  .featured-card:hover { transform: translateY(-8px); }
  .contact-links { flex-direction: column; gap: 1.5rem; }
  .social-icons { flex-wrap: wrap; }
  .impact-content blockquote { font-size: 1.8rem; }
  .impact-message { padding: 6rem 5%; }
}
</style>