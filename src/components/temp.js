import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleListItem } from '../redux/actions';
import ListItem from './list_item';

const List = ({listItems, onClick}) => (
  <div className='list'>
    {listItems.map((li, i) => (
      <ListItem key={i} {...li} onClick={() => onClick(i)} />
    ))}
  </div>
);

List.propTypes = {
  listItems: PropTypes.array,
  onClick: PropTypes.func
};

const mapStateToProps = state => {
  const { listItems } = state;
  return {
    listItems
  };
}

export default connect(mapStateToProps)(List);
