import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import { connect } from 'react-redux';
import { setChannel } from '../actions/midi';

export class SelectChannels extends Component {
  static propTypes = {
    handleChange: React.PropTypes.func,
    midi: React.PropTypes.obj
  };
  render() {
    const { handleChange, midi } = this.props;
    const channels = new Array(16).fill(0).map((v, i) => ({
      value: i,
      display: i + 1
    }));
    return (
      <SelectField
        floatingLabelText="Midi Channel"
        value={midi.get('channel')}
        onChange={handleChange}
      >
        {channels.map(channel => (
          <MenuItem
            key={channel.value}
            value={channel.value}
            primaryText={`Channel ${channel.display}`}
          />
        ))}
      </SelectField>
    );
  }
}

export const mapStateToProps = state => ({
  midi: state.midi
});

export const mapDispatchToProps = dispatch => ({
  handleChange: (event, index, value) => dispatch(setChannel(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectChannels);
