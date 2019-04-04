import React, { Component } from 'react';

import { Button } from 'reactstrap';


class Content extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>Service de synthèse vocale en ligne gratuit</h2>
        </div>
        <div className= 'buttonLanguage'/>
        <div className= 'textArea' />
        <div>
          <Button color="secondary" size="lg">Lire</Button>{' '}
        </div>
        <div>
          <p>Avec BABEL, saisisez votre texte dans la langue de votre choix et ECOUTEZ !!!
          </p>
        </div>
      </div>  
    );
  }
}
export default Content;