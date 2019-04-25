import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, NavLink } from 'reactstrap';
import './assets/css/modals.scss';

class Faq extends React.Component {
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
        <NavLink className="footer-modal-links" onClick={this.toggle}>FAQ</NavLink>
        <Modal id="footer-links-call-modal-global" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}> Why choose BABEL ?</ModalHeader>
          <ModalBody>
           <p>BABEL accompany you in learning your language.</p>
            <p>With BABEL practice the pronunciation of words in the language of your choice.</p>
           <p> Create a BABEL account and download your sound files so you can use them anywhere.</p>
          </ModalBody>
          <ModalFooter>
            <Button color="dark" onClick={this.toggle}>Fermer</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Faq;