import React from 'react';
import { Button } from 'reactstrap';
import { FaDownload } from 'react-icons/fa';
import './assets/css/download.scss';

const Download = () => (
  <div>
    <Button className="trad" color="secondary" id="toggler" type="button">télécharger < FaDownload className='trad-icon' size="15px" /></Button>
  </div>
);

export default Download;
