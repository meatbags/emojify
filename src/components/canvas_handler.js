import React from 'react';
import PropTypes from 'prop-types';
import Canvas from './canvas';

class CanvasHandler extends React.Component {
  render() {
    return (
      <div className='canvas-handler'>
        <Canvas id='input' />
        <Canvas id='tilesheet' />
        <Canvas id='output' />
      </div>
    );
  }
}

export default CanvasHandler;
