import React from 'react';
import './Header.css';
export default class Header extends React.Component {

  render() {
    return ( 
      <div className="row" >
        <div className='col'>
          <div className="navbar-container">
            <img src="https://nsa40.casimages.com/img/2019/04/03/mini_19040303012396270.png" width="100" height="100  " alt="Logo"/>
            <h1>Babel</h1>
          </div>
        </div>
      </div>
    );
  }
}

