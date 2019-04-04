import React, { Component } from 'react';

import { Button } from 'reactstrap';
import VoiceText from './voicetext/voicetext'
import Lists from './menu/CountryList/CountrySelect'
import {Container, Row, Col} from 'reactstrap'

class Content extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={{ size: 12, order: 0, offset: 0 }}>
          <h2>Service de synthèse vocale en ligne gratuit</h2>
          </Col>
        </Row>
        <Row>
        <Col sm={{ size: 6, order: 0, offset: 2 }}>
        <Lists />
        </Col>
        </Row>
        <Row>
        <Col sm={{ size: 12, order: 0, offset: 0 }}>
        <VoiceText />
        </Col>
        </Row>
        <Row>
        <Col sm={{ size: 2, order: 0, offset: 8 }}>
        <Button color="secondary" size="lg">Lire</Button>{' '}
        </Col>
        </Row>
        <Row>
        <Col sm={{ size: 12, order: 0, offset: 0 }}>
          <p>Avec BABEL, saisisez votre texte dans la langue de votre choix et ECOUTEZ !!!
          </p>  
        </Col>
        </Row>
      </Container>  
    );
  };
};
export default Content;