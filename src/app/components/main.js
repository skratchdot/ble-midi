import { Box, VBox } from 'react-layout-components';
import React, { PureComponent } from 'react';
import Keys from './keys';
import RaisedButton from 'material-ui/RaisedButton';
import SelectChannel from './select-channel';
import SelectInstrument from './select-instrument';
import { connect } from 'react-redux';
import { midiOn } from '../actions/midi';
import { startScan } from '../actions/bluetooth';

export class MainForm extends PureComponent {
  static propTypes = {
    bluetooth: React.PropTypes.any,
    handleStartScan: React.PropTypes.func,
    logToConsole: React.PropTypes.func,
    midi: React.PropTypes.any
  };
  render() {
    const {
      bluetooth,
      handleStartScan,
      logToConsole,
      midi
    } = this.props;
    return (
      <div>
        <VBox style={{ marginBottom: 54 }}>
          <RaisedButton
            label="Scan For Bluetooth MIDI Devices"
            primary={true}
            onClick={handleStartScan}
          />
          <RaisedButton
            label="Log To Console"
            onClick={logToConsole.bind(null, bluetooth, midi)}
          />
        </VBox>
        <Box justifyContent="space-around" style={{ marginBottom: 54 }}>
          <Box>
            <SelectChannel />
          </Box>
          <Box>
            <SelectInstrument />
          </Box>
        </Box>
        <VBox center style={{ marginBottom: 54 }}>
          <Keys startNote={0} endNote={127} />
        </VBox>
        <VBox
          center
          style={{
            maxHeight: '50vh',
            maxWidth: '80vw'
          }}
        >
          <Box>
            <Keys startNote={60} endNote={83} />
          </Box>
        </VBox>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  bluetooth: state.bluetooth,
  midi: state.midi
});

export const mapDispatchToProps = dispatch => ({
  handleStartScan: () => dispatch(startScan()),
  handleMidiOn: note => {
    dispatch(midiOn(note));
  },
  logToConsole: (bluetooth, midi) => {
    // eslint-disable-next-line
    console.log(bluetooth.toJSON(), midi.toJSON());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);
