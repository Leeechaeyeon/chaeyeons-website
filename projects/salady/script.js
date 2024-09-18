var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',   // swiper 3D의 이펙트 이름은 coverflow 입니다.
    grabCursor: true,      // 슬라이드 위에 마우스를 올리면 커서모양이 grab 모양으로 바뀝니다.
    centeredSlides: true,  // 첫번째 슬라이드를 가운데 정렬로 적용합니다.
    slidesPerView: 'auto', // 중앙에 있는 슬라이드를 제외한 좌/우 슬라이드 갯수를 설정합니다.
  
    // 기본적으로 swiper 3D에 적용되어있는 속성을 지정해줍니다.
    coverflowEffect: {
      rotate: 0,           // 중앙에 있는 이미지를 제와한 양쪽에 슬라이드 회전 각도 입니다.
                           // rotate 속성을 0 으로 주어서 각도가 회전하지 않도록 합니다.
      stretch: 0,          // 슬라이드 간에 거리
      depth: 0,            // 숫자가 커지면 중앙을 point로 잡고 perspective로 원근법이 적용됩니다.
      modifier: 1,         // 중앙에 있는 active된 슬라이드의 이미지가 맨 위 레이어처럼 보입니다.
      slideShadows: false, // 기본적으로 적용되어있는 shadow 그라데이션을 false로 해제해줍니다.
    },
    // 슬라이드가 끝나는 지점에 다시 첫번째 슬라이드가 나오도록 loop를 true로 적용해주었습니다.
    loop: true,
  });
