import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, NavLink, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './assets/css/modals.scss';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
    return (
      <div>
        <NavLink className="footer-modal-links" onClick={this.toggle}>Contact</NavLink>
        <Modal id="footer-links-call-modal-global" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Contact us</ModalHeader>
          <ModalBody>
            <Form id="form-contact">
              <FormGroup>
                <Label for="exampleEmail"></Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="@ mail" />
                <Label for="exampleName"></Label>
                <Input type="name" name="name" id="exampleName" placeholder="name" />
                <Label for="exampleSelect"></Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Suggestions</option>
                  <option>Bug</option>
                </Input>
                <Label for="exampleText"></Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile"></Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                  For suggestions or bugs...
                </FormText>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="dark" onClick={this.toggle}>Close</Button>
            <Button onClick={this.toggle}>Send</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Contact;