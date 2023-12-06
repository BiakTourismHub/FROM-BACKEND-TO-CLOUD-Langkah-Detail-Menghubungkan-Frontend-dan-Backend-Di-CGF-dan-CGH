// Contoh penerbit pesan (publish message) di Laravel
use Google\Cloud\PubSub\PubSubClient;

$pubsub = new PubSubClient();
$topic = $pubsub->topic('my-topic');

// Mengirim pesan ke topik
$topic->publish(['data' => 'Hello, World!']);
