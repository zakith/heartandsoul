# Heart & Soul Restaurant Website

A modern, engaging website redesign for Heart & Soul Restaurant in Pueblo, Colorado - featuring authentic soul food with a warm, inviting design.

## Table of contents
- [About](#about)
- [Design Overview](#design-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Run locally](#run-locally)
- [Pages](#pages)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contact](#contact)

## About

This is a complete website redesign for Heart & Soul, a soul food restaurant in Pueblo, Colorado. The design focuses on creating a warm, inviting, and engaging user experience while maintaining the restaurant's authentic character.

**Purpose:** Create a modern, mobile-responsive website that showcases the restaurant's menu, atmosphere, and story while making it easy for customers to find information and get in touch.

## Design Overview

### Color Palette
The design uses warm, inviting colors that reflect the "Heart & Soul" brand:
- **Primary Red:** #8B2635 (Deep burgundy for headers and accents)
- **Secondary Burgundy:** #5C1A28 (Rich, darker tones)
- **Accent Gold:** #D4AF37 (Warm gold for highlights)
- **Warm Orange:** #E07A5F (Energetic accent color)
- **Cream/Light Backgrounds:** #F4F1DE, #FAF8F3

### Typography
- **Headings:** Playfair Display (elegant serif font)
- **Body Text:** Open Sans (clean, readable sans-serif)

### Design Principles
- Clean, modern layouts with ample white space
- Mobile-first responsive design
- Smooth animations and transitions
- Engaging hover effects
- Accessibility-focused navigation

## Features

- **Responsive Design** — Fully mobile-responsive across all devices
- **Hero Section** — Eye-catching homepage with call-to-action buttons
- **Interactive Menu** — Well-organized menu with categories and pricing
- **Photo Gallery** — Grid-based gallery with hover overlays
- **Contact Form** — Easy-to-use contact form with validation
- **Smooth Animations** — Fade-in effects and smooth scrolling
- **Mobile Navigation** — Hamburger menu for mobile devices
- **SEO Optimized** — Semantic HTML and proper meta tags

## Tech Stack

This is a static website built with:
- **HTML5** — Semantic markup
- **CSS3** — Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** — No dependencies, pure JS for interactions
- **Google Fonts** — Playfair Display & Open Sans

## Getting started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)
- Git (for cloning the repository)

### Installation

Clone the repository:
```bash
git clone https://github.com/zakith/heartandsoul.git
cd heartandsoul
```

### Run locally

Since this is a static website, you can open the files directly in your browser or use a local web server:

**Option 1: Direct File Access**
```bash
# Simply open index.html in your browser
open index.html  # macOS
# or
start index.html  # Windows
```

**Option 2: Python HTTP Server**
```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

**Option 3: Node.js HTTP Server**
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server

# Then visit: http://localhost:8080
```

## Pages

The website includes four main pages:

1. **Home (`index.html`)** — Landing page with hero section, about section, featured dishes, and why choose us
2. **Menu (`menu.html`)** — Complete menu with main dishes, sides, desserts, and beverages
3. **Gallery (`gallery.html`)** — Photo gallery showcasing food and restaurant atmosphere
4. **Contact (`contact.html`)** — Contact form, location info, hours, and FAQ section

## Customization

### Adding Images

Replace the gradient placeholders with actual images:
1. Add your images to the `images/` folder
2. Update the background-image URLs in the HTML or CSS
3. For the hero section, use: `images/hero-bg.jpg`
4. For gallery items, update the `.gallery-image` divs

### Updating Content

- **Restaurant Info:** Edit contact information in all page footers
- **Menu Items:** Modify items in `menu.html`
- **Hours:** Update hours in footer sections
- **Colors:** Adjust CSS variables in `css/styles.css` (`:root` section)

### Contact Form Integration

The contact form currently logs submissions to the console. To connect to a backend:
1. Uncomment the fetch code in `js/script.js`
2. Update the endpoint URL to your API
3. Configure your backend to handle form submissions

## Deployment

### GitHub Pages
```bash
# Push to GitHub
git push origin main

# Enable GitHub Pages in repository settings
# Set source to main branch
```

### Netlify
1. Connect your GitHub repository to Netlify
2. Deploy automatically on push
3. Custom domain setup available

### Traditional Hosting
1. Upload all files to your web server
2. Ensure directory structure is maintained
3. Point domain to `index.html`

## Roadmap

Planned enhancements:
- **Image Integration** — Add real food photography
- **Online Ordering** — Integrate with food delivery platforms
- **Reservation System** — Add table booking functionality
- **Blog Section** — Share recipes and restaurant news
- **Accessibility Improvements** — Enhanced ARIA labels and keyboard navigation

## Contact

**Heart & Soul Restaurant**
- Address: 123 Main Street, Pueblo, CO 81001
- Phone: (719) 555-SOUL
- Email: info@heartandsoulpueblo.com
- Website: https://www.heartandsoulpueblo.com

**Developer**
- GitHub: https://github.com/zakith
- Repository: https://github.com/zakith/heartandsoul

---

## Project Structure

```
heartandsoul/
├── index.html          # Home page
├── menu.html           # Menu page
├── gallery.html        # Gallery page
├── contact.html        # Contact page
├── css/
│   ├── styles.css      # Main stylesheet
│   ├── menu.css        # Menu page styles
│   ├── gallery.css     # Gallery page styles
│   └── contact.css     # Contact page styles
├── js/
│   └── script.js       # Main JavaScript
├── images/             # Image assets (placeholder)
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Note:** This website currently uses gradient placeholders for images. Replace these with actual restaurant photography for production use.
