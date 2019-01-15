import React, { Component } from 'react';
import './App.css';
import {Jumbotron} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1>things!</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
