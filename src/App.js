import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';

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
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
