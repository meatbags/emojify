import React from 'react';
import PropTypes from 'prop-types';

class CanvasInput extends React.Component {
  componentDidMount() {
    this.cvs = this.refs[this.props.id];
    this.ctx = this.cvs.getContext('2d');
    this.draw();
  }

  componentDidUpdate() {
    
  }

  draw() {

  }

  render() {
    return (
      <canvas ref={this.props.id}></canvas>
    );
  }
}

CanvasInput.propTypes = {
  id: PropTypes.string,
  inputTileSize: PropTypes.number,
}

export default CanvasInput;
