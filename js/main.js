const swiper = new Swiper('.swiper', {
  // Optional parameters
    loop: true,
   // Управление кнопками на слайде через клик мыши
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
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