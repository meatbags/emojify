import React from 'react';
import ControlBox from './containers/control_box';
import CanvasInput from './containers/canvas_input';
import CanvasTileSheet from './containers/canvas_tile_sheet';
import CanvasOutput from './containers/canvas_output';

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
          <div className='canvas-wrapper'>
            <CanvasInput id='input' />
            <CanvasTileSheet id='tilesheet' />
            <CanvasOutput id='output' />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
