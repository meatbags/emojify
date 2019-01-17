import React from 'react';
import PropTypes from 'prop-types';

class File extends React.Component {
  render() {
    return (
      <div className={`input-file ${this.props.disabled ? 'disabled' : ''}`}>
        <div className='input-file__label'>{this.props.label}</div>
        <div className='input-file__input'>
          <input
            type="file"
            onChange={e => this.props.onChange(e, this.props)}
            />
        </div>
      </div>
    );
  }
}

File.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default File;
