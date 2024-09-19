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
    if(body.className == "dark"){
        body.className = "";
        button2.innerHTML = "(dark)";
    } else {
        body.className = "dark";
        button2.innerHTML = "(light)";
    }
}

$(document).ready(function() {
    checkTime();
});

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


/*************
    arcive탭에서 modal 클릭 시 맨앞으로 가져오기
*************/
document.querySelectorAll('.modal').forEach(el => {
    el.addEventListener('click', () => {
      resetIndex();
      el.style.zIndex = "1"
    })
  })
  function resetIndex() {
    document.querySelectorAll('.modal').forEach(el => {
      el.style.zIndex = "auto"
  })}

/*************
    arcive탭에서 modal창 닫기
*************/
const btnClose = document.querySelectorAll(".close");

// 모든 닫기 버튼에 대해 클릭 이벤트 리스너 등록
btnClose.forEach(button => {
    button.addEventListener("click", function() {
        // 현재 버튼의 부모 요소 중 .modal 클래스를 가진 요소를 찾아서 닫음
        const modal = button.closest(".modal");
        if (modal) {
            modal.style.display = "none";
        }
    });
});

/*************
    arcive탭에서 refresh 버튼 클릭시 modal 전부 다시 불러오기
*************/

const modals = document.querySelectorAll(".modal");
const refresh = document.querySelector(".refresh");

// 함수: 모든 모달의 display 속성을 block으로 변경
function showAllModals() {
    modals.forEach(modal => {
        modal.style.display = "block";
    });
}

// refresh 버튼 클릭 이벤트
refresh.addEventListener("click", function() {
    // 하나라도 display가 none인 modal이 있는지 확인
    const isAnyModalHidden = Array.from(modals).some(modal => {
        return window.getComputedStyle(modal).display === "none";
    });

    // 만약 하나라도 숨겨져 있다면 모든 modal을 보여줌
    if (isAnyModalHidden) {
        showAllModals();
    }
});
