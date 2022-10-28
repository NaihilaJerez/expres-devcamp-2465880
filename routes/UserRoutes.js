const express = require('express')
const {crearUser, traerUsers, traerUsersPorId, borrarUser, actualizarUser} = require('../controllers/UserController')
const router = express.Router()
//establecer las rutas de usuario
//crear rutas (endpoint url)para los usuarios

//rutas de usuarios 
router.route('/')
        .get(traerUsers)
        .post(crearUser)
router.route('/:id')
        .get(traerUsersPorId)
        .put(actualizarUser)
        .delete(borrarUser)

module.exports = router