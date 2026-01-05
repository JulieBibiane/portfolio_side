// Få hero til at fade ud, når man scroller
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const heroHeight = hero.offsetHeight;

  // opacity går fra 1 til 0 når vi scroller
  hero.style.opacity = 1 - scrollY / heroHeight;
});
