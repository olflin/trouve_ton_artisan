const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categorie = sequelize.define(
  'Categorie',
  {
    id_categorie: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom_categorie: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'categorie',
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Categorie;
