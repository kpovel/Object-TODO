const STATUSES = {
    TODO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done'
}

const list = {
    'create a new practice task': STATUSES.IN_PROGRESS,
    'make a bed': STATUSES.DONE,
    'write a post': STATUSES.TODO,
}

function changeStatus(task, status) {
    if (task in list) {
        list[task] = status
    }
}

function addTask(task) {
    if (!task) return
    list[task] = STATUSES.TODO
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
        counter = 0
    }
}

addTask('complete the check')
addTask('implement "—"')
addTask('remake showList')
changeStatus('remake showList', STATUSES.IN_PROGRESS)
changeStatus('implement "—"', STATUSES.DONE)
changeStatus('complete the check', STATUSES.DONE)
deleteTask('make a bed')
changeStatus('implement "—"', STATUSES.TODO)

showList()

console.log(list)