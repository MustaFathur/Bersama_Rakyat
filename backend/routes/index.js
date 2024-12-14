var express = require("express");
var router = express.Router();
const { Program, Lembaga } = require('../models/index');

// Rute untuk mendapatkan semua lembaga
router.get("/lembaga", async (req, res) => {
  try {
    const lembaga = await Lembaga.findAll();
    res.json(lembaga);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rute untuk mendapatkan program berdasarkan ID lembaga (dengan data lembaga disertakan)
router.get("/lembaga/:id/program", async (req, res) => {
  try {
    const { id } = req.params;
    const program = await Program.findAll({
      where: {
        idLembaga: id,
      },
      include: [
        {
          model: Lembaga,
          as: 'lembaga', // Alias relasi dari model
        },
      ],
    });
    res.json(program);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
