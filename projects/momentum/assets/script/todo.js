const toDoForm = document.querySelector(".js-todoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-todoList");


const TODOS_LS = 'toDos';

function filterFn(toDo){
    return toDo.id === 1
}
let toDos = [];

function deleteToDo(event){
    const btn =  event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

/* To do 를 가져와서 로컬스토리지에 저장하기 */
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
} // JSON은 자바스크립트 객체를 string으로 바꿔준다.

/* to do list 작성해서 li 생성하기! */
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }; 
    toDos.push(toDoObj);
    saveToDos(); // !!toDos.push 다음에 saveToDos가 나오는 순서가 중요하다
};

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}
/* to do list 로드하기 
    toDos를 가져온 뒤, parse한 것을 자바스크립트 객체로 변환하고,각각에 대해 paintToDo라는 함수가 실행된다.
*/
function loadTodos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo){
        paintToDo(toDo.text);
    });
    };
}; // todo는 항상 showing일거라, else는 필요없다.


/* 실행 */
function init(){
    loadTodos();
    toDoForm.addEventListener("submit", handleSubmit);
};
init();


/* 버튼 만들어서 지우는기능~~~~~!!!  */