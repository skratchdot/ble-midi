import React, { PureComponent } from 'react';
import { midiOff, midiOn } from '../actions/midi';
import { connect } from 'react-redux';
import { getIsPlaying } from '../selectors/index';

export class Key extends PureComponent {
  static defaultProps = {
    isPlaying: false,
    note: -1,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    fill: 'black',
    stroke: 'black'
  };
  static propTypes = {
    isPlaying: React.PropTypes.bool,
    note: React.PropTypes.number,
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    fill: React.PropTypes.any,
    stroke: React.PropTypes.any,
    handleMouseDown: React.PropTypes.func,
    handleMouseUp: React.PropTypes.func,
    handleMouseEnter: React.PropTypes.func,
    handleMouseOut: React.PropTypes.func,
    mouseDown: React.PropTypes.func
  };
  render() {
    const {
      isPlaying,
      note,
      x,
      y,
      width,
      height,
      fill,
      stroke,
      handleMouseDown,
      handleMouseUp,
      handleMouseEnter,
      handleMouseOut,
      mouseDown
    } = this.props;
    const style = {
      fill: fill,
      stroke: stroke
    };
    if (isPlaying) {
      style.fill = 'yellow';
    }
    return (
      <rect
        data-note={note}
        style={style}
        x={x}
        y={y}
        width={width}
        height={height}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseEnter={handleMouseEnter.bind(null, mouseDown)}
        onMouseOut={handleMouseOut.bind(null, mouseDown)}
      />
    );
  }
}

export const mapStateToProps = (state, props) => ({
  isPlaying: getIsPlaying(state, props),
  mouseDown: state.mouseDown
});

export const mapDispatchToProps = (dispatch, props) => ({
  handleMouseDown: () => dispatch(midiOn(props.note)),
  handleMouseUp: () => dispatch(midiOff(props.note)),
  handleMouseEnter: mouseDown => {
    if (mouseDown) {
      dispatch(midiOn(props.note));
    }
  },
  handleMouseOut: mouseDown => {
    if (mouseDown) {
      dispatch(midiOff(props.note));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Key);
