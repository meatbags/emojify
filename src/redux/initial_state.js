/**
 ** redux/initial_state.js
 ** the default redux state
 **/

export default {
  controls: {
    useDefaultTileSheet: {
      type: 'checkbox',
      label: 'Use Default Tile Sheet',
      value: true,
    },
    inputTileSheet: {
      type: 'file',
      label: 'Custom Tile Sheet',
      value: null,
      disabledBy: 'useDefaultTileSheet',
    },
    inputTileSize: {
      type: 'number',
      label: 'Input Tile Size',
      value: 32,
      min: 5,
      max: 256,
    },
    inputImage: {
      type: 'file',
      label: 'Input Image',
      value: null,
    },
    outputTileSize: {
      type: 'number',
      label: 'Output Tile Size',
      value: 32,
      min: 5,
      max: 256,
    },
    processButton: {
      type: 'button',
      label: 'Process Image',
      value: null
    }
  }
};
