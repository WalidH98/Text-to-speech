import React from 'react';

import { Button } from 'reactstrap';
import VoiceText from './voicetext/voicetext';
import CountrySelect from './menu/CountryList/CountrySelect';
import { Container, Row, Col } from 'reactstrap';
import { convertIsoCode } from '../../utils/languageConvertion';
import './content.css';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '',
      textAreaValue: ''
    };
  }

  buildRequest(field, value) {
    if (field === 'language') {
      value = convertIsoCode(value);
    }
    this.setState({ [field]: value });
  }

  render() {
    return (
      <Container fluid className="noPadding" id="fond">
        <h2 className='text-center title'>Service de synthèse vocale en ligne gratuit</h2>
        <Row>
          <Col sm={{ size: 5, order: 0, offset: 1 }}>
            <CountrySelect buildRequest={(field, value) => this.buildRequest(field, value)} />
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 10, order: 0, offset: 1 }}>
            <VoiceText buildRequest={(field, value) => this.buildRequest(field, value)} textAreaValue={this.state.textAreaValue} />
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 2, order: 0, offset: 9 }}>
            <Button className="new-button" color="secondary" size="lg">Lire</Button>
          </Col>
        </Row>
        <p className='text-center text-description'>Avec BABEL, saisisez votre texte dans la langue de votre choix et écoutez !</p>
      </Container>
    );
  }
}
export default Content;