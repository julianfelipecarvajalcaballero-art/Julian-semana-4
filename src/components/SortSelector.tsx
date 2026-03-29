import React from 'react';
import { SortOption } from '../types';

interface Props {
  value: SortOption;
  onChange: (val: SortOption) => void;
}

export const SortSelector: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="sort-selector">
      <label>Ordenar por:</label>
      <select value={value} onChange={(e) => onChange(e.target.value as SortOption)}>
        <option value="name-asc">Nombre (A-Z)</option>
        <option value="price-asc">Precio: Menor a Mayor</option>
        <option value="price-desc">Precio: Mayor a Menor</option>
        <option value="time-asc">Tiempo de espera (Menor primero)</option>
      </select>
    </div>
  );
};