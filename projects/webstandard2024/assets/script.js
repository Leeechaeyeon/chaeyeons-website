// DOM elements를 변수화
const wrapper = document.querySelector(".slider_img"),
    carousel = document.querySelector(".carousel"),
    images = document.querySelectorAll(".img_bg"),
    buttons = document.querySelectorAll(".btn");

let imageIndex = 1,
    interValid;

// 이미지슬라이드(캐러셀) 자동시작 함수 정의
const autoSlide = () => {
    interValid = setInterval(() => slideImage(++imageIndex), 5000);// 4초마다 slideImage()함수 실행
};
autoSlide();// 페이지로드 시, autoSlide 실행

// 이미지슬라이드(캐러셀) 함수
const slideImage = () => {
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;    //이미지index 계산
    carousel.style.transform = `translate(${imageIndex * -100}%)`;    // 이미지 100퍼센트씩 슬라이드 : translate(-100%)
};

// 이전 이미지, 다음 이미지 버튼 동작
const updateClick = (e) => {
    clearInterval(interValid);// autoSlide 정지
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex);// 버튼 클릭에 따른 해당이미지index 불러오기
    autoSlide();// autoSlide 재시작
};

// 좌우 화살표 버튼에 동작 추가
buttons.forEach((button) => button.addEventListener("click", updateClick));
wrapper.addEventListener("mouseover", () => clearInterval(interValid));// 이미지슬라이드에 mouseover 함수 추가
wrapper.addEventListener("mouseleave", autoSlide);// 이미지슬라이드에 mouseleave 함수 추가

/* 마우스오버시 background깔리기 */
const imgHover = document.querySelectorAll('.image_hoverwrap');
imgHover.forEach(imgHover => {
    imgHover.addEventListener('mouseover', () => {
        document.querySelector('.hover')?.classList.remove('hover');
        imgHover.classList.add('hover');
    });
    imgHover.addEventListener('mouseleave', () => {
        document.querySelector('.hover')?.classList.remove('hover');
        imgHover.classList.remove('hover');
    });
});