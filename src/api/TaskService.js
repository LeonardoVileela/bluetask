class TaskService{
    constructor(){
        this.tasks = [
            { id: 1 , description: "Tarefa nice" , whenToDo: "01/02/2022", done: true },
            { id: 2 , description: "Tarefa uiuiui" , whenToDo: "05/05/2022", done: false },
            { id: 3 , description: "Tarefa vaivai" , whenToDo: "06/06/2022", done: false },
        ]
    }

    list() {
        return this.tasks
    }

    delete(id){
        this.tasks = this.tasks.filter(task => task.id !== id)
    }

    save(task){
        this.tasks.map(
            t => task.id !== t.id ? t : task
        )
    }

}

export default new TaskService()