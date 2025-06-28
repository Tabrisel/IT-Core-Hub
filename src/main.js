import "./style.css";

const yearSpan = document.getElementById("current-year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

document.addEventListener("DOMContentLoaded", function () {
  if (typeof Swiper !== "undefined") {
    const swiperRight = new Swiper(".skills-swiper-right", {
      slidesPerView: 2,
      spaceBetween: 10,
      speed: 5000,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 0,
        enabled: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 3.5,
          spaceBetween: 15,
        },
        650: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1900: {
          slidesPerView: 4.5,
          spaceBetween: 25,
        },
      },
    });

    const swiperLeft = new Swiper(".skills-swiper-left", {
      slidesPerView: 2,
      spaceBetween: 10,
      speed: 4000,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 0,
        enabled: true,
        reverseDirection: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 3.5,
          spaceBetween: 15,
        },
        650: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1900: {
          slidesPerView: 4.5,
          spaceBetween: 25,
        },
      },
    });
  }
});

// // Бургер-меню
// document.addEventListener("DOMContentLoaded", function () {
//   const burger = document.querySelector(".burger");
//   const nav = document.querySelector(".nav__list");

//   if (burger && nav) {
//     burger.addEventListener("click", function () {
//       burger.classList.toggle("active");
//       nav.classList.toggle("active");
//     });

//     // Закрытие меню при клике на ссылку
//     const navLinks = nav.querySelectorAll("a");
//     navLinks.forEach((link) => {
//       link.addEventListener("click", () => {
//         burger.classList.remove("active");
//         nav.classList.remove("active");
//       });
//     });

//     // Закрытие меню при клике вне его
//     document.addEventListener("click", function (e) {
//       if (!burger.contains(e.target) && !nav.contains(e.target)) {
//         burger.classList.remove("active");
//         nav.classList.remove("active");
//       }
//     });
//   }
// });
