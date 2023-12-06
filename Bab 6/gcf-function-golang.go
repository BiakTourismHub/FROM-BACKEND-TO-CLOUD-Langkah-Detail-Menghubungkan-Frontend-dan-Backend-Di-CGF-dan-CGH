// Contoh fungsi Google Cloud Function dengan Golang
func HandleHTTPTrigger(w http.ResponseWriter, r *http.Request) {
	// Logika aplikasi
	// Mengirim respons ke Frontend
	fmt.Fprint(w, "Data berhasil diambil")
}
 