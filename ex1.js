let zones = document.querySelectorAll('.redBlockContainer');
let block = document.getElementById('white');
let imageZones = document.querySelectorAll('.image');

//элемент
block.addEventListener('dragstart', dragstart);
block.addEventListener('dragend', dragend);

//зоны
zones.forEach(zone => {
    zone.addEventListener('dragenter', dragenter);
    zone.addEventListener('dragleave', dragleave);
    zone.addEventListener('dragover', dragover);
    zone.addEventListener('drop', dragdrop);
});


function dragstart(e){
    e.target.classList.add('drag-start');

    e.dataTransfer.setData('id', block.dataset.target);

    setTimeout(() => {
        e.target.style.display = "none";
    }, 0);
}
function dragend(e){
    e.target.classList.remove('drag-start');
    e.target.style.display = '';
}

function dragenter(e){
    e.preventDefault();
    e.target.classList.add('drop-zone');

    if(e.target.id !== e.dataTransfer.getData('id')){
        e.target.classList.add('green-zone');
    }
}
function dragleave(e){
    e.preventDefault();
    e.target.classList.remove('drop-zone');
    e.target.classList.remove('green-zone');
}
function dragover(e){
    e.preventDefault();
}
function dragdrop(e){
    e.preventDefault();
    e.target.classList.remove('drop-zone');

    if(e.target.id === e.dataTransfer.getData('id')){
        e.target.classList.add('green-zone');
        e.target.append(block);
    }
}