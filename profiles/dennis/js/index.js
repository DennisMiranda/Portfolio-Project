//Burger menu
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".burger");
  const menuOptions = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    menuOptions.classList.toggle("active");
  });

  //  Close burger menu
  document.addEventListener("click", (event) => {
    //event.target=click, if click is not inside burger, then it closes
    if (!event.target.closest(".burger")) {
      menuOptions.classList.remove("active");
    }
  });
});

//Animation h1 h2
// Create an Intersection Observer
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // When element is on viewport
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

// Observe all subtitles (h1 and h2)
document.querySelectorAll("h1, h2").forEach((subtitle) => {
  observer.observe(subtitle);
});
