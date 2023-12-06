// Contoh fungsi backend yang sederhana menggunakan Google Cloud Function
exports.myFunction = (req, res) => {
    const name = req.query.name || 'Dunia';
    res.status(200).send(`Halo, ${name}!`);
  };
  