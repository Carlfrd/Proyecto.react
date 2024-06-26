// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Simulación de llamada a un mock de datos
    const fetchItem = async () => {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          const items = [
            { id: 1, name: 'Item 1', description: 'Item 1 description', foto: 'https://media.istockphoto.com/id/1181946766/es/foto/tablero-de-quesos-con-una-selecci%C3%B3n-de-quesos-y-carnes-vista-superior-sobre-un-fondo-de-madera.jpg?s=612x612&w=0&k=20&c=TYUVAFBaUoFEprL9Tmp3Gs7YTFYX7-NvOYc6-N3PibI=' },
            { id: 2, name: 'Item 2', description: 'Item 2 description', foto: 'https://media.istockphoto.com/id/1422816311/es/foto/tabla-de-cortar-madera-con-quesos-embutidos-y-mermeladas.jpg?s=1024x1024&w=is&k=20&c=3WSxwOwkC4qZzk7zVfocpHlospBaXhPCWjE5IpdcbDI=' },
            { id: 3, name: 'Item 3', description: 'Item 3 description', foto: 'https://media.istockphoto.com/id/1565535096/es/foto/aperitivo-mediterr%C3%A1neo-antipasto-tabla-de-madera-embutidos-de-embutidos-de-embutidos-y-queso.jpg?s=612x612&w=0&k=20&c=_GHhfUfgB8rEXdX1sT24G9hAlzwgTZ2_uVnMuEyOtMY=' },
            // Más ítems aquí
          ];
          const item = items.find(item => item.id === parseInt(itemId));
          resolve(item);
        }, 500);
      });
      setItem(data);
    };

    fetchItem();
  }, [itemId]);

  return (
    <div className="container mt-5">
      {item ? <ItemDetail item={item} /> : <p>Loading...</p>}
    </div>
  );
};

export default ItemDetailContainer;
