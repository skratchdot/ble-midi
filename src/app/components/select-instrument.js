import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import { connect } from 'react-redux';
import getInstruments from '../../midi/get-instruments';
import { setInstrument } from '../actions/midi';

const instruments = getInstruments();

export class SelectInstrument extends Component {
  static propTypes = {
    handleChange: React.PropTypes.func,
    midi: React.PropTypes.obj
  };
  render() {
    const { handleChange, midi } = this.props;
    return (
      <SelectField
        floatingLabelText="Instrument"
        value={midi.get('instrument')}
        onChange={handleChange}
      >
        {instruments.map(instrument => (
          <MenuItem
            key={instrument.val}
            value={instrument.val}
            primaryText={`${instrument.group} - ${instrument.name}`}
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
  handleChange: (event, index, value) => dispatch(setInstrument(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectInstrument);
