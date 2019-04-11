import React from "react";
import './voicetext.css';
import { Container, Row, Col } from 'reactstrap';

const VoiceText = () => (
  <textarea class="center" placeholder="Ecrivez votre texte ici ..." name="speech"/>
);

export default VoiceText;