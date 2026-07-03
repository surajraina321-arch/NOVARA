// Smooth Reveal Animation

const revealElements = document.querySelectorAll(
  ".service-card, .project-card, .why-card, .testimonial-card, .cta-box"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });
}, {
  threshold: 0.15
});

revealElements.forEach((element) => {
  observer.observe(element);
});
window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.background = "rgba(18,18,25,.85)";
        nav.style.backdropFilter = "blur(20px)";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        nav.style.background = "rgba(255,255,255,.05)";
        nav.style.backdropFilter = "blur(15px)";
        nav.style.boxShadow = "none";

    }

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
});
