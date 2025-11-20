const express = require('express');
const { Artisan, Specialite, Categorie } = require('../models');

const router = express.Router();

// GET /api/categories/:id/artisans
router.get('/categories/:id/artisans', async (req, res) => {
  const { id } = req.params;

  try {
    const artisans = await Artisan.findAll({
      include: [
        {
          model: Specialite,
          required: true,
          include: [
            {
              model: Categorie,
              required: true,
              where: { id_categorie: id },
            },
          ],
        },
      ],
      order: [['note', 'DESC']],
    });

    res.json(artisans);
  } catch (error) {
    console.error('Erreur GET /api/categories/:id/artisans :', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// GET /api/artisans/top
router.get('/artisans/top', async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { top_artisan: true },
      include: [
        {
          model: Specialite,
          include: [
            {
              model: Categorie,
            },
          ],
        },
      ],
      order: [['note', 'DESC']],
      limit: 3,
    });

    res.json(artisans);
  } catch (error) {
    console.error('Erreur GET /api/artisans/top :', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// GET /api/artisans/:id
router.get('/artisans/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const artisan = await Artisan.findByPk(id, {
      include: [
        {
          model: Specialite,
          include: [
            {
              model: Categorie,
            },
          ],
        },
      ],
    });

    if (!artisan) {
      return res.status(404).json({ message: 'Artisan non trouvé' });
    }

    res.json(artisan);
  } catch (error) {
    console.error('Erreur GET /api/artisans/:id :', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;