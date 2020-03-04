const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    const offsetX = event.offsetX;
    const offsetY = event.offsetY;
}

function onMouseDown(event){
    painting = true;
}

function onMouseUp(event){
    painting = false;
}

function onMouseLeave(event){
    stopPainting();
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}