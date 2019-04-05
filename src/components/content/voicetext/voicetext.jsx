import React from "react";
import './voicetext.css';
import { Container, Row, Col } from 'reactstrap';

const VoiceText = () => (
  <textarea class="center" placeholder="Write your speech here ..." name="speech"/>
);

export default VoiceText;