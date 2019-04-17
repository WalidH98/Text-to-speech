import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card, Row, Col } from 'reactstrap';
import { FaWrench } from 'react-icons/fa';
import './assets/css/equalizer.scss';

const Example = () => (
  <div>
    <Button className="trad" color="secondary" id="toggler" type="button">ajuster < FaWrench className='trad-icon' size="15px" /></Button>{' '}
    <div className="d-flex justify-content-end">
      <UncontrolledCollapse toggler="#toggler" id="toggler-equalizer">
        <Card>
          <CardBody id="equalizer" >
            <Row>
              <Col xs="12" className="d-flex justify-content-start flex-column div-equal" >
                <div className="radio">
                  <input id="radio-1" name="radio" type="radio" />
                  <label htmlFor="radio-1" className="radio-label">R2-D2</label>
                </div>
                <div className="radio">
                  <input id="radio-2" name="radio" type="radio" />
                  <label htmlFor="radio-2" className="radio-label">Chewbacca</label>
                </div>
                <div className="radio">
                  <input id="radio-3" name="radio" type="radio" />
                  <label htmlFor="radio-3" className="radio-label">Yoda</label>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  </div>
);

export default Example;
