/**
 ** Controls reducer
 **/
import { INPUT_FILE, INPUT_NUMBER, INPUT_BUTTON, INPUT_CHECKBOX } from '../actions';

const controls = (state = [], action) => {
  switch(action.type) {
    case INPUT_FILE:
      return state;
    case INPUT_NUMBER:
      return state;
    case INPUT_BUTTON:
      return state;
    case INPUT_CHECKBOX:
      const nextState = state.map((e, i) => {
        return i !== action.id ? { ...e } : { ...e, value: e.value === false };
      });
      return nextState;
    default:
      return state;
  }
}

export default controls;
