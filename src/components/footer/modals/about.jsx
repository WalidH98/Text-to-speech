import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, NavLink } from 'reactstrap';
import './modals.css';

class AboutUs extends React.Component {
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
        <NavLink className="footer-modal" onClick={this.toggle}>A propos</NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>A propos de nous</ModalHeader>
          <ModalBody>
            <p>Peu après le Déluge, alors qu'ils parlent tous la même langue, les hommes atteignent une plaine dans le pays de Shinar et s'y installent tous. Là, ils entreprennent par eux-mêmes de bâtir une ville et une tour dont le sommet touche le ciel, pour se faire un nom. Alors Dieu brouille leur langue afin qu'ils ne se comprennent plus, et les disperse sur toute la surface de la Terre. La construction cesse. La ville est alors nommée Babel.</p>

            <p>C'est dans ce cadre que notre équipe de choc a décidé de vous pésenter ce petit projet.</p>

            <p>Nous sommes une equipe marseillaise de 5 personne, motivée et dynamique.</p>
          </ModalBody>
          <ModalFooter>
            <Button color="dark" onClick={this.toggle}>Fermer</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AboutUs;