//ScrollGiveClass 플러그인 호출
var sgc1 = new ScrollGiveClass("header",{
    baseline:100
});


//Swiper플러그인 호출
const swiper1 = new Swiper('#main_view', {
    // Optional parameters
    wrapperClass:'slider',     //클래스명 변경
    slideClass:'view',
    autoplay: {  //자동슬라이드
      delay: 5000,  //하나의 슬라이드가 보여주는 시간
    },
    speed:800,  //슬라이드가 전환되는(움직이는) 시간
    spaceBetween:10,  //슬라이드 사이 간격

    // If we need pagination
    pagination: {
      el: '.pager',  //버튼영역 생성
      bulletActiveClass: 'active',  //활성화된 요소에 추가되는 클래스
      clickable:true,  //클릭 시 슬라이드 이동
    },
  });


  //press영역 스와이퍼 호출
  let swiper2 = new Swiper("#press .inner",{
    wrapperClass:'slider',
    slideClass:'item',
    slidesPerView:1,
    spaceBetween:10,
    pagination:{
      el:'.dot',
      bulletActiveClass:'active',
      clickable:true
    },
   breakpoints:{
    //화면의 너비가 320이상 적용 옵션
    320:{slidesPerView:2, spaceBetween:20},
    //화면의 너비가 640이상 적용 옵션
    640:{slidesPerView:3, spaceBetween:30},
    //화면의 너비가 768이상 적용 옵션
    768:{slidesPerView:4, spaceBetween:40},
    //화면의 너비가 1024이상 적용 옵션
    1024:{slidesPerView:5, spaceBetween:30},
  }
});