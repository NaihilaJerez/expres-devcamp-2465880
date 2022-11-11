'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reviews.init({
    title: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isAlpha: {
          args: true, 
          msg: ' title solo debe tener letras'
        },
        notEmpty: {
          args: true, 
          msg: ' title no debe estar vacio'
        },
        notNull: true,
      }
    }, 
    text: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isAlpha: {
          args: true, 
          msg: ' text solo debe tener letras'
        },
        notEmpty: {
          args: true, 
          msg: ' text no debe estar vacio'
        },
        notNull: true,
      }
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: {
          args: true,
          msg: 'rating solo debe tener numeros'
        },
        notEmpty: {
          args: true,
          msg: 'rating no debe estar vacio'
        },
        notNull: {
          args: true,
          msg: 'rating no debe ser nulo'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Reviews',
    timestamps: false
  });
  return Reviews;
};