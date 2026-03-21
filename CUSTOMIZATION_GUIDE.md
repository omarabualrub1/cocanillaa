# 🎨 Cocanilla Website - Quick Customization Guide

## Quick Start

1. Open `index.html` in your browser to see the website
2. Replace placeholder image filenames with your actual images
3. Update contact information and WhatsApp link
4. Deploy to any web hosting

---

## 📋 Image Placeholders to Replace

All these image references are in `index.html`. Replace the filename with your actual image:

### Hero Section
```html
- placeholder-hero.jpg → your-main-dessert-image.jpg
```

### Products - Cheesecakes
```html
- placeholder-pecan-cheesecake.jpg → pecan-cheesecake.jpg
- placeholder-chocolate-cheesecake.jpg → chocolate-cheesecake.jpg
- placeholder-pistachio-cheesecake.jpg → pistachio-cheesecake.jpg
- placeholder-strawberry-cheesecake.jpg → strawberry-cheesecake.jpg
- placeholder-blueberry-cheesecake.jpg → blueberry-cheesecake.jpg
```

### Products - Other Desserts
```html
- placeholder-brownie.jpg → brownie.jpg
- placeholder-cookie-cake.jpg → cookie-cake.jpg
```

### Gallery Section
```html
- placeholder-gallery-1.jpg → gallery-1.jpg
- placeholder-gallery-2.jpg → gallery-2.jpg
- placeholder-gallery-3.jpg → gallery-3.jpg
- placeholder-gallery-4.jpg → gallery-4.jpg
- placeholder-gallery-5.jpg → gallery-5.jpg
- placeholder-gallery-6.jpg → gallery-6.jpg
```

---

## 🎯 Most Important Customizations

### 1. WhatApp Button (REQUIRED)
In `index.html`, find this line (around line 225):
```html
<a href="https://wa.me/" class="contact-btn whatsapp">
```
Replace with your WhatsApp number:
```html
<a href="https://wa.me/962798021776" class="contact-btn whatsapp">
```
Format: `https://wa.me/[COUNTRY_CODE][PHONE_NUMBER]`

Examples:
- Jordan: `962791234567`
- Egypt: `201001234567`
- UAE: `971501234567`

### 2. Instagram Handle (OPTIONAL - already set)
The Instagram link is already set to `@cocanillaa` - it will open the Instagram profile page.

### 3. Contact Email (OPTIONAL)
In `index.html`, around line 230:
```html
<p>📧 <strong>Email:</strong> info@cocanilla.com</p>
```

Change `info@cocanilla.com` to your email.

---

## 🎨 Color Customization

All colors are in `styles.css` at the top (lines 6-20). To change the entire color scheme:

```css
:root {
    /* Main background - very light cream */
    --color-cream: #FFFAF0;
    
    /* General section background - light beige */
    --color-beige: #F5F1E8;
    
    /* Primary accent color - warm brown */
    --color-brown: #8B6F47;
    
    /* Dark accent - darker brown */
    --color-dark-brown: #5C4A35;
    
    /* Optional: Change these for button colors */
    --color-accent-rose: #E8C4D0;      /* Instagram button background */
    --color-accent-peach: #F4D4B8;     /* General accents */
    --color-accent-mint: #D4E8DC;      /* WhatsApp button background */
}
```

### Popular Color Schemes for Desserts

**Luxury Chocolate** (Replace the three main colors):
- `--color-brown: #6B4423` 
- `--color-dark-brown: #3D2817`
- `--color-beige: #F3E5D3`

**Warm Caramel**:
- `--color-brown: #A0826D`
- `--color-dark-brown: #6B5A4F`
- `--color-beige: #FEFAF5`

**Modern Pastels**:
- `--color-brown: #9D84B7`
- `--color-dark-brown: #6B5B7D`
- `--color-beige: #F5EFF6`

---

## 📱 Responsive Design Features

The website automatically adapts to:
- **Desktop** (1200px+) - Full layout with hero image side-by-side
- **Tablet** (768px-1199px) - Stacked layout with adjusted images
- **Mobile** (< 768px) - Full mobile optimization with hamburger menu

