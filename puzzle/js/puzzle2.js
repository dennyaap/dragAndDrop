const puzzles = document.querySelectorAll('.puzzle');

const puzzleZone = document.querySelectorAll('.puzzle-cell');
const zones = document.querySelectorAll('.zone');

const statusElement = document.getElementById('status');

const btnReload = document.getElementById('btn-reload');

let currentPuzzle = null;

let flag = false;

let lengthZones = zones.length;

let occupiedCells = 0;

console.log(lengthZones);

puzzles.forEach(zone => {
    zone.addEventListener('dragstart', dragstart);
    zone.addEventListener('dragend', dragend);
});

[...puzzleZone, ...zones].forEach(zone => {
    zone.addEventListener('dragenter', dragenter);
    zone.addEventListener('dragleave', dragleave);
    zone.addEventListener('dragover', dragover);
    zone.addEventListener('drop', dragdrop);
});

btnReload.addEventListener('click', () => {
    window.location.reload();
});

function dragstart(e){
    currentPuzzle = e.target;
    
    setTimeout(()=>{
        e.target.style.display = 'none';
    });
}
function dragend(e){
    e.target.style.display = '';
}

function dragenter(e){
    e.preventDefault();
    e.target.classList.add('green');
}
function dragleave(e){
    e.preventDefault();
    e.target.classList.remove('green');
}
function dragover(e){
    e.preventDefault();
}
function dragdrop(e){
    e.preventDefault();
    e.target.classList.remove('green');
    
    if(e.target.tagName != 'IMG'){
        e.target.append(currentPuzzle);

        checkOccupiedCells(currentPuzzle, e.target);
    }
}

function checkOccupiedCells(puzzle, cell){
    puzzle.dataset.target == cell.id ? puzzle.classList.add('correctPuzzle') : false;

    let lengthCorrectPuzzle = document.querySelectorAll('.correctPuzzle').length;
    if(lengthZones == lengthCorrectPuzzle){
        statusElement.classList.add('done');
        statusElement.textContent = 'Поздравляем!';
        btnReload.classList.add('active');
    }
    console.log(lengthCorrectPuzzle);
    
}
