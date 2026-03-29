import { Dish } from '../types';

export const DISHES_MOCK: Dish[] = [
  { id: '1', name: 'Ensalada César', description: 'Lechuga romana, crotones y aderezo.', category: 'Entrada', price: 8.500, isVegetarian: true, isAvailable: true, waitTime: 10 },
  { id: '2', name: 'Corte New York', description: '300g de carne premium a la parrilla.', category: 'Plato Fuerte', price: 25.000, isVegetarian: false, isAvailable: true, waitTime: 25 },
  { id: '3', name: 'Pasta Alfredo', description: 'Salsa blanca cremosa y parmesano.', category: 'Plato Fuerte', price: 14.000, isVegetarian: true, isAvailable: false, waitTime: 15 },
  { id: '4', name: 'Mousse de Chocolate', description: 'Chocolate belga 70% cacao.', category: 'Postre', price: 6.500, isVegetarian: true, isAvailable: true, waitTime: 5 },
  { id: '5', name: 'Limonada Imperial', description: 'Limón fresco con toque de menta.', category: 'Bebida', price: 3.500, isVegetarian: true, isAvailable: true, waitTime: 3 },
  { id: '6', name: 'Tacos de Pastor', description: '5 tacos con piña y salsa especial.', category: 'Plato Fuerte', price: 12.000, isVegetarian: false, isAvailable: true, waitTime: 12 },
];