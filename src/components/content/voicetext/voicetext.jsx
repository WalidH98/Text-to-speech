import React from 'react';
import './assets/css/voicetext.scss';

const VoiceText = ({buildRequest, textAreaValue}) => (
  <textarea value={textAreaValue} className="center" placeholder="Write text here..." name="speech" onChange={(e) => buildRequest('textAreaValue', e.target.value)}/>
);

export default VoiceText;
