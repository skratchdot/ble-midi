import React, { PureComponent } from 'react';
import KeyAccidental from './key-accidental';
import KeyRegular from './key-regular';
import { connect } from 'react-redux';

const ACCIDENTAL_INDEXES = [1, 3, 6, 8, 10];

export class Keys extends PureComponent {
  static defaultProps = {
    regularKeyWidth: 30,
    regularKeyHeight: 120,
    accidentalKeyWidth: 14,
    accidentalKeyHeight: 80,
    startNote: 0,
    endNote: 127
  };
  static propTypes = {
    regularKeyWidth: React.PropTypes.number,
    regularKeyHeight: React.PropTypes.number,
    accidentalKeyWidth: React.PropTypes.number,
    accidentalKeyHeight: React.PropTypes.number,
    startNote: React.PropTypes.number,
    endNote: React.PropTypes.number,
    style: React.PropTypes.any
  };
  render() {
    const {
      regularKeyWidth,
      regularKeyHeight,
      accidentalKeyWidth,
      accidentalKeyHeight,
      startNote,
      endNote,
      style
    } = this.props;
    const regularKeys = [];
    const accidentalKeys = [];
    const viewHeight = Math.max(regularKeyHeight, accidentalKeyHeight);
    let viewWidth = 0;
    let regularOffset = 0;
    let accidentalOffset = -(accidentalKeyWidth / 2);
    for (let note = startNote; note <= endNote; note++) {
      if (ACCIDENTAL_INDEXES.indexOf(note % 12) > -1) {
        accidentalKeys.push(
          <KeyAccidental
            key={note}
            note={note}
            x={accidentalOffset}
            y={0}
            width={accidentalKeyWidth}
            height={accidentalKeyHeight}
          />
        );
        viewWidth = accidentalOffset + accidentalKeyWidth;
      } else {
        regularKeys.push(
          <KeyRegular
            key={note}
            note={note}
            x={regularOffset}
            y={0}
            width={regularKeyWidth}
            height={regularKeyHeight}
          />
        );
        accidentalOffset += regularKeyWidth;
        regularOffset += regularKeyWidth;
        viewWidth = regularOffset + regularKeyWidth;
      }
    }
    return (
      <svg
        viewBox={`0 0 ${viewWidth} ${viewHeight}`}
        preserveAspectRatio="none"
        style={{
          cursor: 'pointer',
          overflow: 'visible',
          ...style
        }}
      >
        <g className="keys-regular">
          {regularKeys}
        </g>
        <g className="keys-accidental">
          {accidentalKeys}
        </g>
      </svg>
    );
  }
}

export default connect()(Keys);
