"use strict";
const headerEl = document.querySelector(".header");
const mainNav = document.querySelector(".main-nav");
const btnNav = document.querySelector(".btn-mobile-nav");
const navLinks = document.querySelectorAll(".main-nav-link");
const sectionHeroEl = document.querySelector(".section-hero");

///////////////////////////////////////////////////////////
// Make mobile navigation work
btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  document.body.classList.toggle("overflow");
});

///////////////////////////////////////////////////////////
// Close nav when a nav-link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    headerEl.classList.remove("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation
const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    console.log(entry);

    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (entry.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(sectionHeroEl);
