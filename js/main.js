const swiper = new Swiper('.swiper', {
  // Optional parameters
    loop: true,

   // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
//   Можно установить различные эффекты для прокрутки картинок
  effect: "coverflow",
});