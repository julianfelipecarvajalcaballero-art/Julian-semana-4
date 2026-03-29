import React from 'react';
import { Dish } from '../types';
import { ItemCard } from './ItemCard';
import { EmptyState } from './EmptyState';

interface Props {
  items: Dish[];
}

export const ItemList: React.FC<Props> = ({ items }) => {
  if (items.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="dish-grid">
      {items.map((dish) => (
        <ItemCard key={dish.id} item={dish} />
      ))}
    </div>
  );
};