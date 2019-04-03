import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountrySelect from './Component/CountryList/CountrySelect';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <CountrySelect />
      </div>
    );
  }
}

export default App;
