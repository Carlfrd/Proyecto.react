// src/components/ItemQuantitySelector.jsx
import React, { useState } from 'react';

const ItemQuantitySelector = ({ initial, stock, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increase = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    onAdd(quantity);
  };

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{quantity}</span>
      <button onClick={increase}>+</button>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
};

export default ItemQuantitySelector;
