document.addEventListener("DOMContentLoaded", function() {
    // --- MENU MOBILE ---
    const menuBtn = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links a");

    // Abrir/Fechar menu ao clicar no botão
    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation(); 
        navLinks.classList.toggle("active");
        
        const icon = menuBtn.querySelector("i");
        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });

    // Fechar menu ao clicar em um link
    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            const icon = menuBtn.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        });
    });

    // Fechar menu ao clicar fora dele
    document.addEventListener("click", (e) => {
        if (!navLinks.contains(e.target) && !menuBtn.contains(e.target) && navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
            const icon = menuBtn.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });

    // --- EFEITO NA NAVBAR AO ROLAR ---
    const navbar = document.getElementById("navbar");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(252, 249, 242, 0.95)";
            navbar.style.boxShadow = "inset 2px 2px 4px rgba(255,255,255,0.8), inset -3px -3px 6px rgba(0,0,0,0.05), 6px 10px 20px rgba(62, 39, 35, 0.1)";
        } else {
            navbar.style.background = "rgba(252, 249, 242, 0.65)";
            navbar.style.boxShadow = "inset 2px 2px 4px rgba(255,255,255,0.8), inset -3px -3px 6px rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.05)";
        }
    });

    // --- SLIDESHOW DE VÍDEOS ---
    const slides = document.querySelectorAll('.slide-video');
    let currentSlide = 0;

    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 4000);
    }
});