import React from 'react';
import PropTypes from 'prop-types';
import * as Input from './inputs';

class ControlBox extends React.Component {
  constructor(props) {
    super(props);
  }

  _getInputComponent(e, key) {
    const disabled = e.disabledBy !== undefined && this.props.controls[e.disabledBy].value !== false;
    switch (e.type) {
      case 'number':
        return <Input.Number key={key} id={key} label={e.label} value={e.value} onChange={this.props.onInputNumber} />;
      case 'checkbox':
        return <Input.Checkbox key={key} id={key} label={e.label} value={e.value} onClick={this.props.onInputCheckbox} />;
      case 'file':
        return <Input.File key={key} id={key} label={e.label} onChange={this.props.onInputFile} disabled={disabled} />;
      case 'button':
        return <Input.Button key={key} id={key} label={e.label} onClick={this.props.onInputButton} />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div className='control-box'>{
        Object.keys(this.props.controls).map((key, i) => {
          return this._getInputComponent(this.props.controls[key], key);
        })
      }</div>
    );
  }
}

ControlBox.propTypes = {
  controls: PropTypes.object
};

export default ControlBox;
