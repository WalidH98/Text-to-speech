import React from 'react';

import { Button } from 'reactstrap';
import VoiceText from './voicetext/voicetext';
import Lists from './menu/CountryList/CountrySelect';
import { Container, Row, Col } from 'reactstrap';

class Content extends React.Component {
  render() {
    return (
      <Container fluid className="noPadding" id="fond">
        <Row id="margin1">
          <Col sm={{ size: 8, order: 0, offset: 3 }}>
            <h2>Service de synthèse vocale en ligne gratuit</h2>
          </Col>
        </Row>
        <Row id="margin2">
          <Col sm={{ size: 5, order: 0, offset: 1 }}>
            <Lists />
          </Col>
        </Row>
        <Row id="margin3">
          <Col sm={{ size: 10, order: 0, offset: 1 }}>
            <VoiceText />
          </Col>
        </Row>
        <Row id="margin4">
          <Col sm={{ size: 2, order: 0, offset: 9 }}>
            <Button className="newbutton" color="secondary" size="lg">Lire</Button>
          </Col>
        </Row>
        <Row id="margin5">
          <Col sm={{ size: 9, order: 0, offset: 3 }}>
            <p>Avec BABEL, saisisez votre texte dans la langue de votre choix et ECOUTEZ !!!
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Content;