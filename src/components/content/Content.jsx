import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import { convertIsoCode } from '../../utils/languageConversion';
import VoiceText from './voicetext/voicetext';
import CountrySelect from './menu/CountrySelect';
import Footer from '../footer/footer.jsx';
import Header from '../header/Header.jsx';
import Listen from './listen/Listen';
import Equalizer from './equalizer-btn/Equalizer';
import './assets/css/content.scss';

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
    this.setState({[field]: value});
  }

  render() {
    return (
      <Container fluid className="noPadding" id="fond">
        <Header />
        <h2 className='text-center title'>SERVICE DE SYNTHESE VOCALE</h2>
        <Row>
          <Col sm={{ size: 6, order: 0, offset: 1 }}>
            <CountrySelect buildRequest={(field, value) => this.buildRequest(field, value)} />
          </Col >
        </Row >
        <Row>
          <Col sm={{ size: 10, order: 0, offset: 1 }}>
            <VoiceText buildRequest={(field, value) => this.buildRequest(field, value)} textAreaValue={this.state.textAreaValue} />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-end" sm={{ size: 10, order: 0, offset: 1 }}>
            <Listen />
            <Equalizer />
          </Col>
        </Row>
        <Col sm={{ size: 10, order: 0, offset: 1 }}>
          <p className='text-description'>Saisisez du texte dans la langue de votre choix et écoutez</p>
        </Col>
        <Footer />
      </Container>
    );
  }
}
export default Content;