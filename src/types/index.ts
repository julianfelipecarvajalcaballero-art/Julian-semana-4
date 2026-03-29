export interface Dish {
  id: string;
  name: string;
  description: string;
  category: 'Entrada' | 'Plato Fuerte' | 'Postre' | 'Bebida';
  price: number;
  isVegetarian: boolean;
  isAvailable: boolean;
  waitTime: number; // en minutos
}

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'time-asc';