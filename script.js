// ======================================
// USTAWI WEBSITE JAVASCRIPT
// ======================================

// Wait until the page loads
document.addEventListener("DOMContentLoaded", function () {

    // ===========================
    // Smooth Scrolling
    // ===========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            // Close mobile menu after clicking
            if (document.querySelector(".nav-links")) {
                document.querySelector(".nav-links").classList.remove("active");
            }

        });
    });

    // ===========================
    // Mobile Navigation
    // ===========================
    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // ===========================
    // Sticky Navigation Shadow
    // ===========================
    const navbar = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }

    });

    // ===========================
    // Back To Top Button
    // ===========================
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    // ===========================
    // Reveal Elements on Scroll
    // ===========================
    const revealElements = document.querySelectorAll(".reveal");

    function revealOnScroll() {

        const trigger = window.innerHeight * 0.85;

        revealElements.forEach(element => {

            const top = element.getBoundingClientRect().top;

            if (top < trigger) {
                element.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

    // ===========================
    // Active Navigation Highlight
    // ===========================
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    });

    // ===========================
    // Animated Counters
    // ===========================
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        counter.innerText = "0";

        const updateCounter = () => {

            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;

            const increment = target / 100;

            if (current < target) {

                counter.innerText = `${Math.ceil(current + increment)}`;

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

    // ===========================
    // Contact Form
    // ===========================
    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert(
                "Thank you for contacting USTAWI! We have received your message and will get back to you shortly."
            );

            form.reset();

        });

    }

});

// ======================================
// End of Script
// ======================================
