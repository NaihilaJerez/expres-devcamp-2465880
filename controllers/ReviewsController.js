const sequelize = require('../config/seq')
const {DataTypes, ValidationError} = require('sequelize')
const ReviewsModel =require('../models/Reviews')
const reviews = require('../models/Reviews')
const Reviews = ReviewsModel (sequelize, DataTypes)
//get:obtener datos
exports.traerReviews=async(req, res)=>{
    try {
        const reviews = await Reviews.findAll();
    res.status(200).json({
        "success": true, 
        "data": reviews
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
exports.traerReviewsPorId= async (req, res)=>{
    try {
        const courseId = await Reviews.findByPk(req.params.id)
        //si ujsuario no existe 
        if(!courseId){
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
        "data": courseId
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
exports.crearReviews = async (req, res)=>{
    try {
        const newReviews = await Reviews.create(req.body);
        res.status(201).json({
            "success": true, 
            "data": newReviews
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
exports.actualizarReviews = async (req, res)=>{
    try {
        //consultar datos actializados 
        const upCourse = await Reviews.findByPk(req.params.id)
        if (!upCourse) {
            res.status(422).json({
                "success": false, 
                "errors": [
                    "el usuario no existe"
                ]
        })
        }
        else{
            //actializar usuario 
            await Reviews.update(req.body, {
                where: {
                  id:req.params.id 
                }
              });
              //seleccionar usuario actualizado
              const courseAct = await Reviews.findByPk(req.params.id)
              res.status(201).json({
                "success": true, 
                "data": courseAct
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
exports.borrarReviews = async (req, res)=>{
    try {
        const u= await Reviews.findByPk(req.params.id)
        if (!u) {
            res.status(422).json({
                "success": false, 
                "errors": [
                    "se va a eliminar el Reviews"
                ]
        })
        } else {
            await Reviews.destroy({
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