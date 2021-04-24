import React, { Component } from 'react'
import { APP_NAME } from '../constants'
import NavBarItem from './NavBarItem'

export default class NavBar extends Component {
    constructor(params) {
        super(params)

        this.state = {
            items: [
                { name: "Listar Tarefas", href: "/", active: true },
                { name: "Nova Tarefa", href: "/form", active: false },
            ]
        }

        this.onClickHeandler = this.onClickHeandler.bind(this)
    }

    onClickHeandler(itemClicked) {
        this.setState(
            this.state.items.map(
                i => i.name === itemClicked.name ? i.active = true : i.active = false
            )
        )
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
                    <div className="container-fluid">
                        <span className="navbar-brand">{APP_NAME}</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                                {this.state.items.map(
                                    i => <NavBarItem key={i.name} item={i} onClick={this.onClickHeandler}></NavBarItem>
                                )}

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
