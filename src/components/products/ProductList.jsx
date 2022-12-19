import React from 'react';
import ProductItem from './ProductItem';
import PropTypes from 'prop-types';

const ProductList = props => {
  const { products } = props;
  // console.log(products);
  return (
    <div className="row">
      {products.map(product => (
        <ProductItem key={product.id} title={product.name} product={product} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
