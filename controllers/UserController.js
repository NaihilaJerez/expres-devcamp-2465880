const sequelize = require('../config/seq')
const {DataTypes, ValidationError} = require('sequelize')
const UserModel =require('../models/user')
const user = require('../models/user')
const User = UserModel (sequelize, DataTypes)
//get:obtener datos
exports.traerUsers=async(req, res)=>{
    try {
        const users = await User.findAll();
    res.status(200).json({
        "success": true, 
        "data": users
    })
    } catch (error) {
        res
        .status(500)
        .json({
        "success": false, 
        "error": "error de servidor"
    })
    }
    
}
//obtener recursos por id 
exports.traerUsersPorId= async (req, res)=>{
    try {
        const userId = await User.findByPk(req.params.id)
        //si ujsuario no existe 
        if(!userId){
            res.status(422).json({
                "success": false, 
                "errors": [
                    "el usuario no existe"
                ]
        })
    }
    else{
    res.status(200).json({
        "success": true, 
        "data": userId
    })
}
    } catch (error) {
        res
        .status(500)
        .json({
        "success": false, 
        "error": "error de servidor"
    })
    }
    
}
//POST: crear un nuevo recurso
exports.crearUser = async (req, res)=>{
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({
            "success": true, 
            "data": newUser
    })
    } catch (error) {
        if(error instanceof ValidationError){
            const errores= error.errors.map((e)=> e.message)
        res
            .status(442)
            .json({
            "success": false, 
            "error": errores
        })
        }
        else{
            //elsee de servidor 
        res
            .status(500)
            .json({
            "success": false, 
            "error": "error de servidor"
        })
        }
        
    }
    
}
//put-path 
exports.actualizarUser = async (req, res)=>{
    try {
        //consultar datos actializados 
        const upUser = await User.findByPk(req.params.id)
        if (!upUser) {
            res.status(422).json({
                "success": false, 
                "errors": [
                    "el usuario no existe"
                ]
        })
        }
        else{
            //actializar usuario 
            await User.update(req.body, {
                where: {
                  id:req.params.id 
                }
              });
              //seleccionar usuario actualizado
              const userAct = await User.findByPk(req.params.id)
              res.status(201).json({
                "success": true, 
                "data": userAct
            })
        }
    } catch (error) {
        res
            .status(500)
            .json({
            "success": false, 
            "error": "error de servidor"
        })
    }   
}
//DELETE: borara usuario 
exports.borrarUser = async (req, res)=>{
    const u= await User.findByPk(req.params.id)
    await User.destroy({
        where:{
            id: req.params.id
        }
    })
    res.status(200).json({
        "success": true, 
        "data": u
    })
}