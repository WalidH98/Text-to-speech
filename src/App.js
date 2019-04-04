import React, { Component } from 'react';

import './App.css';

import Content from './Content';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Content />
      </div>
    );
  }
}

export default App;
