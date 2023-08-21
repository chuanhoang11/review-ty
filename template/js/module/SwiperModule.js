export default function SwiperModule() {
  var vis_txt = new Swiper(".vis_txt .swiper", {
    speed: 800,
    loop: false,
    slidesPerView: "auto",
    mousewheel: true,
    centeredSlides: true,
    direction: "vertical",
    slideToClickedSlide: true,
    loopedSlides: 3,
    initialSlide: -3,
    pagination: {
      el: ".vis_num",
      clickable: true,
    },
    on: {
      slideChange: function () {
        var vis_num = $(".vis_num").children().length;
        var var_w = 100 / vis_num;
        var var_top = this.realIndex * var_w;
        $(".vis_scrollbar em").css("height", var_w + "%");
        $(".vis_scrollbar em").css("top", var_top + "%");
      },
      slideChangeTransitionEnd: function () {
        $(".copy_txt").css("display", "none");
        $(".txt_point").removeClass("move");
        if (
          $(".swiper-slide-active .mid").width() >
          $(window).width() * 0.9 -
          20 /* && $('.swiper-slide-duplicate-active .mid').width() > $(window).width() * 0.9 - 20*/
        ) {
          setTimeout(function () {
            $(".swiper-slide-active .copy_txt").css("display", "block");
            $(".swiper-slide-active .txt_point").addClass("move");
          }, 0);
        }
      },
    },
  });
  var vis_img = new Swiper(".vis_img .swiper", {
    speed: 1000,
    loop: false,
    slidesPerView: 1,
    mousewheel: true,
    centeredSlides: true,
    loopedSlides: 3,
    initialSlide: -3,
  });
  vis_txt.controller.control = vis_img;
  vis_img.controller.control = vis_txt;


  function functionSlider(element, customizeOption, typePagi) {
    const swiperSlider = document.querySelectorAll(element)
    if (swiperSlider) {
      swiperSlider.forEach(item => {
        const swiper = item.querySelector('.swiper')
        const pagi = item.querySelector('.swiper-pagination')
        const next = item.querySelector('.swiper-next')
        const prev = item.querySelector('.swiper-prev');
        if (!typePagi) {
          typePagi = 'bullets'
        }
        var slide = new Swiper(swiper, {
          watchSlidesProgress: true,
          pagination: {
            el: pagi,
            type: typePagi,
            clickable: true,
          },
          navigation: {
            nextEl: next,
            prevEl: prev,
          },
          fadeEffect: {
            crossFade: true
          },
          ...customizeOption,
        });
      })
    }
  }

  functionSlider('.dcv-slider', {
    speed: 1200,
    autoplay: false,
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: true,
    spaceBetween: 24,
    effect: "slide",
    slidesPerView: "auto",
    breakpoints: {
      0: {
        slidesPerView: "auto",
        freeMode: true,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: "auto",

      },
      1200: {
        slidesPerView: "auto",
      }
    },
  })
}
