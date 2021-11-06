const zones = document.querySelectorAll('.block');
const imgBlock = document.getElementById('imageBlock');

imgBlock.addEventListener('dragstart', dragstart);
imgBlock.addEventListener('dragend', dragend);

zones.forEach(zone =>{
    zone.addEventListener('dragenter', dragenter);
    zone.addEventListener('dragleave', dragleave);
    zone.addEventListener('dragover', dragover);
    zone.addEventListener('drop', dragdrop);
});

function dragstart(e){
    setTimeout(() => {
        e.target.style.display = "none";
    }, 0);
}
function dragend(e){
    e.target.style.display = '';
    
}

function dragenter(e){
    e.preventDefault();
    
    e.target.classList.add('drop-zone');
}
function dragleave(e){
    e.preventDefault();
    e.target.classList.remove('drop-zone');
}
function dragover(e){
    e.preventDefault();
}
function dragdrop(e){
    e.preventDefault();
    e.target.classList.remove('drop-zone');
    e.target.append(imgBlock);
}