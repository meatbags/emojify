/**
 ** redux/initial_state.js
 ** the default redux state
 **/

export default {
  controls: [{
    type: 'checkbox',
    label: 'use default tilesheet',
    value: true,
  }, {
    type: 'file',
    label: 'input image',
    value: null,
  }, {
    type: 'number',
    label: 'tile size',
    value: 32,
  }, {
    type: 'number',
    label: 'output size',
    value: 32,
  }, {
    type: 'button',
    label: 'process',
    value: null
  }]
};
