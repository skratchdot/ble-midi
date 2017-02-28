import React, { PureComponent } from 'react';
import Key from './key';
import { connect } from 'react-redux';

export class KeyRegular extends PureComponent {
  render() {
    return <Key {...this.props} fill="white" />;
  }
}

export default connect()(KeyRegular);
