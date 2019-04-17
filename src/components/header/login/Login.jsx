import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import './assets/css/login.scss';

class LogIn extends React.Component {
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
        <Button className="login" outline color="info" onClick={this.toggle}>connexion</Button>
        <Modal id="login-modal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>connectez vous</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail"></Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="@ mail" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleName"></Label>
                <Input type="password" name="password" id="examplePassword" placeholder="mot de passe" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button outline color="info" className="login-btn-modal" onClick={this.toggle}>connexion</Button>
            <Button className="login-close-modal" outline color="secondary" onClick={this.toggle}>Fermer</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LogIn;