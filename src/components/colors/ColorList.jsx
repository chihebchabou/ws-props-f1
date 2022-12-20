import React from 'react';
import ColorItem from './ColorItem';
import PropTypes from 'prop-types';

const ColorList = props => {
  // console.log(props);
  const colorList = Object.entries(props.colors);
  // console.log(colorList);
  return colorList.map(([color, value], i) => (
    <ColorItem color={color} value={value} key={i} />
  ));
};

ColorList.propTypes = {
  colors: PropTypes.object.isRequired,
};

export default ColorList;
