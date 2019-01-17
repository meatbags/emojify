import React from 'react';
import PropTypes from 'prop-types';

class Number extends React.Component {
  render() {
    return (
      <div className='input-number'>
        <div className='input-number__label'>{this.props.label}</div>
        <div className='input-number__input'>
          <input type='number' min={this.props.min} max={this.props.max} value={this.props.value} onChange={e => this.props.onChange(e, this.props)} />
        </div>
      </div>
    )
  }
}

Number.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func
}

export default Number;
