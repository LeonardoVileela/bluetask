import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import TaskService from '../api/TaskService';
import 'react-toastify/dist/ReactToastify.css';

export default class TaskListTable extends Component {
    constructor(props) {
        super(props)

        this.state = { tasks: [] }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    render() {
        return (
            <>
                <table className="table table-striped table-hover">
                    <TableHeader></TableHeader>
                    <TableBody onDelete={this.onDeleteHandler} tasks={this.state.tasks}></TableBody>
                </table>
                <ToastContainer autoClose={1500} />
            </>
        )
    }

    componentDidMount() {
        this.listTasks()
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

const TableBody = (props) => {
    return (
        <tbody>
            {
                props.tasks.map(
                    task =>
                        <tr key={task.id}>
                            <td><input type="checkbox" checked={task.done} /></td>
                            <td>{task.description}</td>
                            <td>{task.whenToDo}</td>
                            <td>
                                <input className="btn btn-primary" type="button" value="Editar"></input>
                                &nbsp;<input onClick={() => props.onDelete(task.id)} className="btn btn-danger" type="button" value="Excluir"></input>
                            </td>
                        </tr>
                )
            }

        </tbody>
    )
}