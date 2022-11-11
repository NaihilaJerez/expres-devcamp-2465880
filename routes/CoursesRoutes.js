const express = require('express')
const router = express.Router()
const {crearCourses, traerCourses, traerCoursesPorId, actualizarCourses, borrarCourses} = require('../controllers/CoursesController')
//establecer las rutas de Course
//crear rutas (endpoint url)para los Courses
//get:obtener datos

//RUTAS DE BOTCAMPS 
router.route('/')
        .get(traerCourses)
        .post(crearCourses)
router.route('/:id')
        .get(traerCoursesPorId)
        .put(actualizarCourses)
        .delete(borrarCourses)
module.exports = router
