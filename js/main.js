const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
    loop: true,
   // Управление кнопками на слайде через клик мыши
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  // Подключение клавиатуры
  keyboard: {
        enabled: true,
      },
  
//   Можно установить различные эффекты для прокрутки картинок
  // effect: "cards",
  // rotate: "true",
  // perSlideOffset: "15",
  // perSlideRotate: "9",
  
});
const reviewsSlider = new Swiper('.reviews-slider', {
      loop: true,
   // Управление кнопками на слайде через клик мыши
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  });
  // Подключение эффект-параллакса через js
  // $('.newsletter').parallax({imageSrc: '../img/newsletter-bg.jpeg'});