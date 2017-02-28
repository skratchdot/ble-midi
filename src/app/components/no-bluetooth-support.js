import React, { Component } from 'react';
import { redA700, white } from 'material-ui/styles/colors';
import { AlertWarning } from 'material-ui/svg-icons';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';

export class NoBluetoothSupport extends Component {
  render() {
    const style = {
      padding: 54,
      marginBottom: 54,
      backgroundColor: redA700,
      color: white,
      textAlign: 'center'
    };
    const linkStyle = {
      color: white
    };
    const urlBrowserSupport = 'http://caniuse.com/#feat=web-bluetooth';
    const urlWebBluetoothCG = 'https://webbluetoothcg.github.io/web-bluetooth/';
    return (
      <div>
        <Paper style={style} zDepth={5}>
          <AlertWarning
            style={{
              width: 54,
              height: 54,
              color: white
            }}
          />
          <br />
          Sorry, but your browser doesn't currently support
          the Bluetooth Web API.
          <p>
            Check out the current browser support:<br />
            <a style={linkStyle} href={urlBrowserSupport}>
              {urlBrowserSupport}
            </a>
          </p>
          <p>
            View the Web Bluetooth Community Group Spec:<br />
            <a style={linkStyle} href={urlWebBluetoothCG}>
              {urlWebBluetoothCG}
            </a>
          </p>
        </Paper>
      </div>
    );
  }
}

export default connect()(NoBluetoothSupport);
