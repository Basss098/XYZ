document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navbar Toggle (Mobile)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu saat link diklik
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 2. Intersection Observer (Scroll Animation)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15, // Muncul saat 15% terlihat
        rootMargin: "0px 0px -50px 0px"
    });

    const animatedElements = document.querySelectorAll('.fade-up, .fade-in, .fade-right, .fade-left');
    animatedElements.forEach(el => observer.observe(el));
});