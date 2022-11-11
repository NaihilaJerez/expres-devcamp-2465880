'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bootcamp.init({
    nname: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isAlpha: {
          args: true, 
          msg: ' nname solo debe tener letras'
        },
        notEmpty: {
          args: true, 
          msg: 'nname  no debe estar vacio'
        },
        notNull: true,
      }
    },
    descripcion: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isAlpha: {
          args: true, 
          msg: 'descripcion  solo debe tener letras'
        },
        notEmpty: {
          args: true, 
          msg: 'descripcion no debe estar vacio'
        },
        notNull: true,
      }
    },
    phone: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty: {
          args: true, 
          msg: ' no debe estar vacio'
        },
        notNull: true,
      }
    }, 
    average_cost: DataTypes.FLOAT,
    average_rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bootcamp',
    timestamps: false
  });
  return Bootcamp;
};