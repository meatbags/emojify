import { connect } from 'react-redux';
import { inputFile, inputButton, inputCheckbox, inputNumber } from '../redux/actions';
import ControlBox from '../components/control_box';

const mapDispatchToProps = dispatch => {
  return {
    onInputFile: (e, props) => {
      dispatch(inputFile(props.id, e.target.value || null));
    },
    onInputNumber: (e, props) => {
      dispatch(inputNumber(props.id, e.target.value || null));
    },
    onInputCheckbox: (e, props) => {
      dispatch(inputCheckbox(props.id));
    },
    onInputButton: (e, props) => {
      dispatch(inputNumber(props.id));
    },
  };
};

const mapStateToProps = state => {
  const { controls } = state;
  return { controls };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlBox);
