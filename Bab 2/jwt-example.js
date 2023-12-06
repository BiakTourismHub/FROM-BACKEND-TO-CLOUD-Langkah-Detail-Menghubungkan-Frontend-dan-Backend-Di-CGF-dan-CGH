const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Kunci rahasia untuk menandatangani token (sebaiknya disimpan secara aman)
const secretKey = 'kunciRahasiaYangAman';
// Endpoint untuk autentikasi dan mendapatkan token JWT
app.post('/api/login', (req, res) => {
  // Contoh: Validasi username dan password dari database atau sumber otentikasi lainnya
  const { username, password } = req.body;
  // Logika validasi otentikasi (contoh sederhana, sebaiknya diganti dengan metode yang lebih aman)
  if (username === 'pengguna' && password === 'rahasia') {
    // Buat token JWT dengan informasi pengguna tertentu
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    // Kirim token sebagai respons
    res.json({ token });
  } else {
    // Jika otentikasi gagal, kirim respons kesalahan
    res.status(401).json({ error: 'Otentikasi gagal' });
  }
});
// Middleware untuk memeriksa keberadaan dan validitas token pada setiap permintaan
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
// Endpoint yang memerlukan otentikasi
app.get('/api/secure-data', authenticateToken, (req, res) => {
  res.json({ message: 'Ini adalah data yang memerlukan otentikasi' });
});
// Menjalankan server pada port 3000
app.listen(3000, () => {
  console.log('Server berjalan di port 3000');
});
