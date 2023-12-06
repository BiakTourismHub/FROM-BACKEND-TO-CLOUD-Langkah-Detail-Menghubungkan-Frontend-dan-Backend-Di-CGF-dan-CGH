// Contoh penggunaan Firebase Realtime Database di Laravel
function updateDataInFirebase(data) {
   // Mengupdate data ke Firebase Realtime Database
   firebase.database().ref('path/to/data').set(data);
}
