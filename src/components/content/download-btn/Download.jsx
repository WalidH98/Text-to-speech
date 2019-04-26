import React from 'react';
import { Button } from 'reactstrap';
import { FaDownload } from 'react-icons/fa';
import './assets/css/download.scss';

const Download = () => {
  return (
    <div>
      <Button  className='disp' color="secondary" id="toggler" type="button">Download < FaDownload className='trad-icon' size="15px" /></Button>
    </div>

  );
  
};

export default Download;
