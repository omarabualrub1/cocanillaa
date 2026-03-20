# ✅ Cocanilla Website - Setup Checklist

## 🚀 Getting Started (5 minutes)

### Step 1: View the Website
- [ ] Open `index.html` in your web browser
- [ ] Test on desktop and mobile
- [ ] Check all sections load properly

### Step 2: Update Critical Information
- [ ] Update WhatsApp number in `index.html` (line ~225)
- [ ] Update email in `index.html` (line ~230)  
- [ ] Verify Instagram handle is correct (currently @cocanillaa)

### Step 3: Organize Your Images
- [ ] Prepare 1 hero image
- [ ] Prepare 8 product images (5 cheesecakes + 2 other desserts + 1 extra)
- [ ] Prepare 6 gallery images
- [ ] **Total: 15+ images needed**

---

## 📸 Image Requirements

### File Types
- ✅ JPG, PNG, or WebP
- ❌ Avoid BMP, GIF (unless animated)

### Dimensions
| Image Type | Recommended Size | Aspect Ratio |
|-----------|------------------|--------------|
| Hero Image | 1200 x 800px | 3:2 |
| Product Cards | 400 x 400px | 1:1 (square) |
| Gallery Items | 600 x 600px | 1:1 (square) |

### File Size
- Aim for 100-300KB per image
- Use tools like:
  - TinyPNG.com
  - ImageOptim (Mac)
  - FileOptimizer (Windows)

### Tips
- Use natural lighting for better appeal
- Show products from multiple angles
- Keep consistent styling/background
- Ensure products look appetizing and fresh

---

## 🛠️ Installation Guide

### Quick Setup (No Install Needed!)
```
1. Download/save all files to a folder
2. Keep this structure:
   📁 cocanilla-website/
   ├── 📄 index.html
   ├── 📄 styles.css
   ├── 📄 script.js
   ├── 📁 images/
   │   ├── hero.jpg
   │   ├── product-1.jpg
   │   ├── product-2.jpg
   │   └── ... (all your images)
   └── 📄 README.md
3. Open index.html in browser
3. Done! 🎉
```

---

## 🖼️ Image Replacement Steps

### Method 1: Easy Search & Replace
1. Open `index.html` in a text editor
2. Find & Replace all:
   - `placeholder-hero.jpg` → `hero.jpg`
   - `placeholder-pecan-cheesecake.jpg` → `pecan-cheesecake.jpg`
   - etc.

### Method 2: Manual Editing
1. Locate each image line in `index.html`
2. Change the filename to your actual filename
3. Repeat for all 15+ images

### Method 3: Folder Structure
Create an `images/` folder and organize:
```
images/
├── hero.jpg
├── pecan-cheesecake.jpg
├── chocolate-cheesecake.jpg
├── pistachio-cheesecake.jpg
├── strawberry-cheesecake.jpg
├── blueberry-cheesecake.jpg
├── brownie.jpg
├── cookie-cake.jpg
├── gallery-1.jpg
├── gallery-2.jpg
├── gallery-3.jpg
├── gallery-4.jpg
├── gallery-5.jpg
└── gallery-6.jpg
```

Then update `index.html`:
```html
<!-- Change: -->
<img src="placeholder-hero.jpg">

<!-- To: -->
<img src="images/hero.jpg">
```

---

## ✏️ Content Customization

### Prices & Product Names
1. Open `index.html`
2. Search for "JOD" to find all prices
3. Update product names between `<h4>` tags
4. Update prices between `<p class="price">` tags

```html
<!-- Before: -->
<h4>Pecan Cheesecake</h4>
<p class="price">20 JOD</p>

<!-- After: -->
<h4>Premium Pecan Cheesecake</h4>
<p class="price">25 JOD</p>
```

### Hero Text
Update the main brand message (lines ~65-68):
```html
<h1 class="hero-title">Cocanilla</h1>
<p class="hero-subtitle">Homemade Desserts Made with Love</p>
<p class="hero-description">YOUR CUSTOM TEXT HERE</p>
```

### Section Descriptions
Update section headers (lines ~87, ~161, ~200, ~213):
```html
<p>YOUR CUSTOM TEXT</p>
```

---

## 🎨 Design Customization

### Change Brand Colors
Edit `styles.css` lines 6-20:
```css
--color-brown: #8B6F47;           /* Change this */
--color-dark-brown: #5C4A35;      /* And this */
```

Use online tools:
- ColorPicker.com
- Adobe Color Wheel
- Coolors.co

### Change Fonts
Edit `styles.css` lines 14-15:
```css
--font-family-main: 'Arial', sans-serif;
--font-family-accent: 'Times New Roman', serif;
```

