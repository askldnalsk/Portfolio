window.onload = () =>{
    let $htmlTag = document.querySelector('html');

    let $mbBt = document.querySelector('.mb-bt');
    // 모바일 버튼
    let $mbNav = document.querySelector('.mb-nav');
    // 모바일 네비
    let $gnbA = document.querySelectorAll('.gnb > li > a');
    // .gnb > li > a 
    let $mbBtSpan = $mbBt.querySelectorAll('span');
    //  모바일 버튼의 span 저장


     // 클릭 시 active 클래스를 추가
    $mbBt.addEventListener('click',() =>{
      $htmlTag.classList.toggle('active'); 
      $mbBt.classList.toggle('active');
      $mbNav.classList.toggle('active');
      $mbBtSpan.forEach(item => {
        item.classList.toggle('active', $mbBt.classList.contains('active'));
    });
    })
    
    // 화면 리사이징 처리
    window.addEventListener('resize',()=>{ 
      // window 화면 안쪽 너비 체크
      let width = window.innerWidth;
      if(width > 1080){
        $htmlTag.classList.remove('active');
        $mbBt.classList.remove('active');
        $mbNav.classList.remove('active');
        $mbBtSpan.forEach(item =>{ 
          item.classList.remove("active");
      })
      }
    })
    
    // 화면 reload 시 처리
    let scT = window.document.documentElement.scrollTop;
    if (scT > 100) {
        $gnbA.forEach(item => {
            item.classList.add('active');
        });
        $mbBtSpan.forEach(item => {
            item.classList.add('active');
        });
    }
    
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