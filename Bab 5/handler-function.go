func handleLogin(w http.ResponseWriter, r *http.Request) {
	// Logika autentikasi pengguna
	userID := "exampleUserID"

	// Generate token
	token, err := generateToken(userID)
	if err != nil {
		http.Error(w, "Failed to generate token", http.StatusInternalServerError)
		return
	}

	// Kirim token sebagai respons
	w.Write([]byte(token))
}

func handleProtectedEndpoint(w http.ResponseWriter, r *http.Request) {
	// Mendapatkan token dari header atau tempat lainnya
	token := r.Header.Get("Authorization")

	// Verifikasi token
	userID, err := verifyToken(token)
	if err != nil {
		http.Error(w, "Invalid token", http.StatusUnauthorized)
		return
	}

	// Lanjutkan dengan logika proteksi endpoint
	fmt.Fprintf(w, "Authenticated user: %s", userID)
}