Or use Google Fonts:
1. Add to `<head>` in index.html:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
```
2. Update CSS:
```css
--font-family-accent: 'Playfair Display', serif;
```

---

## 🚀 Deployment Options

### Option 1: GitHub Pages (FREE)
1. Create GitHub account
2. Create new repository (name it `cocanilla-website`)
3. Upload: index.html, styles.css, script.js, images/
4. Go to Settings → Pages → Enable
5. Your site will be at: `https://yourusername.github.io/cocanilla-website`

### Option 2: Netlify (FREE)
1. Go to netlify.com
2. Drag & drop your folder
3. Site generated automatically
4. Custom domain available

### Option 3: Vercel (FREE)
1. Go to vercel.com
2. Sign in with GitHub
3. Import repository
4. Deploy!
5. Site goes live instantly

### Option 4: Any Web Hosting
- Bluehost, GoDaddy, HostGator, etc.
- Upload via FTP
- Point domain to hosting

---

## 📱 Testing Checklist

### Desktop (1920px+)
- [ ] Hero section displays properly
- [ ] Product grid shows 3-4 columns
- [ ] Gallery displays 3 images per row
- [ ] Navigation bar works
- [ ] Hover effects work smoothly

### Tablet (768-1024px)
- [ ] Layout stacks appropriately
- [ ] Product grid shows 2-3 columns
- [ ] Hero title still readable
- [ ] Images load properly

### Mobile (320-767px)
- [ ] Hamburger menu appears
- [ ] Menu opens/closes smoothly
- [ ] Product grid shows 1 column
- [ ] Gallery shows 1 column
- [ ] Text is readable
- [ ] Buttons are easy to tap

### Browsers
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iPhone)
- [ ] Chrome Mobile (Android)

---

## 🔧 Common Issues & Solutions

### Issue: Images won't load
**Solution:**
- Check file paths are correct
- Remove `placeholder-` from filenames
- Ensure images are in same folder or `images/` subfolder
- Check file names match exactly (case-sensitive)

### Issue: Layout looks broken
**Solution:**
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear cache
- Try different browser
- Check screen width (styles automatically adjust)

### Issue: Mobile menu doesn't work
**Solution:**
- Check JavaScript is enabled in browser
- Try different browser
- Check console for errors (F12)

### Issue: Colors look different
**Solution:**
- Different monitors display colors differently
- Use hex color codes for accuracy
- Test on multiple devices

---

## 📋 Pre-Launch Checklist

Before sharing/deploying:

**Content ✍️**
- [ ] All product names correct
- [ ] All prices correct (in JOD)
- [ ] WhatsApp number updated
- [ ] Email address correct
- [ ] Instagram handle correct
- [ ] No typos or spelling errors
- [ ] Contact information complete

**Images 📸**
- [ ] All 15+ images replaced with real photos
- [ ] Images are high quality and optimized
- [ ] No placeholder text visible
- [ ] Images display correctly on all devices
- [ ] Hero image is attractive
- [ ] Product images look appetizing
- [ ] Gallery shows variety

**Design 🎨**
- [ ] Colors match brand identity
- [ ] Fonts look professional
- [ ] Spacing looks balanced
- [ ] Mobile view is responsive
- [ ] No broken links
- [ ] Animations are smooth

**Functionality ⚙️**
- [ ] Navigation works
- [ ] Links to Instagram work
- [ ] WhatsApp button works
- [ ] Smooth scroll works
- [ ] Responsive on mobile/tablet/desktop
- [ ] No browser console errors
- [ ] All animations display

---

## 💡 Quick Tips

1. **Test Before Deploying**: Open on your phone/tablet first
2. **Image Optimization**: Compress images - pages load faster
3. **Keep Backup**: Save original copy before making changes
4. **Use Version Control**: Track changes if you modify later
5. **Update Regularly**: Refresh gallery images regularly
6. **Analytics**: Add Google Analytics for traffic insights (optional)
7. **Backup Images**: Keep high-res copies, use compressed web versions
8. **HTTPS**: Always use HTTPS for security (GitHub/Netlify do this automatically)

---

## 🆘 Need Help?

### Check These Files
1. **README.md** - Full documentation
2. **CUSTOMIZATION_GUIDE.md** - Detailed customization help
3. HTML comments in files - Look for `<!-- ... -->`

### Common Searches
- "How to optimize images for web"
- "How to change CSS colors"
- "How to deploy static website"
- "HTML file path tutorial"

---

## 🎉 You're Ready!

Once you've completed this checklist, your website is ready to share:
- Share the link with friends
- Post on Instagram
- Share with potential customers
- Respond to inquiries via WhatsApp

**Good luck with Cocanilla! 🍰💕**

