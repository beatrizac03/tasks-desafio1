let spanApril = document.querySelector('.span-month')
let divMonths = document.querySelector('.months-list')
let body = document.querySelector('body')
let btnAddTask = document.querySelector('.div-btnaddtask')
let divContTasks = document.querySelector('.cont-taskslist')
let inputNewTask = document.querySelector('.input-newtask')

/* functions */

function removeHiddenClass() {
    divMonths.classList.remove('hidden')
}

function adcHiddenClass() {
    divMonths.classList.add('hidden')
}


function adcTask() {
    let taskContent = inputNewTask.value

    let task = document.createElement('div')
    task.classList.add('task-div')
    task.style.width = '100%'
    task.style.height = '50px'
    task.style.backgroundColor = 'var(--white)'
    task.style.borderRadius = '15px'
    task.style.border = '2px solid var(--dark-grey)'
    task.style.padding = '0.5rem 2rem'
    task.style.display = 'flex'
    task.style.gap = '2rem'

    let taskName = document.createElement('div')
    taskName.classList.add('c-taskname')
    taskName.style.width = '100px'
    taskName.style.height = '100%'
    taskName.style.display = 'flex'
    taskName.style.alignItems = 'center'
    taskName.style.fontSize = '2rem'
    taskName.innerHTML = taskContent

    let inputTask = document.createElement('input')
    inputTask.type = 'checkbox'
    inputTask.style.width = '20px'


    task.appendChild(inputTask)
    task.appendChild(taskName)

    divContTasks.appendChild(task)
    inputNewTask.value = ''
}


/* */

spanApril.addEventListener('mouseenter', removeHiddenClass)
divMonths.addEventListener('mouseleave', adcHiddenClass)

btnAddTask.addEventListener('click', adcTask)



