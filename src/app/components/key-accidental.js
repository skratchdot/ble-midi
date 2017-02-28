import React, { PureComponent } from 'react';
import Key from './key';
import { connect } from 'react-redux';

export class KeyAccidental extends PureComponent {
  render() {
    return <Key {...this.props} fill="black" />;
  }
}

export default connect()(KeyAccidental);
