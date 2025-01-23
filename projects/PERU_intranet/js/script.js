/*********************************** 
 * modal popup
***********************************/
const modals = document.querySelectorAll('.obsrPop'); // 여러 모달 요소
const modalBg = document.getElementById('modalOverlay');
const closeModalBtns = document.querySelectorAll('.layerPop-close'); // 여러 닫기 버튼

// 닫기 버튼 클릭 시 해당 모달만 닫기
closeModalBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.obsrPop'); // 클릭된 버튼의 상위 모달 요소 찾기
        if (modal) {
            modal.style.display = 'none';
        }
        // 남아 있는 열린 모달 확인
        const isAnyModalOpen = Array.from(modals).some((m) => m.style.display !== 'none');
        if (!isAnyModalOpen) {
            modalBg.style.display = 'none'; // 마지막 모달이 닫히면 배경 숨김
        }
    });
});
// 모달 바깥 영역 클릭 시 모든 모달 닫기
window.addEventListener('click', (e) => {
    if (e.target === modalBg) {
        modals.forEach((modal) => {
            modal.style.display = 'none';
        });
        modalBg.style.display = 'none'; // 모든 모달이 닫히면 배경 숨김
    }
});
/*********************************** 
 * tabmenu li active
***********************************/
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabs a'); // 탭의 <a> 요소
    const contents = document.querySelectorAll('.tab-content'); // 콘텐츠

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            e.preventDefault(); // 링크 기본 동작 방지

            // 모든 탭에서 'on' 클래스 제거
            tabs.forEach((t) => t.classList.remove('on'));

            // 모든 콘텐츠에서 'active' 클래스 제거
            contents.forEach((content) => content.classList.remove('active'));

            // 클릭된 탭에 'on' 클래스 추가
            tab.classList.add('on');

            // 클릭된 탭에 해당하는 콘텐츠에 'active' 클래스 추가
            contents[index].classList.add('active');
        });
    });
    // 기본으로 첫 번째 탭 활성화
    tabs[0].classList.add('on');
    contents[0].classList.add('active');
});