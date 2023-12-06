// Contoh file konfigurasi endpoint (config.js)
export const API_BASE_URL = 'https://api.example.com';
export const PRODUCTS_ENDPOINT = `${API_BASE_URL}/api/products`;
export const ORDERS_ENDPOINT = `${API_BASE_URL}/api/orders`;

// Dalam file lain
import { PRODUCTS_ENDPOINT } from './config';

fetch(PRODUCTS_ENDPOINT)
  .then(response => response.json())
  .then(data => console.log(data.products));
