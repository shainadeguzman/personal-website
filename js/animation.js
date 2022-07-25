const header = document.querySelector(".header");
const heroText = document.querySelector(".hero__text");
const cyanImage = document.getElementById("cyan");
const pinkImage = document.getElementById("pink");
const purpleImage = document.getElementById("purple");
const redImage = document.getElementById("red");
const sectionsTitle = document.querySelectorAll(".section-title");
const aboutSkills = document.querySelector(".about__skills");
const aboutText = document.querySelector(".about__text");
const projectColumnLeft = document.querySelectorAll(
  ".projects__is-column-left"
);
const projectColumnRight = document.querySelectorAll(
  ".projects__is-column-right"
);
const project2Boxes = document.querySelectorAll(".projects-2__box");
const contactInfo = document.querySelector(".contact__info-content");
const contactFormm = document.querySelector(".contact__form-content");

// HEADER ANIMATION
window.addEventListener("load", function () {
  header.classList.add("reveal");
});

header.addEventListener("transitionend", function () {
  heroText.classList.add("reveal");
});

heroText.addEventListener("transitionend", function () {
  cyanImage.classList.add("reveal");
});

cyanImage.addEventListener("transitionend", function () {
  pinkImage.classList.add("reveal");
});

pinkImage.addEventListener("transitionend", function () {
  purpleImage.classList.add("reveal");
});

purpleImage.addEventListener("transitionend", function () {
  redImage.classList.add("reveal");
});

// INTERSECTION OBSERVER API
const createNewObserver = function (element, callback, options) {
  let observer = new IntersectionObserver(callback, options);
  observer.observe(element);
};
const options = {
  root: null,
  threshold: 0.1,
};

const revealItem = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.add("reveal");
  observer.unobserve(entry.target);
};

sectionsTitle.forEach((sectionTitle) => {
  createNewObserver(sectionTitle, revealItem, options);
});
createNewObserver(aboutSkills, revealItem, options);
createNewObserver(aboutText, revealItem, options);
projectColumnLeft.forEach((columnLeft) => {
  createNewObserver(columnLeft, revealItem, options);
});
projectColumnRight.forEach((columnRight) => {
  createNewObserver(columnRight, revealItem, options);
});
project2Boxes.forEach((project2Box) => {
  createNewObserver(project2Box, revealItem, options);
});

createNewObserver(contactInfo, revealItem, options);
createNewObserver(contactFormm, revealItem, options);
