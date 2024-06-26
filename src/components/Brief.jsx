// src/components/Brief.jsx
import React from 'react';

const Brief = ({ items, total }) => {
  return (
    <div>
      <h2>Brief Summary</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Brief;
