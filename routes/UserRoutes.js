const express = require('express')
const router = express.Router()
//establecer las rutas de usuario
//crear rutas (endpoint url)para los usuarios
//get:obtener datos
router.get('/', (req, res)=>{
    res.status(200).json({
        "message": "vamos a mostrar todos los usuarios"
    })
})
//obtener recursos por id 
router.get('/:id' , (req, res)=>{
    res.status(200).json({
        "message": `vamos a mostrar en usuario cuyo id es ${req.params.id}`
    })
})
//POST: crear un nuevo recurso
router.post('/',  (req, res)=>{
    res.status(201).json({
        "message": "aqui se vaa crear un usuario"
    })
})
//put-path 
router.put('/:id' , (req, res)=>{
    res.status(200).json({
        "message": `aqui se va a actualixar el usuario ${req.params.id}`
    })
})
//DELETE: borara usuario 
router.delete('/:id' , (req, res)=>{
    res.status(200).json({
        "message": `aqui se va a borrar el usuario ${req.params.id}`
    })
})
module.exports = router