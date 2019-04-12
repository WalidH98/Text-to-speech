import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './voicetext.css';

const VoiceText = ({ buildRequest, textAreaValue }) => (
  <TextareaAutosize minRows={6} value={textAreaValue} className="center" placeholder="Ecrivez votre texte ici ..." name="speech" onChange={(e) => buildRequest('textAreaValue', e.target.value)} />
);

export default VoiceText;