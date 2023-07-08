const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Furniture extends Model {}

Furniture.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    furniture_name: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 30
    },
    furniture_price: {
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
    modelName: "Furniture"
  }
);

module.exports = Furniture;