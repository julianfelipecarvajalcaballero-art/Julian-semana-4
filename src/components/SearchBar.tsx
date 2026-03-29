import React from 'react';

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="search-bar">
      <label>🔍 Buscar Platillo</label>
      <input
        type="text"
        placeholder="Ej: Tacos, Pasta..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button className="clear-btn" onClick={() => onChange('')}>
          Limpiar
        </button>
      )}
    </div>
  );
};