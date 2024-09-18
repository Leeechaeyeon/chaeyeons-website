//----------JQuery-----------------//
$(function(){
    flag=0;

    $('#right').click(function(){
      if(flag == 0){
        $('.c2').css({'transform':'translateX(calc(-50% + -21rem)) scale(1)','z-index':'1', 'top':'36px'});
        $('.c3').css({'transform':'translateX(calc(-50% + -12.5rem)) scale(1)','z-index':'50', 'top':'36px'});
        $('.c4').css({'transform':'translateX(calc(-50% + -25%)) scale(1.5)','z-index':'100', 'top':'0', 'box-shadow':'0 0 25px 10px #F5F3F8'});
        $('.c5').css({'transform':'translateX(calc(-50% + 12.5rem)) scale(1)','z-index':'50', 'top':'36px'});
        $('.c1').css({'transform':'translateX(calc(-50% + 21rem)) scale(1)','z-index':'1', 'top':'36px'});    
        flag = 1;
      } else if(flag == 1){
        $('.c3').css({'transform':'translateX(calc(-50% + -21rem)) scale(1)','z-index':'1', 'top':'36px'});
        $('.c4').css({'transform':'translateX(calc(-50% + -12.5rem)) scale(1)','z-index':'50', 'top':'36px'});
        $('.c5').css({'transform':'translateX(calc(-50% + -25%)) scale(1.5)','z-index':'100', 'top':'0', 'box-shadow':'0 0 25px 10px #F5F3F8'});
        $('.c1').css({'transform':'translateX(calc(-50% + 12.5rem)) scale(1)','z-index':'50', 'top':'36px'});
        $('.c2').css({'transform':'translateX(calc(-50% + 21rem)) scale(1)','z-index':'1', 'top':'36px'});
        flag = 2;
      } else if(flag == 2){
        $('.c4').css({'transform':'translateX(calc(-50% + -21rem)) scale(1)','z-index':'1', 'top':'36px'});
        $('.c5').css({'transform':'translateX(calc(-50% + -12.5rem)) scale(1)','z-index':'50', 'top':'36px'});
        $('.c1').css({'transform':'translateX(calc(-50% + -25%)) scale(1.5)','z-index':'100', 'top':'0', 'box-shadow':'0 0 25px 10px #F5F3F8'});
        $('.c2').css({'transform':'translateX(calc(-50% + 12.5rem)) scale(1)','z-index':'50', 'top':'36px'});
        $('.c3').css({'transform':'translateX(calc(-50% + 21rem)) scale(1)','z-index':'1', 'top':'36px'});
        flag = 3;
      } else if(flag == 3){
        $('.c5').css({'transform':'translateX(calc(-50% + -21rem)) scale(1)','z-index':'1', 'top':'36px'});
        $('.c1').css({'transform':'translateX(calc(-50% + -12.5rem)) scale(1)','z-index':'50', 'top':'36px'});
        $('.c2').css({'transform':'translateX(calc(-50% + -25%)) scale(1.5)','z-index':'100', 'top':'0', 'box-shadow':'0 0 25px 10px #F5F3F8'});
        $('.c3').css({'transform':'translateX(calc(-50% + 12.5rem)) scale(1)','z-index':'50', 'top':'36px'});
        $('.c4').css({'transform':'translateX(calc(-50% + 21rem)) scale(1)','z-index':'1', 'top':'36px'});
        flag = 4;
      } else if(flag == 4){
        $('.c1').css({'transform':'translateX(calc(-50% + -21rem)) scale(1)','z-index':'1', 'top':'36px'});
        $('.c2').css({'transform':'translateX(calc(-50% + -12.5rem)) scale(1)','z-index':'50', 'top':'36px'});
        $('.c3').css({'transform':'translateX(calc(-50% + -25%)) scale(1.5)','z-index':'100', 'top':'0', 'box-shadow':'0 0 25px 10px #F5F3F8'});
        $('.c4').css({'transform':'translateX(calc(-50% + 12.5rem)) scale(1)','z-index':'50', 'top':'36px'});
        $('.c5').css({'transform':'translateX(calc(-50% + 21rem)) scale(1)','z-index':'1', 'top':'36px'});
        flag = 0;
      }

    });
    $('#left').click(function(){
      if(flag == 0){
        $('.c5').css({'transform':'translateX(calc(-50% + -21rem)) scale(1)','z-index':'1', 'top':'36px'});
        $('.c1').css({'transform':'translateX(calc(-50% + -12.5rem)) scale(1)','z-index':'50', 'top':'36px'});
        $('.c2').css({'transform':'translateX(calc(-50% + -25%)) scale(1.5)','z-index':'100', 'top':'0', 'box-shadow':'0 0 25px 10px #F5F3F8'});
        $('.c3').css({'transform':'translateX(calc(-50% + 12.5rem)) scale(1)','z-index':'50', 'top':'36px'});
        $('.c4').css({'transform':'translateX(calc(-50% + 21rem)) scale(1)','z-index':'1', 'top':'36px'});
        flag = 4;
      } else if(flag == 4){
        $('.c4').css({'transform':'translateX(calc(-50% + -21rem)) scale(1)','z-index':'1', 'top':'36px'});
        $('.c5').css({'transform':'translateX(calc(-50% + -12.5rem)) scale(1)','z-index':'50', 'top':'36px'});
        $('.c1').css({'transform':'translateX(calc(-50% + -25%)) scale(1.5)','z-index':'100', 'top':'0', 'box-shadow':'0 0 25px 10px #F5F3F8'});
        $('.c2').css({'transform':'translateX(calc(-50% + 12.5rem)) scale(1)','z-index':'50', 'top':'36px'});
        $('.c3').css({'transform':'translateX(calc(-50% + 21rem)) scale(1)','z-index':'1', 'top':'36px'});
        flag = 3;
      } else if(flag == 3){
        $('.c3').css({'transform':'translateX(calc(-50% + -21rem)) scale(1)','z-index':'1', 'top':'36px'});
        $('.c4').css({'transform':'translateX(calc(-50% + -12.5rem)) scale(1)','z-index':'50', 'top':'36px'});
        $('.c5').css({'transform':'translateX(calc(-50% + -25%)) scale(1.5)','z-index':'100', 'top':'0', 'box-shadow':'0 0 25px 10px #F5F3F8'});
        $('.c1').css({'transform':'translateX(calc(-50% + 12.5rem)) scale(1)','z-index':'50', 'top':'36px'});
        $('.c2').css({'transform':'translateX(calc(-50% + 21rem)) scale(1)','z-index':'1', 'top':'36px'});
        flag = 2;
      } else if(flag == 2){
        $('.c2').css({'transform':'translateX(calc(-50% + -21rem)) scale(1)','z-index':'1', 'top':'36px'});
        $('.c3').css({'transform':'translateX(calc(-50% + -12.5rem)) scale(1)','z-index':'50', 'top':'36px'});
        $('.c4').css({'transform':'translateX(calc(-50% + -25%)) scale(1.5)','z-index':'100', 'top':'0', 'box-shadow':'0 0 25px 10px #F5F3F8'});
        $('.c5').css({'transform':'translateX(calc(-50% + 12.5rem)) scale(1)','z-index':'50', 'top':'36px'});
        $('.c1').css({'transform':'translateX(calc(-50% + 21rem)) scale(1)','z-index':'1', 'top':'36px'});
        flag = 1;
      } else if(flag == 1){
        $('.c1').css({'transform':'translateX(calc(-50% + -21rem)) scale(1)','z-index':'1', 'top':'36px'});
        $('.c2').css({'transform':'translateX(calc(-50% + -12.5rem)) scale(1)','z-index':'50', 'top':'36px'});
        $('.c3').css({'transform':'translateX(calc(-50% + -25%)) scale(1.5)','z-index':'100', 'top':'0', 'box-shadow':'0 0 25px 10px #F5F3F8'});
        $('.c4').css({'transform':'translateX(calc(-50% + 12.5rem)) scale(1)','z-index':'50', 'top':'36px'});
        $('.c5').css({'transform':'translateX(calc(-50% + 21rem)) scale(1)','z-index':'1', 'top':'36px'});
        flag = 0;
      }
    });
  });


