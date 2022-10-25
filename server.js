const express= require('express')
const dotenv= require('dotenv')
const colors = require('colors')
//dependecia de conexion a base de datos 
const connectDB = require('./config/db')
//dependencias de las ritas 
const bootcampRoutes = require('./routes/BootcampRoutes')
const userRoutes = require('./routes/UserRoutes')
//establecer el archivo de configuracion de proyecto 
dotenv.config({
    path: './config_env/config.env'
})
//crear objeto app 
const app = express()
//ejecutar conexion a db 
connectDB()
app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/users', userRoutes)
//ejecutar servidor de desarrollo de express
app.listen(process.env.PORT , ()=>{
    console.log(`servidor iniciadooooo XD EN PUERTO : ${process.env.PORT})`.bgMagenta )
})