Last Updated: March 2024
# ✅ Cocanilla Website - Setup Checklist

## 🚀 Getting Started (5 minutes)

### Step 1: View the Website
- [ ] Open `index.html` in your web browser
- [ ] Test on desktop and mobile
- [ ] Check all sections load properly

### Step 2: Update Critical Information
- [ ] Update WhatsApp number in `index.html` (line ~225)
- [ ] Update email in `index.html` (line ~230)  
- [ ] Verify Instagram handle is correct (currently @cocanillaa)

### Step 3: Organize Your Images
- [ ] Prepare 1 hero image
- [ ] Prepare 8 product images (5 cheesecakes + 2 other desserts + 1 extra)
- [ ] Prepare 6 gallery images
- [ ] **Total: 15+ images needed**

---

## 📸 Image Requirements

### File Types
- ✅ JPG, PNG, or WebP
- ❌ Avoid BMP, GIF (unless animated)

### Dimensions
| Image Type | Recommended Size | Aspect Ratio |
|-----------|------------------|--------------|
| Hero Image | 1200 x 800px | 3:2 |
| Product Cards | 400 x 400px | 1:1 (square) |
| Gallery Items | 600 x 600px | 1:1 (square) |

### File Size
- Aim for 100-300KB per image
- Use tools like:
  - TinyPNG.com
  - ImageOptim (Mac)
  - FileOptimizer (Windows)

### Tips
- Use natural lighting for better appeal
- Show products from multiple angles
- Keep consistent styling/background
- Ensure products look appetizing and fresh

---

## 🛠️ Installation Guide

### Quick Setup (No Install Needed!)
```
1. Download/save all files to a folder
2. Keep this structure:
   📁 cocanilla-website/
   ├── 📄 index.html
   ├── 📄 styles.css
   ├── 📄 script.js
   ├── 📁 images/
   │   ├── hero.jpg
   │   ├── product-1.jpg
   │   ├── product-2.jpg
   │   └── ... (all your images)
   └── 📄 README.md
3. Open index.html in browser
3. Done! 🎉
```

---

## 🖼️ Image Replacement Steps

### Method 1: Easy Search & Replace
1. Open `index.html` in a text editor
2. Find & Replace all:
   - `placeholder-hero.jpg` → `hero.jpg`
   - `placeholder-pecan-cheesecake.jpg` → `pecan-cheesecake.jpg`
   - etc.

### Method 2: Manual Editing
1. Locate each image line in `index.html`
2. Change the filename to your actual filename
3. Repeat for all 15+ images

### Method 3: Folder Structure
Create an `images/` folder and organize:
```
images/
├── hero.jpg
├── pecan-cheesecake.jpg
├── chocolate-cheesecake.jpg
├── pistachio-cheesecake.jpg
├── strawberry-cheesecake.jpg
├── blueberry-cheesecake.jpg
├── brownie.jpg
├── cookie-cake.jpg
├── gallery-1.jpg
├── gallery-2.jpg
├── gallery-3.jpg
├── gallery-4.jpg
├── gallery-5.jpg
└── gallery-6.jpg
```

Then update `index.html`:
```html
<!-- Change: -->
<img src="placeholder-hero.jpg">

<!-- To: -->
<img src="images/hero.jpg">
```

---

## ✏️ Content Customization

### Prices & Product Names
1. Open `index.html`
2. Search for "JOD" to find all prices
3. Update product names between `<h4>` tags
4. Update prices between `<p class="price">` tags

```html
<!-- Before: -->
<h4>Pecan Cheesecake</h4>
<p class="price">20 JOD</p>

<!-- After: -->
<h4>Premium Pecan Cheesecake</h4>
<p class="price">25 JOD</p>
```

### Hero Text
Update the main brand message (lines ~65-68):
```html
<h1 class="hero-title">Cocanilla</h1>
<p class="hero-subtitle">Homemade Desserts Made with Love</p>
<p class="hero-description">YOUR CUSTOM TEXT HERE</p>
```

### Section Descriptions
Update section headers (lines ~87, ~161, ~200, ~213):
```html
<p>YOUR CUSTOM TEXT</p>
```

---

## 🎨 Design Customization

### Change Brand Colors
Edit `styles.css` lines 6-20:
```css
--color-brown: #8B6F47;           /* Change this */
--color-dark-brown: #5C4A35;      /* And this */
```

Use online tools:
- ColorPicker.com
- Adobe Color Wheel
- Coolors.co

### Change Fonts
Edit `styles.css` lines 14-15:
```css
--font-family-main: 'Arial', sans-serif;
--font-family-accent: 'Times New Roman', serif;
```

