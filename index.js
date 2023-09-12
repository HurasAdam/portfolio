const navbar = document.querySelector("nav");
const navigationLinks = document.querySelectorAll(".link");
const mobileNavigationLinks= document.querySelectorAll(".mobileLink");
const combinedNavigationLinks = document.querySelectorAll(".link, .mobileLink")

const lettersWrapper = document.querySelectorAll(
  ".home__content-static-letter"
);
const thumbnails = document.querySelectorAll(".thumbnail img");
const popup = document.querySelector(".popup");
const popup__close = document.querySelector(".popup__close");
const popup__image = document.querySelector(".popup img")
const burgerButton= document.querySelector(".burger");
const mobileNavigation = document.querySelector(".navigation-mobile");

function stickMenu() {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
}

window.addEventListener("scroll", stickMenu);


combinedNavigationLinks.forEach((el) => {
  el.addEventListener("click", (e) => {
    const key = e.target.dataset.key;
    console.log(key);
    mobileNavigation.classList.toggle("active")

    const section =
      document.querySelector(`.${key}`).getBoundingClientRect().top +
      window.pageYOffset -
      50;
    if (key === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: section, behavior: "smooth" });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < lettersWrapper.length; i++) {
    const arrayOfLetters = [...lettersWrapper];

    arrayOfLetters[i].classList.add("active");

    arrayOfLetters[i].style.transitionDelay = `${0.12 * i}s`;
    arrayOfLetters[i].style.transitionDuration = `${i * 0.1}s`;
  }
});

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", (e) => {
    popup.classList.remove("hidden");
    popup__image.src= e.target.src
  });
});

popup__close.addEventListener("click", () => {
  popup.classList.add("hidden");
});

burgerButton.addEventListener("click",()=>{
  mobileNavigation.classList.toggle("active");
  burgerButton.classList.toggle("active");
})