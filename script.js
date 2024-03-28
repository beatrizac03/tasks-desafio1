let spanApril = document.querySelector('.span-month')
let divMonths = document.querySelector('.months-list')
let body = document.querySelector('body')
let btnAddTask = document.querySelector('.div-btnaddtask')
let divContTasks = document.querySelector('.cont-taskslist')

/* functions */

function removeHiddenClass() {
    divMonths.classList.remove('hidden')
}

function adcHiddenClass() {
    divMonths.classList.add('hidden')
}

function adcTask() {
    let task = document.createElement('div')
    task.style.width = '100%'
    task.style.height = '50px'
    task.style.backgroundColor = 'var(--white)'
    task.style.borderRadius = '15px'
    task.style.border = '2px solid var(--dark-grey)'

    let inputTask = document.createElement('input')

    divContTasks.appendChild(task)

}

/* */

spanApril.addEventListener('mouseenter', removeHiddenClass)

body.addEventListener('mouseover', adcHiddenClass)

btnAddTask.addEventListener('click', adcTask)



