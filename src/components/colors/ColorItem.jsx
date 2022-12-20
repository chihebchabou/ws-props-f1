import React from 'react';
import PropTypes from 'prop-types';

const ColorItem = props => {
  // console.log(props);
  const { color, value } = props;

  // console.log(color, value);
  return (
    <span
      style={{
        display: 'inline-block',
        height: '1.5rem',
        width: '1.5rem',
        border: '1px solid black',
        margin: '0 0.2rem',
        background: value,
      }}
      className="rounded-circle"
      title={color}
    ></span>
  );
};

ColorItem.propTypes = {
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ColorItem;
