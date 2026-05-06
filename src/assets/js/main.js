document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  // Abrir/Cerrar menú al hacer clic en la hamburguesa
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("is-active");
    // Cambiar icono de hamburguesa a "X" (Opcional UX)
    const icon = navToggle.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });

  // Cerrar menú automáticamente cuando se hace clic en un enlace
  document.querySelectorAll(".nav_link, .nav_mobile_only .btn").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-active");
      const icon = navToggle.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    });
  });
});