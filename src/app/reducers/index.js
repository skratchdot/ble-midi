import bluetooth from './bluetooth';
import { combineReducers } from 'redux';
import midi from './midi';
import mouseDown from './mouse-down';
import { responsiveStateReducer } from 'redux-responsive';

const rootReducer = combineReducers({
  bluetooth,
  browser: responsiveStateReducer,
  midi,
  mouseDown
});

export default rootReducer;
