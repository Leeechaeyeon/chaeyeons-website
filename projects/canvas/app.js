const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const INITIAL_COLOR = '#2c2c2c';
const saveBtn = document.getElementById('jsSave');

/* ----- canvas에 값 할당하기 ----- */
canvas.width = document.getElementsByClassName('canvas')[0].offsetWidth;
canvas.height = document.getElementsByClassName('canvas')[0].offsetHeight;

/* ----- Context 설정 ----- */ 
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

/* ----- Basic Attribute ----- */
let painting = false;
let filling = false;

/* ----- function ----- */
function stopPainting(){
    painting = false;
}
function startPainting(event) {
    painting = true;
}
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}
function handleCanvasClick(event) {
    if(filling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
}
function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}
function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}
function handleModeClick(event) {
    if(filling === true){
        filling = false;
        mode.innerText = 'Fill'
    } else {
        filling = true;
        mode.innerText = 'Paint'
        
    }
}
function handleCM(event) {
    event.preventDefault();
}
function handleSaveClick(event) {
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'My painting';
    link.click();
}

/* ----- Canvas eventlistener ----- */
if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener('contextmenu', handleCM);
}
/* ----- color pallete ----- */
Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick)
);
if (range) {
    range.addEventListener('input', handleRangeChange)
}
if (mode) {
    mode.addEventListener("click", handleModeClick);
}
if (saveBtn) {
    saveBtn.addEventListener('click', handleSaveClick);
}