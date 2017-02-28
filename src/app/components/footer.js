import React, { Component } from 'react';
import GithubIcon from './icons/github';
import { connect } from 'react-redux';
import pkg from '../../../package.json';

export class Footer extends Component {
  render() {
    const style = {
      padding: '72px 54px',
      backgroundColor: 'rgb(33, 33, 33)',
      color: 'white',
      textAlign: 'center'
    };
    return (
      <footer style={style}>
        <p>
          Thanks for visiting!
        </p>
        <p>
          <a href={pkg.homepage}>ble-midi</a>
          &nbsp; is a Bluetooth Low Enegry MIDI library written in javascript.
        </p>
        <p>
          <a href={pkg.homepage}><GithubIcon /></a>
        </p>
        <p>
          Copyright &copy; {new Date().getFullYear()}
          <br />
          <a href="https://www.skratchdot.com/">skratchdot.com</a>
        </p>
      </footer>
    );
  }
}

export default connect()(Footer);