//----------카드 캐러셀 슬라이더-----------------//
// let carousel = document.querySelector('.carousel');
// let card = document.querySelectorAll('.card');
// let btnLeft = document.getElementById('left');
// let btnRight = document.getElementById('right');

// const center = 0;
// let lengthCard = card.length -1;

// btnRight.onclick = function(){
//   if(center + 1 > lengthCard){
//     card = 0;
//   } else {
//     active = active + 1;
//   }
//   carouselMove();
// };
// btnLeft.onclick = function(){
//   if(center - 1 < 0){
//     card = lengthCard;
//   } else {
//     active = active - 1;
//   }
//   carouselMove();
// };

// function carouselMove(){
// };



//----------메인 자동 이미지 슬라이더-----------------//
let list = document.querySelector('.img-slider .slider');
let items = document.querySelectorAll('.img-slider .slider li');
let dots = document.querySelectorAll('.img-slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
  if (active + 1 > lengthItems){
    active = 0;
  } else {
    active = active + 1;
  }
  reloadSlider(); 
}
prev.onclick = function(){
  if(active - 1 < 0){
    active = lengthItems;
  } else {
    active = active - 1;
  } 
  reloadSlider();
}
let refreshSlider = setInterval(()=> {next.click()}, 3000);

function reloadSlider(){
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + 'px';
  let lastActiveDot = document.querySelector('.img-slider .dots li.active');
  lastActiveDot.classList.remove('active');
  dots[active].classList.add('active');
}

dots.forEach((li, key) => {
  li.addEventListener('click', function(){
    active = key;
    reloadSlider();
  })
})