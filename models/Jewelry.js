const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Jewelry extends Model {}

Jewelry.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    jewelryName: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 30
    },
    jewelryPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,

    },
    image: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "Jewelry"
  }
);

module.exports = Jewelry;