No changes needed - it's already built in!

---

## ✏️ Editing Products

To edit a product, find the product card in `index.html` and modify:

```html
<div class="product-card">
    <div class="product-image">
        <img src="image-name.jpg" alt="Product Name">
    </div>
    <div class="product-info">
        <h4>Product Name</h4>
        <p class="price">20 JOD</p>
    </div>
</div>
```

To add a new product:
1. Copy the entire `<div class="product-card">...</div>` block
2. Change the image source, name, and price
3. The grid layout automatically adjusts

---

## 🚀 File Organization Tips

Organize your images folder like this:
```
images/
├── products/
│   ├── cheesecakes/
│   │   ├── pecan.jpg
│   │   ├── chocolate.jpg
│   │   └── ...
│   └── other/
│       ├── brownie.jpg
│       └── cookie-cake.jpg
├── gallery/
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
└── hero/
    └── main.jpg
```

Then in HTML, use:
```html
<img src="images/products/cheesecakes/pecan.jpg" alt="Pecan Cheesecake">
```

---

## 💡 Pro Tips

1. **Image Quality**: Use high-quality images (but compressed for web)
2. **Consistency**: Keep similar lighting and angles for product photos
3. **Gallery**: Show variety - different angles, packaging, styled shots
4. **Fresh Content**: Update gallery regularly to keep site fresh
5. **Mobile Testing**: Always check how it looks on your phone before deploying

---

## ⚙️ Advanced Customizations

### Change the Font
In `styles.css`, find:
```css
--font-family-main: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
--font-family-accent: Georgia, serif;
```

Change to:
```css
--font-family-main: 'Trebuchet MS', sans-serif;
--font-family-accent: 'Playfair Display', serif;  /* Requires Google Fonts */
```

### Adjust Spacing
Change these in `styles.css`:
```css
--spacing-sm: 1rem;      /* Small spacing */
--spacing-md: 1.5rem;    /* Medium spacing */
--spacing-lg: 2rem;      /* Large spacing */
--spacing-xl: 3rem;      /* Extra large spacing */
```

### Speed Up/Slow Down Animations
Find this in `styles.css`:
```css
--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```
Change `0.3s` to `0.2s` (faster) or `0.5s` (slower).

---

## 🐛 Troubleshooting

**Images won't show?**
- Check image file paths are correct
- Make sure images are in the same folder or provide full path
- Check file names match exactly (case-sensitive on some servers)

**Layout looks broken on mobile?**
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Try a different browser
- The responsive design should work automatically

**Animations not smooth?**
- Check `prefers-reduced-motion` setting on your device
- Different browsers handle CSS animations slightly differently
- All animations are GPU-accelerated for smooth performance

---

## 📞 Contact Section Deep Dive

The contact section has three parts:

1. **Instagram Button** - Links directly to your Instagram profile
2. **WhatsApp Button** - Opens WhatsApp chat with your number
3. **Contact Info** - Displays your email and Instagram handle

To fully customize WhatsApp:
```html
<!-- Before: -->
<a href="https://wa.me/" class="contact-btn whatsapp">
    <span class="btn-icon">💬</span>
    <span class="btn-text">Message on WhatsApp</span>
</a>

<!-- After (Example with message): -->
<a href="https://wa.me/962791234567?text=Hi%20Cocanilla%21%20I%20want%20to%20order..." class="contact-btn whatsapp">
    <span class="btn-icon">💬</span>
    <span class="btn-text">Message on WhatsApp</span>
</a>
```

The `?text=` part is optional and pre-fills the message.

---

## 🌍 Deployment Checklist

Before going live:
- [ ] All product images are replaced with real photos
- [ ] WhatsApp number is updated
- [ ] Email address is correct
- [ ] Instagram handle is correct
- [ ] Website looks good on mobile
- [ ] All links work
- [ ] Images are compressed and optimized
- [ ] No console errors (open DevTools: F12)
- [ ] Hero image is beautiful and appetizing
- [ ] Gallery images show the best products
- [ ] Prices are correct and in JOD
- [ ] Product names are spelled correctly

