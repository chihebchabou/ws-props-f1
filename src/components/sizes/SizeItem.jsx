import React from 'react';
import PropTypes from 'prop-types';

const SizeItem = props => {
  console.log(props);
  const { size } = props;
  return <span style={{ padding: '0 0.5rem' }}>{size}</span>;
};

SizeItem.propTypes = {
  size: PropTypes.string.isRequired,
};

export default SizeItem;
