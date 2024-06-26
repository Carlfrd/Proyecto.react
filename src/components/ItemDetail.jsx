// src/components/ItemDetail.jsx
import React, { useState } from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';
import Description from './Description';

const ItemDetail = ({ item }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (quantity) => {
    const newItem = {
      id: item.id,
      name: item.name,
      quantity: quantity,
      price: item.price,
    };

    // Actualizar el estado del carrito
    setCart([...cart, newItem]);

    // Mensaje de confirmación
    console.log(`Agregado ${quantity} ${item.name} al carrito.`);
  };

  return (
    <div>
      <img src={item.foto} className="img-fluid" alt={item.name} />
      <h2>{item.name}</h2>
      <Description text={item.description} />
      <ItemQuantitySelector initial={1} stock={10} onAdd={handleAddToCart} />
      <AddItemButton onClick={() => handleAddToCart(1)} />
    </div>
  );
};

export default ItemDetail;
