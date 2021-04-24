import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavBarItem extends Component {
    render() {
        return (
            <Link 
                
            className={`nav-item nav-link ${this.props.item.active ? "active" : ""}`}
            to={this.props.item.href} onClick={() => this.props.onClick(this.props.item)}>
                {this.props.item.name}
            </Link>
        )
    }
}
