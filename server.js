const express= require('express')
const dotenv= require('dotenv')
const colors = require('colors')
//dependencias de las ritas 
const bootcampRoutes = require('./routes/BootcampRoutes')
//establecer el archivo de configuracion de proyecto 
dotenv.config({
    path: './config_env/config.env'
})
//crear objeto app 
const app = express()

app.use('/api/v1/bootcamps', bootcampRoutes)
//ejecutar servidor de desarrollo de express
app.listen(process.env.PORT , ()=>{
    console.log(`servidor iniciadooooo XD EN PUERTO : ${process.env.PORT})`.bgMagenta )
})