import React from 'react';
import PropTypes from 'prop-types';
import ColorList from '../colors/ColorList';

const ProductItem = props => {
  // console.log(props);

  const { product, title } = props;

  const { name, image, sizes, colors, description, price } = product;
  return (
    <div className="col-md-4">
      <h3>{title}</h3>
      <div className="card mb-3">
        <img src={image} alt="" className="card-image-top" />
        <div className="card-body">
          <h3 className="card-title text-center">{name}</h3>
          <p className="card-text text-center">{/* sizes */}</p>
          <p className="card-text text-center">
            <ColorList colors={colors} />
          </p>
          <p className="card-text text-center">{description}</p>
          <p className="card-text text-center">
            <a href="#!" className="card-link">
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
};

export default ProductItem;
