import React, { Component } from 'react'
import NavBar from './components/NavBar'
import TaskListTable from './components/TaskListTable'
import TaskForm from './components/TaskForm'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)

    this.today = new Date()
    this.teste = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + this.today.getDate()).slice(-2);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">    
            <Switch>
              <Route exact path="/form">
                <NavBar></NavBar>
                <div className="container" style={{ marginTop: 20 }}>
                <TaskForm dateToday={this.teste}/>
                </div>
              </Route>
              <Route path="/" >
                <NavBar></NavBar>
                <div className="container" style={{ marginTop: 20 }}>
                <TaskListTable />
                </div>
              </Route>
            </Switch>
    
        </div>
      </BrowserRouter>
    )
  }
}

export default App






