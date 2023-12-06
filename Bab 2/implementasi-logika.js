// Menggunakan Fetch API untuk mengambil data produk
fetch(productsEndpoint)
  .then(response => response.json())
  .then(data => {
    // Proses data produk yang diterima
    console.log(data.products);
  })
  .catch(error => {
    // Tangani kesalahan jika ada
    console.error('Error fetching product data:', error);
  });
