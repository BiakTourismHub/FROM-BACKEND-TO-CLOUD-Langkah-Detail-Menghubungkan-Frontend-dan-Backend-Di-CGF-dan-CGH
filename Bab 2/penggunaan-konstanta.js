// Contoh penggunaan konstanta dalam permintaan API menggunakan Fetch API

fetch(PRODUCTS_ENDPOINT)
  .then(response => response.json())
  .then(data => console.log(data.products));

// Contoh penggunaan konstanta dalam pengaturan endpoint Axios
axios.get(ORDERS_ENDPOINT)
  .then(response => console.log(response.data.order));
