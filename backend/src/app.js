const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const sequelize = require('./config/database');

const app = express();

// Middlewares globaux
app.use(helmet());
app.use(express.json());
app.use(cors()); // on resserrera l'origine quand le front sera en place

// Route de health-check + test DB
app.get('/api/health', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({ status: 'ok', db: 'connected' });
  } catch (error) {
    console.error('Erreur de connexion à la base :', error.message);
    res.status(500).json({ status: 'error', db: 'not_connected' });
  }
});

const port = process.env.API_PORT || 4000;
app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
