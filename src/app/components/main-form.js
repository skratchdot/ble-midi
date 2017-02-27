import React, { Component } from 'react';
import { connect } from 'react-redux';

export class MainForm extends Component {
  render() {
    return (
      <div>
        The Form
      </div>
    );
  }
}

export default connect()(MainForm);
