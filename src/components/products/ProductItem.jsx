import React from 'react';
import PropTypes from 'prop-types';
import ColorList from '../colors/ColorList';
import SizeList from '../sizes/SizeList';

const ProductItem = props => {
  // console.log(props);

  const { product, title, showPrice, children } = props;

  const { name, image, sizes, colors, description, price } = product;

  const handleClick = e => {
    e.preventDefault();
    console.log(e.target);
    showPrice(price);
  };
  return (
    <div className="col-md-4">
      <h3>
        {title} | {children}
      </h3>
      <div className="card mb-3">
        <img src={image} alt="" className="card-image-top" />
        <div className="card-body">
          <h3 className="card-title text-center">{name}</h3>
          <p className="card-text text-center">
            <SizeList sizes={sizes} />
          </p>
          <p className="card-text text-center">
            <ColorList colors={colors} />
          </p>
          <p className="card-text text-center">{description}</p>
          <p className="card-text text-center">
            <a href="#!" className="card-link" onClick={handleClick}>
              price
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

ProductItem.defaultProps = {
  title: 'Default Title',
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  title: PropTypes.string,
  showPrice: PropTypes.func.isRequired,
};

export default ProductItem;
