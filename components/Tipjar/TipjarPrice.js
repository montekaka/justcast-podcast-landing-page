import React from 'react';

const TipjarPrice = ({id, slug, product_currency_code_value, handlePriceClick, price}) => {
  return (
    <div 
      className="btn btn-sm btn-outline-success btn-pill"
      style={{marginRight: 10}}
      onClick={() => {
      handlePriceClick(slug, id)
    }}>
      {product_currency_code_value} ${price/100}
    </div>
  )
}

export default TipjarPrice