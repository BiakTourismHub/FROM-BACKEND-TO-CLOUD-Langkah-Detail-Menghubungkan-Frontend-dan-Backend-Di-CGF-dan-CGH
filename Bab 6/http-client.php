// Contoh penggunaan Laravel HTTP Client untuk komunikasi dengan Google Cloud Function
function fetchDataFromCloudFunction() {
    axios.get('https://google-cloud-function-url')


        .then(response => {
            console.log('Data from Google Cloud Function:', response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}Mengirim pesan ke topik
$topic->publish(['data' => 'Hello, World!']);
