const Sequelize = require('sequelize')
//definir objeto de conexion 
const sequelize = new Sequelize(
    'devcamp-2465880',
    'root',
    '', 
    {
        host:'localhost', 
        dialect:'mysql', 
        port:'3308'
    }
)
module.exports = sequelize