import React, { Component } from 'react';
import { blueA400, blueA700 } from 'material-ui/styles/colors';
import Footer from '../components/footer';
import Header from '../components/header';
import Main from '../components/main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NoBluetoothSupport from '../components/no-bluetooth-support';
import { VBox } from 'react-layout-components';
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
    bluetooth: React.PropTypes.obj
  };
  render() {
    const { bluetooth } = this.props;
    const alerts = [];
    if (!bluetooth.get('supported')) {
      alerts.push(<NoBluetoothSupport key="no-support" />);
    }
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <VBox style={{ minHeight: '100vh' }}>
          <VBox>
            <Header />
          </VBox>
          <VBox flexGrow={1} style={{ padding: 54 }}>
            {alerts}
            <Main />
          </VBox>
          <VBox>
            <Footer />
          </VBox>
        </VBox>
      </MuiThemeProvider>
    );
  }
}

export default connect(state => ({
  bluetooth: state.bluetooth
}))(App);
