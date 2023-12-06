// Import modul Express
const express = require('express');

// Inisialisasi aplikasi Express
const app = express();


// Endpoint untuk mengambil data produk (metode: GET)
app.get('/api/products', (req, res) => {
  // Logika untuk mengambil data produk dari database atau sumber lainnya
  const products = [
    { id: 1, name: 'Product 1', price: 20.0 },
    { id: 2, name: 'Product 2', price: 30.0 },
    // ... data produk lainnya
  ];

  // Kirim respon dalam format JSON
  res.json({ products });
});

// Endpoint untuk membuat pesanan (metode: POST)
app.post('/api/orders', (req, res) => {
  // Logika untuk membuat pesanan berdasarkan data yang diterima dari frontend
  const order = {
    id: 123,
    products: [{ productId: 1, quantity: 2 }, { productId: 2, quantity: 1 }],
    total: 80.0,
    // ... informasi pesanan lainnya
  };

  // Kirim respon dalam format JSON
  res.json({ order });
});

// Menjalankan server pada port 3000
app.listen(3000, () => {
  console.log('Server berjalan di port 3000');
});
