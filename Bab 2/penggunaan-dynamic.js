// Contoh penggunaan endpoint dinamis berdasarkan variabel
const dynamicEndpoint = condition ? PRODUCTS_ENDPOINT : ORDERS_ENDPOINT;

// Gunakan dynamicEndpoint dalam permintaan API
fetch(dynamicEndpoint)
  .then(response => response.json())
  .then(data => console.log(data));
