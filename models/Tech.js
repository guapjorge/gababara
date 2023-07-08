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
    tech_name: {
        type: DataTypes.STRING,
        allowNull: false,
        length: 30
    },
    tech_price: {
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
    modelName: "Tech"
  }
);

module.exports = Tech;