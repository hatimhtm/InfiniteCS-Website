/**
 * InfiniteCS Website — Main Controller
 * GSAP animations, loader, scroll-based navigation, counters.
 */

/* ═══════════════  LOADER  ═══════════════ */
function initLoader() {
    const bar = document.getElementById('loaderBar');
    const pct = document.getElementById('loaderPct');
    let progress = 0;

    const interval = setInterval(() => {
        progress += Math.random() * 12 + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('loader').classList.add('hidden');
                initAnimations();
            }, 400);
        }
        bar.style.width = progress + '%';
        pct.textContent = Math.floor(progress) + '%';
    }, 120);
}

/* ═══════════════  GSAP HERO  ═══════════════ */
function initAnimations() {
    // Hero stagger
    gsap.to('.gsap-hero', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
    });

    // Scroll-triggered sections
    const sections = document.querySelectorAll('.about-section, .impact-section, .services-section, .strategy-section, .contact-section');
    sections.forEach(sec => {
        gsap.from(sec.querySelectorAll('.glass-card, .glass-card-dark, .glass-panel, .service-card, .strategy-card, .global-card, .contact-form, .contact-info'), {
            scrollTrigger: {
                trigger: sec,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 40,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
        });
    });

    // Impact section animations
    ScrollTrigger.create({
        trigger: '.impact-section',
        start: 'top 70%',
        once: true,
        onEnter: () => animateImpactCards(),
    });

    // Counter animations
    document.querySelectorAll('.counter').forEach(el => {
        ScrollTrigger.create({
            trigger: el,
            start: 'top 85%',
            once: true,
            onEnter: () => animateCounter(el),
        });
    });
}

/* ═══════════════  IMPACT CARD ANIMATIONS  ═══════════════ */
function animateImpactCards() {
    // Ring chart
    const ringFill = document.querySelector('.ring-fill');
    if (ringFill) {
        const pct = parseInt(ringFill.dataset.pct || 96);
        const offset = 188.5 - (188.5 * pct / 100);
        ringFill.style.strokeDashoffset = offset;
    }
}

/* ═══════════════  COUNTER ANIMATION  ═══════════════ */
function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const duration = 2000;
    const start = performance.now();

    function step(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

/* ═══════════════  NAVIGATION  ═══════════════ */
function initNav() {
    const navbar = document.getElementById('navbar');
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const hamburger = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    // Scroll state
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);

        // Active section detection
        let current = '';
        sections.forEach(sec => {
            const top = sec.offsetTop - 200;
            if (window.scrollY >= top) current = sec.id;
        });
        links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    });

    // Hamburger
    hamburger?.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        const icon = hamburger.querySelector('i');
        if (mobileMenu.classList.contains('open')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });

    // Close mobile menu on link click
    mobileMenu?.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            const icon = hamburger.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });
}

/* ═══════════════  SMOOTH SCROLL  ═══════════════ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/* ═══════════════  CONTACT FORM  ═══════════════ */
function initContactForm() {
    const form = document.getElementById('contactForm');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        btn.innerHTML = '<i data-lucide="check"></i> Message Sent!';
        btn.style.background = 'var(--green-500)';
        lucide.createIcons();
        setTimeout(() => {
            btn.innerHTML = 'Send Message <i data-lucide="send"></i>';
            btn.style.background = '';
            lucide.createIcons();
            form.reset();
        }, 3000);
    });
}

/* ═══════════════  INIT  ═══════════════ */
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    gsap.registerPlugin(ScrollTrigger);
    initLoader();
    initNav();
    initSmoothScroll();
    initContactForm();
});
