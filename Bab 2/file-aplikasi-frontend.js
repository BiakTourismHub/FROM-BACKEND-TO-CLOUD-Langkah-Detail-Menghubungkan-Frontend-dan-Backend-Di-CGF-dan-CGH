// File aplikasi frontend
import { PRODUCTS_ENDPOINT } from './apiConfig';

// Menggunakan endpoint dalam permintaan Fetch API
fetch(PRODUCTS_ENDPOINT)
  .then(response => response.json())
  .then(data => console.log(data.products));
