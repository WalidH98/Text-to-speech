import React from 'react';
import './Header.css';
import {
  Navbar,
   } from 'reactstrap';

export default class Header extends React.Component {

  render() {
    return (
        <div className="container">
      <div className="row" >
        <div className='col'>
        
        <h1  style={{textAlign: "right"}} >Babel</h1>
        </div>
          
        
      </div>
      </div>
    );
  }
}
