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
    furnitureName: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 30
    },
    furniturePrice: {
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
    modelName: "Furniture"
  }
);

module.exports = Furniture;