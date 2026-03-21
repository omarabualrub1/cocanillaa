// =========================================
// COCANILLA - Global Dessert Brand Website
// JavaScript - Interactivity, Cart & WhatsApp Integration
// =========================================

// ===== Shopping Cart System =====
let cart = JSON.parse(localStorage.getItem('cocanillaCart')) || [];

// ===== DOM Elements Selection =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const cartClose = document.getElementById('cartClose');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutClose = document.getElementById('checkoutClose');
const checkoutBtn = document.getElementById('checkoutBtn');
const continueShopping = document.getElementById('continueShopping');
const goBackBtn = document.getElementById('goBackBtn');
const sendWhatsAppBtn = document.getElementById('sendWhatsAppBtn');

// ===== Mobile Menu Toggle =====
function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
}

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// ===== Cart Modal Controls =====
function openCart() {
    cartModal.classList.remove('hidden');
    displayCart();
}

function closeCart() {
    cartModal.classList.add('hidden');
}

if (cartBtn) {
    cartBtn.addEventListener('click', openCart);
}

if (cartClose) {
    cartClose.addEventListener('click', closeCart);
}

if (continueShopping) {
    continueShopping.addEventListener('click', closeCart);
}

// Close modal when clicking outside
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        closeCart();
    }
});

// ===== Checkout Modal Controls =====
function openCheckout() {
    if (cart.length === 0) return;
    closeCart();
    checkoutModal.classList.remove('hidden');
    displayOrderSummary();
}

function closeCheckout() {
    checkoutModal.classList.add('hidden');
}

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', openCheckout);
}

if (checkoutClose) {
    checkoutClose.addEventListener('click', closeCheckout);
}

if (goBackBtn) {
    goBackBtn.addEventListener('click', () => {
        closeCheckout();
        openCart();
    });
}

// Close modal when clicking outside
checkoutModal.addEventListener('click', (e) => {
    if (e.target === checkoutModal) {
        closeCheckout();
    }
});

// ===== Add to Cart Functionality =====
document.querySelectorAll('.btn-add-to-cart').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const productCard = this.closest('.product-card');
        const productName = productCard.getAttribute('data-product-name');
        const productPrice = parseFloat(productCard.getAttribute('data-product-price'));
        const qtyInput = productCard.querySelector('.product-qty');
        const quantity = parseInt(qtyInput.value) || 1;
        
        addToCart(productName, productPrice, quantity);
        
        // Reset quantity to 1
        qtyInput.value = 1;
        
        // Show feedback
        this.textContent = '✓ Added!';
        setTimeout(() => {
            this.textContent = 'Add to Cart';
        }, 1000);
    });
});

// ===== Cart Management Functions =====
function addToCart(name, price, quantity) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: Date.now(),
            name: name,
            price: price,
            quantity: quantity
        });
    }
    
    saveCart();
    updateCartCount();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    displayCart();
    updateCartCount();
}

function updateQuantity(itemId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(itemId);
        return;
    }
    
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        displayCart();
    }
}

function saveCart() {
    localStorage.setItem('cocanillaCart', JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// ===== Display Cart =====
function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const emptyMessage = document.getElementById('emptyCartMessage');
    const subtotal = document.getElementById('subtotal');
    const total = document.getElementById('total');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '';
        emptyMessage.style.display = 'block';
        if (checkoutBtn) checkoutBtn.disabled = true;
        subtotal.textContent = '0 JOD';
        total.textContent = '0 JOD';
        return;
    }
    
    emptyMessage.style.display = 'none';
    if (checkoutBtn) checkoutBtn.disabled = false;
    
    let cartHTML = '';
    let totalPrice = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        
        cartHTML += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price} JOD each</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                        <span style="margin: 0 0.5rem;">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <div style="text-align: right;">
                    <div style="font-weight: 600; color: var(--color-brown); margin-bottom: 0.5rem;">${itemTotal} JOD</div>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `;
    });
    
    cartItems.innerHTML = cartHTML;
    subtotal.textContent = totalPrice.toFixed(2) + ' JOD';
    total.textContent = totalPrice.toFixed(2) + ' JOD';
}

// ===== Display Order Summary =====
function displayOrderSummary() {
    const orderSummary = document.getElementById('orderSummary');
    
    let summaryHTML = '';
    let totalPrice = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        
        summaryHTML += `
            <div class="order-item">
                <span class="order-item-name">${item.name} x${item.quantity}</span>
                <span class="order-item-total">${itemTotal.toFixed(2)} JOD</span>
            </div>
        `;
    });
    
    summaryHTML += `
        <div class="order-total">
            Total: ${totalPrice.toFixed(2)} JOD
        </div>
    `;
    
    orderSummary.innerHTML = summaryHTML;
}

// ===== WhatsApp Integration =====
if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener('click', sendOrderViaWhatsApp);
}

function sendOrderViaWhatsApp() {
    // Get customer information
    const customerName = document.getElementById('customerName').value.trim();
    const customerPhone = document.getElementById('customerPhone').value.trim();
    const customerAddress = document.getElementById('customerAddress').value.trim();
    const customerNotes = document.getElementById('customerNotes').value.trim();
    
    // Validate input
    if (!customerName || !customerPhone || !customerAddress) {
        alert('Please fill in all required fields (Name, Phone, Address)');
        return;
    }
    
    // Build order message
    let message = `*Cocanilla Order* 🍰\n\n`;
    message += `*Customer Details*\n`;
    message += `Name: ${customerName}\n`;
    message += `Phone: ${customerPhone}\n`;
    message += `Address: ${customerAddress}\n`;
    
    if (customerNotes) {
        message += `Special Requests: ${customerNotes}\n`;
    }
    
    message += `\n*Order Items*\n`;
    message += `─────────────────\n`;
    
    let totalPrice = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        message += `${item.name} x${item.quantity}\n  ${item.price} JOD × ${item.quantity} = ${itemTotal.toFixed(2)} JOD\n`;
    });
    
    message += `─────────────────\n`;
    message += `*Total: ${totalPrice.toFixed(2)} JOD*\n\n`;
    message += `Thank you for ordering from Cocanilla! 💕\n`;
    
    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp number for order integration
    const whatsappNumber = '962798021776';
    
    // Create WhatsApp link
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Clear form and close modal
    document.getElementById('customerName').value = '';
    document.getElementById('customerPhone').value = '';
    document.getElementById('customerAddress').value = '';
    document.getElementById('customerNotes').value = '';
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartCount();
    closeCheckout();
    
    // Open WhatsApp
    window.open(whatsappLink, '_blank');
    
    alert('Order sent to WhatsApp! Continue shopping or wait for confirmation.');
}

// ===== Initialize =====
function initializeApp() {
    updateCartCount();
    displayCart();
}

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
    
    // Initialize app
    initializeApp();
    
    // Stagger product card animations
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    updateActiveNavLink();
});

// ===== WhatsApp Link Handler =====
document.addEventListener('DOMContentLoaded', () => {
    const whatsappBtn = document.querySelector('.contact-btn.whatsapp');
    if (whatsappBtn) {
        // Set WhatsApp contact number
        whatsappBtn.href = 'https://wa.me/962798021776';
    }
});

// ===== Image Lazy Loading Setup =====
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

// ===== Console Message =====
console.log('🍰 Welcome to Cocanilla - Premium Homemade Desserts');
console.log('Enjoy our delicious handcrafted collection! 💕');
