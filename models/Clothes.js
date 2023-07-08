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
    clothes_name: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 30
    },
    clothes_price: {
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
    modelName: "Clothes" 
  }
);

module.exports = Clothes;