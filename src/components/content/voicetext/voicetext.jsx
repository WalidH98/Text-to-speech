import React from "react";
import './voicetext.css';
import { Container, Row, Col } from 'reactstrap';

const VoiceText = () => (
  <Container>
    <Row>
      <Col lg={{size:8,offset:2}} xs="12">
        <textarea class="center" placeholder="Write your speech here ..." name="speech"/>
      </Col>
    </Row>
  </Container>
);

export default VoiceText;