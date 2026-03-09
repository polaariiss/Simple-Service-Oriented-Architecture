const express = require('express');
const fs = require('fs');
const router = express.Router();

// Load data mahasiswa dari JSON File
function loadMahasiswa() {
 const data = fs.readFileSync('./servis/mhs.json');
 return JSON.parse(data);
}
// Simpan data Mahasiswa ke JSON file
function saveMahasiswa(mahasiswa) {
 fs.writeFileSync('./servis/mhs.json', JSON.stringify(mahasiswa, null, 2));
}
// GET: Data Semua Mahasiswa
router.get('/mahasiswa', (req, res) => {
 const mhs = loadMahasiswa();
 res.json(mhs);
});
// POST: Menambah data Mahasiswa
router.post('/mahasiswa', (req, res) => {
 const mhs = loadMahasiswa();
 const newMhs = {
 id: Date.now(),
 nama: req.body.nama,
 prodi: req.body.prodi
 };
 mhs.push(newMhs);
 saveMahasiswa(mhs);
 res.status(201).json(newMhs);
});
// Update Data Mahasiswa
router.put('/mahasiswa/:id', (req, res) => {
 const mhs = loadMahasiswa();
 const mhsId = parseInt(req.params.id);
 const mhsIndex = mhs.findIndex(mhs => mhs.id === mhsId);
 if (mhsIndex !== -1) {
 mhs[mhsIndex].nama = req.body.nama || mhs[mhsIndex].nama;
 mhs[mhsIndex].prodi = req.body.prodi || mhs[mhsIndex].prodi;
 saveMahasiswa(mhs);
 res.json(mhs[mhsIndex]);
 } else {
 res.status(404).json({ message: 'Data Mahasiswa tidak ada !' });
 }
});
// Hapus Data Mahasiswa
router.delete('/mahasiswa/:id', (req, res) => {
 const mhs = loadMahasiswa();
 const mhsId = parseInt(req.params.id);
 const updatedMhs = mhs.filter(user => user.id !== mhsId);
 if (updatedMhs.length !== mhs.length) {
 saveMahasiswa(updatedMhs);
 res.json({ message: 'Data Mahasiswa Berhasil di hapus' });
 } else {
 res.status(404).json({ message: 'Data Mahasiswa tidak ada !' });
 }
});

module.exports = router;
