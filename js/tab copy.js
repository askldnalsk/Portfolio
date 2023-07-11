window.onload = () => {
  //site slider
  // $('.slide-nav').on('click', function (e) {
  //     e.preventDefault();
  //     // get current slide
  //     let current = $('.flex--active').data('slide'),
  //       // get button data-slide
  //       next = $(this).data('slide');
  //     $('.slide-nav').removeClass('active');
  //     $(this).addClass('active');
  //     if (current === next) {
  //       return false;
  //     } else {
  //       $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
  //       $('.flex--active').addClass('animate--end');
  //       setTimeout(function () {
  //         $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
  //         $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
  //       }, 800);
  //     }

  // });

  // const $slide_nav = document.querySelector('.slide-nav');
  // $slide_nav.forEach(item => {
  //     item.addEventListener('click', e=>{
  //         e.preventDefault();
  //         let current = document.querySelector('.flex--active').data('slide'),
  //         next = $(this).data('slide');
  //         if(current === next){
  //             return false;
  //         }
  //         else{
  //             const $slide__Wrapper = document.querySelector('.slider__wrapper');
  //             $slide__Wrapper.find('.flex__container[data-slide=' + next + ']').addClass('flex--active');

  //         }
  //     })

  // });

  document.querySelectorAll(".slide-nav").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      let current = document.querySelector(".flex--active").getAttribute("data-slide");
      
      console.log(current);
      next = this.data("slide");
      document.querySelectorAll(".slide-nav").forEach((item) => {
        item.classList.remove("active");
        this.classList.add("active");
      });
      if (current2 === next) {
        return false;
      } else {
        document
          .getElementByClassName("slider__warpper")
          .find(".flex__container[data-slide=" + next + "]")
          .classList.add("flex--preStart");
        document
          .getElementByClassName("flex--active")
          .classList.add("animate--end");
        setTimeout(function () {
          document
            .getElementByClassName("flex--preStart")
            .removeClass("animate--start flex--preStart")
            .classList.add("flex--active");
          document
            .getElementByClassName("animate--end")
            .classList.add("animate--start")
            .removeClass("animate--end flex--active");
        }, 800);
      }
    });
  });
};
