// Få hero til at fade ud, når man scroller
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const heroHeight = hero.offsetHeight;

  // opacity går fra 1 til 0 når vi scroller
  hero.style.opacity = 1 - scrollY / heroHeight;
});

// fake form på kontakt siden, så det ligner at den sender

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Forhindrer reload

    form.reset(); // Tømmer felterne

    alert("Tak for din besked! Jeg vender tilbage hurtigst muligt.");
  });
}

// vis mere java til portfolio siden
const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const moreContent = btn.nextElementSibling;

    moreContent.style.display =
      moreContent.style.display === "block" ? "none" : "block";

    btn.textContent =
      moreContent.style.display === "block"
        ? "Skjul process og læring"
        : "Se process og læring";
  });
});
