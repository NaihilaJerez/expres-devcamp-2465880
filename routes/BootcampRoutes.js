const express = require('express')
const router = express.Router()
const {crearBootcamp, traerBootcamps, traerBootcampsPorId, borrarBootcamp, actualizarBootcamp} = require('../controllers/BootcampsController')
//establecer las rutas de bootcamp
//crear rutas (endpoint url)para los bootcamps
//get:obtener datos

//RUTAS DE BOTCAMPS 
router.route('/')
        .get(traerBootcamps)
        .post(crearBootcamp)
router.route('/:id')
        .get(traerBootcampsPorId)
        .put(actualizarBootcamp)
        .delete(borrarBootcamp)
module.exports = router