const sequelize = require('../config/seq')
const {DataTypes, ValidationError} = require('sequelize')
const CoursesModel =require('../models/courses')
const courses = require('../models/courses')
const Courses = CoursesModel (sequelize, DataTypes)
//get:obtener datos
exports.traerCourses=async(req, res)=>{
    try {
        const courses = await Courses.findAll();
    res.status(200).json({
        "success": true, 
        "data": courses
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
exports.traerCoursesPorId= async (req, res)=>{
    try {
        const courseId = await Courses.findByPk(req.params.id)
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
exports.crearCourses = async (req, res)=>{
    try {
        const newCourses = await Courses.create(req.body);
        res.status(201).json({
            "success": true, 
            "data": newCourses
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
exports.actualizarCourses = async (req, res)=>{
    try {
        //consultar datos actializados 
        const upCourse = await Courses.findByPk(req.params.id)
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
            await Courses.update(req.body, {
                where: {
                  id:req.params.id 
                }
              });
              //seleccionar usuario actualizado
              const courseAct = await Courses.findByPk(req.params.id)
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
exports.borrarCourses = async (req, res)=>{
    try {
        const u= await Courses.findByPk(req.params.id)
        if (!u) {
            res.status(422).json({
                "success": false, 
                "errors": [
                    "se va a eliminar el Courses"
                ]
        })
        } else {
            await Courses.destroy({
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