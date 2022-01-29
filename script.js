const STATUSES = {
    ToDo: 'To Do',
    InProgress: 'In Progress',
    Done: 'Done'
}

const list = {
    'create a new practice task': STATUSES.InProgress,
    'make a bed': STATUSES.Done,
    'write a post': STATUSES.ToDo
}

function changeStatus(task, status) {
    if (list[task] && STATUSES[status]) {
        list[task] = STATUSES[status]
    }
    //todoа
}

function addTask(task) {
    if (!task) return
    list[task] = STATUSES.ToDo
}

function deleteTask(task) {
    delete list[task]
}

function showList() {
    let counter = 0

    for (let status in STATUSES) {
        console.log(`${status}:`)
        for (let task in list) {
            if (list[task] === STATUSES[status]) {
                console.log(` ${task}`)
                counter++
            }
        }
        if (counter === 0) {
            console.log(' -')
        }
    }
}

addTask('complete the check')
addTask('implement "—"')
addTask('remake showList')
changeStatus('remake showList', STATUSES.InProgress)
changeStatus('implement "—"', STATUSES.Done)
changeStatus('complete the check', STATUSES.Done)
deleteTask('make a bed')
changeStatus('implement "—"', STATUSES.ToDo)

showList()

console.log(list)