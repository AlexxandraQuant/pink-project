var menu = document.querySelector('.main-nav');
var menuHeader = document.querySelector('.main-nav__header');
var menuWrapper = document.querySelector('.main-nav__wrapper');
var menuButton = document.querySelector('.main-nav__toggle');
var menuBurger = menuButton.querySelector('.main-nav__toggle-burger');
var menuCross = menuButton.querySelector('.main-nav__toggle-cross');


document.addEventListener("DOMContentLoaded", function(ready) {
  menu.classList.remove('main-nav--nojs');
  menuWrapper.classList.remove('main-nav__wrapper--nojs');
  console.log('Удален класс для работы без js 2');
});

menuButton.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.toggle('main-nav--opened');
  menuHeader.classList.toggle('main-nav__header--underline');
  menuWrapper.classList.toggle('main-nav__wrapper--opened');
  console.log('Открылась менюха');

  menuBurger.classList.toggle('main-nav__toggle-burger--active');
  menuCross.classList.toggle('main-nav__toggle-cross--active');
  // if (menuBurger.classList.contains('main-nav__toggle-burger--active')) {
  //   menuBurger.classList.remove('main-nav__toggle-burger--active');
  //   menuCross.classList.add('main-nav__toggle-cross--active');
  // }

  // if (menuCross.classList.contains('main-nav__toggle-cross--active')) {
  //   menuCross.classList.remove('main-nav__toggle-cross--active');
  // }
});







// function ready() {
//   menu.
// }

