const nameTask = document.getElementById('nameTask');
const btnAdd = document.getElementById('btnPlanning');

let currentTasks = document.querySelector('.currentTasks');

btnAdd.addEventListener('click', addTask);

let currentTask;

let statusElement = document.getElementById('status');
statusElement.style.display = 'none';

let element;

function addTask(){
    statusElement.style.display = 'none';

    if(nameTask.value){
        currentTask = document.createElement('div');
        currentTask.innerHTML = nameTask.value;
        currentTask.classList.add('currentTask', 'task');

        currentTasks.appendChild(currentTask);
    
        dragTask(currentTask);
    }
    else{
        statusElement.style.display = '';
    }
}

function dragTask(currentTask){
    currentTask.setAttribute('draggable', 'true');
    currentTask.addEventListener('dragstart', dragstart);
    currentTask.addEventListener('dragend', dragend);
}

function dragstart(e){    
    element = e.target;

    setTimeout(() => {
        e.target.style.display = 'none';
    }, 0);
}
function dragend(e){
    e.target.style.display = '';
    e.target.classList.add('completedTask');
}

let zone = document.querySelector('.completedTasks');

zone.addEventListener('dragenter', dragenter);
zone.addEventListener('dragleave', dragleave);
zone.addEventListener('dragover', dragover);
zone.addEventListener('drop', dragdrop);

function dragenter(e){
    e.preventDefault();
    zone.classList.add('drag-enter');
}
function dragleave(e){
    e.preventDefault();
    zone.classList.remove('drag-enter');
}
function dragover(e){
    e.preventDefault();
}
function dragdrop(e){
    e.preventDefault();
    zone.classList.remove('drag-enter');

    zone.append(element);
}