import React, { Component } from 'react';

import './App.css';

import Content from './components/content/Content';
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
