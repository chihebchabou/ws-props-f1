import React from 'react';
import ProductItem from './ProductItem';
import PropTypes from 'prop-types';

const ProductList = props => {
  const { products } = props;
  // console.log(products);
  const showPrice = price => alert(`price: ${price}`);
  return (
    <div className="row">
      {products.map(product => (
        <ProductItem
          key={product.id}
          title={product.name}
          product={product}
          showPrice={showPrice}
        >
          <span className="badge bg-secondary">{product.id}</span>
        </ProductItem>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
