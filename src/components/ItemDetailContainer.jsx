// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          const items = [
            { id: 1, name: 'picada', description: 'descripcion', foto: 'https://media.istockphoto.com/id/1181946766/es/foto/tablero-de-quesos-con-una-selecci%C3%B3n-de-quesos-y-carnes-vista-superior-sobre-un-fondo-de-madera.jpg?s=612x612&w=0&k=20&c=TYUVAFBaUoFEprL9Tmp3Gs7YTFYX7-NvOYc6-N3PibI=' },
            { id: 2, name: 'picada2', description: 'descripcion', foto: 'https://media.istockphoto.com/id/1283251624/es/foto/tabla-de-charcuter%C3%ADa-tem%C3%A1tica-de-oto%C3%B1o-con-queso-y-aperitivos.jpg?s=612x612&w=0&k=20&c=bTjMEBIjoe49oQ9PKxjfmCQMqq5fVaHAG3DrCKb0gpE=' },
            { id: 3, name: 'picada3', description: 'descripcion', foto: 'https://media.istockphoto.com/id/1565535096/es/foto/aperitivo-mediterr%C3%A1neo-antipasto-tabla-de-madera-embutidos-de-embutidos-de-embutidos-y-queso.jpg?s=612x612&w=0&k=20&c=_GHhfUfgB8rEXdX1sT24G9hAlzwgTZ2_uVnMuEyOtMY=' },
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
      {item ? (
        <div>
          <img src={item.foto} className="img-fluid" alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      ) : (
        <p>cargando</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
