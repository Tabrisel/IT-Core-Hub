import "./style.css";

const yearSpan = document.getElementById("current-year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

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
