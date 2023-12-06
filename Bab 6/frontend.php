// Contoh implementasi login di Frontend (Laravel)
function loginUser(username, password) {
    // Mengirim permintaan login ke backend
    // Menyimpan token PASETO setelah berhasil login
    axios.post('/login', { username, password })

        .then(response => {
            const token = response.data;
            localStorage.setItem('token', token);
        })
        .catch(error => {
            console.error('Login 

failed', error);
        });
}
// Contoh implementasi pemesanan tiket di Frontend (Laravel)
function bookTicket(ticketDetails) {
    const token = localStorage.getItem('token');
    // Mengirim permintaan pemesanan tiket dengan menyertakan token PASETO
    axios.post('/api/tickets', ticketDetails, { headers: { 'Authorization': token } })
        .then(response => {
            console.log('Booking successful', response.data);
        })
        .catch(error => {
            console.error('Booking failed', error);
        });
}
