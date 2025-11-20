const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Artisan = sequelize.define(
  'Artisan',
  {
    id_artisan: {
      type: DataTypes.CHAR(36),
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    note: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    localisation: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    a_propos: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    site_web: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    photo_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    top_artisan: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    id_specialite: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'artisan',
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Artisan;
