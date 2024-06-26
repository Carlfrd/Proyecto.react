// src/components/CartWidget.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = ({ cartItems, totalPrice }) => {
  return (
    <div>
      <Link to="/cart" style={styles.link}>
        <img src="/path-to-your-cart-icon.png" alt="Cart" style={styles.icon} />
        <span style={styles.total}>Total: ${totalPrice}</span>
      </Link>
    </div>
  );
};

const styles = {
  link: {
    textDecoration: 'none',
    color: '#fff',
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    width: '30px',
    height: 'auto',
    marginRight: '5px'
  },
  total: {
    fontSize: '1rem'
  }
};

export default CartWidget;
