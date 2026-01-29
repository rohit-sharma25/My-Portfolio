// ========================================
// 🚀 MAIN JAVASCRIPT - Portfolio Enhancements
// ========================================

// ========================================
// NAVIGATION SCROLL EFFECT
// ========================================
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ========================================
// MOBILE MENU TOGGLE
// ========================================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Animate hamburger to X
        const spans = menuToggle.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// ========================================
// TYPEWRITER EFFECT
// ========================================
function typewriterEffect(element, texts, speed = 100, deleteSpeed = 50, pauseTime = 2000) {
    if (!element) return;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? deleteSpeed : speed;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

// Initialize typewriter on home page
const typewriterElement = document.querySelector('.typewriter');
if (typewriterElement) {
    const texts = [
        'Full Stack Developer',
        'UI/UX Designer',
        'Problem Solver',
        'Tech Enthusiast'
    ];
    typewriterEffect(typewriterElement, texts);
}

// ========================================
// INTERSECTION OBSERVER - SCROLL ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('.section, .card, .project-card, .skill-category').forEach(el => {
    el.classList.add('fade-init');
    observer.observe(el);
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// PARALLAX EFFECT FOR HERO SECTION
// ========================================
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        hero.style.transform = `translateY(${parallax}px)`;
    });
}

// ========================================
// CURSOR GLOW EFFECT (Optional Premium Touch)
// ========================================
const createCursorGlow = () => {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent);
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.15s ease;
    display: none;
  `;
    document.body.appendChild(glow);

    document.addEventListener('mousemove', (e) => {
        glow.style.display = 'block';
        glow.style.left = e.clientX - 10 + 'px';
        glow.style.top = e.clientY - 10 + 'px';
    });
};

// Uncomment to enable cursor glow
// createCursorGlow();

// ========================================
// DYNAMIC YEAR IN FOOTER
// ========================================
const yearElements = document.querySelectorAll('.current-year');
yearElements.forEach(el => {
    el.textContent = new Date().getFullYear();
});

console.log('🎨 Portfolio Enhanced - All systems ready!');
