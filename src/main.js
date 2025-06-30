import "./style.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const yearSpan = document.getElementById("current-year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".question-header");

  faqQuestions.forEach((header) => {
    header.addEventListener("click", function () {
      const questionCard = this.parentElement;
      const answer = questionCard.querySelector(".answer");
      const arrow = this.querySelector(".arrow");

      faqQuestions.forEach((otherHeader) => {
        if (otherHeader !== header) {
          const otherAnswer =
            otherHeader.parentElement.querySelector(".answer");
          const otherArrow = otherHeader.querySelector(".arrow");
          otherAnswer.classList.remove("open");
          otherArrow.classList.remove("rotated");
        }
      });

      answer.classList.toggle("open");
      arrow.classList.toggle("rotated");
    });
  });

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

    const teamSwiper = new Swiper(".swiper.team", {
      speed: 700,
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 12,
      loop: true,
      loopedSlidesLimit: null,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      allowTouchMove: false,
      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1900: {
          slidesPerView: 5,
        },
      },
    });
  }
});

// Бургер-меню
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav__list");
const closeMenuBtn = document.querySelector(".close-menu");
const closeBtn = document.querySelector(".close-btn");
const menuCloseBtn = document.querySelector(".menu-close-btn");
const headerBox = document.querySelector(".header-box");

if (burger && nav) {
  burger.addEventListener("click", function () {
    const isActive = burger.classList.contains("active");

    burger.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("menu-open");

    // Предотвращаем скролл страницы когда меню открыто
    if (!isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  // Функция закрытия меню
  function closeMenu() {
    burger.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove("menu-open");
    document.body.style.overflow = "";
  }

  // Закрытие меню по кнопке закрытия
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", closeMenu);
  }

  // Закрытие меню по круглому крестику
  if (closeBtn) {
    closeBtn.addEventListener("click", closeMenu);
  }

  // Закрытие меню по кнопке внутри меню
  if (menuCloseBtn) {
    menuCloseBtn.addEventListener("click", closeMenu);
  }

  // Закрытие меню при клике на ссылку навигации
  const navLinks = nav.querySelectorAll("a:not(.social-link)");
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Закрытие меню при клике вне его
  document.addEventListener("click", function (e) {
    if (!headerBox?.contains(e.target) && !nav.contains(e.target)) {
      closeMenu();
    }
  });

  // Закрытие меню при нажатии Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("active")) {
      closeMenu();
    }
  });
}
