document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show");
        menuBtn.textContent = navLinks.classList.contains("show") ? "✖" : "☰";
    });
});