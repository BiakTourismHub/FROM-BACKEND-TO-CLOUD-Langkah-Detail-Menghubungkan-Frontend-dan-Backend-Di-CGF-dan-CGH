// main.go
package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	// Membuat router menggunakan package gorilla/mux
	router := mux.NewRouter()

	// Menentukan route dan handler
	router.HandleFunc("/", homeHandler).Methods("GET")
	router.HandleFunc("/about", aboutHandler).Methods("GET")

	// Menjalankan server pada port 8080
	fmt.Println("Server berjalan di http://localhost:8080")
	http.ListenAndServe(":8080", router)
}

// Handler untuk route "/"
func homeHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Halaman Beranda")
}

// Handler untuk route "/about"
func aboutHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Tentang Kami")
}
