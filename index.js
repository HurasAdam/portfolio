const navbar = document.querySelector("nav");
const navigationLinks = document.querySelectorAll(".link");
const lettersWrapper = document.querySelectorAll(".home__content-static-letter");


function stickMenu() {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
}

window.addEventListener("scroll", stickMenu);

navigationLinks.forEach((el) => {
  el.addEventListener("click", (e) => {
    const key = e.target.dataset.key;
    console.log(key);
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
 
  
const arrayOfLetters=[...lettersWrapper]
  


arrayOfLetters[i].classList.add("active");
  
arrayOfLetters[i].style.transitionDelay = `${0.12*i}s`;
arrayOfLetters[i].style.transitionDuration = `${i*.1}s`;

  }


});


