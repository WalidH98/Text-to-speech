import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import './assets/css/login.scss';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      // état de la connexion
      isConnected: false
    };
    this.toggle = this.toggle.bind(this);
    this.toggleAuth = this.toggleAuth.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  // permet de simuler une connexion utilisateur avec le bouton connexion de la modal
  toggleAuth() {
    this.setState(prevState => ({
      modal: !prevState.modal,
      isConnected: true,
    }));
    this.props.toggleAuth()
  }
  render() {
    const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
    const colorLogin = this.state.isConnected ? 'login-btn1' : 'login-btn2';
    const connect = this.state.isConnected ? 'Deconnexion' : 'Connexion';
    // permet de se deconnecter sans passer par la modal
    const buttonAction = this.state.isConnected ? () => {
      this.props.toggleAuth()
      this.setState({isConnected: false})
    } : this.toggle;
    console.log(this.state);
    return (
      <div>
        <Button className={colorLogin} onClick={buttonAction} >{connect}</Button>
        <Modal id="login-modal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>connexion</ModalHeader>
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
            <Button outline color="info" className="login-btn-modal" onClick={this.toggleAuth} >Connexion
            </Button>
            <Button className="login-close-modal" outline color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LogIn;