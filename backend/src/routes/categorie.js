const express = require('express');
const { Categorie } = require('../models');

const router = express.Router();

// GET /api/categories
router.get('/', async (req, res) => {
  try {
    const categories = await Categorie.findAll({
      order: [['id_categorie', 'ASC']],
    });
    res.json(categories);
  } catch (error) {
    console.error('Erreur GET /api/categories :', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;