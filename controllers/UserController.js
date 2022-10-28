const sequelize = require('../config/seq')
const {DataTypes} = require('sequelize')
const UserModel =require('../models/user')
const user = require('../models/user')
const User = UserModel (sequelize, DataTypes)
//get:obtener datos
exports.traerUsers=async(req, res)=>{
    const users = await User.findAll();
    res.status(200).json({
        "success": true, 
        "data": users
    })
}
//obtener recursos por id 
exports.traerUsersPorId= async (req, res)=>{
    const userId = await User.findByPk(req.params.id)
    res.status(200).json({
        "success": true, 
        "data": userId
    })
}
//POST: crear un nuevo recurso
exports.crearUser = async (req, res)=>{
    const newUser = await User.create(req.body);
    res.status(201).json({
        "success": true, 
        "data": newUser
    })
}
//put-path 
exports.actualizarUser = async (req, res)=>{
    //actializar usuario 
    await User.update(req.body, {
        where: {
          id:req.params.id 
        }
      });
      //consultar datos actializados 
      const upUser = await User.findByPk(req.params.id)
    res.status(200).json({
        "success": true, 
        "data": upUser
    })
}
//DELETE: borara usuario 
exports.borrarUser = (req, res)=>{
    res.status(200).json({
        "message": `aqui se va a borrar el usuario ${req.params.id}`
    })
}