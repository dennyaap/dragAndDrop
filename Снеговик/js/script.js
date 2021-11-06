const images = document.querySelectorAll('img');
const snowmanImg = document.getElementById('snowman');

let x = 0;
let y = 0;
let dragItem = null;

document.body.addEventListener('dragstart', moveStart);
document.body.addEventListener('dragover', moveDragOver);
document.body.addEventListener('drop', moveDrop);

function moveStart(e){
    resetZIndex();
    dragItem = e.target;

    x = e.offsetX;
    y = e.offsetY;

    dragItem.style.zIndex = 10;
}

function moveDrop(e){
    e.preventDefault();

    dragItem.style.left = `${e.pageX - x}px`;
    dragItem.style.top = `${e.pageY - y}px`;
}

function moveDragOver(e){
    e.preventDefault();
}

function resetZIndex(){
    images.forEach(img =>{
        img.style.zIndex = 5;
    });
}