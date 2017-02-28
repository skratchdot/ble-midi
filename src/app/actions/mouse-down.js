/* eslint-env browser */
import * as types from '../constants/action-types';

export const setMouseDown = isMouseDown => ({
  type: types.SET_MOUSE_DOWN,
  payload: isMouseDown
});
