const list = {
    'create a new practice task': 'In Progress',
    'make a bed': 'Done',
    'write a post': 'To Do'
}

function changeStatus(task, status) {
    if (status && list[task]) {
        list[task] = status
    }
}

function addTask(task) {
    if (!task) return
    list[task] = 'To Do'
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
        console.log(`-`)
    }
}

addTask('complete the check in the absence of status')
addTask('implement "—"')
changeStatus('implement "—"', 'Done')
deleteTask('make a bed')

showList('To Do')
showList('In Progress')
showList('Done')