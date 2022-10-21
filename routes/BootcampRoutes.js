const express = require('express')
const router = express.Router()
//establecer las rutas de bootcamp
//crear rutas (endpoint url)para los bootcamps
//get:obtener datos
router.get('/', (req, res)=>{
    res.status(200).json({
        "message": "vamos a mostrar todos los bootcamps"
    })
})
//obtener recursos por id 
router.get('/:id' , (req, res)=>{
    res.status(200).json({
        "message": `vamos a mostrar en bootcamp cuyo id es ${req.params.id}`
    })
})
//POST: crear un nuevo recurso
router.post('/',  (req, res)=>{
    res.status(201).json({
        "message": "aqui se vaa crear un bootcamp"
    })
})
//put-path 
router.put('/:id' , (req, res)=>{
    res.status(200).json({
        "message": `aqui se va a actualixar el bootcamp ${req.params.id}`
    })
})
//DELETE: borara bootcamp 
router.delete('/:id' , (req, res)=>{
    res.status(200).json({
        "message": `aqui se va a borrar el bootcamp ${req.params.id}`
    })
})
module.exports = router