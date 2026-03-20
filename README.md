# 🍰 Cocanilla - Premium Homemade Desserts Website

A modern, responsive, global dessert brand website built with HTML, CSS, and JavaScript.

## Features

✨ **Modern Design**
- Clean, premium aesthetic with soft dessert-inspired color palette
- Smooth animations and transitions
- Responsive design - works perfectly on mobile and desktop

🎨 **Design Elements**
- Soft colors: Cream, beige, brown, and pastel tones
- Professional typography (Georgia serif for headings)
- Interactive hover effects and smooth scrolling
- Mobile-first responsive approach

📱 **Mobile Optimized**
- Hamburger menu for mobile navigation
- Touch-friendly interface
- Optimized layouts for all screen sizes

🎯 **Sections**
1. **Home/Hero** - Brand introduction with catchy tagline
2. **Products** - Organized by category (Cheesecakes, Other Desserts)
3. **Gallery** - Beautiful grid layout for product photos
4. **Contact** - Instagram and WhatsApp integration

## File Structure

```
cocanilla-website/
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript for interactivity
├── README.md           # This file
└── images/             # Folder for product images (to be added)
    ├── placeholder-hero.jpg
    ├── placeholder-pecan-cheesecake.jpg
    ├── placeholder-chocolate-cheesecake.jpg
    ├── placeholder-pistachio-cheesecake.jpg
    ├── placeholder-strawberry-cheesecake.jpg
    ├── placeholder-blueberry-cheesecake.jpg
    ├── placeholder-brownie.jpg
    ├── placeholder-cookie-cake.jpg
    ├── placeholder-gallery-1.jpg
    ├── placeholder-gallery-2.jpg
    ├── placeholder-gallery-3.jpg
    ├── placeholder-gallery-4.jpg
    ├── placeholder-gallery-5.jpg
    └── placeholder-gallery-6.jpg
```

## How to Use

### 1. **Getting Started**
   - Open `index.html` in your web browser
   - No backend or build process required
   - All code is static HTML, CSS, and JavaScript

### 2. **Adding Images**

   Replace placeholder image paths in `index.html`:
   
   ```html
   <!-- Change this: -->
   <img src="placeholder-pecan-cheesecake.jpg" alt="Pecan Cheesecake">
   
   <!-- To this (absolute path): -->
   <img src="/images/pecan-cheesecake.jpg" alt="Pecan Cheesecake">
   
   <!-- Or relative path: -->
   <img src="images/pecan-cheesecake.jpg" alt="Pecan Cheesecake">
   ```

   **Image Specifications:**
   - **Hero Image**: Recommended 1200x800px or larger
   - **Product Images**: 400x400px (square format works best)
   - **Gallery Images**: 600x600px
   - **Format**: JPG, PNG, or WebP
   - **File Size**: Optimize for web (< 500KB per image)

### 3. **Customizing Colors**

   Edit the CSS variables in `styles.css` (lines 6-20):
   
   ```css
   :root {
       --color-cream: #FFFAF0;           /* Background color */
       --color-beige: #F5F1E8;           /* Accent beige */
       --color-brown: #8B6F47;           /* Primary accent */
       --color-dark-brown: #5C4A35;      /* Dark accent */
       --color-accent-rose: #E8C4D0;     /* Rose tone */
       --color-accent-peach: #F4D4B8;    /* Peach tone */
       --color-accent-mint: #D4E8DC;     /* Mint tone */
   }
   ```

### 4. **Updating Product Information**

   Edit products in `index.html` around line 148-200:
   
   ```html
   <div class="product-card">
       <div class="product-image">
           <img src="your-image.jpg" alt="Product Name">
       </div>
       <div class="product-info">
           <h4>Product Name</h4>
           <p class="price">XX JOD</p>
       </div>
   </div>
   ```

### 5. **Adding WhatsApp Link**

   Update the WhatsApp button in `index.html` (around line 225):
   
   ```html
   <a href="https://wa.me/962XXXXXXXXX">
   ```
   
   Replace `962XXXXXXXXX` with your WhatsApp number (country code + number, no +).
   
   Example for Jordan: `https://wa.me/962791234567`

### 6. **Contact Information**

   Update contact info in `index.html` (around line 227-230):
   
   ```html
   <p>📧 <strong>Email:</strong> your-email@cocanilla.com</p>
   <p>📱 <strong>Instagram:</strong> @cocanillaa</p>
   ```

## Customization Guide

### Changing the Brand Name
- Search for "Cocanilla" in `index.html` and replace with your brand name
- Update the logo emoji if desired (currently 🍰)

### Modifying Section Titles
- Edit directly in the `<section>` tags in `index.html`

### Adjusting Spacing
- Edit CSS variables in `styles.css`:
  ```css
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  ```

### Changing Fonts
- Modify `--font-family-main` and `--font-family-accent` in `styles.css`

### Adding More Products
- Copy a product card block and update the content
- The grid automatically adjusts

### Adding More Gallery Images
- Copy a gallery-item block and update the image source

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**
   - Use WebP format when possible (more modern browsers support it)
   - Compress images using tools like TinyPNG or ImageOptim
   - Use appropriate image dimensions

2. **Lazy Loading** (Optional)
   - Uncomment the lazy loading code in `script.js` if you have many images

3. **Caching**
   - Images are cached by browsers automatically

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- High contrast colors for readability
- Respects `prefers-reduced-motion` for users who prefer less animation

## Color Palette Reference

| Color | Hex Code | Usage |
|-------|----------|-------|
| Cream | #FFFAF0 | Background |
| Beige | #F5F1E8 | Section backgrounds |
| Light Beige | #FAF7F2 | Hover states |
| Tan | #E8DCC8 | Borders |
| Brown | #8B6F47 | Primary accent, text |
| Dark Brown | #5C4A35 | Headings, dark text |
| Rose | #E8C4D0 | Instagram button |
| Peach | #F4D4B8 | Accent elements |
| Mint | #D4E8DC | WhatsApp button |

## Deployment

### Simple Options
1. **GitHub Pages** - Free hosting for static websites
2. **Netlify** - Easy deployment from Git repo
3. **Vercel** - Zero-config static hosting
4. **Any Web Hosting** - Works on any server (just upload files)

### Steps for GitHub Pages
1. Create a GitHub repository
2. Push `index.html`, `styles.css`, `script.js` and `images/` folder
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://yourusername.github.io/repo-name`

## Customization Checklist

- [ ] Replace all placeholder images with your product photos
- [ ] Update product names and prices
- [ ] Add WhatsApp number
- [ ] Update contact information
- [ ] Change brand name if needed
- [ ] Adjust colors to match brand identity
- [ ] Update Instagram handle
- [ ] Test on mobile devices
- [ ] Optimize images for web
- [ ] Verify all links work

## Support for Instagram Integration

The Instagram link works directly at `https://www.instagram.com/cocanillaa` - you can open this in a new tab. For embedded Instagram feeds, you would need additional tools or services.

## Notes

- The website is completely static - no database or backend required
- All animations use CSS and vanilla JavaScript (no jQuery or libraries)
- The design is print-friendly if needed
- All images use placeholder naming for easy identification and replacement

## Future Enhancements

- Add a subscription form
- Integrate with Instagram API for live feed
- Add customer testimonials section
- Add a simple order tracking system
- Create blog/news section
- Add multilingual support
- Implement online ordering system

---

**Made with 💕 for Cocanilla - Premium Homemade Desserts**

*Version 1.0 - March 2024*
