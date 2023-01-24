// SELECTORS
const hamburgerButton = document.querySelector(".header__button");
const mobileNavigation = document.querySelector(".mobile__nav");
const mobileNavigationLinks = document.querySelectorAll(".mobile__nav-links");
const overlay = document.querySelector(".overlay");
const sections = document.querySelectorAll(".section");
const headerNavigationLinks = document.querySelectorAll(".header__link");
const contactForm = document.querySelector(".contact__form");
const contactUserName = document.querySelector(".contact__name");
const contactUserEmail = document.querySelector(".contact__email");
const contactUserMessage = document.querySelector(".contact__message");
const contactNameError = document.querySelector(".name__error");
const contactEmailError = document.querySelector(".email__error");
const contactMessageError = document.querySelector(".message__error");
const tabItems = document.querySelectorAll(".tab-item");

// FUNCTIONS
const openNavigation = function () {
  hamburgerButton.classList.add("active");
  mobileNavigation.classList.add("open");
  overlay.classList.remove("hidden");
  hamburgerIsActive = true;
};

const closeNavigation = function () {
  hamburgerButton.classList.remove("active");
  mobileNavigation.classList.remove("open");
  overlay.classList.add("hidden");
  hamburgerIsActive = false;
};

const openModal = function () {
  modal.classList.toggle("open");
  modalContainer.classList.toggle("open");
};

const closeModal = function () {
  modal.classList.remove("open");
  modalContainer.classList.remove("open");
};

const formError = function (errorElement) {
  errorElement.textContent = "Required Field!";
  errorElement.classList.add("show");
  setTimeout(() => {
    errorElement.classList.remove("show");
  }, 3000);
};

// EVENT LISTENERS
let hamburgerIsActive = false;
hamburgerButton.addEventListener("click", function () {
  if (!hamburgerIsActive) {
    openNavigation();
    tabItems.forEach((item) => (item.tabIndex = "-1"));
  } else {
    closeNavigation();
    tabItems.forEach((item) => (item.tabIndex = ""));
  }
});

mobileNavigationLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    if (!hamburgerIsActive) {
      openNavigation();
    } else {
      closeNavigation();
      tabItems.forEach((item) => (item.tabIndex = ""));
    }
  });
});

window.addEventListener("resize", function () {
  const vw = Math.max(document.documentElement.clientWidth);
  if (vw >= 769) {
    closeNavigation();
    tabItems.forEach((item) => (item.tabIndex = ""));
  } else {
    hamburgerIsActive = false;
  }
});

overlay.addEventListener("click", function () {
  if (hamburgerButton.classList.contains("active")) {
    closeNavigation();
    tabItems.forEach((item) => (item.tabIndex = ""));
  }
});

window.addEventListener("scroll", function () {
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop - 300) {
      currentSection = section.getAttribute("id");
    }
  });
  headerNavigationLinks.forEach((headerLink) => {
    headerLink.classList.remove("active");
    if (headerLink.classList.contains(`${currentSection}`)) {
      headerLink.classList.add("active");
    }
  });

  mobileNavigationLinks.forEach((mobileNavLink) => {
    mobileNavLink.classList.remove("active");
    if (mobileNavLink.classList.contains(`${currentSection}`)) {
      mobileNavLink.classList.add("active");
    }
  });
});

contactForm.addEventListener("submit", function (e) {
  if (contactUserName.value === "" || contactUserName.value == null) {
    formError(contactNameError);
    e.preventDefault();
  } else if (contactUserEmail.value === "" || contactUserEmail.value == null) {
    formError(contactEmailError);
    e.preventDefault();
  } else if (
    contactUserMessage.value === "" ||
    contactUserMessage.value == null
  ) {
    formError(contactMessageError);
    e.preventDefault();
  }
});
