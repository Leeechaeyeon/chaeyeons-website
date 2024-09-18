const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const user_LS = "currentUser",
    showing_CN = "showing";

/* 사용자이름(value) 브라우저에 저장하기 */
function saveName(text){
    localStorage.setItem(user_LS, text);
}
/* 정보를 submit 했을 때, paintGreeting하고, 이름(value)도 저장하기 */
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
/* 사용자 이름 묻기 */
function askForName(){
    form.classList.add(showing_CN);
    form.addEventListener("submit", handleSubmit);
}
/* 인사하기 */
function paintGreeting(text){
    form.classList.remove(showing_CN);
    greeting.classList.add(showing_CN);
    greeting.innerText = `안녕하세요 ${text}님.`;
}
/* 로컬스토리지에 저장된 사용자 이름을 불러와서 paintGreeting하기 */
function loadName(){
    const currentUser = localStorage.getItem(user_LS);
    if(currentUser === null){
        // she is not
        askForName();
    } else {
        // she is
        paintGreeting(currentUser);
    }
}
/* 문서 실행 */
function init(){
    loadName();
};
init();