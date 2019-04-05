import React, { Component } from 'react';

import './App.css';
import CountrySelect from './components/content/menu/CountryList/CountrySelect';

import Content from './components/content/Content';
import { Button } from 'reactstrap';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content />
      </div>
    );
  }
}

export default App;