---

Good luck with your Cocanilla website! 🍰💕
# 🎨 Cocanilla Website - Quick Customization Guide

## Quick Start

1. Open `index.html` in your browser to see the website
2. Replace placeholder image filenames with your actual images
3. Update contact information and WhatsApp link
4. Deploy to any web hosting

---

## 📋 Image Placeholders to Replace

All these image references are in `index.html`. Replace the filename with your actual image:

### Hero Section
```html
- placeholder-hero.jpg → your-main-dessert-image.jpg
```

### Products - Cheesecakes
```html
- placeholder-pecan-cheesecake.jpg → pecan-cheesecake.jpg
- placeholder-chocolate-cheesecake.jpg → chocolate-cheesecake.jpg
- placeholder-pistachio-cheesecake.jpg → pistachio-cheesecake.jpg
- placeholder-strawberry-cheesecake.jpg → strawberry-cheesecake.jpg
- placeholder-blueberry-cheesecake.jpg → blueberry-cheesecake.jpg
```

### Products - Other Desserts
```html
- placeholder-brownie.jpg → brownie.jpg
- placeholder-cookie-cake.jpg → cookie-cake.jpg
```

### Gallery Section
```html
- placeholder-gallery-1.jpg → gallery-1.jpg
- placeholder-gallery-2.jpg → gallery-2.jpg
- placeholder-gallery-3.jpg → gallery-3.jpg
- placeholder-gallery-4.jpg → gallery-4.jpg
- placeholder-gallery-5.jpg → gallery-5.jpg
- placeholder-gallery-6.jpg → gallery-6.jpg
```

---

## 🎯 Most Important Customizations

### 1. WhatApp Button (REQUIRED)
In `index.html`, find this line (around line 225):
```html
<a href="https://wa.me/" class="contact-btn whatsapp">
```
Replace with your WhatsApp number:
```html
<a href="https://wa.me/962791234567" class="contact-btn whatsapp">
```
Format: `https://wa.me/[COUNTRY_CODE][PHONE_NUMBER]`

Examples:
- Jordan: `962791234567`
- Egypt: `201001234567`
- UAE: `971501234567`

### 2. Instagram Handle (OPTIONAL - already set)
The Instagram link is already set to `@cocanillaa` - it will open the Instagram profile page.

### 3. Contact Email (OPTIONAL)
In `index.html`, around line 230:
```html
<p>📧 <strong>Email:</strong> info@cocanilla.com</p>
```

Change `info@cocanilla.com` to your email.

---

## 🎨 Color Customization

All colors are in `styles.css` at the top (lines 6-20). To change the entire color scheme:

```css
:root {
    /* Main background - very light cream */
    --color-cream: #FFFAF0;
    
    /* General section background - light beige */
    --color-beige: #F5F1E8;
    
    /* Primary accent color - warm brown */
    --color-brown: #8B6F47;
    
    /* Dark accent - darker brown */
    --color-dark-brown: #5C4A35;
    
    /* Optional: Change these for button colors */
    --color-accent-rose: #E8C4D0;      /* Instagram button background */
    --color-accent-peach: #F4D4B8;     /* General accents */
    --color-accent-mint: #D4E8DC;      /* WhatsApp button background */
}
```

### Popular Color Schemes for Desserts

**Luxury Chocolate** (Replace the three main colors):
- `--color-brown: #6B4423` 
- `--color-dark-brown: #3D2817`
- `--color-beige: #F3E5D3`

**Warm Caramel**:
- `--color-brown: #A0826D`
- `--color-dark-brown: #6B5A4F`
- `--color-beige: #FEFAF5`

**Modern Pastels**:
- `--color-brown: #9D84B7`
- `--color-dark-brown: #6B5B7D`
- `--color-beige: #F5EFF6`

---

## 📱 Responsive Design Features

The website automatically adapts to:
- **Desktop** (1200px+) - Full layout with hero image side-by-side
- **Tablet** (768px-1199px) - Stacked layout with adjusted images
- **Mobile** (< 768px) - Full mobile optimization with hamburger menu

No changes needed - it's already built in!

---

