import React from 'react';
import './voicetext.css';

const VoiceText = ({buildRequest, textAreaValue}) => (
  <textarea value={textAreaValue} class="center" placeholder="Ecrivez votre texte ici ..." name="speech" onChange={(e) => buildRequest('textAreaValue', e.target.value)}/>
);

export default VoiceText;