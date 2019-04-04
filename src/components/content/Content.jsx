import React, { Component } from 'react';

import { Button } from 'reactstrap';
import VoiceText from './voicetext/voicetext'
import Lists from './menu/CountryList/CountrySelect'

class Content extends React.Component {
  render() {
    return (
      <div class="d-flex align-items-start flex-column bd-highlight mb-3">
        <div class="justify-content-center p-2 bd-highlight">
          <h2>Service de synthèse vocale en ligne gratuit</h2>
        </div>
        <div class="p-2 bd-highlight">
          <Lists />
        
        
          <VoiceText />
        
        
          <Button color="secondary" size="lg">Lire</Button>{' '}
        </div>
        <div class="p-2 bd-highlight">
          <p>Avec BABEL, saisisez votre texte dans la langue de votre choix et ECOUTEZ !!!
          </p>
        </div>
      </div>  
    );
  };
};
export default Content;