const STATUSES = {
    ToDo: 'To Do',
    InProgress: 'In Progress',
    Done: 'Done'
}

const list = {
    'create a new practice task': STATUSES.InProgress,
    'make a bed': STATUSES.Done,
    'write a post': STATUSES.ToDo,


    changeStatus(task, status) {
        if (task in this) {
            this[task] = status
        }
    },

    addTask(task) {
        this[task] = STATUSES.ToDo
    },

    deleteTask(task) {
        delete this[task]
    },

    showList() {
        let counter = 0

        for (let status in STATUSES) {
            console.log(`${status}:`)
            for (let task in this) {
                if (this[task] === STATUSES[status]) {
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
}

list.deleteTask('create a new practice task')
list.showList()