import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    return (
      <div
        className={`input-checkbox ${this.props.value ? 'active' : ''}`}
        onClick={e => this.props.onClick(e, this.props)}
        >
        <div className='input-checkbox__label'>{this.props.label}</div>
        <div className='input-checkbox__inner'>
          <div className='input-checkbox__slider'>
            <div className='input-checkbox__indicator'></div>
          </div>
        </div>
      </div>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.bool,
  onClick: PropTypes.func
};

export default Checkbox;
