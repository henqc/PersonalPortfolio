const navLinkEls = document.querySelectorAll<HTMLAnchorElement>(".nav_link");
const sectionEls = document.querySelectorAll<HTMLElement>(".section");

let currentSection = "home";
window.addEventListener("scroll", () => {
  sectionEls.forEach((sectionEl) => {
    if (window.scrollY >= sectionEl.offsetTop) {
      currentSection = sectionEl.id;
    }
  });
  navLinkEls.forEach((navLinkEl) => {
    if (navLinkEl.href.includes(currentSection)) {
      navLinkEl.classList.add("active");
    }
  });
});
