import React from 'react';
import { Button } from 'reactstrap';
import './assets/css/listen.scss';
import { FaHeadphones } from 'react-icons/fa';

export default class Equalizer extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }
  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  render() {
    return (
      <div>
        <Button className="listen" color="secondary" onClick={this.props.makeApiCall}>écouter< FaHeadphones className='listen-icon' size="15px" /></Button>
      </div>
    );
  }
}