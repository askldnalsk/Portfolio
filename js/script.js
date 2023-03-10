window.onload = () =>{

    var swiper = new Swiper(".mySwiper", {
      effect: "flip",
      grabCursor: true,
      loop: true,
      speed: 2000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


}