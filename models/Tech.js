const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Tech extends Model {}

Tech.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    techName: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 30
    },
    techPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,

    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "Tech"
  }
);

module.exports = Tech;