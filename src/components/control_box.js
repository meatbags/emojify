import React from 'react';
import PropTypes from 'prop-types';
import * as Input from './inputs';

class ControlBox extends React.Component {
  render() {
    return (
      <div className='control-box'>
        {this.props.controls.map((e, i) => {
          switch (e.type) {
            case 'number':
              return <Input.Number key={i} id={i} label={e.label} value={e.value} onChange={this.props.onInputNumber} />;
            case 'checkbox':
              return <Input.Checkbox key={i} id={i} label={e.label} value={e.value} onClick={this.props.onInputCheckbox} />;
            case 'file':
              return <Input.File key={i} id={i} label={e.label} onChange={this.props.onInputFile} />;
            case 'button':
              return <Input.Button key={i} id={i} label={e.label} onClick={this.props.onInputButton} />;
            default:
              return null;
          }
        })}
      </div>
    );
  }
}

ControlBox.propTypes = {
  controls: PropTypes.array
};

export default ControlBox;