## ✏️ Editing Products

To edit a product, find the product card in `index.html` and modify:

```html
<div class="product-card">
    <div class="product-image">
        <img src="image-name.jpg" alt="Product Name">
    </div>
    <div class="product-info">
        <h4>Product Name</h4>
        <p class="price">20 JOD</p>
    </div>
</div>
```

To add a new product:
1. Copy the entire `<div class="product-card">...</div>` block
2. Change the image source, name, and price
3. The grid layout automatically adjusts

---

## 🚀 File Organization Tips

Organize your images folder like this:
```
images/
├── products/
│   ├── cheesecakes/
│   │   ├── pecan.jpg
│   │   ├── chocolate.jpg
│   │   └── ...
│   └── other/
│       ├── brownie.jpg
│       └── cookie-cake.jpg
├── gallery/
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
└── hero/
    └── main.jpg
```

Then in HTML, use:
```html
<img src="images/products/cheesecakes/pecan.jpg" alt="Pecan Cheesecake">
```

---

## 💡 Pro Tips

1. **Image Quality**: Use high-quality images (but compressed for web)
2. **Consistency**: Keep similar lighting and angles for product photos
3. **Gallery**: Show variety - different angles, packaging, styled shots
4. **Fresh Content**: Update gallery regularly to keep site fresh
5. **Mobile Testing**: Always check how it looks on your phone before deploying

---

## ⚙️ Advanced Customizations

### Change the Font
In `styles.css`, find:
```css
--font-family-main: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
--font-family-accent: Georgia, serif;
```

Change to:
```css
--font-family-main: 'Trebuchet MS', sans-serif;
--font-family-accent: 'Playfair Display', serif;  /* Requires Google Fonts */
```

### Adjust Spacing
Change these in `styles.css`:
```css
--spacing-sm: 1rem;      /* Small spacing */
--spacing-md: 1.5rem;    /* Medium spacing */
--spacing-lg: 2rem;      /* Large spacing */
--spacing-xl: 3rem;      /* Extra large spacing */
```

### Speed Up/Slow Down Animations
Find this in `styles.css`:
```css
--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```
Change `0.3s` to `0.2s` (faster) or `0.5s` (slower).

---

## 🐛 Troubleshooting

**Images won't show?**
- Check image file paths are correct
- Make sure images are in the same folder or provide full path
- Check file names match exactly (case-sensitive on some servers)

**Layout looks broken on mobile?**
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Try a different browser
- The responsive design should work automatically

**Animations not smooth?**
- Check `prefers-reduced-motion` setting on your device
- Different browsers handle CSS animations slightly differently
- All animations are GPU-accelerated for smooth performance

---

## 📞 Contact Section Deep Dive

The contact section has three parts:

1. **Instagram Button** - Links directly to your Instagram profile
2. **WhatsApp Button** - Opens WhatsApp chat with your number
3. **Contact Info** - Displays your email and Instagram handle

To fully customize WhatsApp:
```html
<!-- Before: -->
<a href="https://wa.me/" class="contact-btn whatsapp">
    <span class="btn-icon">💬</span>
    <span class="btn-text">Message on WhatsApp</span>
</a>

<!-- After (Example with message): -->
<a href="https://wa.me/962791234567?text=Hi%20Cocanilla%21%20I%20want%20to%20order..." class="contact-btn whatsapp">
    <span class="btn-icon">💬</span>
    <span class="btn-text">Message on WhatsApp</span>
</a>
```

The `?text=` part is optional and pre-fills the message.

---

## 🌍 Deployment Checklist

Before going live:
- [ ] All product images are replaced with real photos
- [ ] WhatsApp number is updated
- [ ] Email address is correct
- [ ] Instagram handle is correct
- [ ] Website looks good on mobile
- [ ] All links work
- [ ] Images are compressed and optimized
- [ ] No console errors (open DevTools: F12)
- [ ] Hero image is beautiful and appetizing
- [ ] Gallery images show the best products
- [ ] Prices are correct and in JOD
- [ ] Product names are spelled correctly

---

Good luck with your Cocanilla website! 🍰💕
