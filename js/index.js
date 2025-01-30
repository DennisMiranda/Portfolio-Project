//Create burger menu
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".burger");
  const menuOptions = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    menuOptions.classList.toggle("active");
  });

  //  Close burger menu
  document.addEventListener("click", (event) => {
    console.log(event);
    if (!event.target.closest(".burger")) {
      menuOptions.classList.remove("active");
    }
  });
});
