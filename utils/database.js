const Sequelize = require("sequelize")
const { aplicarRelaciones } = require('./relations')

const sequelize = new Sequelize('AlexisyMaxine', 'user4', 'root', {
    dialect: 'mysql',
    host: '18.234.222.26',
    define: {
        timestamps: false,
        freezeTableName: true
    }
})

const modelDefiners = [
    require('../models/ciudades'),
]

for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize)
}

aplicarRelaciones(sequelize)
module.exports = sequelize