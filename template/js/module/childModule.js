export default function childModule() {
  const slider = document.querySelectorAll(".hu-br-one .swiper-slide");
  const sliderLength = slider.length;
  var swiperOne = new Swiper(".hu-br-one .swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    initialSlide: sliderLength / 2,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      401: {
        slidesPerView: 2.5,
        spaceBetween: 16,
      },
      600: {
        slidesPerView: 3.5,
        spaceBetween: 24,
      },
      800: {
        slidesPerView: 4.8,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 6.8,
        spaceBetween: 30,
      },
    },
  });
  var swiperTwo = new Swiper(".hu-br-two .swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    initialSlide: sliderLength / 2,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      401: {
        slidesPerView: 2.5,
        spaceBetween: 16,
      },
      600: {
        slidesPerView: 3.5,
        spaceBetween: 24,
      },
      800: {
        slidesPerView: 4.8,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 6.8,
        spaceBetween: 30,
      },
    },
  });

  // // control
  // swiperOne.controller.control = swiperTwo
  // swiperTwo.controller.control = swiperOne

  const slisl = document.querySelectorAll(".hu-sl-slider .swiper-slide");
  var swiperSl = new Swiper(".hu-sl-slider .swiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    centeredSlides: true,
    initialSlide: slisl.length / 2,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      401: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 200,
      },
    },
  });
}
