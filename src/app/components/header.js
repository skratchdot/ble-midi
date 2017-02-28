import React, { Component } from 'react';
import BluetoothIcon from './icons/bluetooth';
import GithubIcon from './icons/github';
import MidiIcon from './icons/midi';
import { blueA400 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import pkg from '../../../package.json';

export class Header extends Component {
  render() {
    const urlBluetooth = 'https://www.bluetooth.com/';
    const urlMidi = 'https://www.midi.org/';
    const style = {
      padding: 54,
      backgroundColor: blueA400,
      color: 'white',
      textAlign: 'center'
    };
    return (
      <header style={style}>
        <h1>ble-midi</h1>
        <p>
          a Bluetooth Low Enegry MIDI library written in javascript
        </p>
        <p>
          <a href={urlBluetooth}><BluetoothIcon /></a>
          &nbsp;&nbsp;&nbsp;
          <a href={urlMidi}><MidiIcon /></a>
          &nbsp;&nbsp;&nbsp;
          <a href={pkg.homepage}><GithubIcon /></a>
        </p>
      </header>
    );
  }
}

export default connect()(Header);
