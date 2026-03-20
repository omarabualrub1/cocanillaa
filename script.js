// =========================================
// COCANILLA - Global Dessert Brand Website
// JavaScript - Interactivity & Animations
// =========================================

// ===== DOM Elements Selection =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// ===== Mobile Menu Toggle =====
function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Smooth Scroll Enhancement =====
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

// ===== Intersection Observer for Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Apply observer to all product cards and gallery items
document.querySelectorAll('.product-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// ===== Navbar Styling on Scroll =====
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// ===== Page Load Animation =====
window.addEventListener('DOMContentLoaded', () => {
    // Add subtle animations when page loads
    document.body.style.opacity = '1';
    
    // Stagger product card animations
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// ===== WhatsApp Link Handler =====
document.addEventListener('DOMContentLoaded', () => {
    const whatsappBtn = document.querySelector('.contact-btn.whatsapp');
    if (whatsappBtn) {
        // Replace the href with your WhatsApp number
        // Format: https://wa.me/[country code][phone number]
        // Example: https://wa.me/962791234567 (Jordan number)
        whatsappBtn.href = 'https://wa.me/';
    }
});

// ===== Image Lazy Loading Setup =====
// Note: If you want to implement lazy loading for images, uncomment below
/*
if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}
*/

// ===== Active Navigation Link on Scroll =====
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`a[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.style.color = 'var(--color-text)');
                navLink.style.color = 'var(--color-brown)';
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ===== Add Touch Support for Mobile =====
document.addEventListener('touchstart', function() {}, false);

// ===== Product Image Error Handler =====
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        // Create a placeholder SVG if image fails to load
        this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f5f1e8" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%238b6f47"%3EImage Placeholder%3C/text%3E%3C/svg%3E';
        this.style.objectFit = 'contain';
    });
});

// ===== Keyboard Navigation Support =====
navLinks.forEach(link => {
    link.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            link.click();
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();
});

// ===== Console Message =====
console.log('🍰 Welcome to Cocanilla - Premium Homemade Desserts');
console.log('Enjoy our delicious handcrafted collection! 💕');
// =========================================
// COCANILLA - Global Dessert Brand Website
// JavaScript - Interactivity & Animations
// =========================================

// ===== DOM Elements Selection =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// ===== Mobile Menu Toggle =====
function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Smooth Scroll Enhancement =====
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

// ===== Intersection Observer for Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Apply observer to all product cards and gallery items
document.querySelectorAll('.product-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// ===== Navbar Styling on Scroll =====
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// ===== Page Load Animation =====
window.addEventListener('DOMContentLoaded', () => {
    // Add subtle animations when page loads
    document.body.style.opacity = '1';
    
    // Stagger product card animations
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// ===== WhatsApp Link Handler =====
document.addEventListener('DOMContentLoaded', () => {
    const whatsappBtn = document.querySelector('.contact-btn.whatsapp');
    if (whatsappBtn) {
        // Replace the href with your WhatsApp number
        // Format: https://wa.me/[country code][phone number]
        // Example: https://wa.me/962791234567 (Jordan number)
        whatsappBtn.href = 'https://wa.me/';
    }
});

// ===== Image Lazy Loading Setup =====
// Note: If you want to implement lazy loading for images, uncomment below
/*
if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}
*/

// ===== Active Navigation Link on Scroll =====
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`a[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.style.color = 'var(--color-text)');
                navLink.style.color = 'var(--color-brown)';
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ===== Add Touch Support for Mobile =====
document.addEventListener('touchstart', function() {}, false);

// ===== Product Image Error Handler =====
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        // Create a placeholder SVG if image fails to load
        this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f5f1e8" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%238b6f47"%3EImage Placeholder%3C/text%3E%3C/svg%3E';
        this.style.objectFit = 'contain';
    });
});

// ===== Keyboard Navigation Support =====
navLinks.forEach(link => {
    link.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            link.click();
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();
});

// ===== Console Message =====
console.log('🍰 Welcome to Cocanilla - Premium Homemade Desserts');
console.log('Enjoy our delicious handcrafted collection! 💕');
