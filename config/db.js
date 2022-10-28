const sequelize  = require('./seq')
const colors = require('colors')

//crear funcion asincrona para conoxion 
const connectDB = async () =>{
    try {
        await sequelize.authenticate()
        console.log('conexion existosa'.bgMagenta.bgBlue)
        //seleccionar los  users
        //const users = await User.findAll();
        //console.log(users)
        //
        //const jane = await User.create({ name: "Jane", email: "Doe@gmail.com", password:"holaaa" });
        //console.log("Jane's auto-generated ID:", jane.id);
    } catch (error) {
        console.error(error)
    }
}

//ejecuta la conexion 
module.exports = connectDB