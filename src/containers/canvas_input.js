import { connect } from 'react-redux';
import CanvasInput from '../components/canvas/canvas_input';

const mapDispatchToProps = dispatch => ({});
const mapStateToProps = state => ({
  inputTileSize: state.controls.inputTileSize.value,
});

export default connect(mapStateToProps, mapDispatchToProps)(CanvasInput);
