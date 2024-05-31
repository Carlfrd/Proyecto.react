import React from 'react';

const CartWidget = () => {
  return (
    <div className="d-flex align-items-center">
      <i className="bi bi-cart" style={{ fontSize: '1.5rem', color: 'white' }}></i>
      <span className="badge bg-primary ms-2">0</span>
    </div>
  );
};

export default CartWidget;
