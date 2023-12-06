	// Contoh endpoint login
	func handleLogin(w http.ResponseWriter, r *http.Request) {
		// Proses autentikasi
		// Generate PASETO token
		token := generatePasetoToken(user)
		// Kirim token sebagai respons
		w.Write([]byte(token))
	}

	// Contoh endpoint pemesanan tiket
	func handleTicketBooking(w http.ResponseWriter, r *http.Request) {
		// Verifikasi token PASETO untuk otorisasi
		if isValidToken(r.Header.Get("Authorization")) {
			// Proses pemesanan tiket
			// Kirim respons berhasil
			w.Write([]byte("Booking successful"))
		} else {
			// Kirim respons gagal jika tidak valid
			w.Write([]byte("Unauthorized"))
		}
	}
	
	