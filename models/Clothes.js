const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Clothes extends Model {}

Clothes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    clothesName: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 30
    },
    clothesPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,

    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "Clothes"
  }
);

module.exports = Clothes;