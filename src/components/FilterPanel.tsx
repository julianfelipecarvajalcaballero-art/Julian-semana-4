import React from 'react';

interface Props {
  category: string;
  setCategory: (cat: string) => void;
  onlyVeggie: boolean;
  setOnlyVeggie: (val: boolean) => void;
}

export const FilterPanel: React.FC<Props> = ({ 
  category, setCategory, onlyVeggie, setOnlyVeggie 
}) => {
  const categories = ['Todas', 'Entrada', 'Plato Fuerte', 'Postre', 'Bebida'];

  return (
    <div className="filter-panel">
      <h4>Filtros</h4>
      
      <div className="filter-group">
        <label>Categoría</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="filter-group-row">
        <input 
          type="checkbox" 
          id="veggie" 
          checked={onlyVeggie} 
          onChange={(e) => setOnlyVeggie(e.target.checked)} 
        />
        <label htmlFor="veggie">Solo Vegetarianos 🌿</label>
      </div>
    </div>
  );
};