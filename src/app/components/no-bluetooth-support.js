import React, { Component } from 'react';
import { redA700, white } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

export class NoBluetoothSupport extends Component {
  render() {
    const style = {
      margin: 40,
      padding: 40,
      backgroundColor: redA700,
      color: white
    };
    return (
      <div>
        <Paper style={style} zDepth={5}>
          Sorry, but your browser doesn't currently support
          the Bluetooth Web API.
        </Paper>
        <RaisedButton
          label="Try Anyways"
          primary={true}
          style={{ marginLeft: 40 }}
        />
      </div>
    );
  }
}

export default connect()(NoBluetoothSupport);
