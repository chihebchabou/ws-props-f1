import React from 'react';
import PropTypes from 'prop-types';
import SizeItem from './SizeItem';

const SizeList = props => {
  // console.log(props);
  const { sizes } = props;
  return sizes.map((size, i) => <SizeItem size={size} key={i} />);
};

SizeList.propTypes = {
  sizes: PropTypes.array.isRequired,
};

export default SizeList;
