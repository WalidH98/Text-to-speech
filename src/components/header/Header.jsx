import React from 'react';
import './assets/css/header.scss';
import { Row, Col } from 'reactstrap';
import LogIn from './login/Login';

export default class Header extends React.Component {

  render() {
    return (
      <Row>
        <Col>
          <div id="navbar-container" className="container align-items-center">
            <div>
              <img src="https://image.noelshack.com/fichiers/2019/15/6/1555110374-logblue.png" width="80" height="80  " alt="Logo" className="logo" />
            </div>
            <div className="d-flex align-baseline flex-row">
              <LogIn toggleAuth={() => this.props.toggleAuth()} />
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

