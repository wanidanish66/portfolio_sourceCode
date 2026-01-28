// Initialize Typed.js
new Typed('.typing', {
    strings: ['Web Developer', 'Web Designer', 'Python Coder', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.hero-content, .section-title', {});
sr.reveal('.hero-img, .about-info, .contact-info', { delay: 400 });
sr.reveal('.about-grid, .services-grid, .portfolio-grid', { interval: 200 });

// Theme toggle
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    const icon = themeBtn.querySelector('i');
    if (body.classList.contains('dark')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// Navbar toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! This is a static demo, so messages are not stored.');
    contactForm.reset();
});