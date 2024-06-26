// src/components/Item.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div className="col-4">
      <div className="card">
        <img src={item.foto} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <Link to={`/item/${item.id}`} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
