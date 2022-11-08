'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isAlpha: {
          args: true, 
          msg: 'name solo debe tener letras'
        },
        notEmpty: {
          args: true, 
          msg: 'name no debe estar vacio'
        },
        notNull: true,
      }
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail: {
          args: true, 
          msg: 'emai debe ser valido'
        },
        notEmpty: {
          args: true, 
          msg: 'email no debe estar vacio'
        },
        notNull: true,
      }
    },
    password: {
      type:DataTypes.STRING,
      validate:{
        len: {
          args: [5, 10] ,
          msg: 'debe trener entre 5 o 10 caracteresss'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};