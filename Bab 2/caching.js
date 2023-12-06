// Menggunakan cache untuk menyimpan hasil respons
const cache = {};

// Fungsi untuk mengambil data produk dengan caching
function fetchDataWithCaching(endpoint) {
  if (cache[endpoint]) {
    // Mengembalikan data dari cache jika sudah ada
    return Promise.resolve(cache[endpoint]);
  } else {
    // Jika belum ada di cache, lakukan fetch dan simpan ke cache
    return fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        cache[endpoint] = data;
        return data;
      });
  }
}
