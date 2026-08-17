/**
 * DOÇARIA TOQUE DE ARTE — MOTION & INTERACTION FIDELITY ENGINE
 * Phase 06: Smooth, high-performance interactions & scroll grammar
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. STICKY HEADER SCROLL COMPRESSION
  const header = document.getElementById('globalHeader');
  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateHeader() {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });

  // Initial check
  updateHeader();

  // 2. MOBILE OFF-CANVAS DRAWER
  const menuToggle = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('mobileDrawerOverlay');
  const drawerClose = document.getElementById('drawerClose');
  const drawerLinks = document.querySelectorAll('.drawer-nav-link');

  function openDrawer() {
    drawer.classList.add('is-open');
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (menuToggle && drawer && overlay && drawerClose) {
    menuToggle.addEventListener('click', openDrawer);
    drawerClose.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);
    drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));
  }

  // 3. DESKTOP MOUSE PARALLAX ON HERO CONFECTIONERY CLUSTER
  const heroSection = document.getElementById('hero');
  const heroCluster = document.querySelector('.hero-visual-cluster');
  const mainCake = document.querySelector('.item-main-cake');
  const copo = document.querySelector('.item-copo');
  const pastel = document.querySelector('.item-pastel');
  const brigadeiro = document.querySelector('.item-brigadeiro');
  const morango = document.querySelector('.item-morango');
  const sparkles = document.querySelectorAll('.floating-sparkle');

  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (heroSection && heroCluster && !isTouchDevice && !prefersReduced) {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let heroHovered = false;

    heroSection.addEventListener('mouseenter', () => {
      heroHovered = true;
    });

    heroSection.addEventListener('mouseleave', () => {
      heroHovered = false;
      mouseX = 0;
      mouseY = 0;
    });

    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 20;
      mouseY = y * 20;
    });

    function animateParallax() {
      // Smooth lerp
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      if (mainCake) {
        mainCake.style.transform = `translate(${currentX * 0.6}px, ${currentY * 0.6}px) rotate(-2deg)`;
      }
      if (copo) {
        copo.style.transform = `translate(${currentX * -0.9}px, ${currentY * -0.9}px) rotate(6deg)`;
      }
      if (pastel) {
        pastel.style.transform = `translate(${currentX * 0.8}px, ${currentY * 0.8}px) rotate(-8deg)`;
      }
      if (brigadeiro) {
        brigadeiro.style.transform = `translate(${currentX * -1.2}px, ${currentY * -1.2}px) rotate(10deg)`;
      }
      if (morango) {
        morango.style.transform = `translate(${currentX * 1.1}px, ${currentY * 1.1}px) rotate(15deg)`;
      }
      sparkles.forEach((sparkle, idx) => {
        const factor = (idx + 1) * 0.5;
        sparkle.style.transform = `translate(${currentX * factor}px, ${currentY * factor}px)`;
      });

      requestAnimationFrame(animateParallax);
    }

    animateParallax();
  }

  // 4. SCROLL INTERSECTION OBSERVER FOR REVEALS
  if (!prefersReduced && 'IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Target elements to observe
    const elementsToReveal = document.querySelectorAll(`
      .trust-badge-card,
      .promo-card,
      .product-card,
      .editorial-card,
      .mosaic-hero-tile,
      .mosaic-small-tile,
      .newsletter-container
    `);

    elementsToReveal.forEach((el, index) => {
      el.classList.add('reveal-on-scroll');
      revealObserver.observe(el);
    });
  }

  // 5. ACTIVE SECTION LINK HIGHLIGHTING
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavOnScroll() {
    const scrollPos = window.scrollY + 160;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('is-active');
          } else {
            link.classList.remove('is-active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });
});
