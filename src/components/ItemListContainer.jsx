// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulación de llamada a un mock de datos
    const fetchItems = async () => {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          const allItems = [
            { id: 1, name: 'picada', category: 'picada', foto: 'https://media.istockphoto.com/id/1181946766/es/foto/tablero-de-quesos-con-una-selecci%C3%B3n-de-quesos-y-carnes-vista-superior-sobre-un-fondo-de-madera.jpg?s=612x612&w=0&k=20&c=TYUVAFBaUoFEprL9Tmp3Gs7YTFYX7-NvOYc6-N3PibI=' },
            { id: 2, name: 'picada', category: 'picada2', foto: 'https://media.istockphoto.com/id/1422816311/es/foto/tabla-de-cortar-madera-con-quesos-embutidos-y-mermeladas.jpg?s=1024x1024&w=is&k=20&c=3WSxwOwkC4qZzk7zVfocpHlospBaXhPCWjE5IpdcbDI=' },
            { id: 3, name: 'picada', category: 'picada3', foto: 'https://media.istockphoto.com/id/1565535096/es/foto/aperitivo-mediterr%C3%A1neo-antipasto-tabla-de-madera-embutidos-de-embutidos-de-embutidos-y-queso.jpg?s=612x612&w=0&k=20&c=_GHhfUfgB8rEXdX1sT24G9hAlzwgTZ2_uVnMuEyOtMY=' },
            // Más ítems aquí
          ];
          resolve(categoryId ? allItems.filter(item => item.category === categoryId) : allItems);
        }, 500);
      });
      setItems(data);
    };

    fetchItems();
  }, [categoryId]);

  return (
    <div className="container mt-5">
      {greeting && <h2>{greeting}</h2>}
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
