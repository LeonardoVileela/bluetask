import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import TaskService from '../api/TaskService'
import 'react-toastify/dist/ReactToastify.css'
import { Redirect } from 'react-router-dom'
import AuthService from '../api/AuthService'
import Spinner from './Spinner'


class TaskListTable extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks: [],
            editId: 0,
            loading: false
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onStatusChangeHandler = this.onStatusChangeHandler.bind(this)
        this.onEditHandler = this.onEditHandler.bind(this)

    }

    render() {
        if (!AuthService.isAuthenticated()) {
            return <Redirect to="/login" />
        }


        if (this.state.editId > 0) {
            return <Redirect to={`/form/${this.state.editId}`} />
        }
        return (
            <>
                {this.state.loading ? <Spinner /> :
                    <table className="table table-striped table-hover">
                        <TableHeader></TableHeader>
                        {
                            this.state.tasks.length > 0 ?
                                <TableBody onStatusChange={this.onStatusChangeHandler} onEdit={this.onEditHandler} onDelete={this.onDeleteHandler} tasks={this.state.tasks}></TableBody>
                                :
                                <EmptyTableBody></EmptyTableBody>
                        }
                    </table>
                }
                <ToastContainer autoClose={1500} />
            </>
        )
    }

    onStatusChangeHandler(task) {
        task.done = !task.done
        TaskService.checkbox(task)
        this.listTasks()

    }

    componentDidMount() {
        this.listTasks()
    }

    onEditHandler(id) {
        this.setState({ editId: id })
    }

    onDeleteHandler(id) {
        if (window.confirm("Você deseja mesmo excluir essa tarefa?")) {
            TaskService.delete(id)
            this.listTasks()
            toast.success("Tarefa excluida com sucesso", { position: toast.POSITION.TOP_CENTER })

        }
    }

    listTasks() {
        this.setState(
            { tasks: TaskService.list() }
        )
    }

}

export default TaskListTable

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <td>Status</td>
                <td>Descrição</td>
                <td>Data</td>
                <td>Ações</td>
            </tr>
        </thead>
    )
}

const EmptyTableBody = () => {
    return (
        <tbody>

            <tr>

                <td colSpan="4">
                    <center>
                        Sem tarefas cadastradas no momento
                    </center>
                </td>

            </tr>

        </tbody>
    )
}

const TableBody = (props) => {
    return (
        <tbody>
            {
                props.tasks.map(
                    task =>
                        <tr key={task.id}>
                            <td><input onChange={() => props.onStatusChange(task)} type="checkbox" checked={task.done} /></td>
                            <td>{task.done ? <s>{task.description}</s> : task.description}</td>
                            <td>{task.done ? <s>{task.whenToDo}</s> : task.whenToDo}</td>
                            <td>
                                <input onClick={() => props.onEdit(task.id)} className="btn btn-primary" type="button" value="Editar"></input>
                                &nbsp;<input onClick={() => props.onDelete(task.id)} className="btn btn-danger" type="button" value="Excluir"></input>
                            </td>
                        </tr>
                )
            }

        </tbody>
    )
}