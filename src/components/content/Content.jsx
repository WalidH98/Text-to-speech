import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { convertIsoCode } from '../../utils/languageConversion';
import { convertTitle } from '../../utils/titleConversion';
import VoiceText from './voicetext/voicetext';
import CountrySelect from './menu/CountrySelect';
import Footer from '../footer/footer.jsx';
import Header from '../header/Header.jsx';
import Listen from './listen/Listen';
import './assets/css/content.scss';
import Axios from 'axios';
import Download from './download-btn/Download';

const baseUrl = `http://api.voicerss.org/?key=${process.env.REACT_APP_TEXT_TO_SPEECH_API_KEY}`;

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'fr-fr',
      textAreaValue: '',
      audioFile: '',
      title: 'Service de synthèse vocale',
      isConnected: false
    };
  }
  buildRequest(field, value) {
    if (field === 'language') {
      value = convertIsoCode(value);
    }
    this.setState({[field]: value});
  }
  buildTitle(state, val) {
    if (state === 'title') {
      val = convertTitle(val);
    }
    this.setState({[state]: val});
  }
  
  callApi () {
    Axios.get(`${baseUrl}&hl=${this.state.language}&src=${this.state.textAreaValue}&b64=true`)
      .then((reponse) => {
        this.setState({ audioFile: reponse.data});
      });
  }

  toggleAuth(){
    this.setState({isConnected: !this.state.isConnected});
  }
  render() {
    console.log(this.state);
    return (
      <Container fluid className="noPadding" id="fond">
        <Header toggleAuth={() => this.toggleAuth()} />
        <h1 className='text-center title'>{this.state.title}</h1>
        <Row>
          <Col sm={{ size: 6, order: 0, offset: 1 }}>
            <CountrySelect buildRequest={(field, value) => this.buildRequest(field, value)} buildTitle={(state, val) => this.buildTitle(state, val)}/>
          </Col >
        </Row >
        <Row>
          <Col sm={{ size: 10, order: 0, offset: 1 }}>
            <VoiceText buildRequest={(field, value) => this.buildRequest(field, value)} textAreaValue={this.state.textAreaValue} />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-end" sm={{ size: 10, order: 0, offset: 1 }}>
            <audio hidden
              controls autoPlay
              src={this.state.audioFile}>
            </audio>
            <Listen makeApiCall={() => this.callApi()} />
            {
              this.state.isConnected &&
              <Download />
            }
          </Col>
        </Row>
        <Col sm={{ size: 10, order: 0, offset: 1 }}>
          <p className='text-description'>Enter text in the language of your choice and listen</p>
        </Col>
        <Footer />
      </Container>
    );
  }
}
export default Content;