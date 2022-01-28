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
    if (status in STATUSES && list[task]) {
        list[task] = status
    }
}

function addTask(task) {
    if (!task) return
    list[task] = STATUSES.ToDo
}

function deleteTask(task) {
    delete list[task]
}

function showList(status) {
    console.log(`${status}:`)
    let counter = 0
    for (let key in list) {
        if (list[key] === status) {
            console.log(` ${key}`)
            counter++
        }
    }
    if (counter === 0) {
        console.log(' -')
    }
}

addTask('complete the check')
addTask('implement "—"')
changeStatus('implement "—"', STATUSES.Done)
changeStatus('complete the check', STATUSES.Done)
deleteTask('make a bed')

showList(STATUSES.ToDo)
showList(STATUSES.InProgress)
showList(STATUSES.Done)