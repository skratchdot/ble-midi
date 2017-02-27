import React, { Component } from 'react';
import { blueA400, blueA700 } from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import MainForm from '../components/main-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NoBluetoothSupport from '../components/no-bluetooth-support';
import { connect } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueA400,
    primary2Color: blueA700
  }
});

export class App extends Component {
  static propTypes = {
    bluetoothEnabled: React.PropTypes.bool
  };
  render() {
    const { bluetoothEnabled } = this.props;
    const body = bluetoothEnabled ? <MainForm /> : <NoBluetoothSupport />;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title="BLE MIDI" showMenuIconButton={false} />
          {body}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(state => ({
  bluetoothEnabled: state.bluetoothEnabled
}))(App);
