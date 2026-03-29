import React from 'react';
import { Dish } from '../types';

interface Props { item: Dish }

export const ItemCard: React.FC<Props> = ({ item }) => {
  return (
    <div className={`dish-card ${!item.isAvailable ? 'unavailable' : ''}`}>
      <div className="card-header">
        <span className="category-badge">{item.category}</span>
        {item.isVegetarian && <span className="veggie-badge">🌿 Veggie</span>}
      </div>
      
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      
      <div className="card-footer">
        <span className="price">${item.price.toFixed(2)}</span>
        <span className="time">⏱️ {item.waitTime} min</span>
      </div>

      {!item.isAvailable && <div className="overlay">AGOTADO</div>}
    </div>
  );
};