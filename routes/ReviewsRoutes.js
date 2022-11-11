const express = require('express')
const router = express.Router()
const {crearReviews, traerReviews, traerReviewsPorId, actualizarReviews, borrarReviews} = require('../controllers/ReviewsController')
//establecer las rutas de Course
//crear rutas (endpoint url)para los Reviews
//get:obtener datos

//RUTAS DE BOTCAMPS 
router.route('/')
        .get(traerReviews)
        .post(crearReviews)
router.route('/:id')
        .get(traerReviewsPorId)
        .put(actualizarReviews)
        .delete(borrarReviews)
module.exports = router