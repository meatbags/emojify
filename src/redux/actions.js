export const INPUT_BUTTON = 'INPUT_BUTTON';
export const INPUT_FILE = 'INPUT_FILE';
export const INPUT_NUMBER = 'INPUT_NUMBER';
export const INPUT_CHECKBOX = 'INPUT_CHECKBOX';

export function inputButton(id) {
  return {
    type: INPUT_BUTTON,
    id,
  }
}

export function inputFile(id, value) {
  return {
    type: INPUT_FILE,
    id,
    value,
  }
}

export function inputNumber(id, value) {
  return {
    type: INPUT_NUMBER,
    id,
    value,
  }
}

export function inputCheckbox(id) {
  return {
    type: INPUT_CHECKBOX,
    id,
  }
}
