import React, { Component } from 'react'
import TaskService from '../api/TaskService'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Redirect } from "react-router-dom"
import { withRouter } from "react-router"
import AuthService from '../api/AuthService'

class TaskForm extends Component {

    constructor(props) {
        super(props)

        this.onSubmitHandler = this.onSubmitHandler.bind(this)
        this.onCancelHandler = this.onCancelHandler.bind(this)
        this.today = new Date()
        this.dateNow = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + this.today.getDate()).slice(-2)

        this.state = {
            task: {
                id: 0,
                description: "",
                whenToDo: ""
            },
            redirect: false
        }


    }

    componentDidMount() {
        const editId = this.props.match.params.id
        if (editId) {
            var task = Object.create(TaskService.load(~~editId))
            var editDate = task.whenToDo.split("/")
            editDate = editDate[2] + "-" + editDate[1] + "-" + editDate[0]
            task.whenToDo = editDate
            this.setState({ task: task })
        }
    }

    onCancelHandler(event) {
        event.preventDefault()
        this.setState({ redirect: true })
    }


    onSubmitHandler(event) {
        event.preventDefault()
        if (this.description.value !== "") {
            var obj = {}
            if (this.props.match.params.id) {
                obj = { id: ~~this.props.match.params.id, description: this.description.value, whenToDo: this.date.value }
                TaskService.edit(obj)
                this.setState({ redirect: true })
            } else {
                obj = { description: this.description.value, date: this.date.value, done: false }
                TaskService.newValue(obj)
                window.alert("Cadastrado com sucesso")
                this.setState({ redirect: true })
            }
        } else {
            toast.error("Descrição não pode ser vazia", { position: toast.POSITION.TOP_CENTER })
        }

    }

    render() {
        if (!AuthService.isAuthenticated()) {
            return <Redirect to="/login" />
        }
        if (this.state.redirect) {
            return <Redirect
                to={{
                    pathname: "/",
                    state: { test: true }
                }}
            />
        }
        return (
            <div>
                <h1>Formulário</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Descrição</label>
                        <input ref={(c) => this.description = c} type="text" className="form-control" id="description" placeholder="Descrição..." defaultValue={this.props.match.params.id ? this.state.task.description : ""} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="whenToDo" className="form-label">Data</label>
                        <input ref={(d) => this.date = d} type="date" className="form-control" id="whenToDo" placeholder="Data" defaultValue={this.props.match.params.id ? this.state.task.whenToDo : this.dateNow} />
                    </div>
                    <button onClick={this.onSubmitHandler} type="submit" className="btn btn-primary">{this.props.match.params.id ? "Editar" : "Cadastrar"}</button>
                    &nbsp;
                    <button onClick={this.onCancelHandler} type="submit" className="btn btn-danger">Cancelar</button>
                </form>
                <ToastContainer autoClose={1500} />

            </div>
        )

    }
}

export default withRouter(TaskForm)
