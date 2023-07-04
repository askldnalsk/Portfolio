window.onload = () =>{

    let $mbBt = document.querySelector('.mb-bt');
    // 2. 모바일 메뉴를 찾아서 저장한다.
    let $mbNav = document.querySelector('.mb-nav');
    // 5. gnb > li > a
    let $gnbA = document.querySelectorAll('.gnb > li > a');
    // 6. 모바일 버튼의 span 저장
    let $mbBtSpan = $mbBt.querySelectorAll('span');

     // 클릭 시 active 클래스를 추가
    $mbBt.addEventListener('click',() =>{ 
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
      if(width > 1280){ 
        $mbBt.classList.remove('active');
        $mbNav.classList.remove('active');
        
      }
    })
    
    
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