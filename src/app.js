import React from 'react';
import ControlBox from './containers/control_box';
import CanvasHandler from './components/canvas_handler';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='wrapper__control-box'>
          <ControlBox />
        </div>
        <div className='wrapper__canvas'>
          <CanvasHandler />
        </div>
      </div>
    );
  }
}

export default App;
