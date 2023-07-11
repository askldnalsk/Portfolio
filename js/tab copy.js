window.onload = () => {
  let $htmlTag = document.querySelector('html');

    let $mbBt = document.querySelector('.mb-bt');
    // 모바일 버튼
    let $mbNav = document.querySelector('.mb-nav');
    // 모바일 네비
    let $gnbA = document.querySelectorAll('.gnb > li > a');
    // .gnb > li > a 
    let $mbBtSpan = $mbBt.querySelectorAll('span');
    //  모바일 버튼의 span 저장


     // 클릭 시 header-active 클래스를 추가
    $mbBt.addEventListener('click',() =>{
      $htmlTag.classList.toggle('header-active'); 
      $mbBt.classList.toggle('header-active');
      $mbNav.classList.toggle('header-active');
      $mbBtSpan.forEach(item => {
        item.classList.toggle('header-active', $mbBt.classList.contains('header-active'));
    });
    })
    
    // 화면 리사이징 처리
    window.addEventListener('resize',()=>{ 
      // window 화면 안쪽 너비 체크
      let width = window.innerWidth;
      if(width > 1080){
        $htmlTag.classList.remove('header-active');
        $mbBt.classList.remove('header-active');
        $mbNav.classList.remove('header-active');
        $mbBtSpan.forEach(item =>{ 
          item.classList.remove("header-active");
      })
      }
    })
    
    // 화면 reload 시 처리
    let scT = window.document.documentElement.scrollTop;
    if (scT > 100) {
        $gnbA.forEach(item => {
            item.classList.add('header-active');
        });
        $mbBtSpan.forEach(item => {
            item.classList.add('header-active');
        });
    }
    
  var $jq = jQuery.noConflict(); 
  $jq(function(){
  // site slider
  $jq('.slide-nav').on('click', function (e) {
      e.preventDefault();
      // get current slide
      let current = $jq('.flex--active').data('slide'),
        // get button data-slide
        next = $jq(this).data('slide');
        $jq('.slide-nav').removeClass('active');
        $jq(this).addClass('active');
      if (current === next) {
        return false;
      } else {
        $jq('.slider__wrapper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
        $jq('.flex--active').addClass('animate--end');
        setTimeout(function () {
          $jq('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
          $jq('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
        }, 800);
      }
  });
})
}

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
//   setTimeout(function () {

//     document.getElementById("cover").classList.add("cover-left");

// });



// function pageClick() {

//     document.querySelectorAll(".page_click").forEach((elem) => {

//       elem.addEventListener("click", (e) => {

//         e.preventDefault();

//         const dataName = elem.getAttribute('data-name');

//         console.log(dataName);

//         document.getElementById("cover").classList.add("cover-right");

//         setTimeout(() => {

//           window.location.href =

//             "http://leeboa.com/" + dataName + ".html";

//         }, 2000);

//       });

//     });

//   }

//   pageClick();



//   const $slide__nav = document.querySelectorAll(".slide-nav")
//   $slide__nav.forEach((item) => {
//     item.addEventListener("click", (e) => {
//       e.preventDefault();
//       let current = document.querySelector(".flex--active").getAttribute("data-slide");
//       console.log(current);
//       next = item.getAttribute("data-slide");
//       console.log(next);
//       e.target.classList.add("active");
//       if (current === next) {
//         return false;
//       } 
//       else {
//         let $slide__wrapper = document.querySelector(".slider__wrapper");
//         let container= document.querySelectorAll(".flex__container");
//         let $flex__active = document.querySelector(".flex--active");
//         $flex__active.classList.add("animate--end");

//         console.log(container);
//         container.forEach(item =>{ 
//           console.log(item);
//           if(item.classList.contains("flex__container[data-slide=" + next + "]")){ 
//             item.classList.add("flex--prestart");
//           }
//           })
//         }
//         setTimeout(function (){ 
//           let $active = document.querySelectorAll(".flex--preStart");
//           $active.forEach(item=>{ 
//           item.classList.remove("animate--start flex--preStart");
//           item.classList.add("flex--active");
//         })
//           let animate = document.querySelectorAll(".animite--end");
//           animate.forEach(item =>{
//           item.classList.add("animate--start")
//           item.classList.remove("animate--end flex--active")
//           // document.querySelector(".flex--preStart").classList.remove('animate--start flex--preStart').classList.add("flex--active");
//           // document.querySelector(".animate--end").classList.add("animate--start").classList.remove("animate--end flex--active");
//         })
//         },800);
        


        //   item.contains("flex__container[data-slide=" + next + "]").classList.add("flex--prestart");
        // })
        // $slide__wrapper.contains("flex__container[data-slide=" + next + "]").classList.add("flex--prestart");
        // document
        //   .getElementByClassName("slider__warpper")
        //   .find(".flex__container[data-slide=" + next + "]")
        //   .classList.add("flex--preStart");
        // document
        //   .getElementByClassName("flex--active")
        //   .classList.add("animate--end");
      //   setTimeout(function () {
      //     document
      //       .getElementByClassName("flex--preStart")
      //       .removeClass("animate--start flex--preStart")
      //       .classList.add("flex--active");
      //     document
      //       .getElementByClassName("animate--end")
      //       .classList.add("animate--start")
      //       .removeClass("animate--end flex--active");
      //   }, 800);
      // }
//       item.classList.remove("active");
//     }
//     );
//   }
//   );
// };
