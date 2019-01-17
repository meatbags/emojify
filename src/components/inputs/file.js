import React from 'react';
import PropTypes from 'prop-types';

class File extends React.Component {
  render() {
    return (
      <div className='input-file'>
        <div className='input-file__label'>{this.props.label}</div>
        <div className='input-file__input'>
          <input
            type="file"
            title=" "
            onChange={e => this.props.onChange(e, this.props)}
            />
        </div>
      </div>
    );
  }
}

File.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  onChange: PropTypes.func
};

export default File;
