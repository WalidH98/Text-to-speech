import React from 'react';
import './Header.css';
import {
  Navbar,
   } from 'reactstrap';

export default class Header extends React.Component {

  render() {
    return ( 
      <div className="row" >
        <div className='col'>
        
         <img src="https://nsa40.casimages.com/img/2019/04/03/mini_19040303012396270.png" width="90" height="100" alt="Logo"/>
        
        <div className="container"><h1>Babel</h1></div>
        </div>
        </div>
        
          
        
    );
  }
}
