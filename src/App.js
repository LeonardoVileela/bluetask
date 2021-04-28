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


  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/form">
              <NavBar></NavBar>
              <div className="container" style={{ marginTop: 20 }}>
                <TaskForm />
              </div>
            </Route>
            <Route exact path="/form/:id">
              <NavBar></NavBar>
              <div className="container" style={{ marginTop: 20 }}>
                <TaskForm />
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






