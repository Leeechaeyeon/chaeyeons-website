/*************
    scroll down 시 헤더 숨기기
*************/
var didScroll;
var lastScrollTop = 0;
var delta = 5; // 동작구현이 시작되는 위치
var navbarHeight = $('header').outerHeight(); // 영향을 받을 요소

// 스크롤시에 사용자가 스크롤했다는 것을 알림
$(window).scroll(function(event){
    didScroll = true;
});

// hasScrolled()를 실행하고 didScroll 상태를 재설정
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

// 동작 구현
function hasScrolled() {
    // 현재 스크롤의 위치 저장
    var st = $(this).scrollTop();
    
    // 설정한 delta 값보다 더 스크롤되었는지를 확인
    if(Math.abs(lastScrollTop - st) <= delta){
        return;
    }
    // 헤더의 높이보다 더 스크롤되었는지 확인하고, 스크롤 방향 확인(위, 아래)
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('header-down').addClass('header-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('header-up').addClass('header-down');
        }
    }
    
    // 현재 스크롤위치 지정
    lastScrollTop = st;
};
/*************
    dark, light 모드 
*************/
const body = document.querySelector('body');
const button2 = document.querySelector('#dark_light');

var date = new Date();
var hours = date.getHours();

// 시간에 따른 date, night 버전 체크
function checkTime() {  
    if (hours >= 9 && hours <= 20) {
        body.className = "";
        button2.innerHTML = "(dark)";
    } else {
        body.className = "dark";
        button2.innerHTML = "(light)";
    }
}
// 버튼으로 모드 전환
function darkLight() {
    button2.onclick = function() {
        if(body.className == "dark"){
            body.className = "";
            button2.innerHTML = "(dark)";
        } else {
            body.className = "dark";
            button2.innerHTML = "(light)";
        }
    }
}
darkLight();


$(document).ready(function() {
    checkTime();
});
// window.onload = function(){ 

// };


/*************
    현재시간 불러오기
*************/
const clock = document.querySelector("#time");

function getCurrentTime(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getCurrentTime();
setInterval(getCurrentTime, 1000);

/*************
    아코디언 메뉴 동적 구현
*************/
var menu = document.querySelectorAll('.accordion .menu .menu__title');

for(var i = 0; i < menu.length; i++) {
	menu[i].addEventListener('click', openAccordion);
}

// 1. openAccordion : 아코디언 메뉴 다중 오픈하기
function openAccordion(e) {
	var parent = this.parentElement;
	var submenu = this.nextElementSibling;
	
	if (!parent.classList.contains('open')) {
		parent.classList.add('open');
		submenu.style.maxHeight = submenu.scrollHeight + 'px';
	}
	else {
		parent.classList.remove('open');
		submenu.style.maxHeight = '0px';
	}
}

// 2. openAccordion : 아코디언 메뉴 단독 오픈하기
function openCurrAccordion(e) {
	for(var i = 0; i < menu.length; i++) {
		var parent = menu[i].parentElement;
		var submenu = menu[i].nextElementSibling;

		if (this === menu[i] && !parent.classList.contains('open')) {
			parent.classList.add('open');
			submenu.style.maxHeight = submenu.scrollHeight + 'px';
		}
		else {
			parent.classList.remove('open');
			submenu.style.maxHeight = '0px';
		}
	}
}


/*************
    Header nav 클릭 시 페이지 show/hide
*************/
const tab = document.getElementsByClassName("tab");
const tabContent = document.querySelectorAll("section");

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener('click', function() {
    for (let i = 0; i < tab.length; i++) {
      tab[i].classList.remove('active');
    };
    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove('active');
    };
    this.classList.add('active');
    const matchingTab = this.getAttribute('data-tab');

    document.getElementById(matchingTab).classList.add('active');
  });
}
