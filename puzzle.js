const puzzles = document.querySelectorAll('.puzzle');
const zones = document.querySelectorAll('.zone');

let currentPuzzle;

let flag = false;

puzzles.forEach(puzzle =>{
    puzzle.addEventListener('dragstart', dragstart);
    puzzle.addEventListener('dragend', dragend);
});

zones.forEach(zone =>{
    zone.addEventListener('dragenter', dragenter);
    zone.addEventListener('dragleave', dragleave);
    zone.addEventListener('dragover', dragover);
    zone.addEventListener('drop', dragdrop);
    
});


function dragstart(e){
    e.dataTransfer.setData('id', e.target.dataset.target);

    setTimeout(()=>{
        e.target.style.display = 'none';
    }, 0);

    currentPuzzle = e.target;
}
function dragend(e){
    e.preventDefault();
    e.target.style.display = '';
}

function dragenter(e){
    e.preventDefault();
    
    // e.target.classList.add('drag-enter');


   
    // if(e.target.id === e.dataTransfer.getData('id')){
    //     e.target.classList.add('drag-enter');
    // }
}
function dragleave(e){
    e.preventDefault();
    e.target.classList.remove('drag-enter');
}
function dragover(e){
    e.preventDefault();

}

function dragdrop(e){
    e.preventDefault();
    console.log(e.target.id);
    console.log(e.dataTransfer.getData('id'));

    if(e.target.id === e.dataTransfer.getData('id')){
        e.target.append(currentPuzzle);
    }
}