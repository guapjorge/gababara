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
    jewelry_name: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 30
    },
    jewelry_price: {
        type: DataTypes.DECIMAL,
        allowNull: false,

    },
    image_url: {
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