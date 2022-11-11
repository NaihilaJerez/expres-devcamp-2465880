'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({
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
    descripcion: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isAlpha: {
          args: true, 
          msg: ' descripcion solo debe tener letras'
        },
        notEmpty: {
          args: true, 
          msg: ' descripcion no debe estar vacio'
        },
        notNull: true,
      }
    },
    weeks: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: {
          args: true,
          msg: 'weeks solo debe tener numeros'
        },
        notEmpty: {
          args: true,
          msg: 'weeks no debe estar vacio'
        },
        notNull: {
          args: true,
          msg: 'weeks no debe ser nulo'
        }
      }},
    enroll_cost: DataTypes.FLOAT,
    minimum_skill: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Courses', 
    timestamps: false
  });
  return Courses;
};