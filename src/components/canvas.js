import React from 'react';
import PropTypes from 'prop-types';

class Canvas extends React.Component {
  componentDidMount() {
    const cvs = this.refs[this.props.id];
    const ctx = cvs.getContext('2d');
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 100, 100);
  }

  render() {
    return (
      <div className='canvas'>
        <div className='canvas__label'>{this.props.id}</div>
        <canvas ref={this.props.id} />
      </div>
    )
  }
}

Canvas.propTypes = {
  id: PropTypes.string,
};

export default Canvas;
