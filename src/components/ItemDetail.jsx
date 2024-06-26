// src/components/ItemDetail.jsx
import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <img src={item.foto} className="img-fluid" alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <ItemCount initial={1} stock={10} />
    </div>
  );
};

export default ItemDetail;
