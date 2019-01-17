import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    return (
      <div
        className='input-button'
        onClick={e => this.props.onClick(e, this.props)}
        >
        {this.props.label}
      </div>
    );
  }
}

Button.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
