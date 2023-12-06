const request = require('supertest'); // Modul untuk melakukan permintaan HTTP
const app = require('../app'); // Import aplikasi Express

// Tes untuk endpoint GET /api/products
describe('GET /api/products', () => {
  it('mengembalikan daftar produk yang valid', async () => {
    const response = await request(app).get('/api/products');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('products');
    expect(response.body.products).toBeInstanceOf(Array);
  });
});

// Tes untuk endpoint POST /api/orders
describe('POST /api/orders', () => {
  it('membuat pesanan baru dengan data yang valid', async () => {
    const orderData = { /* data pesanan yang valid */ };
    const response = await request(app).post('/api/orders').send(orderData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('order');
    expect(response.body.order).toHaveProperty('id');
    // ... tambahkan asert lainnya sesuai kebutuhan
  });

  it('gagal membuat pesanan dengan data yang tidak valid', async () => {
    const invalidOrderData = { /* data pesanan yang tidak valid */ };
    const response = await request(app).post('/api/orders').send(invalidOrderData);
    expect(response.status).toBe(400); // Misalnya, respons bad request untuk data yang tidak valid
    // ... tambahkan asert lainnya sesuai kebutuhan
  });
});
