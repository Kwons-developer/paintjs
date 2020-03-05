const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;                // 선의 너비

let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const offsetX = event.offsetX;
    const offsetY = event.offsetY;
    if(!painting){                          //!painting eual painting === false
        ctx.beginPath();                     //마우스 클릭 안한 상태 일땐 직선을 그리기 위한 좌표 설정을 하는거임.
        ctx.moveTo(offsetX, offsetY);
    } else {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke(); 
    }
}

function onMouseDown(event){
    painting = true;
}

function onMouseUp(event){
    painting = false;
}
 
if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}