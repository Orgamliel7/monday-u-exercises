'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {

    }
  }
  Item.init({
    item_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    item_name: DataTypes.STRING,
    item_type: DataTypes.STRING,
    item_message: DataTypes.STRING,
    item_status: DataTypes.BOOLEAN,
    pokemon_id: DataTypes.STRING,
    pokemon_name: DataTypes.STRING,
    pokemon_type: [DataTypes.STRING],
    pokemon_image: DataTypes.STRING,
    // done_timestamp: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Item',
    tableName: 'item',
    timestamps: false
  });
  return Item;
};