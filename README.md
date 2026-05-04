# artesanas-confectionery-sweet-shop
artesanas-confectionery-sweet-shop
# 🍬 Artesanas - Official Progressive Web App (PWA)

> High-performance, zero-framework Progressive Web App (PWA) for an artisanal confectionery in Caraguatatuba, SP, Brazil.

**Live URL:** [https://artesanasdoces.com.br/](https://artesanasdoces.com.br/)[cite: 6]

## 📋 About the Project

This repository contains the source code for "Artesanas," a digital menu and ordering platform specializing in gourmet ice pops (_geladinhos_), stuffed brownies, jarred pies, and savory snacks[cite: 6]. Built entirely without front-end frameworks, the application prioritizes blazing-fast load times, strict semantic SEO, and native-like mobile engagement. Orders are routed directly to the business via a WhatsApp integration[cite: 6].

### ⚡ Progressive Web App (PWA) Features

The site has been upgraded to a fully functional PWA to maximize user retention and performance:

- **Installability:** Users can install the application directly to their mobile home screens using the integrated "Install App" button discretely located in the footer[cite: 6].
- **Service Worker Integration:** The application registers a Service Worker (`sw.js`) upon loading to manage caching and offline capabilities[cite: 6].
- **Native App Feel:** The interface is linked to a `manifest.json` file and utilizes a custom `#2d1b18` theme color to match the system status bar to the brand's identity[cite: 6].

### ✨ Technical Highlights & SEO

- **Zero-Framework Architecture:** Developed using vanilla HTML5, CSS3, and JavaScript, eliminating framework overhead and ensuring optimal Core Web Vitals.
- **Strict Semantic HTML:** Proper usage of structural tags and mathematical heading hierarchy to ensure web crawlers can accurately parse the content.
- **Advanced Structured Data:** Injects `JSON-LD` Schema markup mapping the site as a `FoodEstablishment` and `LocalBusiness`, enabling Google Rich Snippets for localized searches in Caraguatatuba[cite: 6].
- **Canonical & Open Graph Optimization:** Full implementation of `rel="canonical"` to prevent duplicate content, alongside comprehensive Open Graph and Twitter Card meta tags for enriched social sharing previews[cite: 6].
- **Glassmorphism UI:** Modern UI design utilizing CSS backdrop filters and transparent navigations integrated with video backgrounds[cite: 6].

## 📁 Project Structure

To maintain PWA functionality and SEO integrity, the following directory structure must be strictly preserved:

```text
/
├── index.html          # Main HTML structure, PWA logic, and JSON-LD schema
├── style.css           # Global stylesheets (CSS Variables, Grid, Flexbox)
├── script.js           # UI logic (Mobile menu, navbar scroll effect, video slider)
├── manifest.json       # Web App Manifest defining PWA installation parameters
├── sw.js               # Service Worker for cache-first asset delivery
├── robots.txt          # Web crawler directives
├── sitemap.xml         # XML Sitemap for Search Engine indexing
├── image/              # Directory containing icons and optimized product photography
└── video/              # Directory containing background and slider MP4 files

🚀 Deployment Instructions
Deploy the entire root directory to a static hosting provider (e.g., Netlify, Vercel, or GitHub Pages).

Ensure the hosting environment enforces HTTPS, as Service Workers will only register over secure connections.

Verify the DNS records point correctly to the host so the canonical tags matching https://artesanasdoces.com.br/ remain perfectly aligned[cite: 6].

Engineered for maximum SEO and performance. Developed by Leo Ramos.
```
