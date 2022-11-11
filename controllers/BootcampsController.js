const sequelize = require('../config/seq')
const {DataTypes, ValidationError} = require('sequelize')
const BootcampModel =require('../models/bootcamp')
const bootcamp = require('../models/bootcamp')
const Bootcamp = BootcampModel (sequelize, DataTypes)
//get:obtener datos
exports.traerBootcamps=async(req, res)=>{
    try {
        const bootcamps = await Bootcamp.findAll();
    res.status(200).json({
        "success": true, 
        "data": bootcamps
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
exports.traerBootcampsPorId= async (req, res)=>{
    try {
        const botcampId = await Bootcamp.findByPk(req.params.id)
        //si ujsuario no existe 
        if(!botcampId){
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
        "data": botcampId
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
exports.crearBootcamp = async (req, res)=>{
    try {
        const newBootcamp = await Bootcamp.create(req.body);
        res.status(201).json({
            "success": true, 
            "data": newBootcamp
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
exports.actualizarBootcamp = async (req, res)=>{
    try {
        //consultar datos actializados 
        const upUser = await Bootcamp.findByPk(req.params.id)
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
              const userAct = await Bootcamp.findByPk(req.params.id)
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
exports.borrarBootcamp = async (req, res)=>{
    try {
        const u= await Bootcamp.findByPk(req.params.id)
        if (!u) {
            res.status(422).json({
                "success": false, 
                "errors": [
                    "se va a eliminar el bootcamp"
                ]
        })
        } else {
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
    } catch (error) {
        
        res
        .status(500)
        .json({
        "success": false, 
        "error": "error de servidor"
    })
    }
    
    
    
}