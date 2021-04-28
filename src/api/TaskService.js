class TaskService {
    constructor() {
        this.tasks = [
            { id: 1, description: "Tarefa nice", whenToDo: "01/02/2022", done: true },
            { id: 2, description: "Tarefa uiuiui", whenToDo: "05/05/2022", done: false },
            { id: 3, description: "Tarefa vaivai", whenToDo: "06/06/2022", done: false },
        ]
    }

    list() {
        return this.tasks
    }

    load(id) {
        return this.tasks.filter(t => t.id === id)[0]
    }

    delete(id) {
        this.tasks = this.tasks.filter(task => task.id !== id)
    }

    edit(task) {
        var formatDate = task.whenToDo
        formatDate = formatDate.split("-")
        task.whenToDo = formatDate[2] + "/" + formatDate[1] + "/" + formatDate[0]
        this.tasks = this.tasks.map(
            t => task.id !== t.id ? t : task
        )
    }

    checkbox(task) {
        this.tasks = this.tasks.map(
            t => task.id !== t.id ? t : task
        )
    }
    newValue(value) {
        console.log("entrou")
        var formatDate = value.date
        formatDate = formatDate.split("-")
        value.date = formatDate[2] + "/" + formatDate[1] + "/" + formatDate[0]
        this.tasks[this.tasks.length] = { id: Math.max(...this.tasks.map(t => t.id)) + 1, description: value.description, whenToDo: value.date, done: false }
    }

}

export default new TaskService()