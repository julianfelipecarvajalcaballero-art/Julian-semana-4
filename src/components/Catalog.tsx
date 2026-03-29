import React, { useState, useMemo } from 'react';
import { DISHES_MOCK } from '../data/items';
import { SortOption } from '../types';
import { useDebounce } from '../hooks/useDebounce';
import { ItemList } from './ItemList';
import { SearchBar } from './SearchBar';
import { FilterPanel } from './FilterPanel';
import { SortSelector } from './SortSelector';

export const Catalog: React.FC = () => {
  const [dishes] = useState(DISHES_MOCK);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todas');
  const [onlyVeggie, setOnlyVeggie] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('name-asc');

  const debouncedSearch = useDebounce(search, 300);

  // LÓGICA DE FILTRADO Y ORDENADO (Sin mutar original)
  const filteredDishes = useMemo(() => {
    let result = [...dishes];

    // Búsqueda
    if (debouncedSearch) {
      result = result.filter(d => 
        d.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        d.description.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }

    // Filtro Categoría
    if (category !== 'Todas') {
      result = result.filter(d => d.category === category);
    }

    // Filtro Veggie
    if (onlyVeggie) {
      result = result.filter(d => d.isVegetarian);
    }

    // Ordenamiento
    result.sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'time-asc') return a.waitTime - b.waitTime;
      return a.name.localeCompare(b.name);
    });

    return result;
  }, [debouncedSearch, category, onlyVeggie, sortBy, dishes]);

  return (
    <div className="catalog-container">
      <header>
        <h1>📖 Menú Interactivo</h1>
        <p>{filteredDishes.length} platillos encontrados</p>
      </header>

      <div className="catalog-layout">
        <aside className="sidebar">
          <SearchBar value={search} onChange={setSearch} />
          <FilterPanel 
            category={category} 
            setCategory={setCategory} 
            onlyVeggie={onlyVeggie} 
            setOnlyVeggie={setOnlyVeggie} 
          />
          <SortSelector value={sortBy} onChange={setSortBy} />
        </aside>

        <main>
          <ItemList items={filteredDishes} />
        </main>
      </div>
    </div>
  );
};