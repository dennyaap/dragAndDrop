const imageAnimals = document.querySelectorAll('.animal-img');
const animalCells = document.querySelectorAll('.animal');
const cells = document.querySelectorAll('.cell');

const btnReload = document.getElementById('btn-reload');

const targetInfo = document.getElementById('target-info');

let dragElement = null;
let dragSource = null;

let countCells = cells.length;

let count = 0;

btnReload.addEventListener('click', () => {
    window.location.reload();
});

imageAnimals.forEach(img =>{
    img.addEventListener('dragstart', dragstart);
    img.addEventListener('dragend', dragend);
});

[...animalCells, ...cells].forEach(cell =>{
    cell.addEventListener('dragover', dragover);
    cell.addEventListener('drop', dragdrop);
}); 

function dragstart(e){
    dragSource = e.target.closest('.cell'); //клетка с которой мы уходим
    dragElement = e.target; //элемент который держим
    setTimeout(() => {
        e.target.style.display = "none";
    }, 0);
}

function dragend(e){
    e.target.style.display = '';
}

function dragover(e){
    e.preventDefault();
}

function dragdrop(e){
    e.preventDefault();

    if(e.target.tagName !== 'IMG'){
        e.target.append(dragElement);

        changeVisualRes(dragSource, e.target.closest('.cell'), 'green');
        
        let countOccupiedCells = getCountOccupiedCells(dragElement.dataset.role);
        
        if(countOccupiedCells == countCells){
            targetInfo.innerHTML = 'Поздравляем!';
            btnReload.classList.add('active');
        }
        else{
            targetInfo.innerHTML = `Найдено хищников: ${countOccupiedCells}`;
        }
    }
}

function getCountOccupiedCells(role){ //получаем количество занятых клеток
    if(role == 'predator'){
        count = document.querySelectorAll('.cell > img[data-role = "predator"]').length;
    }
    return count;
}


function changeVisualRes(elSource, elRes, classRes){
    elRes != null ? elRes.classList.add(classRes): false;
    elSource != null ? elSource.classList.remove(classRes): false;
}
