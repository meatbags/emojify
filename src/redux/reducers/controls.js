/**
 ** Controls reducer
 **/

import { INPUT_FILE, INPUT_NUMBER, INPUT_BUTTON, INPUT_CHECKBOX } from '../actions';

const controls = (state = {}, action) => {
  const nextState = { ...state };

  // find target control
  let target = null;
  Object.keys(nextState).forEach(key => {
    if (action.id === key) {
      target = nextState[key];
    }
  });

  // apply action
  if (target) {
    switch(action.type) {
      case INPUT_FILE:
        return nextState;
      case INPUT_NUMBER:
        const value = action.value !== undefined ? parseInt(action.value) : null;
        if (!isNaN(value)) {
          target.value = Math.max(target.min, Math.min(target.max, value));
        }
        return nextState;
      case INPUT_BUTTON:
        return nextState;
      case INPUT_CHECKBOX:
        target.value = target.value === false;
        return nextState;
      default:
        break;
    }
  }

  return state;
}

export default controls;
