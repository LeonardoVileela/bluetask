import React, { Component } from 'react'
import TaskService from '../api/TaskService'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Redirect } from "react-router-dom";

export default class TaskForm extends Component {

    constructor(props) {
        super(props)

        this.onSubmitHandler = this.onSubmitHandler.bind(this);

        this.state = {
            redirect: false
        }


    }


    onSubmitHandler(event) {
        event.preventDefault()
        if (this.description.value !== "") {
            var obj = { description: this.description.value, date: this.date.value }
            TaskService.newValue(obj)
            window.alert("Cadastrado com sucesso")
            this.setState({ redirect: true })
        } else {
            toast.error("Descrição não pode ser vazia", { position: toast.POSITION.TOP_CENTER })
        }

    }

    render() {
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
                        <input ref={(c) => this.description = c} type="text" className="form-control" id="description" placeholder="Descrição..." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="whenToDo" className="form-label">Data</label>
                        <input ref={(d) => this.date = d} type="date" className="form-control" id="whenToDo" placeholder="Data" defaultValue={this.props.dateToday} />
                    </div>
                    <button onClick={this.onSubmitHandler} type="submit" className="btn btn-primary">Cadastrar</button>
                </form>
                <ToastContainer autoClose={1500} />

            </div>
        )

    }
}

