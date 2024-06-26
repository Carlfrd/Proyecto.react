// src/components/AddItemButton.jsx
import React from 'react';

const AddItemButton = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Add to Cart</button>
    </div>
  );
};

export default AddItemButton;
