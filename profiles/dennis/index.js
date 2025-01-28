//Código para el boton tipo hamburguesa en disposivos móviles
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".burger");
  const menuOptions = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    menuOptions.classList.toggle("active");
  });

  //  Cerrar el menú cuando se hace clic fuera del área del menú
  document.addEventListener("click", (event) => {
    console.log(event);
    if (!event.target.closest(".burger")) {
      menuOptions.classList.remove("active");
    }
  });
});

//animation h2
// Crear un Intersection Observer
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Cuando el elemento entra en el viewport
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.5, // La animación se activa cuando el 50% del elemento está visible
  }
);

// Observar todos los subtítulos (h2)
document.querySelectorAll("h1, h2").forEach((subtitle) => {
  observer.observe(subtitle);
});
