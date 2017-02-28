import React, { Component } from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import { connect } from 'react-redux';

export class BluetoothIcon extends Component {
  render() {
    return (
      <SvgIcon {...this.props} viewBox="0 0 93 93">
        <path
          fill="white"
          d="M50 93C26.252 93 7 73.748 7 50S26.252 7 50 7s43 19.252 43 43-19.252 43-43 43zm-4.094-6.75l5.125-5.125 15-15 2.158-2.156L66 61.842 53.75 50 66 38.156l2.187-2.094-2.156-2.156-15-15-5.123-5.125v28.627L36 32.844l-4.188 4.312L45.094 50 31.812 62.844 36 67.156l9.906-9.562V86.25zm6-14.47V56.595l7.72 7.47-7.72 7.717zm0-28.374V28.25l7.72 7.72-7.72 7.436z"
        />
      </SvgIcon>
    );
  }
}

export default connect()(BluetoothIcon);