Or use Google Fonts:
1. Add to `<head>` in index.html:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
```
2. Update CSS:
```css
--font-family-accent: 'Playfair Display', serif;
```

---

## 🚀 Deployment Options

### Option 1: GitHub Pages (FREE)
1. Create GitHub account
2. Create new repository (name it `cocanilla-website`)
3. Upload: index.html, styles.css, script.js, images/
4. Go to Settings → Pages → Enable
5. Your site will be at: `https://yourusername.github.io/cocanilla-website`

### Option 2: Netlify (FREE)
1. Go to netlify.com
2. Drag & drop your folder
3. Site generated automatically
4. Custom domain available

### Option 3: Vercel (FREE)
1. Go to vercel.com
2. Sign in with GitHub
3. Import repository
4. Deploy!
5. Site goes live instantly

### Option 4: Any Web Hosting
- Bluehost, GoDaddy, HostGator, etc.
- Upload via FTP
- Point domain to hosting

---

## 📱 Testing Checklist

### Desktop (1920px+)
- [ ] Hero section displays properly
- [ ] Product grid shows 3-4 columns
- [ ] Gallery displays 3 images per row
- [ ] Navigation bar works
- [ ] Hover effects work smoothly

### Tablet (768-1024px)
- [ ] Layout stacks appropriately
- [ ] Product grid shows 2-3 columns
- [ ] Hero title still readable
- [ ] Images load properly

### Mobile (320-767px)
- [ ] Hamburger menu appears
- [ ] Menu opens/closes smoothly
- [ ] Product grid shows 1 column
- [ ] Gallery shows 1 column
- [ ] Text is readable
- [ ] Buttons are easy to tap

### Browsers
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iPhone)
- [ ] Chrome Mobile (Android)

---

## 🔧 Common Issues & Solutions

### Issue: Images won't load
**Solution:**
- Check file paths are correct
- Remove `placeholder-` from filenames
- Ensure images are in same folder or `images/` subfolder
- Check file names match exactly (case-sensitive)

### Issue: Layout looks broken
**Solution:**
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear cache
- Try different browser
- Check screen width (styles automatically adjust)

### Issue: Mobile menu doesn't work
**Solution:**
- Check JavaScript is enabled in browser
- Try different browser
- Check console for errors (F12)

### Issue: Colors look different
**Solution:**
- Different monitors display colors differently
- Use hex color codes for accuracy
- Test on multiple devices

---

## 📋 Pre-Launch Checklist

Before sharing/deploying:

**Content ✍️**
- [ ] All product names correct
- [ ] All prices correct (in JOD)
- [ ] WhatsApp number updated
- [ ] Email address correct
- [ ] Instagram handle correct
- [ ] No typos or spelling errors
- [ ] Contact information complete

**Images 📸**
- [ ] All 15+ images replaced with real photos
- [ ] Images are high quality and optimized
- [ ] No placeholder text visible
- [ ] Images display correctly on all devices
- [ ] Hero image is attractive
- [ ] Product images look appetizing
- [ ] Gallery shows variety

**Design 🎨**
- [ ] Colors match brand identity
- [ ] Fonts look professional
- [ ] Spacing looks balanced
- [ ] Mobile view is responsive
- [ ] No broken links
- [ ] Animations are smooth

**Functionality ⚙️**
- [ ] Navigation works
- [ ] Links to Instagram work
- [ ] WhatsApp button works
- [ ] Smooth scroll works
- [ ] Responsive on mobile/tablet/desktop
- [ ] No browser console errors
- [ ] All animations display

---

## 💡 Quick Tips

1. **Test Before Deploying**: Open on your phone/tablet first
2. **Image Optimization**: Compress images - pages load faster
3. **Keep Backup**: Save original copy before making changes
4. **Use Version Control**: Track changes if you modify later
5. **Update Regularly**: Refresh gallery images regularly
6. **Analytics**: Add Google Analytics for traffic insights (optional)
7. **Backup Images**: Keep high-res copies, use compressed web versions
8. **HTTPS**: Always use HTTPS for security (GitHub/Netlify do this automatically)

---

## 🆘 Need Help?

### Check These Files
1. **README.md** - Full documentation
2. **CUSTOMIZATION_GUIDE.md** - Detailed customization help
3. HTML comments in files - Look for `<!-- ... -->`

### Common Searches
- "How to optimize images for web"
- "How to change CSS colors"
- "How to deploy static website"
- "HTML file path tutorial"

---

## 🎉 You're Ready!

Once you've completed this checklist, your website is ready to share:
- Share the link with friends
- Post on Instagram
- Share with potential customers
- Respond to inquiries via WhatsApp

**Good luck with Cocanilla! 🍰💕**

Last Updated: March 2024
