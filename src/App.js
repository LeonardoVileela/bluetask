import React, { Component } from 'react'
import NavBar from './NavBar/NavBar'
import TaskListTable from './NavBar/TaskListTable'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar></NavBar>
          <div className="container" style={{ marginTop: 20 }}>
            <TaskListTable></TaskListTable>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
