import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, NavLink, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            visible: true
        };

        this.toggle = this.toggle.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    onDismiss() {
        this.setState({ visible: false });
    }

    render() {
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

        return (
            <div>
                <NavLink className="footer-modal" onClick={this.toggle}>Contact</NavLink>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle} close={closeBtn}>Contactez nous</ModalHeader>
                    <ModalBody>
                    <Form>
                        <FormGroup>
                        <Label for="exampleEmail"></Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="@ mail" />
                        </FormGroup>
                        <FormGroup>
                        <Label for="exampleName"></Label>
                        <Input type="name" name="name" id="exampleName" placeholder="name" />
                        </FormGroup>
                        <FormGroup>
                        <Label for="exampleSelect"></Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Suggestions</option>
                            <option>Bug</option>
                        </Input>
                        </FormGroup>
                        <FormGroup>
                        <Label for="exampleText"></Label>
                        <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                        <FormGroup>
                        <Label for="exampleFile">Ajouter un fichier</Label>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                            Vous pouvez ajouter un fichier pour une recommandation ou pour signaler un bug
                        </FormText>
                        </FormGroup>
                        <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}
                            Je ne suis pas un robot
                        </Label>
                        </FormGroup>
                    </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="dark" onClick={this.toggle}>Fermer</Button>
                        <Button onClick={this.toggle}>Envoyer</Button>
                        <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                            I am an alert and I can be dismissed!
                        </Alert>
                    </ModalFooter>
                </Modal>
                
            </div>
        );
    }
}

export default Contact;