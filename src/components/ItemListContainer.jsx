// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
            { id: 2, name: 'picada2', category: 'picada2', foto: 'https://media.istockphoto.com/id/1283251624/es/foto/tabla-de-charcuter%C3%ADa-tem%C3%A1tica-de-oto%C3%B1o-con-queso-y-aperitivos.jpg?s=612x612&w=0&k=20&c=bTjMEBIjoe49oQ9PKxjfmCQMqq5fVaHAG3DrCKb0gpE=' },
            { id: 3, name: 'picada3', category: 'picada3', foto: 'https://media.istockphoto.com/id/1565535096/es/foto/aperitivo-mediterr%C3%A1neo-antipasto-tabla-de-madera-embutidos-de-embutidos-de-embutidos-y-queso.jpg?s=612x612&w=0&k=20&c=_GHhfUfgB8rEXdX1sT24G9hAlzwgTZ2_uVnMuEyOtMY=' },
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
      <div className="row">
        {items.map(item => (
          <div key={item.id} className="col-4">
            <div className="card">
              <img src={item.foto} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <Link to={`/item/${item.id}`} className="btn btn-primary">DETALLES</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
