const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 2999;

// Import layanan
const mahasiswaRoutes = require('./servis/index.js');

// Middleware
app.use(bodyParser.json());

// Gunakan routes mahasiswa
app.use('/', mahasiswaRoutes);

// Endpoint utama
app.get('/', (req, res) => {
 res.json({ message: "Selamat Datang di Pertemuan 2 Service-Based Architecture" });
});

// Menjalankan server
app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});