// src/components/ItemDetail.jsx
import React from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';
import Description from './Description';

const ItemDetail = ({ item }) => {
  const handleAddToCart = (quantity) => {
    // Aquí puedes implementar la lógica para agregar el item al carrito
    console.log(`Agregando ${quantity} unidades de ${item.name} al carrito.`);
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
